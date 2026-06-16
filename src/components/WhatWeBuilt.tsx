'use client'

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 1200, suffix: '+', label: 'Applications Processed' },
  { value: 50, suffix: '+', label: 'Builders Supported' },
  { value: 10, suffix: '+', label: 'Programs Organized' },
  { value: 5, suffix: '+', label: 'Ecosystem Partners' },
];

const projects = [
  {
    title: 'WAGMI House Goa',
    tag: 'Builder House',
    description:
      'An immersive builder house experience in Goa bringing together Web3 founders, developers, and creators for two weeks of intensive building.',
    year: '2025',
  },
  {
    title: 'XION House of Builders',
    tag: 'Fellowship',
    description:
      'A multi-batch fellowship program onboarding the next generation of XION ecosystem builders with mentorship, incentives, and community.',
    year: '2024–2025',
  },
  {
    title: 'Startup Hackathons',
    tag: 'Community',
    description:
      'Series of startup-focused hackathons connecting builders with real problems, mentors, and ecosystem partners to ship fast.',
    year: '2024–2026',
  },
  {
    title: 'Community Programs',
    tag: 'Ecosystem',
    description:
      'Ongoing community-building initiatives that grow developer ecosystems, create ambassador programs, and foster long-term collaboration.',
    year: '2023–2026',
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function WhatWeBuilt() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="what-we-built" className="py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 block mb-4">
            What We've Built
          </span>
          <h2
            className="text-white font-bold leading-tight tracking-[-0.025em] max-w-lg"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            Track record that
            <br />
            speaks for itself.
          </h2>
        </motion.div>

        {/* Stats — bordered table cells */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 mb-16"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="py-8 px-6"
              style={i > 0 ? { borderLeft: '1px solid rgba(255,255,255,0.08)' } : {}}
            >
              <div className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-1.5">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/35">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Project highlights */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/25 mb-8"
        >
          Project Highlights
        </motion.p>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.5 + i * 0.08 }}
              className="group py-7 grid grid-cols-12 gap-x-6 items-start"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="col-span-12 md:col-span-6">
                <h3 className="text-white font-semibold text-sm md:text-base mb-2 group-hover:text-white/75 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{project.description}</p>
              </div>
              <div className="hidden md:flex col-span-4 items-start pt-0.5">
                <span className="text-xs text-white/30 uppercase tracking-widest font-medium">
                  {project.tag}
                </span>
              </div>
              <div className="hidden md:flex col-span-2 justify-end items-start pt-0.5">
                <span className="text-xs text-white/20 font-mono">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
