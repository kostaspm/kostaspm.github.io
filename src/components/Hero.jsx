import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, ChevronRight } from 'lucide-react';

const floatingCards = [
  { label: 'Core Banking', sub: 'Profile Software', color: 'blue', delay: 0 },
  { label: 'SaaS Platform', sub: 'QR Patrol', color: 'emerald', delay: 0.4 },
  { label: 'AI Integration', sub: 'NL → SQL', color: 'violet', delay: 0.8 },
];

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '3', label: 'Companies' },
  { value: '10+', label: 'Enterprise Projects' },
  { value: '2', label: 'Degrees' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1e]"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-violet-500/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-[#94a3b8] font-medium tracking-wide">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#f1f5f9] leading-[1.1] tracking-tight mb-4"
            >
              Konstantinos
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                Manolis
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-blue-400/80 font-medium mb-4 tracking-wide"
            >
              Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#94a3b8] text-base lg:text-lg leading-relaxed max-w-lg mb-8"
            >
              5+ years building enterprise software, SaaS platforms, and
              financial systems. Focused on scalable architectures, clean
              engineering, and delivering real business value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                View Experience
                <ChevronRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1e293b] hover:border-blue-500/50 text-[#94a3b8] hover:text-[#f1f5f9] text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white/5"
              >
                <Mail size={16} />
                Contact
              </a>
              <a
                href={`${import.meta.env.BASE_URL}CV_Konstantinos_Manolis.pdf`}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1e293b] hover:border-[#334155] text-[#94a3b8] hover:text-[#f1f5f9] text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white/5"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-4 gap-4 pt-8 border-t border-[#1e293b]"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-semibold text-[#f1f5f9]">{s.value}</div>
                  <div className="text-xs text-[#475569] mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — floating cards */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {floatingCards.map((card, i) => {
              const colorMap = {
                blue: { border: 'border-blue-500/20', bg: 'bg-blue-500/5', dot: 'bg-blue-400', text: 'text-blue-400' },
                emerald: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', dot: 'bg-emerald-400', text: 'text-emerald-400' },
                violet: { border: 'border-violet-500/20', bg: 'bg-violet-500/5', dot: 'bg-violet-400', text: 'text-violet-400' },
              };
              const c = colorMap[card.color];
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + card.delay }}
                  style={{
                    animation: `float${i} 4s ease-in-out infinite`,
                  }}
                  className={`p-4 rounded-xl border ${c.border} ${c.bg} backdrop-blur-sm w-64`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                    <div>
                      <div className={`text-sm font-medium ${c.text}`}>{card.label}</div>
                      <div className="text-xs text-[#475569]">{card.sub}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Terminal-style card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="w-72 p-4 rounded-xl border border-[#1e293b] bg-[#111827]/80 backdrop-blur-sm font-mono text-xs mt-2"
            >
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="text-[#475569]">$ whoami</div>
              <div className="text-emerald-400">konstantinos_manolis</div>
              <div className="text-[#475569] mt-2">$ stack --list</div>
              <div className="text-blue-400">Angular · React · .NET</div>
              <div className="text-violet-400">Node.js · SQL · OpenAI</div>
              <div className="text-[#475569] mt-2">$ status</div>
              <div className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                available for freelance projects
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-[#475569]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
