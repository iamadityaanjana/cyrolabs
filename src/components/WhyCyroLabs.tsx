'use client'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  {
    title: 'Fast Execution',
    description:
      'We move at startup speed. From concept to shipped product, we eliminate bottlenecks and deliver with urgency and precision.',
  },
  {
    title: 'Founder-First Approach',
    description:
      'We think like founders because we are builders ourselves. Every decision is filtered through the lens of what actually moves the needle.',
  },
  {
    title: 'Technical Expertise',
    description:
      "Deep engineering capabilities across AI, Web3, and full-stack. We don't cut corners — we build systems that scale and last.",
  },
  {
    title: 'Community Driven',
    description:
      "Community is our superpower. We've built networks of 1200+ builders that become users, beta testers, and advocates for the products we create.",
  },
  {
    title: 'End-to-End Support',
    description:
      'From ideation to post-launch growth. We stay in the trenches with founders through every phase — strategy, design, build, and scale.',
  },
  {
    title: 'Partnership Network',
    description:
      'Access to a curated network of investors, ecosystem funds, technical advisors, and industry partners who open doors that matter.',
  },
];

export default function WhyCyroLabs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-cyrolabs" className="py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 block mb-4">
            Why Cyro Labs
          </span>
          <h2
            className="text-white font-bold leading-tight tracking-[-0.025em] max-w-lg"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            The unfair advantage
            <br />
            for founders & ecosystems.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 font-mono text-[11px] text-white/20 flex-shrink-0">
                  0{i + 1}
                </span>
                <h3 className="text-white font-semibold text-sm">{reason.title}</h3>
              </div>
              <p className="text-white/40 text-sm leading-relaxed pl-9">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
