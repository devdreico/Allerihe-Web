import { ChevronDown, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/allerihe-logo.png';
import { siteRoutes } from '../data/routes.js';
import { usePreferences } from '../i18n/Preferences.jsx';

const navigation = siteRoutes.filter((route) => route.showInNavigation);

function PreferenceControls({ compact = false }) {
  const { theme, locale, setTheme, setLocale, t } = usePreferences();

  return (
    <div className={`preference-controls${compact ? ' preference-controls-compact' : ''}`}>
      <div className="preference-segment" role="group" aria-label={t('theme')}>
        <button type="button" aria-pressed={theme === 'light'} onClick={() => setTheme('light')} title={t('light')}>
          <Sun size={14} aria-hidden="true" /><span>{t('light')}</span>
        </button>
        <button type="button" aria-pressed={theme === 'dark'} onClick={() => setTheme('dark')} title={t('dark')}>
          <Moon size={14} aria-hidden="true" /><span>{t('dark')}</span>
        </button>
      </div>
      <div className="preference-segment language-segment" role="group" aria-label={t('language')}>
        <button type="button" aria-label={t('spanish')} title={t('spanish')} aria-pressed={locale === 'es'} onClick={() => setLocale('es')}>ES</button>
        <button type="button" aria-label={t('english')} title={t('english')} aria-pressed={locale === 'en'} onClick={() => setLocale('en')}>EN</button>
      </div>
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = usePreferences();

  useEffect(() => setIsOpen(false), [location.pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="header-leading">
          <Link className="header-index" to="/">ALLERIHE <span>· {t('siteTagline')}</span></Link>
          <PreferenceControls />
        </div>
        <Link className="brand desktop-brand" to="/" aria-label={t('goHome')}>
          <img src={logo} alt="" /><span>ALLERIHE</span>
        </Link>
        <button className="brand mobile-brand" type="button" aria-label={isOpen ? t('closeNavigation') : t('openNavigation')} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
          <img src={logo} alt="" /><span>ALLERIHE</span><ChevronDown size={15} className={isOpen ? 'chevron-open' : ''} aria-hidden="true" />
        </button>
        <div className="desktop-header-actions">
          <nav className="main-nav" aria-label={t('mainNavigation')}>
            {navigation.map((item) => <NavLink to={item.path} key={item.path}>{t(item.labelKey)}</NavLink>)}
          </nav>
        </div>
        <div className={`mobile-nav${isOpen ? ' is-open' : ''}`} id="mobile-navigation" aria-label={t('mobileNavigation')} aria-hidden={!isOpen} inert={!isOpen}>
          {siteRoutes.map((item, index) => (
            <NavLink to={item.path} key={item.path} onClick={() => setIsOpen(false)}>
              <span>0{index + 1}</span>{t(item.labelKey)}
            </NavLink>
          ))}
          <a className="mobile-academy-link" href="https://quonceptory.presentto.online" target="_blank" rel="noreferrer">{t('mobileAcademyAction')} ↗</a>
          <PreferenceControls compact />
        </div>
      </div>
    </header>
  );
}

export function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}>{children}</p>;
}