import { useEffect, useState } from 'react';
import { ArrowUp, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../i18n/Preferences.jsx';

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = usePreferences();

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
          <p>{t('siteTagline')}<br />{t('footerDescription')}</p>
          <div className="footer-actions">
            <button className="easter-trigger" type="button" onClick={() => setIsOpen(true)} aria-label={t('easterOpen')}>＋</button>
            <Link className="back-top" to="/" aria-label={t('backHome')}><ArrowUp size={17} /></Link>
          </div>
        </div>
      </footer>
      {isOpen && (
        <div className="easter-backdrop" onClick={() => setIsOpen(false)}>
          <section className="easter-dialog" role="dialog" aria-modal="true" aria-labelledby="easter-title" onClick={(event) => event.stopPropagation()}>
            <button className="easter-close" type="button" onClick={() => setIsOpen(false)} aria-label={t('easterClose')}><X size={20} /></button>
            <span className="easter-label">{t('easterLabel')}</span>
            <h2 id="easter-title">ALLERIHE ES UN PERSONAJE</h2>
            <p>Video 0 Praxeología de la Tensión, es un mapa, su aparente incoherencia en relación a la praxeología, es sustentada, descubre lo suficiente para llegar al mensaje real</p>
          </section>
        </div>
      )}
    </>
  );
}