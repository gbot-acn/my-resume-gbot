import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal.jsx';

export default function Skills({ data }) {
  return (
    <section id="skills" className="snap">
      <Reveal>
        <div className="eyebrow">Technical Expertise</div>
        <h2 className="section-title">Skills & <span className="accent">specializations</span>.</h2>
      </Reveal>

      <div className="two-col" style={{ marginTop: 24 }}>
        <div>
          <Reveal delay={0.1}>
            <h3 style={{ fontSize: 20, marginBottom: 18, color: 'var(--accent-2)' }}>Core competencies</h3>
          </Reveal>
          {data.skills.map((s, i) => (
            <div className="skill" key={s.name}>
              <div className="skill-head">
                <span>{s.name}</span>
                <motion.span
                  className="pct"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                >
                  {s.level}%
                </motion.span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.2, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <Reveal delay={0.2}>
            <h3 style={{ fontSize: 20, marginBottom: 18, color: 'var(--accent-2)' }}>Specializations</h3>
            <div className="chips" style={{ marginBottom: 32 }}>
              {data.specializations.map((s) => <span className="chip" key={s}>{s}</span>)}
            </div>

            <h3 style={{ fontSize: 20, marginBottom: 12, color: 'var(--accent-2)' }}>Primary vendor</h3>
            <div className="chips" style={{ marginBottom: 20 }}>
              {data.vendors.primary.map((v) => (
                <span className="chip" key={v} style={{ background: 'var(--accent)', color: 'white', borderColor: 'var(--accent)' }}>{v}</span>
              ))}
            </div>

            <h3 style={{ fontSize: 20, marginBottom: 12, color: 'var(--accent-2)' }}>Secondary stack</h3>
            <div className="chips">
              {data.vendors.secondary.map((v) => <span className="chip" key={v}>{v}</span>)}
            </div>
            <p className="subtle" style={{ marginTop: 16, fontSize: 13 }}>
              + {data.vendors.notes}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
