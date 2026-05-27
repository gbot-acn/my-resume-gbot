import React from 'react';
import { Reveal } from './Reveal.jsx';

export default function Contact({ data }) {
  return (
    <section id="contact" className="snap contact">
      <Reveal>
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Get In Touch</div>
        <h2>Let's <span className="accent">connect.</span></h2>
        <p className="subtle" style={{ textAlign: 'center', margin: '20px auto 0', fontSize: 17 }}>
          Open to conversations about Zero Trust, segmentation strategy, and the next wave of agentic security tooling.
        </p>
        <div className="links">
          <a className="btn" href={`mailto:${data.email}`}>✉ {data.email}</a>
          <a className="btn ghost" href={`tel:${data.phone.replace(/\s/g, '')}`}>{data.phone}</a>
        </div>
        <div className="footer-note">© {new Date().getFullYear()} {data.name} · Accenture Security · {data.location}</div>
      </Reveal>
    </section>
  );
}
