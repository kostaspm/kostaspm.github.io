import { motion } from 'framer-motion';
import { Building2, BarChart3, Layers, BrainCircuit, LineChart, Cloud } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { expertise } from '../data/portfolio';

const iconMap = { Building2, BarChart3, Layers, BrainCircuit, LineChart, Cloud };

export default function Expertise() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="expertise" className="py-24 bg-[#0d1526]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">
            Expertise
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#f1f5f9] tracking-tight">
            Domain knowledge
          </h2>
          <p className="mt-3 text-[#94a3b8] max-w-xl">
            Deep experience across high-stakes software domains where reliability,
            correctness, and performance are non-negotiable.
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertise.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-xl border border-[#1e293b] bg-[#111827]/50 hover:border-blue-500/30 hover:bg-[#111827] transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/15 transition-colors">
                  {Icon && <Icon size={20} className="text-blue-400" />}
                </div>
                <h3 className="text-[#f1f5f9] font-medium mb-2.5 text-sm">
                  {item.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
