import { personalInfo } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <h3 className="text-lg font-black text-zinc-950 tracking-tight">
                {personalInfo.name}
              </h3>
            </div>
            <p className="text-xs text-zinc-600 mt-1">
              Teknik Informatika · Universitas Tadulako, Palu, Sulawesi Tengah
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-950 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-950 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="text-zinc-400">
            Architected with Next.js &amp; Tailwind CSS · Light Minimalist
          </p>
        </div>
      </div>
    </footer>
  );
}
