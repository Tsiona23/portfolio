import profile from "../assets/images/profile.jpg"
import CVButton from "./CVButton"
import ThemeToggle from "./ThemeToggle"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-6 transition-colors duration-300">

      <ThemeToggle />

      <div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-[#f488be]">Tsion</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Website & App Developer | Full Stack Engineer
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <a href="#projects" className="px-6 py-3 bg-[#f488be] text-white font-medium rounded-xl hover:scale-105 active:scale-95 transition shadow-lg shadow-[#f488be]/20">
            View Work
          </a>

          <a href="#contact" className="px-6 py-3 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition">
            Contact
          </a>
        </div>

      </div>
      <div className="mt-12 relative">
        <img src={profile} className="w-44 h-44 rounded-full object-cover border-4 border-[#f488be]/30 shadow-2xl relative z-10" />
        <div className="absolute -inset-4 bg-[#f488be]/10 blur-3xl rounded-full z-0"></div>
      </div>
      <div className="mt-8">
        <CVButton />
      </div>
    </section>
  )
}