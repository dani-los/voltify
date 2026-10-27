import { PROJECTS } from '../data.js';

const Card = ({ p, dup }) => (
  <article className={'pcard' + (dup ? ' dup' : '')} aria-hidden={dup || undefined}>
    <div className="ph"><img src={p.img} alt={dup ? '' : p.alt} width="800" height="500" loading="lazy" decoding="async" /></div>
    <div className="t"><h3>{p.title}</h3><p>{p.text}</p></div>
  </article>
);

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrap">
        <h2>Our Services in Action</h2>
        <p className="sub">The installations and components we handle, from first check to final connection.</p>
      </div>
      <div className="marquee">
        <div className="track">
          {PROJECTS.map((p) => <Card key={p.img} p={p} />)}
          {PROJECTS.map((p) => <Card key={p.img + '-dup'} p={p} dup />)}
        </div>
      </div>
    </section>
  );
}
