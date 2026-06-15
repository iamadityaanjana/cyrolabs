'use client'

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    number: '01',
    title: 'STARTUP PROGRAMS',
    items: ['Fellowships', 'Accelerators', 'Builder Houses', 'Hackathons'],
    accent: '#FF6B35',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#FF6B35" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'PRODUCT DEVELOPMENT',
    items: ['Web Applications', 'Mobile Apps', 'SaaS Platforms', 'Custom Software'],
    accent: '#FF6B35',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#FF6B35" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'AI & AUTOMATION',
    items: ['AI Agents', 'Chatbots', 'Workflow Automation', 'AI Integrations'],
    accent: '#FF6B35',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#FF6B35" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.414 2.798H4.213c-1.444 0-2.414-1.798-1.414-2.798L4 15.298" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'WEB3 & BLOCKCHAIN',
    items: ['dApps', 'Smart Contracts', 'Infrastructure', 'Ecosystem Development'],
    accent: '#FF6B35',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#FF6B35" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
];

function Card({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl p-8 cursor-default overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top left, rgba(255,107,53,0.08) 0%, transparent 60%)',
        }}
      />
      {/* Top border accent on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, transparent, #FF6B35, transparent)' }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(255,107,53,0.1)' }}
          >
            {card.icon}
          </div>
          <span
            className="text-5xl font-bold opacity-10 leading-none"
            style={{ color: '#FF6B35' }}
          >
            {card.number}
          </span>
        </div>

        <h3 className="text-white font-bold text-lg tracking-wider mb-5">{card.title}</h3>

        <ul className="space-y-2.5">
          {card.items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-white/60 text-sm">
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: '#FF6B35' }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function WhatWeDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="what-we-do" className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-black">
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
            What We Do
          </span>
          <h2
            className="text-white font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Everything you need to
            <br />
            <span className="text-white/40">build and scale.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <Card key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
