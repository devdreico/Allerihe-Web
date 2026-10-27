import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { brand } from './data/brand.js';
import { siteRoutes } from './data/routes.js';
import { PreferencesProvider, usePreferences } from './i18n/Preferences.jsx';
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
  const { locale } = usePreferences();

  useEffect(() => {
    window.scrollTo(0, 0);
    const route = siteRoutes.find((item) => item.path === pathname) ?? siteRoutes[0];
    const title = locale === 'en' ? route.titleEn : route.title;
    const description = locale === 'en' ? route.descriptionEn : route.description;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', new URL(pathname, brand.siteUrl).href);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', new URL(pathname, brand.siteUrl).href);
  }, [pathname, locale]);

  return null;
}

export default function App() {
  return (
    <PreferencesProvider>
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
    </PreferencesProvider>
  );
}