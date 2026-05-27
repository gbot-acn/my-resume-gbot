import React from 'react';
import { Reveal } from './Reveal.jsx';

export default function Certifications({ data }) {
  return (
    <section id="certs" className="snap">
      <Reveal>
        <div className="eyebrow">Credentials</div>
        <h2 className="section-title"><span className="accent">Certifications</span> & training.</h2>
      </Reveal>

      <div className="card-grid" style={{ marginTop: 36 }}>
        {data.certifications.map((c, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="card">
              <div className={`cert-status ${c.status.toLowerCase().includes('progress') ? 'inprog' : ''}`}>
                {c.status}
              </div>
              <h3>{c.name}</h3>
              <div className="issuer">{c.issuer}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
