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
              I'm a software developer passionate about building modern, intuitive, and impactful digital experiences. 
              I enjoy transforming ideas into scalable applications through clean code, thoughtful design, and continuous learning.

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
               Pursuing a Bachelor's degree in Information Technology with a strong foundation in software engineering, programming, database systems, networking, computer science fundamentals and modern technologies through academic study and hands-on projects.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}