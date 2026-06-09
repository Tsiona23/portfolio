import { useState } from "react"
import Reveal from "./Reveal"

// Images
import delivery from "../assets/images/delivery.png"
import todo from "../assets/images/todo.png"
import pTracker from "../assets/images/p-tracker.png"
import exam from "../assets/images/exam.png"
import notes from "../assets/images/notes.png"

export default function Projects() {
  const [filter, setFilter] = useState("All")

  // 🔹 Featured projects (add category field)
  const featuredProjects = [
    {
      title: "Tsige Flow",
      desc: "Modern period tracking web app featuring cycle monitoring, symptom logging, and personalized health insights.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      img: pTracker,
      github: "https://github.com/Tsiona23/Tsige-Flow-.git",
      demo: "https://tsige-flow.vercel.app/",
    },
    {
      title: "Delivery Website",
      desc: "Frontend delivery service website",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      img: delivery,
      github: "https://github.com/Tsiona23/simple-delivery-website.git",
      demo: "https://tsiona23.github.io/simple-delivery-website/",
    },
    {
      title: "Todo List App",
      desc: "Task management app",
      tech: ["JavaScript"],
      category: "Frontend",
      img: todo,
      github: "https://github.com/Tsiona23/todo-app.git",
      demo: "https://tsiona23.github.io/todo-app/",
    },
    {
      title: "Examify",
      desc: "Fullstack system with reactjs, nodejs, express, mongodb and socket.io",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      category: "fullstack",
      img: exam,
      github: "https://github.com/Tsiona23/EXMIFY.git",
      demo: "https://exmify.vercel.app/",
    },
    {
      title: "Notes App",
      desc: "Android app with Firebase sync",
      tech: ["Kotlin", "Firebase"],
      category: "Android",
      img: notes,
      github: "https://github.com/Tsiona23/My-Note-App.git",
      demo: "#",
    },
  ]

  // 🔹 Filter logic
  const filteredProjects =
    filter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === filter)

  const filters = ["All", "Frontend", "fullstack", "Android"]

  return (
    <section id="projects" className="py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

      {/* Title */}
      <Reveal>
        <h2 className="text-4xl font-bold text-[#f488be] mb-8">
          Projects
        </h2>
      </Reveal>

      {/*  Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`
              px-4 py-2 rounded-full text-sm border transition
              ${filter === f
                ? "bg-[#f488be] text-white border-[#f488be]"
                : "border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 hover:border-[#f488be]"
              }
            `}
          >
            {f}
          </button>
        ))}
      </div>

      {/*  Filtered Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

        {filteredProjects.map((p, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div
              className="
              group bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden
              hover:-translate-y-2 hover:border-[#f488be] dark:hover:border-[#f488be]
              transition duration-300
            "
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-44 w-full object-cover group-hover:scale-105 transition"
              />

              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-200 dark:bg-white/10 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4 text-sm">
                  <a href={p.github} className="text-gray-600 dark:text-gray-300 hover:text-[#f488be]">
                    GitHub
                  </a>
                  <a href={p.demo} className="text-[#f488be]">
                    Demo →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}

      </div>
      </div>
    </section>
  )
}