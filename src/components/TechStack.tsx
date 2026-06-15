'use client'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techLogos = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'Python', color: '#3776AB' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Supabase', color: '#3ECF8E' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'OpenAI', color: '#10a37f' },
  { name: 'Anthropic', color: '#D4A574' },
];

const ecosystemLogos = [
  { name: 'XION', color: '#FF6B35' },
  { name: 'Solana', color: '#9945FF' },
  { name: 'Ethereum', color: '#627EEA' },
  { name: 'Polygon', color: '#8247E5' },
  { name: 'Monad', color: '#836EF9' },
  { name: 'Base', color: '#0052FF' },
];

function LogoBadge({
  item,
  index,
  inView,
  delay = 0,
}: {
  item: { name: string; color: string };
  index: number;
  inView: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: delay + index * 0.05 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-default"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: item.color }}
      />
      <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">
        {item.name}
      </span>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="tech-stack" className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 block"
            style={{ color: '#FF6B35' }}
          >
            Technology & Ecosystem
          </span>
          <h2
            className="text-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700 }}
          >
            Powered by Leading Technologies
            <br />
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>& Ecosystems.</span>
          </h2>
        </motion.div>

        {/* Tech Stack */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Technology Stack
          </motion.p>
          <div className="flex flex-wrap gap-3">
            {techLogos.map((item, i) => (
              <LogoBadge key={item.name} item={item} index={i} inView={inView} delay={0.25} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-12"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        />

        {/* Ecosystem */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Blockchain Ecosystems
          </motion.p>
          <div className="flex flex-wrap gap-3">
            {ecosystemLogos.map((item, i) => (
              <LogoBadge key={item.name} item={item} index={i} inView={inView} delay={0.45} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
