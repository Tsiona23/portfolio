import Reveal from "./Reveal"
export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">

      <Reveal>
        <h2 className="text-4xl font-bold mb-8 text-[#f488be]">About Me</h2>
      </Reveal>

      <Reveal>
        <div className="bg-gray-50/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-8 rounded-3xl transition-all hover:border-[#f488be]/30 shadow-sm">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a creative developer dedicated to crafting elegant solutions through code. My approach blends technical precision with a user-centric mindset, allowing me to turn abstract concepts into high-performing digital realities. Beyond just writing code, I am committed to continuous learning and staying at the forefront of emerging technologies to build impactful applications that bridge the gap between design and functionality.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <h3 className="text-2xl font-bold mt-16 mb-6 flex items-center gap-3">
          <span className="w-8 h-0.5 bg-[#f488be]"></span>
          Education
        </h3>
      </Reveal>

      <Reveal>
        <div className="bg-gray-50/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-8 rounded-3xl transition-all hover:border-[#f488be]/30">
          <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
            <div>
              <h4 className="text-xl font-semibold">Mekelle University</h4>
              <p className="text-[#f488be]">BSc in Information Technology</p>
            </div>
            <span className="px-4 py-1 bg-[#f488be]/10 text-[#f488be] rounded-full text-sm font-medium">2023/2024 – Present</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Immersing myself in the core principles of information technology has provided me with a robust theoretical framework. My academic path is defined by a rigorous exploration of software engineering, data structures, and enterprise computing. This background serves as the foundation for my practical exploration into modern development workflows, ensuring that every project I build is backed by sound logic and scalable architecture.
          </p>
        </div>
      </Reveal>
    </section>
  )
}