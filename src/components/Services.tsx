'use client'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    number: '01',
    title: 'Design & Branding',
    description:
      'Premium brand identities, UI/UX design systems, and visual storytelling that sets startups apart from day one. We craft experiences that convert.',
    tags: ['Brand Identity', 'UI/UX Design', 'Design Systems', 'Visual Strategy'],
  },
  {
    number: '02',
    title: 'Full Stack Development',
    description:
      'End-to-end product engineering using modern stacks. From MVP to production-grade platforms, we build what founders need to ship and scale.',
    tags: ['Web Apps', 'Mobile Apps', 'SaaS Platforms', 'APIs & Infrastructure'],
  },
  {
    number: '03',
    title: 'AI & Automation',
    description:
      'Cutting-edge AI agents, intelligent chatbots, and workflow automation that transform how teams operate. Powered by OpenAI, Anthropic, and custom models.',
    tags: ['AI Agents', 'LLM Integration', 'Workflow Automation', 'Custom AI'],
  },
  {
    number: '04',
    title: 'Blockchain & Web3',
    description:
      'Smart contract development, dApp engineering, and Web3 ecosystem integration. We build on Solana, Ethereum, XION, and emerging L1/L2 ecosystems.',
    tags: ['Smart Contracts', 'dApps', 'DeFi', 'Ecosystem Dev'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden"
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        paddingTop: '3rem',
        paddingBottom: '3rem',
      }}
    >
      {/* Hover line */}
      <motion.div
        className="absolute left-0 top-0 h-full w-0.5 origin-top"
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.3 }}
        style={{ background: '#FF6B35' }}
      />

      <div className="pl-6 md:pl-0 md:grid md:grid-cols-12 md:gap-8 items-start">
        {/* Number */}
        <div className="md:col-span-1 mb-4 md:mb-0">
          <span
            className="text-sm font-mono font-bold"
            style={{ color: 'rgba(255,107,53,0.6)' }}
          >
            {service.number}
          </span>
        </div>

        {/* Title */}
        <div className="md:col-span-3 mb-4 md:mb-0">
          <h3
            className="text-white font-semibold group-hover:text-white/90 transition-colors"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
          >
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <div className="md:col-span-5 mb-4 md:mb-0">
          <p className="text-white/50 leading-relaxed text-sm md:text-base">
            {service.description}
          </p>
        </div>

        {/* Tags */}
        <div className="md:col-span-3">
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-lg font-medium"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 block"
            style={{ color: '#FF6B35' }}
          >
            Services
          </span>
          <h2
            className="text-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700 }}
          >
            What we deliver
            <br />
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>end to end.</span>
          </h2>
        </motion.div>

        <div
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
