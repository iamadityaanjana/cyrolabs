'use client'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="cta" className="py-24 md:py-36 px-4 md:px-8 lg:px-16 bg-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(ellipse, #FF6B35 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-6 block"
            style={{ color: '#FF6B35' }}
          >
            Let's Work Together
          </span>

          <h2
            className="text-white leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700 }}
          >
            Let's Build Something
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #FF6B35, #FF8C42)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ambitious.
            </span>
          </h2>

          <p className="text-white/45 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you're a founder, ecosystem, startup, or community — let's create
            something impactful together.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:hello@cyrolabs.xyz"
              className="font-semibold text-white text-sm transition-all hover:brightness-110 active:scale-95"
              style={{ background: '#FF6C02', padding: '0.7rem 2rem', borderRadius: '0.6rem' }}
            >
              Partner With Us
            </a>
            <a
              href="mailto:hello@cyrolabs.xyz"
              className="font-medium text-sm transition-all hover:border-white/25 active:scale-95"
              style={{
                color: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.04)',
                padding: '0.7rem 2rem',
                borderRadius: '0.6rem',
              }}
            >
              Contact Us →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
