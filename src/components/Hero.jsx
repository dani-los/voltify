export default function Hero() {
  return (
    <div className="wrap hero">
      <div>
        <p className="eyebrow">EV charger installation specialists</p>
        <h1>Complete EV charging, from consultation to installation and maintenance.</h1>
        <p className="lead">Voltify provides EV charger consultation, component delivery, installation, and EV diagnostics and maintenance for homes, workplaces and housing developments across Addis Ababa and Sheger City.</p>
        <div className="row">
          <a className="btn" href="#quote">Get a free quote</a>
          <a className="btn ghost" href="#services">See our services</a>
        </div>
      </div>
      <div className="charger" aria-hidden="true">
        <div className="unit">
          <div className="ring">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>
          </div>
          <b>Ready to charge</b>
          <span>Installed by Voltify</span>
        </div>
      </div>
    </div>
  );
}
