import React from 'react';
import { Reveal } from './Reveal.jsx';

export default function Experience({ data }) {
  return (
    <section id="experience" className="snap">
      <Reveal>
        <div className="eyebrow">Career Timeline</div>
        <h2 className="section-title"><span className="accent">Experience</span> at Accenture.</h2>
      </Reveal>

      <div className="timeline" style={{ marginTop: 40 }}>
        {data.experience.map((e, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="tl-item">
              <div className="tl-period">{e.period}</div>
              <div className="tl-role">{e.role}</div>
              <div className="tl-client">{e.client}</div>
              <ul className="tl-highlights">
                {e.highlights.map((h, j) => <li key={j}>{h}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
