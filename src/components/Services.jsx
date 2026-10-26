import { useState } from 'react';
import { SERVICES, MORE_SERVICE } from '../data.js';

export default function Services({ onQuote }) {
  const [more, setMore] = useState(false);
  return (
    <section id="services">
      <div className="wrap">
        <h2>What We Offer</h2>
        <p className="sub">Choose a service and we’ll pre-fill your quote request.</p>
        <div className="grid">
          {SERVICES.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <div className="cbody">
                {s.text}
                {s.list && <ul className="svc-ul">{s.list.map(([a, b]) => <li key={a}><b>{a}</b> {b}</li>)}</ul>}
              </div>
              <button className="btn ghost" onClick={() => onQuote(s.title)}>Quote this</button>
            </div>
          ))}
          {more && (
            <div className="card more-card pop">
              <h3>{MORE_SERVICE.title}</h3>
              <div className="cols">
                {MORE_SERVICE.groups.map((g) => (
                  <div className="col" key={g.title}>
                    <h4>{g.title}</h4>
                    <ul className="ul">{g.items.map(([a, b]) => <li key={a}><b>{a}</b> {b}</li>)}</ul>
                  </div>
                ))}
              </div>
              <button className="btn ghost" onClick={() => onQuote(MORE_SERVICE.title)}>Quote this</button>
            </div>
          )}
          <div className="more-row">
            <button className="btn ghost" aria-expanded={more} onClick={() => setMore(!more)}>{more ? 'See less' : 'See more'}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
