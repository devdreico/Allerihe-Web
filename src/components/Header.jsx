import { ArrowDown, ArrowUpRight } from 'lucide-react';
import logo from '../../assets/allerihe-logo.png';

const navigation = [
  { label: 'Misión', href: '#mision' },
  { label: 'Avances', href: '#avances' },
  { label: 'Comunidad', href: '#comunidad' },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Allerihe, inicio">
        <img src={logo} alt="" />
        <span>ALLERIHE</span>
      </a>
      <nav className="main-nav" aria-label="Navegación principal">
        {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
      </nav>
      <a className="header-link" href="#academia">
        <span>El grupo privado</span>
        <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
      </a>
      <a className="mobile-down" href="#mision" aria-label="Ir a la misión">
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </header>
  );
}

export function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}>{children}</p>;
}