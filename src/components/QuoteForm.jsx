import { useState, useRef, useEffect } from 'react';
import { CONTACT, SERVICE_NAMES } from '../data.js';

export default function QuoteForm({ service, setService }) {
  const [f, setF] = useState({ name: '', phone: '', address: '', message: '', website: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [dd, setDd] = useState(false);
  const btn = useRef(), list = useRef(), box = useRef();
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  useEffect(() => {
    const h = (e) => { if (!box.current.contains(e.target)) setDd(false); };
    document.addEventListener('click', h);
    return () => document.removeEventListener('click', h);
  }, []);
  useEffect(() => { if (dd) list.current.querySelector('[aria-selected="true"]')?.focus(); }, [dd]);

  const pick = (n) => { setService(n); setDd(false); btn.current.focus(); };
  const onKey = (e, n) => {
    const li = e.currentTarget;
    if (e.key === 'ArrowDown') { e.preventDefault(); (li.nextElementSibling || li.parentNode.firstChild).focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); (li.previousElementSibling || li.parentNode.lastChild).focus(); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(n); }
    else if (e.key === 'Escape') { setDd(false); btn.current.focus(); }
  };

  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Free quote request: ' + service)}&body=${encodeURIComponent(`Name: ${f.name}\nPhone: ${f.phone}\nAddress: ${f.address}\nService: ${service}\nMessage: ${f.message || '-'}`)}`;

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const r = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...f, service }) });
      if (!r.ok) throw new Error();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="quote">
      <div className="wrap">
        <div className="quote">
          <div>
            <h2>Book your Offer</h2>
            <p className="sub">Send your details and we’ll get back to you.</p>
            <p className="contact">
              <a href={'tel:' + CONTACT.tel}>{CONTACT.phone}</a><br />
              <a href={'mailto:' + CONTACT.email}>{CONTACT.email}</a>
            </p>
          </div>
          <div>
            {status === 'sent' ? (
              <div className="thanks" role="status">
                <h3>Thanks, {f.name.split(' ')[0]}!</h3>
                <p>Your request for <b>{service}</b> has been sent. We’ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <label>Your name<input required autoComplete="name" value={f.name} onChange={set('name')} /></label>
                <label>Phone<input type="tel" required autoComplete="tel" value={f.phone} onChange={set('phone')} /></label>
                <label>Enter address<input required autoComplete="street-address" value={f.address} onChange={set('address')} /></label>
                <div className="field">
                  <span id="svclabel">Service</span>
                  <div className="dd" id="dd" ref={box}>
                    <button type="button" id="ddb" ref={btn} aria-haspopup="listbox" aria-expanded={dd} aria-labelledby="svclabel ddb" onClick={() => setDd(!dd)}>
                      <span>{service}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                    </button>
                    <ul className="ddl" ref={list} role="listbox" aria-labelledby="svclabel" hidden={!dd}>
                      {SERVICE_NAMES.map((n) => (
                        <li key={n} role="option" tabIndex={-1} aria-selected={n === service} onClick={() => pick(n)} onKeyDown={(e) => onKey(e, n)}>{n}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <label>Anything we should know?<textarea rows="3" value={f.message} onChange={set('message')} /></label>
                <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.website} onChange={set('website')} />
                <button className="btn" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Request my free quote'}</button>
                {status === 'error' && (
                  <p className="err" role="alert">We couldn’t send that just now. <a href={mailto}>Email it instead</a> or call <a href={'tel:' + CONTACT.tel}>{CONTACT.phone}</a>.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
