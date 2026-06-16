'use client';

import Image from 'next/image';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-black px-6 md:px-10 lg:px-16 py-12"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="mb-4 opacity-80">
              <Image src="/logo.svg" alt="Cyro Labs" width={108} height={15} />
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Building products, communities, and startup ecosystems. We help founders
              launch and scale what matters.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-white/25 mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { label: 'What We Do', id: 'what-we-do' },
                { label: 'Our Work', id: 'what-we-built' },
                { label: 'Services', id: 'services' },
                { label: 'Technology', id: 'tech-stack' },
                { label: 'Why Cyro Labs', id: 'why-cyrolabs' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-white/25 mb-5">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@cyrolabs.xyz"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  hello@cyrolabs.xyz
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/cyrofnd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/cyro-studios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Cyro Labs. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Built by Cyro Labs</p>
        </div>
      </div>
    </footer>
  );
}
