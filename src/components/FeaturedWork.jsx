import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolio';

const categoryColors = {
  'SaaS Platform': { text: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
  'AI / ML': { text: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/20' },
  Enterprise: { text: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
  'Internal Tool': { text: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
  Fintech: { text: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20' },
};

export default function FeaturedWork() {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="work" className="py-24 bg-[#0d1526]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">
            Featured Work
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#f1f5f9] tracking-tight">
            Selected projects
          </h2>
          <p className="mt-3 text-[#94a3b8] max-w-xl">
            A selection of enterprise projects across banking, SaaS, AI, and
            cloud domains.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const color = categoryColors[project.category] || categoryColors['Enterprise'];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="group flex flex-col p-6 rounded-xl border border-[#1e293b] bg-[#111827]/50 hover:border-[#334155] hover:bg-[#111827] transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-md border ${color.text} ${color.bg} ${color.border}`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="text-[#f1f5f9] font-semibold text-base mb-2.5">
                  {project.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="px-2 py-0.5 text-xs text-[#94a3b8] bg-[#0d1526] border border-[#1e293b] rounded"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1e293b]">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs text-[#475569] bg-[#0a0f1e] border border-[#1e293b] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
