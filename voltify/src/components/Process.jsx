import { STEPS } from '../data.js';

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <h2>How it works</h2>
        <p className="sub">Three simple steps from enquiry to charging.</p>
        <div className="grid">
          {STEPS.map(([title, text], i) => (
            <div className="step" key={title}>
              <div className="num">{i + 1}</div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
