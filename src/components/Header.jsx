import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/allerihe-logo.png';

export const navigation = [
  { label: 'Inicio', to: '/' },
  { label: 'Manifiesto', to: '/manifiesto' },
  { label: 'Misión', to: '/mision' },
  { label: 'Iniciativas', to: '/iniciativas' },
  { label: 'Comunidad', to: '/comunidad' },
  { label: 'Quonceptory', to: '/academia' },
];

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
          {navigation.slice(1).map((item) => <NavLink to={item.to} key={item.to}>{item.label}</NavLink>)}
        </nav>
        <nav className={`mobile-nav${isOpen ? ' is-open' : ''}`} id="mobile-navigation" aria-label="Navegación móvil" aria-hidden={!isOpen}>
          {navigation.map((item, index) => (
            <NavLink to={item.to} key={item.to} onClick={() => setIsOpen(false)}>
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