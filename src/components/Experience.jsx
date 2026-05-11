import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experience } from '../data/portfolio';

export default function Experience() {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="experience" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">
            Experience
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#f1f5f9] tracking-tight">
            Career timeline
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-[#1e293b]" />

          <div className="space-y-0">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8 lg:pl-24 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 lg:left-8 top-6 w-3 h-3 rounded-full border-2 -translate-x-1/2 ${
                    job.current
                      ? 'bg-blue-400 border-blue-400 shadow-lg shadow-blue-400/40'
                      : 'bg-[#0a0f1e] border-[#334155]'
                  }`}
                />

                <div className="group p-6 rounded-xl border border-[#1e293b] bg-[#111827]/50 hover:border-[#334155] hover:bg-[#111827] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-[#f1f5f9] font-semibold text-base">
                          {job.company}
                        </h3>
                        {job.current && (
                          <span className="px-2 py-0.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
                            Current
                          </span>
                        )}
                        <span className="px-2 py-0.5 text-xs font-medium text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-full">
                          {job.domain}
                        </span>
                      </div>
                      <p className="text-[#94a3b8] text-sm mt-0.5">{job.role}</p>
                    </div>
                    <span className="text-xs text-[#475569] font-medium bg-[#0d1526] border border-[#1e293b] px-3 py-1.5 rounded-md shrink-0">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.description.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-[#64748b]">
                        <div className="w-1 h-1 rounded-full bg-[#334155] mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1e293b]">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs text-[#94a3b8] bg-[#0d1526] border border-[#1e293b] rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
