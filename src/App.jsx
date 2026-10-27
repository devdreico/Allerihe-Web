import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { brand } from './data/brand.js';
import { siteRoutes } from './data/routes.js';
import {
  AcademyPage,
  CommunityPage,
  HomePage,
  InitiativesPage,
  PhilosophyPage,
  ManifestoPage,
  MissionPage,
  NotFoundPage,
} from './pages/Pages.jsx';

function PageFrame({ children }) {
  return (
    <>
      <Header />
      <main className="page-main">{children}</main>
      <Footer />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const route = siteRoutes.find((item) => item.path === pathname) ?? siteRoutes[0];
    document.title = route.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', route.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', route.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', route.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', new URL(pathname, brand.siteUrl).href);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', new URL(pathname, brand.siteUrl).href);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {siteRoutes.map((route) => {
          const pages = {
            '/': HomePage,
            '/manifiesto': ManifestoPage,
            '/filosofia': PhilosophyPage,
            '/mision': MissionPage,
            '/iniciativas': InitiativesPage,
            '/comunidad': CommunityPage,
            '/academia': AcademyPage,
          };
          const Page = pages[route.path];
          const page = <Page />;
          return <Route key={route.path} path={route.path} element={route.path === '/' ? page : <PageFrame>{page}</PageFrame>} />;
        })}
        <Route path="*" element={<PageFrame><NotFoundPage /></PageFrame>} />
      </Routes>
    </BrowserRouter>
  );
}