import { focusAreas } from "@/data/portfolio";
import { Globe, Server, Brain, Cpu } from "lucide-react";

export default function FocusAreas() {
  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-5 h-5 text-blue-600" />,
    Server: <Server className="w-5 h-5 text-emerald-600" />,
    Brain: <Brain className="w-5 h-5 text-indigo-600" />,
    Cpu: <Cpu className="w-5 h-5 text-amber-600" />,
  };

  return (
    <section id="focus" className="py-20 border-t border-zinc-200 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-zinc-950 pb-3 mb-10">
          <div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">
              [01] // ENGINEERING_DOMAINS
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 mt-1">
              Fokus Utama &amp; Keahlian Teknis
            </h2>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
            04 PILLARS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="p-7 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all shadow-2xs group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {iconMap[area.icon]}
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  0{index + 1} / DOMAIN
                </span>
              </div>
              <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                {area.title}
              </h3>
              <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-zinc-100">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
