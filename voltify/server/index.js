import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const port = Number(process.env.SMTP_PORT) || 465;
const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port,
  secure: port === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

const app = express();
app.use(express.json({ limit: '10kb' }));

const hits = new Map(); // simple rate limit: 5 requests / minute / IP
app.post('/api/quote', async (req, res) => {
  const ip = req.ip, now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60000);
  if (recent.length >= 5) return res.status(429).json({ error: 'Too many requests' });
  hits.set(ip, [...recent, now]);

  const b = req.body || {};
  if (b.website) return res.json({ ok: true }); // honeypot for bots
  const c = (v) => String(v || '').trim().slice(0, 500);
  const { name, phone, address, service, message } = Object.fromEntries(
    ['name', 'phone', 'address', 'service', 'message'].map((k) => [k, c(b[k])])
  );
  if (!name || !phone || !address || !service) return res.status(400).json({ error: 'Missing fields' });

  try {
    await mailer.sendMail({
      from: `"Voltify Website" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      subject: `Free quote request: ${service}`,
      text: `Name: ${name}\nPhone: ${phone}\nAddress: ${address}\nService: ${service}\nMessage: ${message || '-'}`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Mail error:', err.message);
    res.status(500).json({ error: 'Email failed' });
  }
});

app.use(express.static(dist));
app.use((req, res) => res.sendFile(path.join(dist, 'index.html')));
app.listen(Number(process.env.PORT) || 3001, () => console.log('Voltify running on port', process.env.PORT || 3001));
