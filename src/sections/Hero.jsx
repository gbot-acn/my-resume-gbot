import React from 'react';
import { motion } from 'framer-motion';
import photo from '/photo.jpg';

export default function Hero({ data }) {
  const firstName = data.name.split(' ')[0];
  const lastName = data.name.split(' ').slice(1).join(' ');
  return (
    <section id="hero" className="snap hero">
      <motion.div
        className="eyebrow"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {data.practice}
      </motion.div>

      <div className="hero-headline">
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={photo} alt={data.name} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {firstName} <span className="accent">{lastName}.</span>
        </motion.h1>
      </div>

      <motion.div
        className="tagline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span>{data.stats[0].value} years zero trust</span>
        <span>{data.title}</span>
        <span>{data.level}</span>
      </motion.div>

      <motion.p
        className="summary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {data.summary}
      </motion.p>

      <motion.div
        className="stat-row"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        {data.stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className="v">{s.value}</div>
            <div className="l">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
