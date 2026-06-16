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

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      className="group py-8 md:py-10 grid md:grid-cols-12 gap-y-4 gap-x-6 items-start"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="hidden md:block md:col-span-1 pt-0.5">
        <span className="text-xs font-mono text-white/20">{service.number}</span>
      </div>

      <div className="md:col-span-3">
        <h3 className="text-white font-semibold text-base group-hover:text-white/70 transition-colors">
          {service.title}
        </h3>
      </div>

      <div className="md:col-span-5">
        <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
      </div>

      <div className="md:col-span-3">
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded font-medium text-white/35"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 block mb-4">
            Services
          </span>
          <h2
            className="text-white font-bold leading-tight tracking-[-0.025em] max-w-lg"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            What we deliver,
            <br />
            end to end.
          </h2>
        </motion.div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {services.map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
