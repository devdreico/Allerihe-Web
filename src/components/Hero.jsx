import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/allerihe-logo.png';

export function Hero() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setProgress(1);
      return undefined;
    }

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const scrollDistance = section.offsetHeight - window.innerHeight;
        const nextProgress = scrollDistance > 0 ? -section.getBoundingClientRect().top / scrollDistance : 1;
        setProgress(Math.max(0, Math.min(1, nextProgress)));
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const words = [
    { text: 'SI,', threshold: 0.1 },
    { text: 'EL', threshold: 0.29 },
    { text: 'CONOCIMIENTO', threshold: 0.43 },
    { text: 'ES', threshold: 0.58 },
    { text: 'PODER', threshold: 0.73 },
  ];

  return (
    <section className="scroll-hero" ref={sectionRef} aria-label="Sí, el conocimiento es poder">
      <div className="scroll-hero-stage">
        <img className="scroll-hero-logo" src={logo} alt="Allerihe" style={{ opacity: Math.max(0, 1 - progress / 0.19), transform: `scale(${1 + progress * 0.12})` }} />
        <h1 className="scroll-hero-phrase" aria-label="Sí, el conocimiento es poder">
          <span className="phrase-line">
            {words.slice(0, 2).map((word) => <span key={word.text} className="phrase-word" aria-hidden="true" style={{ opacity: progress >= word.threshold ? 1 : 0, transform: `translateY(${progress >= word.threshold ? 0 : '0.12em'})` }}>{word.text}</span>)}
          </span>
          <span className="phrase-line">
            {words.slice(2, 3).map((word) => <span key={word.text} className="phrase-word phrase-long" aria-hidden="true" style={{ opacity: progress >= word.threshold ? 1 : 0, transform: `translateY(${progress >= word.threshold ? 0 : '0.12em'})` }}>{word.text}</span>)}
          </span>
          <span className="phrase-line">
            {words.slice(3).map((word) => <span key={word.text} className="phrase-word" aria-hidden="true" style={{ opacity: progress >= word.threshold ? 1 : 0, transform: `translateY(${progress >= word.threshold ? 0 : '0.12em'})` }}>{word.text}</span>)}
          </span>
        </h1>
      </div>
    </section>
  );
}