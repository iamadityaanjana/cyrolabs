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
    const duration = 1500;
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

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl p-7 overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(255,107,53,0.06) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
            style={{ color: '#FF6B35', background: 'rgba(255,107,53,0.1)' }}
          >
            {project.tag}
          </span>
          <span className="text-white/30 text-xs font-mono">{project.year}</span>
        </div>
        <h3 className="text-white font-bold text-xl mb-3 group-hover:text-white/90 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
      </div>
    </motion.div>
  );
}

export default function WhatWeBuilt() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="what-we-built" className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 block"
            style={{ color: '#FF6B35' }}
          >
            What We've Built
          </span>
          <h2
            className="text-white font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Track record that
            <br />
            <span className="text-white/40">speaks for itself.</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="rounded-2xl p-6 text-center"
              style={{
                background: 'rgba(255,107,53,0.05)',
                border: '1px solid rgba(255,107,53,0.15)',
              }}
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: '#FF6B35' }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-16"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        />

        {/* Project highlights */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-8"
        >
          Project Highlights
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
