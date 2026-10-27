import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer.jsx';
import { Header, Eyebrow } from '../components/Header.jsx';
import { Hero } from '../components/Hero.jsx';
import { CommunitySection, MissionSection } from '../components/EditorialSections.jsx';
import { ProgressSection } from '../components/ProgressSection.jsx';

function PageHeading({ number, label, title, intro }) {
  return (
    <section className="page-heading page-wrap">
      <Eyebrow>{number} / {label}</Eyebrow>
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
    </section>
  );
}

function PageLinks() {
  const links = [
    ['Manifiesto', '/manifiesto', 'Una tesis sobre el conocimiento y el futuro.'],
    ['Misión', '/mision', 'La razón de existir de Allerihe.'],
    ['Iniciativas', '/iniciativas', 'Ideas abiertas, trabajo en curso.'],
    ['Comunidad', '/comunidad', 'La conversación, en distintos espacios.'],
    ['Quonceptory', '/academia', 'Exploración y aprendizaje compartido.'],
  ];

  return (
    <section className="home-links page-wrap" aria-label="Explorar Allerihe">
      <div className="home-links-heading"><Eyebrow>Explorar Allerihe</Eyebrow><span>05 DESTINOS</span></div>
      <div className="home-links-list">
        {links.map(([label, to, copy], index) => (
          <Link to={to} className="home-link-row" key={to}>
            <span className="home-link-index">0{index + 1}</span>
            <span className="home-link-copy"><strong>{label}</strong><small>{copy}</small></span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <Header />
      <main>
        <section className="home-opening page-wrap">
          <div className="opening-index"><Eyebrow>El punto de partida</Eyebrow><span>01 — 06</span></div>
          <div className="opening-copy">
            <h1>El conocimiento es poder. <em>Pero acumularlo no basta.</em></h1>
            <p>Con un cerebro limitado, acumular conocimiento dejó de ser lo más eficiente hace mucho. El beneficio del futuro está en delegar: en mentes instruidas en muchas áreas y en herramientas de inteligencia artificial autónomas, seguras y bien dirigidas.</p>
            <Link className="opening-link" to="/manifiesto">Leer el manifiesto <ArrowDownRight size={18} aria-hidden="true" /></Link>
          </div>
        </section>
        <section className="home-pullquote">
          <div className="page-wrap pullquote-inner">
            <Eyebrow>Una pregunta más útil</Eyebrow>
            <p>Si no podemos saberlo todo,<br /><em>¿cómo podemos pensar mejor?</em></p>
            <span>ALLERIHE · 2026</span>
          </div>
        </section>
        <PageLinks />
      </main>
      <Footer />
    </>
  );
}

export function ManifestoPage() {
  return (
    <article className="manifesto-page">
      <PageHeading number="01" label="Manifiesto" title={<>El poder no está en saberlo todo.<br /><em>Está en saber qué hacer con lo que sabemos.</em></>} intro="Una idea sobre los límites de la mente, la inteligencia colectiva y el uso responsable de herramientas capaces de ampliar nuestra capacidad." />
      <div className="manifesto-body page-wrap">
        <section className="manifesto-chapter">
          <span className="chapter-index">I / EL LÍMITE</span>
          <div><h2>Una mente brillante también tiene límites.</h2><p>El conocimiento es poder, pero nuestra atención, tiempo y memoria son finitos. Durante siglos, acumular información pareció una ventaja suficiente. Hoy, esa acumulación por sí sola ya no es la estrategia más eficiente.</p><p>La información crece más rápido de lo que una persona puede leerla, verificarla y conectarla. El reto no es almacenar más: es formar criterio para reconocer qué importa, dónde buscarlo y cómo ponerlo a trabajar.</p></div>
        </section>
        <section className="manifesto-chapter">
          <span className="chapter-index">II / LA DELEGACIÓN</span>
          <div><h2>Delegar no es renunciar a pensar.</h2><p>El beneficio del futuro está en delegar tareas con intención. Personas instruidas en muchas áreas pueden conectar perspectivas; sistemas de inteligencia artificial pueden explorar, organizar y ejecutar trabajo a una escala distinta.</p><p>La herramienta no reemplaza el juicio. Lo vuelve más importante. Delegar bien requiere objetivos claros, verificación, límites explícitos y responsabilidad humana sobre las decisiones.</p></div>
        </section>
        <section className="manifesto-chapter">
          <span className="chapter-index">III / LA PRÁCTICA</span>
          <div><h2>Más capacidad. Mejor dirección.</h2><p>Allerihe explora cómo convertir conocimiento en capacidad útil: aprender a través de disciplinas, hacer preguntas precisas, contrastar las respuestas y usar tecnología de forma autónoma y segura.</p><p>No se trata de correr detrás de cada avance. Se trata de entender suficiente para elegir qué merece nuestra atención y dirigir con responsabilidad aquello que decidimos delegar.</p><Link className="opening-link" to="/mision">Conocer la misión <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
        </section>
      </div>
    </article>
  );
}

export function MissionPage() {
  return (
    <>
      <PageHeading number="02" label="Misión" title={<>Conocimiento para <em>entender y actuar.</em></>} intro="Allerihe divulga para conectar ideas, poner a prueba explicaciones y acercar herramientas que ayuden a pensar con más claridad." />
      <MissionSection />
      <section className="mission-fields page-wrap"><Eyebrow>Territorios de exploración</Eyebrow><p>Cultura general · Ciencia y técnica · Historia · Geopolítica · Política · Filosofía · Inteligencia artificial</p></section>
    </>
  );
}

export function InitiativesPage() {
  return <><PageHeading number="03" label="Iniciativas" title={<>El trabajo, <em>a la vista.</em></>} intro="Proyectos en desarrollo, con su estado y avance publicados de forma transparente." /><ProgressSection /></>;
}

export function CommunityPage() {
  return <CommunitySection />;
}

export function AcademyPage() {
  return (
    <article className="academy-page">
      <PageHeading number="05" label="Academia" title={<>Quonceptory<em>.</em></>} intro="GRUPO REAL PRIVADO DE CONOCIMIENTO y exploración universal." />
      <section className="academy-detail page-wrap">
        <div className="academy-detail-copy"><Eyebrow>Aprendizaje en común</Eyebrow><h2>Un lugar para explorar <em>más allá de una sola disciplina.</em></h2><p>Quonceptory es la academia de Allerihe: un espacio para investigar, contrastar perspectivas y construir conocimiento con otras personas. La curiosidad abre el camino; el rigor nos ayuda a recorrerlo.</p><a className="academy-link" href="https://quonceptory.presentto.online" target="_blank" rel="noreferrer">Visitar Quonceptory <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        <div className="academy-seal" aria-hidden="true"><span>GRUPO REAL</span><strong>Q·P</strong><span>EXPLORAR · COMPRENDER</span></div>
      </section>
      <section className="academy-reference page-wrap"><Eyebrow>Referencia académica</Eyebrow><p>Grupo real privado de conocimiento y exploración universal</p><a href="https://quonceptory.presentto.online" target="_blank" rel="noreferrer">quonceptory.presentto.online <ArrowUpRight size={15} aria-hidden="true" /></a></section>
    </article>
  );
}

export function NotFoundPage() {
  return <section className="not-found page-wrap"><Eyebrow>404 / Fuera de mapa</Eyebrow><h1>Esta ruta todavía <em>no existe.</em></h1><Link className="opening-link" to="/">Volver al inicio <ArrowUpRight size={17} aria-hidden="true" /></Link></section>;
}