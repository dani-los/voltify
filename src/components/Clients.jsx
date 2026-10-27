import { CLIENTS } from '../data.js';

export default function Clients() {
  return (
    <section id="clients">
      <div className="wrap">
        <h2>Who are our Clients?</h2>
        <p className="sub">The homes, businesses and properties we help go electric.</p>
        <div className="grid">
          {CLIENTS.map((c) => (
            <div className="card" key={c.title}>
              <h3>{c.title}</h3>
              <span className="client-who">{c.who}</span>
              <b className="client-label">Why they need us</b>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
