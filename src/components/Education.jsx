import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { education, publication } from '../data/portfolio';

const iconMap = { GraduationCap, BookOpen };

export default function Education() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="education" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">
            Education & Research
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#f1f5f9] tracking-tight">
            Academic background
          </h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-8">
          {/* Education cards */}
          <div className="space-y-4">
            <div className="text-xs font-medium text-[#475569] uppercase tracking-widest mb-5">
              Degrees
            </div>
            {education.map((edu, i) => {
              const Icon = iconMap[edu.icon];
              return (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 rounded-xl border border-[#1e293b] bg-[#111827]/50 hover:border-[#334155] hover:bg-[#111827] transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      {Icon && <Icon size={18} className="text-blue-400" />}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2 py-0.5 rounded-full">
                        {edu.type}
                      </span>
                      <h3 className="text-[#f1f5f9] font-medium text-sm mt-2">
                        {edu.institution}
                      </h3>
                      <p className="text-[#64748b] text-sm mt-0.5">{edu.degree}</p>
                      {edu.department && (
                        <p className="text-[#475569] text-xs mt-0.5">{edu.department}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Publication */}
          <div>
            <div className="text-xs font-medium text-[#475569] uppercase tracking-widest mb-5">
              Publication
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl border border-[#1e293b] bg-[#111827]/50 hover:border-blue-500/20 hover:bg-[#111827] transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="px-2.5 py-1 text-xs font-medium text-violet-400 bg-violet-400/10 border border-violet-400/20 rounded-md">
                  ACM Published
                </span>
                <a
                  href={publication.url}
                  target="_blank"
                  className="text-[#475569] hover:text-blue-400 transition-colors"
                  aria-label="View publication"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <h3 className="text-[#f1f5f9] font-medium text-base leading-snug mb-3">
                &ldquo;{publication.title}&rdquo;
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                {publication.description}
              </p>
              <div className="mt-4 pt-4 border-t border-[#1e293b]">
                <span className="text-xs text-[#475569]">
                  Published in <span className="text-[#94a3b8]">ACM Digital Library</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
