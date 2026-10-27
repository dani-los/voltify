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
          <div className="stage"><svg className="car" viewBox="-70 0 430 150" aria-hidden="true"><path className="sl" d="M-68 58H88M-52 72H56M-68 86H22M-44 100H16" stroke="#C6F432" strokeWidth="5" strokeLinecap="round" fill="none"/><path d="M28 108C28 98 40 92 58 88L130 80C150 62 176 52 210 50L252 52C272 54 290 66 306 80C330 83 346 90 346 100V110H28Z" transform="translate(374 0) scale(-1 1)" fill="#C6F432"/><path d="M142 78C154 66 172 60 194 58H200V78ZM210 58 242 59C256 61 268 69 280 78H210Z" transform="translate(374 0) scale(-1 1)" fill="#0B1220"/><circle cx="98" cy="110" r="27" fill="#0B1220" stroke="#F2F6FC" strokeWidth="5"/><circle cx="280" cy="110" r="27" fill="#0B1220" stroke="#F2F6FC" strokeWidth="5"/><path className="wb" transform="translate(95.8 97.7) scale(.26)" d="M10 0 -25 50h28l-8 45 38-58H4z" fill="#C6F432"/><path className="wb" transform="translate(277.8 97.7) scale(.26)" d="M10 0 -25 50h28l-8 45 38-58H4z" fill="#C6F432"/></svg><svg className="st" viewBox="0 0 232 120" aria-hidden="true"><path d="M0 108H232" stroke="#2A3A5C" strokeWidth="3" strokeLinecap="round"/><rect x="204" y="-8" width="30" height="60" rx="8" fill="#0B1220" stroke="#C6F432" strokeWidth="4"/><rect x="211" y="2" width="16" height="32" rx="3" fill="#16213A"/><rect className="cf" x="211" y="2" width="16" height="32" rx="3" fill="#C6F432"/><circle cx="219" cy="43" r="3" fill="#C6F432"/><path className="cord" pathLength="1" d="M219 52C219 100 168 104 134 91" strokeLinecap="round"/><circle className="plug" cx="131" cy="90" r="5.5" fill="#C6F432" stroke="#0B1220" strokeWidth="2"/></svg></div><div className="cbar"><i></i></div>
          <b>Ready to charge</b>
          <span>Installed by Voltify</span>
        </div>
      </div>
    </div>
  );
}
