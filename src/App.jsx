import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import {
  AcademyPage,
  CommunityPage,
  HomePage,
  InitiativesPage,
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
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/manifiesto" element={<PageFrame><ManifestoPage /></PageFrame>} />
        <Route path="/mision" element={<PageFrame><MissionPage /></PageFrame>} />
        <Route path="/iniciativas" element={<PageFrame><InitiativesPage /></PageFrame>} />
        <Route path="/comunidad" element={<PageFrame><CommunityPage /></PageFrame>} />
        <Route path="/academia" element={<PageFrame><AcademyPage /></PageFrame>} />
        <Route path="*" element={<PageFrame><NotFoundPage /></PageFrame>} />
      </Routes>
    </BrowserRouter>
  );
}