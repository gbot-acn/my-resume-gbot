import React from 'react';
import { Reveal } from './Reveal.jsx';

export default function PlusOne({ data }) {
  return (
    <section id="plus" className="snap">
      <Reveal>
        <div className="eyebrow">Beyond Core Delivery</div>
        <h2 className="section-title"><span className="accent">+1</span> contributions.</h2>
        <p className="subtle">Leadership, community work, and capability-building outside the client workstream.</p>
      </Reveal>

      <div style={{ marginTop: 36, maxWidth: 640 }}>
        {data.plusOne.map((p, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="card" style={{ padding: 32 }}>
              <h3 style={{ fontSize: 22, marginBottom: 12 }}>{p.title}</h3>
              <p className="detail" style={{ fontSize: 16 }}>{p.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
