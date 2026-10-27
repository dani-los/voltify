export default function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Voltify home">
      <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="22" height="26" rx="6" />
        <path d="M16.5 9 10.5 18H15l-1.5 7 6-9.5h-4z" strokeWidth="2.2" style={{ stroke: 'var(--fg)' }} />
        <path d="M15 30 32 57 49 27" />
        <rect x="41" y="12" width="16" height="15" rx="4" fill="currentColor" stroke="none" />
        <path d="M46 12V6M52 12V6" strokeWidth="3.5" style={{ stroke: 'var(--fg)' }} />
      </svg>
      <span>Volt<em>ify</em> <small>EV Charger Specialists</small></span>
    </a>
  );
}
