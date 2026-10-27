import { ArrowDown } from 'lucide-react';
import logo from '../../assets/allerihe-logo.png';
import { Eyebrow } from './Header.jsx';

export function Hero() {
  return (
    <section className="hero page-wrap" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <Eyebrow><span className="status-dot" /> Un proyecto de divulgación · Desde 2025</Eyebrow>
        <h1 id="hero-title">Entender el mundo. <em>Sin atajos.</em></h1>
        <div className="hero-bottom">
          <p className="hero-intro">Ideas, ciencia e historia convertidas en herramientas para pensar con más claridad.</p>
          <a className="text-link" href="#mision">Conoce la misión <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-art" aria-label="Identidad visual de Allerihe">
        <div className="art-index">A—01 <span>CAMPO DE ESTUDIO</span></div>
        <img src={logo} alt="Logo de Allerihe" />
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <span className="art-caption">OBSERVAR<br />· CONECTAR · PENSAR</span>
        <span className="art-coordinate">19° 26′ N<br />99° 08′ O</span>
      </div>
      <div className="hero-rail" aria-hidden="true"><span>CIENCIA</span><i /><span>HISTORIA</span><i /><span>FILOSOFÍA</span><i /><span>FUTURO</span></div>
    </section>
  );
}