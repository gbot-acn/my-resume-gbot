import React from 'react';
import { Reveal } from './Reveal.jsx';

export default function About({ data }) {
  return (
    <section id="about" className="snap">
      <Reveal>
        <div className="eyebrow">Core Values</div>
        <h2 className="section-title">My work at Accenture is defined by these <span className="accent">values</span>.</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="subtle" style={{ fontSize: 18, maxWidth: 880, marginBottom: 36 }}>
          Every engagement, every workstream, every +1 contribution traces back to the same four principles — ownership of outcomes, investing in the people around me, executing with rigor, and leaving the team better than I found it.
        </p>
      </Reveal>
      <Reveal delay={0.25}>
        <div className="themes">
          {data.fy26Themes.map((t, i) => (
            <div className="theme" key={i}>
              <div className="lbl">{t.label}</div>
              <div className="txt">{t.text}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
