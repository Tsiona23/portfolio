import profile from "../assets/images/profile.jpg"
import CVButton from "./CVButton"
import ThemeToggle from "./ThemeToggle"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen px-4 pb-16 pt-24 text-center transition-colors duration-300 sm:px-6 lg:px-8 lg:text-left">
      <ThemeToggle />

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Hi, I’m <span className="text-[#f488be]">Tsion</span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
            Website & App Developer | Full Stack Engineer
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#projects"
              className="w-full rounded-2xl bg-[#f488be] px-6 py-3 font-medium text-white shadow-lg shadow-[#f488be]/20 transition hover:scale-[1.02] active:scale-95 sm:w-auto"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="w-full rounded-2xl border border-gray-200 px-6 py-3 font-medium transition hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5 sm:w-auto"
            >
              Contact
            </a>
          </div>

          <div className="mt-8 w-full sm:w-auto">
            <CVButton />
          </div>
        </div>

        <div className="relative mt-4 flex justify-center lg:justify-end">
          <img
            src={profile}
            alt="Tsion"
            className="relative z-10 h-44 w-44 rounded-full border-4 border-[#f488be]/30 object-cover shadow-2xl sm:h-56 sm:w-56 lg:h-64 lg:w-64"
          />
          <div className="absolute inset-0 rounded-full bg-[#f488be]/10 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}