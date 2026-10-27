import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { ProgressSection } from './components/ProgressSection.jsx';
import { AcademySection, CommunitySection, MissionSection } from './components/EditorialSections.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MissionSection />
        <ProgressSection />
        <AcademySection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}