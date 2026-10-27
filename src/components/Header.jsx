import { useState } from 'react';
import Logo from './Logo.jsx';

const LINKS = [['services', 'Services'], ['process', 'How it works'], ['portfolio', 'Portfolio'], ['clients', 'Clients'], ['faq', 'FAQ']];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap bar">
        <Logo />
        <button id="menu" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
        <nav id="nav" className={open ? 'open' : ''} onClick={(e) => e.target.tagName === 'A' && setOpen(false)}>
          {LINKS.map(([id, label]) => <a key={id} href={'#' + id}>{label}</a>)}
          <a className="btn" href="#quote">Get a free quote</a>
        </nav>
      </div>
    </header>
  );
}
