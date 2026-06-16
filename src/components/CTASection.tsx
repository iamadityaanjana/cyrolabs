'use client'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="cta" className="py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl md:rounded-3xl px-8 md:px-16 lg:px-20 py-14 md:py-20"
          style={{ background: '#080808', border: '1px solid rgba(255,255,255,0.09)' }}
        >
          <div className="max-w-xl">
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 block mb-6">
              Let's Work Together
            </span>
            <h2
              className="text-white font-bold leading-tight tracking-[-0.03em] mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
            >
              Let's build something
              <br />
              ambitious.
            </h2>
            <p className="text-white/40 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
              Whether you're a founder, ecosystem, startup, or community — let's create
              something impactful together.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="mailto:hello@cyrolabs.xyz"
                className="inline-flex items-center px-5 py-2.5 bg-[#FF6C02] hover:bg-[#e06002] text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Partner With Us
              </a>
              <a
                href="mailto:hello@cyrolabs.xyz"
                className="text-sm font-medium text-white/35 hover:text-white transition-colors"
              >
                hello@cyrolabs.xyz →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
