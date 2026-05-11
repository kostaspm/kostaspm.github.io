import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const highlights = [
  'Enterprise application development across banking, SaaS, and cloud domains',
  'Full-stack development with Angular, React, .NET, and Node.js',
  'AI-assisted tooling and LLM integrations for enterprise workflows',
  'Cloud-native development on Azure / AWS with microservice architectures',
  'Multi-tenant platform engineering with a focus on scalability and reliability',
];

export default function About() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">
              About
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#f1f5f9] leading-tight tracking-tight mb-6">
              Building systems that
              <br />
              <span className="text-[#94a3b8]">scale and endure</span>
            </h2>
            <div className="space-y-4 text-[#94a3b8] text-base leading-relaxed">
              <p>
                I&apos;m a fullstack Software Engineer with 5+ years of experience
                delivering complex software across enterprise, fintech, and SaaS
                environments. My work spans the full engineering lifecycle — from
                architecture and backend API design to frontend delivery and
                production operations.
              </p>
              <p>
                I&apos;ve worked on Core Banking Solutions at Profile Software,
                built and maintained the QR Patrol SaaS platform at Terracom,
                and developed cloud-native applications with Azure at Verus+. I
                bring a pragmatic, product-oriented approach to every system I
                build.
              </p>
              <p>
                My academic background in Applied Informatics and an MSc in
                Data &amp; Computer Science gives me a strong foundation in
                algorithms, data systems, and computer science theory — including
                published research on ACM.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-3"
          >
            <div className="text-xs font-medium text-[#475569] uppercase tracking-widest mb-4">
              Core competencies
            </div>
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="flex items-start gap-3 p-3.5 rounded-lg border border-[#1e293b] bg-[#111827]/50 hover:border-[#334155] hover:bg-[#111827] transition-all duration-200"
              >
                <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 shrink-0" />
                <span className="text-sm text-[#94a3b8] leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
