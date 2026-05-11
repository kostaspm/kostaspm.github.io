import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { techStack } from '../data/portfolio';

const categoryConfig = {
  Frontend: { color: 'blue' },
  Backend: { color: 'emerald' },
  Databases: { color: 'amber' },
  Cloud: { color: 'cyan' },
  'Data & AI': { color: 'violet' },
};

const colorClasses = {
  blue: { label: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20', dot: 'bg-blue-400' },
  emerald: { label: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', dot: 'bg-emerald-400' },
  amber: { label: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20', dot: 'bg-amber-400' },
  cyan: { label: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20', dot: 'bg-cyan-400' },
  violet: { label: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/20', dot: 'bg-violet-400' },
};

export default function TechStack() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="tech" className="py-24 bg-[#0d1526]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">
            Tech Stack
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#f1f5f9] tracking-tight">
            Tools & technologies
          </h2>
          <p className="mt-3 text-[#94a3b8] max-w-xl">
            A curated overview of the technologies I work with across
            enterprise projects.
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(techStack).map(([category, items], i) => {
            const config = categoryConfig[category] || { color: 'blue' };
            const c = colorClasses[config.color];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-5 rounded-xl border border-[#1e293b] bg-[#111827]/50 hover:border-[#334155] hover:bg-[#111827] transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                  <span className={`text-xs font-semibold uppercase tracking-widest ${c.label}`}>
                    {category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 text-xs rounded-md border ${c.label} ${c.bg} ${c.border}`}
                    >
                      {tech}
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
