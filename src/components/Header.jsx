import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/allerihe-logo.png';
import { siteRoutes } from '../data/routes.js';

const navigation = siteRoutes.filter((route) => route.showInNavigation);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
        <Link className="header-index" to="/">ALLERIHE <span>· CONOCIMIENTO EN MOVIMIENTO</span></Link>
        <Link className="brand desktop-brand" to="/" aria-label="Allerihe, inicio">
          <img src={logo} alt="" /><span>ALLERIHE</span>
        </Link>
        <button className="brand mobile-brand" type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
          <img src={logo} alt="" /><span>ALLERIHE</span><ChevronDown size={15} className={isOpen ? 'chevron-open' : ''} aria-hidden="true" />
        </button>
        <nav className="main-nav" aria-label="Navegación principal">
          {navigation.map((item) => <NavLink to={item.path} key={item.path}>{item.label}</NavLink>)}
        </nav>
        <nav className={`mobile-nav${isOpen ? ' is-open' : ''}`} id="mobile-navigation" aria-label="Navegación móvil" aria-hidden={!isOpen} inert={!isOpen}>
          {siteRoutes.map((item, index) => (
            <NavLink to={item.path} key={item.path} onClick={() => setIsOpen(false)}>
              <span>0{index + 1}</span>{item.label}
            </NavLink>
          ))}
          <a className="mobile-academy-link" href="https://quonceptory.presentto.online" target="_blank" rel="noreferrer">Entrar a Quonceptory ↗</a>
        </nav>
      </div>
    </header>
  );
}

export function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}>{children}</p>;
}