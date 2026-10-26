import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Portfolio from './components/Portfolio.jsx';
import Clients from './components/Clients.jsx';
import Faq from './components/Faq.jsx';
import QuoteForm from './components/QuoteForm.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import { SERVICE_NAMES } from './data.js';

export default function App() {
  const [service, setService] = useState(SERVICE_NAMES[0]);
  const quote = (name) => {
    setService(name);
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services onQuote={quote} />
        <Process />
        <Portfolio />
        <Clients />
        <Faq />
        <QuoteForm service={service} setService={setService} />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
