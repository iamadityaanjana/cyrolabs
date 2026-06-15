'use client';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-black px-4 md:px-8 lg:px-16 py-12"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #FF6B35, #FF8C42)' }}
              >
                <span className="text-white font-bold text-sm">CL</span>
              </div>
              <span className="text-white font-semibold text-lg">Cyro Labs</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Building products, communities, and startup ecosystems. We help founders launch
              and scale what matters.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-4">
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
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@cyrolabs.xyz"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  hello@cyrolabs.xyz
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/cyrolabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/cyrolabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Cyro Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-white/20 text-xs">Built with</span>
            <span className="text-white/30 text-xs mx-1">♥</span>
            <span className="text-white/20 text-xs">by Cyro Labs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
