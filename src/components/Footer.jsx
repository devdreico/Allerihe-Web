import { useEffect, useState } from 'react';
import { ArrowUp, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => { if (event.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <footer className="site-footer">
        <div className="page-wrap footer-inner">
          <Link className="footer-brand" to="/">ALLERIHE<span>®</span></Link>
          <p>Conocimiento en movimiento.<br />Un proyecto planeado en 2025, en desarrollo desde 2026.</p>
          <div className="footer-actions">
            <button className="easter-trigger" type="button" onClick={() => setIsOpen(true)} aria-label="Abrir nota escondida">＋</button>
            <Link className="back-top" to="/" aria-label="Volver al inicio"><ArrowUp size={17} /></Link>
          </div>
        </div>
      </footer>
      {isOpen && (
        <div className="easter-backdrop" onClick={() => setIsOpen(false)}>
          <section className="easter-dialog" role="dialog" aria-modal="true" aria-labelledby="easter-title" onClick={(event) => event.stopPropagation()}>
            <button className="easter-close" type="button" onClick={() => setIsOpen(false)} aria-label="Cerrar"><X size={20} /></button>
            <span className="easter-label">NOTA AL MARGEN · 00</span>
            <h2 id="easter-title">ALLERIHE ES UN PERSONAJE</h2>
            <p>Video 0 Praxeología de la Tensión, es un mapa, su aparente incoherencia en relación a la praxeología, es sustentada, descubre lo suficiente para llegar al mensaje real</p>
          </section>
        </div>
      )}
    </>
  );
}