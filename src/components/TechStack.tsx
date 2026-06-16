'use client'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techStack = [
  'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL',
  'AWS', 'Supabase', 'Docker', 'OpenAI', 'Anthropic',
];

const ecosystems = [
  'XION', 'Solana', 'Ethereum', 'Polygon', 'Monad', 'Base',
];

function Badge({ name, index, inView, delay = 0 }: {
  name: string;
  index: number;
  inView: boolean;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.35, delay: delay + index * 0.04 }}
      className="inline-flex items-center text-sm font-medium text-white/50 px-3.5 py-2 rounded-lg hover:text-white transition-colors cursor-default"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {name}
    </motion.span>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="tech-stack" className="py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: heading + description */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 block mb-4">
              Technology & Ecosystem
            </span>
            <h2
              className="text-white font-bold leading-tight tracking-[-0.025em] mb-5"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              Powered by
              <br />
              leading technologies.
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              We build on modern, battle-tested stacks and operate across the most active
              blockchain ecosystems.
            </p>
          </motion.div>

          {/* Right: badge groups */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/25 mb-5">
                Technology Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((name, i) => (
                  <Badge key={name} name={name} index={i} inView={inView} delay={0.2} />
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2.5rem' }}>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/25 mb-5">
                Blockchain Ecosystems
              </p>
              <div className="flex flex-wrap gap-2">
                {ecosystems.map((name, i) => (
                  <Badge key={name} name={name} index={i} inView={inView} delay={0.38} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
