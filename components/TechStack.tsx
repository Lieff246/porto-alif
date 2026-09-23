import { skillCategories } from "@/data/portfolio";

export default function TechStack() {
  return (
    <section id="skills" className="py-24 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-zinc-950 pb-3 mb-10">
          <div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">
              [04] // DEVELOPER_TOOLBOX
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 mt-1">
              Teknologi &amp; Tools yang Dipakai
            </h2>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
            STACK
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-2xs hover:border-zinc-300 transition-all"
            >
              <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                {cat.title}
              </h3>
              <p className="text-xs text-zinc-500 mt-1 mb-4 leading-relaxed">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-50 text-zinc-800 border border-zinc-200 font-medium"
                  >
                    {item}
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
