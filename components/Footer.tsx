import { personalInfo } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";
import Magnetic from "@/components/Magnetic";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/90 bg-white text-zinc-600 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black text-zinc-950 tracking-tight">
                {personalInfo.name}
              </h3>
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              Program Studi Teknik Informatika, Universitas Tadulako. Palu, Sulawesi Tengah.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Magnetic strength={0.35}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/90 text-zinc-600 hover:text-zinc-950 hover:shadow-xs active:scale-95 transition-all duration-150 inline-flex items-center justify-center"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </Magnetic>
            {personalInfo.linkedin && (
              <Magnetic strength={0.35}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/90 text-zinc-600 hover:text-zinc-950 hover:shadow-xs active:scale-95 transition-all duration-150 inline-flex items-center justify-center"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </Magnetic>
            )}
            {personalInfo.instagram && (
              <Magnetic strength={0.35}>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/90 text-zinc-600 hover:text-zinc-950 hover:shadow-xs active:scale-95 transition-all duration-150 inline-flex items-center justify-center"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </Magnetic>
            )}
            <Magnetic strength={0.35}>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Kirim Email"
                className="p-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/90 text-zinc-600 hover:text-zinc-950 hover:shadow-xs active:scale-95 transition-all duration-150 inline-flex items-center justify-center"
              >
                <Mail className="w-4 h-4" />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="text-zinc-400">
            Dibuat dengan Next.js dan Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
