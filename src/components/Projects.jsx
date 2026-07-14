import { useState } from "react"
import Reveal from "./Reveal"

// Images
import delivery from "../assets/images/delivery.png"
import todo from "../assets/images/todo.png"
import pTracker from "../assets/images/p-tracker.png"
import exam from "../assets/images/exam.png"
import notes from "../assets/images/notes.png"
import interviewhub from "../assets/images/interviewhub.png"

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const featuredProjects = [
    {
      title: "interview Hub",
      desc: "a modern and responsive interview preparation platform",
      tech: ["html", "css", "javascript"],
      category: "Frontend",
      img: interviewhub,
      github: "https://github.com/Tsiona23/Interview-Hub-.git",
      demo: "https://interview-hub-sand.vercel.app/",
    },
    {
      title: "Examify",
      desc: "Fullstack online examination system with reactjs, nodejs, express, mongodb and socket.io",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      category: "fullstack",
      img: exam,
      github: "https://github.com/Tsiona23/EXMIFY.git",
      demo: "https://exmify.vercel.app/",
    },
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
      demo: "https://zi-express.vercel.app/",
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
      title: "Notes App",
      desc: "Android app with Firebase sync",
      tech: ["Kotlin", "Firebase"],
      category: "Android",
      img: notes,
      github: "https://github.com/Tsiona23/My-Note-App.git",
      demo: "#",
    },
  ]

  const filteredProjects =
    filter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === filter)

  const filters = ["All", "Frontend", "fullstack", "Android"]

  return (
    <section id="projects" className="py-24 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-8 text-4xl font-bold theme-accent">Projects</h2>
        </Reveal>

        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`w-full rounded-full border px-4 py-3 text-sm font-medium transition sm:w-auto ${
                filter === f
                  ? "border-[--color-primary] bg-[--color-primary] text-white"
                  : "border-[--color-border] theme-text-muted hover:border-[--color-primary]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-surface-muted] transition duration-300 hover:-translate-y-2 hover:border-[--color-primary]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="p-5">
                  <h3 className="font-semibold">{p.title}</h3>

                  <p className="mt-2 text-sm theme-text-muted">{p.desc}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="theme-chip rounded px-2 py-1 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-4 text-sm">
                    <a href={p.github} className="theme-text-muted transition hover:theme-accent">
                      GitHub
                    </a>
                    <a href={p.demo} className="theme-accent">
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
