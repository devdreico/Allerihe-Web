import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from './Header.jsx';

const principles = [
  ['01', 'Contexto antes que ruido', 'Separar lo relevante de lo urgente. Un dato aislado informa; conectado, explica.'],
  ['02', 'Rigor sin solemnidad', 'Ideas complejas, expuestas con precisión y sin barreras innecesarias.'],
  ['03', 'Utilidad como medida', 'El conocimiento importa cuando cambia la calidad de nuestras preguntas y decisiones.'],
];

const socials = [
  { name: 'YouTube', url: 'https://www.youtube.com/@allerihe' },
  { name: 'Instagram', url: 'https://www.instagram.com/allerihe/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@allerihe' },
  { name: 'X', url: 'https://x.com/allerihe' },
  { name: 'Twitch', url: 'https://www.twitch.tv/allerihe' },
];

export function MissionSection() {
  return (
    <section className="mission-section page-wrap" id="mision" aria-labelledby="mission-title">
      <div className="mission-lead">
        <Eyebrow>01 / Misión</Eyebrow>
        <h2 id="mission-title">Divulgar es hacer que el conocimiento <em>sirva.</em></h2>
        <p>Allerihe explora cultura, ciencia, técnica, historia, geopolítica, política y filosofía. No para acumular respuestas, sino para encontrar mejores preguntas.</p>
      </div>
      <div className="principle-list">
        {principles.map(([number, title, copy]) => (
          <article className="principle" key={number}>
            <span className="principle-number">{number}</span>
            <div><h3>{title}</h3><p>{copy}</p></div>
            <span className="principle-mark" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AcademySection() {
  return (
    <section className="academy-section" id="academia" aria-labelledby="academy-title">
      <div className="page-wrap academy-inner">
        <div className="academy-index"><span>DESTINO 02</span><span>APRENDIZAJE EN COMÚN</span></div>
        <div className="academy-copy">
          <Eyebrow>Referencias académicas</Eyebrow>
          <h2 id="academy-title">GRUPO REAL PRIVADO DE CONOCIMIENTO <em>y exploración universal</em></h2>
          <p>Un espacio para investigar, contrastar y explorar en compañía. La curiosidad como práctica; el rigor, como punto de partida.</p>
          <a className="academy-link" href="#comunidad">Conocer la comunidad <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="academy-seal" aria-hidden="true"><span>GRUPO REAL</span><strong>R·P</strong><span>EXPLORAR · COMPRENDER</span></div>
      </div>
    </section>
  );
}

export function CommunitySection() {
  return (
    <section className="community-section page-wrap" id="comunidad" aria-labelledby="community-title">
      <div className="community-title">
        <Eyebrow>03 / Comunidad</Eyebrow>
        <h2 id="community-title">Pensar mejor, <em>en compañía.</em></h2>
        <p>La conversación continúa donde estés. Encuentra Allerihe con el mismo nombre en cada plataforma.</p>
      </div>
      <div className="social-list" aria-label="Redes sociales de Allerihe">
        {socials.map((social, index) => (
          <a href={social.url} key={social.name} target="_blank" rel="noreferrer">
            <span className="social-index">0{index + 1}</span><span>{social.name}</span><span className="social-handle">@allerihe</span><ArrowUpRight size={18} strokeWidth={1.7} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}