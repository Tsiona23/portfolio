import Reveal from "./Reveal"

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "PHP", level: 80 },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "Kotlin", level: 80 },
        { name: "Firebase", level: 75 },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "Java", level: 80 },
        { name: "Python", level: 70 },
        { name: "C++", level: 65 },
      ],
    },
  ]

  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-12 text-4xl font-bold text-[#f488be]">Skills & Expertise</h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-3xl border border-gray-200 bg-gray-50/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#f488be]/50 hover:shadow-2xl hover:shadow-[#f488be]/5 dark:border-white/10 dark:bg-white/5 sm:p-8">
                <h3 className="mb-8 flex items-center gap-2 text-xl font-bold">
                  <span className="h-6 w-1.5 rounded-full bg-[#f488be]"></span>
                  {group.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-2 xl:grid-cols-2">
                  {group.skills.map((skill, idx) => (
                    <div key={idx} className="group/skill relative flex flex-col items-center">
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:border-[#f488be]/30 group-hover/skill:bg-[#f488be]/5 dark:border-white/10 dark:bg-white/5">
                        <SkillIcon name={skill.name} />
                      </div>
                      <span className="text-center text-xs font-medium text-gray-600 transition-colors group-hover/skill:text-[#f488be] dark:text-gray-300">
                        {skill.name}
                      </span>
                      <div className="mt-1 h-1 w-0 rounded-full bg-[#f488be] transition-all duration-300 group-hover/skill:w-4"></div>
                      <div className="pointer-events-none absolute -top-2 rounded-md bg-[#f488be] px-1.5 py-0.5 text-[10px] text-white opacity-0 transition-opacity group-hover/skill:opacity-100">
                        {skill.level}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillIcon({ name }) {
  const icons = {
    HTML: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" /></svg>,
    CSS: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm5.09 8.719L6.221 4.726l11.662-.004-.24 2.634H9.138l.215 2.303h8.173l-.733 8.303-4.814 1.336-4.841-1.33-.312-3.471h2.657l.162 1.761L12 17.15l2.493-.687.261-2.915H6.843l-.253-2.829h8.339l.115-1.313L6.591 8.72z" /></svg>,
    JavaScript: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.045-.705.15-.645.975-.75 1.485-.465.33.195.6.51.765.825L23.23 12.11c-.48-.84-1.155-1.485-2.01-1.86-.501-.227-3.087-.45-4.407.45-1.29.87-1.215 2.85-.345 3.735.63.585 2.655.945 3.39 1.305.66.42.855.75.765 1.545-.09.765-.645 1.185-1.89 1.185-1.14 0-1.905-.405-2.445-1.365l-2.715 1.53c.51 1.35 1.71 2.445 4.74 2.445 3.285.015 5.505-1.56 5.31-4.785zM7.53 13.132c.15-.81.675-1.29 1.32-1.29.675 0 1.155.39 1.155 1.05v7.215c0 .615-.135 1.095-.6 1.365-.6.345-1.485.465-1.86.09-.345-.345-.435-.78-.435-1.32V13.13z" /></svg>,
    "React.js": <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.635c0-1.258-1.52-2.31-3.83-2.96-.282-.079-.575-.15-.878-.214C18.225 3.86 16.035 1.11 13.565 1.11c-.244 0-.476.027-.696.082-.544.136-.976.435-1.26.843-.284-.408-.716-.707-1.26-.843-.22-.055-.452-.082-.696-.082-2.47 0-4.66 2.75-5.732 6.56-.303.065-.596.135-.878.214C.635 8.545 0 9.412 0 10.635c0 1.14.545 1.965 1.523 2.505C.545 13.68 0 14.506 0 15.645c0 1.258 1.52 2.31 3.83 2.96.282.079.575.15.878.214 1.073 3.81 3.263 6.56 5.732 6.56.244 0 .476-.027.696-.082.544-.136.976-.435 1.26-.843.284.408.716.707 1.26.843.22.055.452.082.696.082 2.47 0 4.66-2.75 5.732-6.56.303-.065.596-.135.878-.214 2.31-.65 3.83-1.702 3.83-2.96 0-1.14-.545-1.966-1.523-2.505.978-.54 1.523-1.366 1.523-2.505zm-12 4.29c-1.615 0-2.925-1.31-2.925-2.925s1.31-2.925 2.925-2.925 2.925 1.31 2.925 2.925-1.31 2.925-2.925 2.925z" /></svg>,
    "Node.js": <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm5.118 15.684l-5.118 2.684-5.118-2.684v-5.368l5.118-2.684 5.118 2.684v5.368z" /></svg>,
    PHP: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.333 11.333h-2v2.667h-1.333v-2.667h-2.667v-1.333h2.667V8.667h1.333v2.667h2v1.333z" /></svg>,
    Kotlin: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M24 24H0V0h24L12 12z" /></svg>,
    Firebase: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M3.89 15.672L5.255 7.103c.06-.378.58-.452.743-.105L7.74 10.42l3.473-6.521c.18-.34.673-.327.834.023l8.062 17.225c.184.394-.148.825-.568.745l-15.65-2.22z" /></svg>,
    Java: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M6.082 17.55s.018-.112.054-.316c.036-.204.09-.49.162-.835.144-.69.363-1.637.666-2.735.606-2.196 1.488-5.166 2.412-8.136 0 0 .15-.495.42-.495h3.045c.27 0 .42.495.42.495 1.35 4.305 3.39 10.845 3.39 10.845.09.285.24.81.24.81 0 .615-.495 1.11-.11 1.11s1.11-.495 1.11-1.11c0 0-.018-.112-.054-.316-.036-.204-.09-.49-.162-.835-.144-.69-.363-1.637-.666-2.735l-.018-.045c-.606-2.196-1.488-5.166-2.412-8.136 0 0-.15-.495-.42-.495H11.08c-.27 0-.42.495-.42.495-1.35 4.305-3.39 10.845-3.39 10.845-.09.285-.24.81-.24.81 0 .615.495 1.11 1.11 1.11s1.11-.495 1.11-1.11c0 0-.018-.112-.054-.316z" /></svg>,
    Python: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12C24 5.373 18.627 0 12 0zm0 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" /></svg>,
    "C++": <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 11h-2v2h-1v-2h-2v-1h2V9h1v2h2v1z" /></svg>,
  }

  return (
    <div className="text-gray-600 transition-colors group-hover/skill:text-[#f488be] dark:text-gray-400">
      {icons[name] || <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>}
    </div>
  )
}