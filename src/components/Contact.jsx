import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';
import { useInView } from '../hooks/useInView';
import { personal } from '../data/portfolio';

const links = [
  {
    label: 'LinkedIn',
    href: personal.linkedin,
    icon: LinkedinIcon,
    description: 'Connect professionally',
  },
  {
    label: 'GitHub',
    href: personal.github,
    icon: GithubIcon,
    description: 'View code & projects',
  },
  {
    label: 'Email',
    href: `mailto:${personal.email}`,
    icon: Mail,
    description: personal.email,
  },
];

export default function Contact() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="contact" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-14"
          >
            <div className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">
              Contact
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#f1f5f9] tracking-tight mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              I&apos;m open to   engineering roles, consulting engagements, and
              freelance projects in enterprise software, fintech, or SaaS.
              Feel free to reach out.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              {links.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-[#1e293b] bg-[#111827]/50 hover:border-blue-500/30 hover:bg-[#111827] transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/15 transition-colors">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[#f1f5f9] text-sm font-medium">{link.label}</div>
                      <div className="text-[#64748b] text-xs truncate mt-0.5">{link.description}</div>
                    </div>
                    <div className="text-[#334155] group-hover:text-blue-400 transition-colors text-sm">
                      →
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">
                  Available for opportunities
                </span>
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
                Currently open to senior software engineering positions and
                freelance engagements. Particularly interested in
                enterprise software, fintech, and SaaS domains.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#64748b]">
                <MapPin size={14} className="text-[#475569]" />
                <span>Based in Greece · Remote-friendly</span>
              </div>
              <div className="mt-5 pt-5 border-t border-emerald-500/10">
                <a
                  href={`mailto:${personal.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20"
                >
                  <Mail size={16} />
                  Send a message
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
