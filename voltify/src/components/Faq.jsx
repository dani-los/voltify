import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { FAQS } from '../data.js';

export default function Faq() {
  const [open, setOpen] = useState(null);
  const [on, setOn] = useState(false);
  const [plugged, setPlugged] = useState(false);
  const W = useRef(), B = useRef(), P = useRef(), G = useRef(), D = useRef([]);

  // Draws the cable from the charger box to the open card.
  const route = (i) => {
    const w = W.current.getBoundingClientRect(), b = B.current.getBoundingClientRect();
    const c = D.current[i].getBoundingClientRect(), s = D.current[i].querySelector('summary').getBoundingClientRect();
    const sx = b.left - w.left + b.width / 2, sy = b.bottom - w.top - 1;
    const ty = s.top - w.top + s.height / 2, ex = c.left - w.left;
    const r = Math.max(2, Math.min(10, ex - 18 - sx));
    P.current.setAttribute('d', `M${sx} ${sy}V${ty - r}Q${sx} ${ty} ${sx + r} ${ty}H${ex - 18}`);
    G.current.setAttribute('transform', `translate(${ex} ${ty})`);
  };

  useLayoutEffect(() => {
    setOn(false);
    setPlugged(false);
    if (open === null) return;
    const p = P.current;
    p.style.transition = 'none';
    route(open);
    void p.getBoundingClientRect();
    p.style.transition = '';
    const raf = requestAnimationFrame(() => setOn(true));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(() => setPlugged(true), reduce ? 0 : 900);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); };
  }, [open]);

  useEffect(() => {
    const f = () => open !== null && route(open);
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, [open]);

  return (
    <section id="faq">
      <div className="wrap narrow">
        <div className="faqwrap" id="faqwrap" ref={W}>
          <div className="faqhead">
            <svg id="fbox" ref={B} className={open !== null ? 'on' : ''} viewBox="0 0 32 40" fill="none" stroke="var(--acc)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="28" height="36" rx="7" />
              <path className="bolt" transform="translate(1 3)" d="M16.5 9 10.5 18H15l-1.5 7 6-9.5h-4z" />
              <g className="qmg"><path className="qm" transform="translate(16 20) scale(1.15) translate(-12 -11.5)" d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" /></g>
            </svg>
            <h2>What’s on your mind?</h2>
          </div>
          <p className="sub">The things people ask us most.</p>
          {FAQS.map((f, i) => (
            <details key={f.q} ref={(el) => (D.current[i] = el)} open={open === i} className={plugged && open === i ? 'charged' : ''}>
              <summary onClick={(e) => { e.preventDefault(); setOpen(open === i ? null : i); }}>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
          <svg id="fcable" className={on ? (plugged ? 'on plugged' : 'on') : ''} aria-hidden="true">
            <path id="cpath" ref={P} pathLength="1" d="" />
            <g id="plug" ref={G}>
              <rect x="-18" y="-7" width="12" height="14" rx="3" fill="var(--acc)" />
              <path d="M-6 -3H1M-6 3H1" stroke="var(--fg)" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
