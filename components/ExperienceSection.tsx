import { experiences } from "@/data/portfolio";
import { Users, BookOpen, Award, GraduationCap, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Leadership: <Users className="w-4 h-4 text-emerald-700" />,
    Mentoring: <BookOpen className="w-4 h-4 text-blue-700" />,
    Academic: <GraduationCap className="w-4 h-4 text-amber-700" />,
    Competition: <Award className="w-4 h-4 text-purple-700" />,
  };

  return (
    <section id="experience" className="py-24 border-t border-zinc-200 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-zinc-950 pb-3 mb-10">
          <div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">
              [03] // LEADERSHIP_&amp;_COMMUNITY
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 mt-1">
              Pengalaman Organisasi &amp; Mentoring
            </h2>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
            EXPERIENCE
          </span>
        </div>

        <div className="space-y-5">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-2xs hover:border-zinc-400 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-md bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                      {iconMap[exp.category]}
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-950">
                      {exp.organization}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                      {exp.badge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                    {exp.role}
                  </h3>
                </div>
                <div className="text-xs font-mono font-bold text-zinc-500 sm:text-right shrink-0">
                  {exp.period}
                </div>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-5">
                {exp.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-50 text-zinc-600 border border-zinc-200/60"
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
