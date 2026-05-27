import React from 'react';
import { Reveal } from './Reveal.jsx';

export default function Clients({ data }) {
  return (
    <section id="clients" className="snap">
      <Reveal>
        <div className="eyebrow">Engagements</div>
        <h2 className="section-title">Selected <span className="accent">client</span> work.</h2>
        <p className="subtle">Working across Resources, Communications & Media, and Utilities — deploying Zero Trust segmentation, hardening application hygiene, and rebuilding security posture after high-impact incidents.</p>
      </Reveal>

      <div className="card-grid" style={{ marginTop: 36 }}>
        {data.clients.map((c, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="card client-card">
              <div className="industry">{c.industry}</div>
              <h3>{c.name}</h3>
              <p className="detail">{c.focus}</p>
              <div className="client-period">{c.period}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
