import { LinkedinIcon, GithubIcon } from './BrandIcons';
import { personal } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#1e293b] bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <span className="text-blue-400 font-bold text-xs">KM</span>
            </div>
            <span className="text-[#475569] text-sm">
              Konstantinos Manolis
            </span>
          </div>

          <p className="text-[#334155] text-xs">
            © {new Date().getFullYear()} · Built with React, Vite & TailwindCSS
          </p>

          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#475569] hover:text-[#94a3b8] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#475569] hover:text-[#94a3b8] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
