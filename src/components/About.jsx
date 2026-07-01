import Reveal from "./Reveal"

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-8 text-4xl font-bold theme-accent">About Me</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="theme-card rounded-3xl p-6 shadow-sm backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] transition-all hover:border-[--color-primary]/30 sm:p-8">
              <p className="leading-relaxed theme-text-muted">
                I am a creative developer dedicated to crafting elegant solutions through code. My approach blends technical precision with a user-centric mindset, allowing me to turn abstract concepts into high-performing digital realities. Beyond just writing code, I am committed to continuous learning and staying at the forefront of emerging technologies to build impactful applications that bridge the gap between design and functionality.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="theme-card rounded-3xl p-6 shadow-sm backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] transition-all hover:border-[--color-primary]/30 sm:p-8">
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                <span className="h-0.5 w-8 bg-[--color-primary]"></span>
                Education
              </h3>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-semibold">Mekelle University</h4>
                  <p className="theme-accent">BSc in Information Technology</p>
                </div>
                <span className="rounded-full bg-[--color-primary-soft] px-4 py-1 text-sm font-medium theme-accent">
                  2023/2024 – Present
                </span>
              </div>
              <p className="mt-4 leading-relaxed theme-text-muted">
                Immersing myself in the core principles of information technology has provided me with a robust theoretical framework. My academic path is defined by a rigorous exploration of software engineering, data structures, and enterprise computing. This background serves as the foundation for my practical exploration into modern development workflows, ensuring that every project I build is backed by sound logic and scalable architecture.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}