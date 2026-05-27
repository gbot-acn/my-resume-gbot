import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import data from './data.json';
import Sidebar from './sections/Sidebar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Experience from './sections/Experience.jsx';
import Certifications from './sections/Certifications.jsx';
import Clients from './sections/Clients.jsx';
import PlusOne from './sections/PlusOne.jsx';
import Contact from './sections/Contact.jsx';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'Core Values' },
  { id: 'skills', label: 'Skills' },
  { id: 'certs', label: 'Certifications' },
  { id: 'clients', label: 'Clients' },
  { id: 'plus', label: '+1 Work' },
  { id: 'contact', label: 'Contact' }
];

export default function App() {
  const [active, setActive] = useState('hero');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="app">
      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: '0% 50%',
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: 3,
          background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
          zIndex: 50,
          boxShadow: '0 0 12px var(--accent-glow)'
        }}
      />
      <Sidebar sections={SECTIONS} active={active} initials={data.initials} />
      <main className="main">
        <Hero data={data} />
        <Experience data={data} />
        <About data={data} />
        <Skills data={data} />
        <Certifications data={data} />
        <Clients data={data} />
        <PlusOne data={data} />
        <Contact data={data} />
      </main>
    </div>
  );
}
