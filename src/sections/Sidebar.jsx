import React from 'react';

const ICONS = {
  hero: '◉',
  about: '◎',
  skills: '◈',
  experience: '◆',
  certs: '✦',
  clients: '◇',
  plus: '✚',
  contact: '✉'
};

export default function Sidebar({ sections, active, initials }) {
  return (
    <aside className="sidebar">
      <div className="logo">{initials}</div>
      <nav>
        {sections.map((s) => (
          <button
            key={s.id}
            className={active === s.id ? 'active' : ''}
            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
            aria-label={s.label}
          >
            <span style={{ fontSize: 16 }}>{ICONS[s.id]}</span>
            <span className="tip">{s.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
