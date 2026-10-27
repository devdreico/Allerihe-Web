import { useEffect, useState } from 'react';

const sections = [
  { id: 'arquitectura', label: 'La tensión' },
  { id: 'praxis', label: 'Lucidus e Inanis' },
  { id: 'practica', label: 'La práctica' },
  { id: 'glosario', label: 'Glosario' },
];

export function ReadingGuide() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observedSections = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => Math.abs(first.boundingClientRect.top) - Math.abs(second.boundingClientRect.top));

      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: '-18% 0px -62% 0px', threshold: 0 });

    observedSections.forEach((section) => observer.observe(section));

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const nextProgress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 100;
        setProgress(Math.round(Math.min(100, Math.max(0, nextProgress))));
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="reading-guide">
      <nav className="reading-guide-nav" aria-label="En esta página">
        {sections.map(({ id, label }, index) => (
          <a href={`#${id}`} key={id} aria-current={activeSection === id ? 'location' : undefined}>
            <span>0{index + 1}</span>{label}
          </a>
        ))}
      </nav>
      <div className="reading-progress" role="progressbar" aria-label="Progreso de lectura" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
    </div>
  );
}