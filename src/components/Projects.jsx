﻿import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react"

import delivery from "../assets/images/delivery.png"
import todo from "../assets/images/todo.png"
import exam from "../assets/images/exam.png"
import notes from "../assets/images/notes.png"
import interviewhub from "../assets/images/interviewhub.png"
import ReviewLens from "../assets/images/ReviewLens.png"

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    title: "ReviewLens",
    desc: "An AI-powered platform that analyzes app reviews and transforms user feedback into clear, useful insights.",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "Gemini API",
    ],
    category: "Full Stack",
    img: ReviewLens,
    github: "https://github.com/Tsiona23/ReviewLens.git",
    demo: "https://review-lens-wine.vercel.app/",
    featured: true,
    number: "01",
  },

  {
    title: "Examify",
    desc: "A full-stack online examination platform with real-time functionality, authentication, exams, and result management.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
    ],
    category: "Full Stack",
    img: exam,
    github: "https://github.com/Tsiona23/EXMIFY.git",
    demo: "https://exmify.vercel.app/",
    featured: true,
    number: "02",
  },

  {
    title: "Interview Hub",
    desc: "A modern interview preparation platform designed to help developers practice technical interview questions.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    category: "Frontend",
    img: interviewhub,
    github: "https://github.com/Tsiona23/Interview-Hub-.git",
    demo: "https://interview-hub-sand.vercel.app/",
    featured: true,
    number: "03",
  },

  {
    title: "Delivery Website",
    desc: "A responsive delivery service website with a clean interface and modern user experience.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    category: "Frontend",
    img: delivery,
    github: "https://github.com/Tsiona23/simple-delivery-website.git",
    demo: "https://zi-express.vercel.app/",
    number: "04",
  },

  {
    title: "Todo List App",
    desc: "A simple and responsive task management application for organizing everyday tasks.",
    tech: [
      "JavaScript",
    ],
    category: "Frontend",
    img: todo,
    github: "https://github.com/Tsiona23/todo-app.git",
    demo: "https://todo-app-dun-tau.vercel.app/",
    number: "05",
  },

  {
    title: "Notes App",
    desc: "An Android note-taking application built with Kotlin with Firebase synchronization.",
    tech: [
      "Kotlin",
      "Firebase",
    ],
    category: "Android",
    img: notes,
    github: "https://github.com/Tsiona23/My-Note-App.git",
    demo: "#",
    number: "06",
  },
]

const filters = [
  "All",
  "Full Stack",
  "Frontend",
  "Android",
]

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  /* =======================================================
     FILTERED PROJECTS
  ======================================================= */

  const filteredProjects = useMemo(() => {
    if (filter === "All") {
      return projects
    }

    return projects.filter(
      (project) => project.category === filter
    )
  }, [filter])

  /* =======================================================
     SAFE INDEX
  ======================================================= */

  const safeIndex =
    filteredProjects.length === 0
      ? 0
      : Math.min(
          currentIndex,
          filteredProjects.length - 1
        )

  const currentProject =
    filteredProjects[safeIndex]

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const nextProject = () => {
    if (filteredProjects.length <= 1) return

    setDirection(1)

    setCurrentIndex(
      (previous) =>
        (previous + 1) %
        filteredProjects.length
    )
  }

  const previousProject = () => {
    if (filteredProjects.length <= 1) return

    setDirection(-1)

    setCurrentIndex(
      (previous) =>
        (previous - 1 + filteredProjects.length) %
        filteredProjects.length
    )
  }

  const goToProject = (index) => {
    if (index === safeIndex) return

    setDirection(
      index > safeIndex ? 1 : -1
    )

    setCurrentIndex(index)
  }

  /* =======================================================
     FILTER CHANGE

     Reset directly in the event handler.
     No setState inside an effect.
  ======================================================= */

  const handleFilterChange = (newFilter) => {
    if (newFilter === filter) return

    setFilter(newFilter)
    setCurrentIndex(0)
    setDirection(1)
  }

  /* =======================================================
     AUTO SLIDE
  ======================================================= */

  useEffect(() => {
    if (
      isPaused ||
      filteredProjects.length <= 1
    ) {
      return undefined
    }

    const interval = setInterval(() => {
      setDirection(1)

      setCurrentIndex(
        (previous) =>
          (previous + 1) %
          filteredProjects.length
      )
    }, 6000)

    return () => clearInterval(interval)
  }, [
    isPaused,
    filteredProjects.length,
  ])

  /* =======================================================
     KEYBOARD NAVIGATION
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key !== "ArrowRight" &&
        event.key !== "ArrowLeft"
      ) {
        return
      }

      if (filteredProjects.length <= 1) {
        return
      }

      if (event.key === "ArrowRight") {
        setDirection(1)

        setCurrentIndex(
          (previous) =>
            (previous + 1) %
            filteredProjects.length
        )
      }

      if (event.key === "ArrowLeft") {
        setDirection(-1)

        setCurrentIndex(
          (previous) =>
            (previous - 1 + filteredProjects.length) %
            filteredProjects.length
        )
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    )

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      )
    }
  }, [filteredProjects.length])

  /* =======================================================
     EMPTY STATE
  ======================================================= */

  if (!currentProject) {
    return (
      <section
        id="projects"
        className="
          theme-shell
          relative
          overflow-hidden
          px-4
          py-24
          sm:px-6
          sm:py-28
          lg:px-8
          lg:py-32
        "
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          <div
            className="
              rounded-4xl
              border
              border-[--color-border]
              px-6
              py-20
              text-center
            "
          >
            <p className="text-lg font-semibold">
              No projects found
            </p>

            <p className="mt-2 text-sm theme-text-muted">
              Try another category.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="projects"
      className="
        theme-shell
        relative
        overflow-hidden
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-28
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-[--color-primary-soft]
            blur-[110px]
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-20
            h-96
            w-96
            rounded-full
            bg-[--color-primary-soft]
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-10"
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-px
                w-10
                bg-[--color-primary]
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                theme-accent
              "
            >
              My Work
            </span>
          </div>

          <div
            className="
              mt-5
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <h2
                className="
                  text-4xl
                  font-black
                  leading-[1.05]
                  tracking-[-0.04em]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Things I've
                <br />

                <span className="theme-accent">
                  built.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  theme-text-muted
                  sm:text-base
                "
              >
                A collection of projects I've designed
                and developed while learning,
                experimenting, and solving real-world
                problems.
              </p>
            </div>

            <div
              className="
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-[--color-border]
                px-4
                py-2
                text-xs
                theme-text-muted
                sm:flex
              "
            >
              <Sparkles
                size={14}
                className="theme-accent"
              />

              Selected projects
            </div>
          </div>
        </motion.div>

        {/* =================================================
            FILTERS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mb-8
            flex
            gap-2
            overflow-x-auto
            pb-2
            scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[--color-primary]/50 hover:scrollbar-thumb-[--color-primary]
          "
        >
          {filters.map((item) => {
            const isActive =
              filter === item

            return (
              <button
                key={item}
                onClick={() =>
                  handleFilterChange(item)
                }
                className={`
                  relative
                  shrink-0
                  overflow-hidden
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "border-[--color-primary] bg-[--color-primary] text-[--color-text] shadow-lg"
                      : "border-[--color-border] theme-text-muted hover:border-[--color-primary] hover:text-[--color-text]"
                  }
                `}
              >
                {item}
              </button>
            )
          })}
        </motion.div>

        {/* =================================================
            CENTERED SLIDER
        ================================================= */}

        <div
          className="
            mx-auto
            w-full
            max-w-4xl
          "
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() =>
            setIsPaused(false)
          }
          onFocus={() =>
            setIsPaused(true)
          }
          onBlur={() =>
            setIsPaused(false)
          }
        >

          {/* =================================================
              SLIDE CARD
          ================================================= */}

          <div className="overflow-hidden">
            <AnimatePresence
              mode="wait"
              custom={direction}
            >
              <motion.article
                key={`${filter}-${currentProject.title}`}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction * 45,
                  scale: 0.985,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: direction * -45,
                  scale: 0.985,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -3,
                }}
                className="
                  group
                  mx-auto
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[--color-border]
                  bg-[--color-surface-muted]
                  shadow-[--color-shadow]
                  transition-all
                  duration-300
                  hover:border-[--color-primary]
                "
              >

                {/* =========================================
                    CARD LAYOUT
                ========================================= */}

                <div
                  className="
                    grid
                    md:grid-cols-[0.95fr_1.05fr]
                  "
                >

                  {/* =======================================
                      IMAGE
                  ======================================= */}

                  <div
                    className="
                      relative
                      aspect-video
                      overflow-hidden
                      bg-[--color-bg-alt]
                      md:aspect-auto
                      md:min-h-70
                    "
                  >
                    <img
                      src={currentProject.img}
                      alt={currentProject.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-linear-to-t
                        from-black/50
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* Project number */}

                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-black/30
                        text-[9px]
                        font-bold
                        text-white
                        backdrop-blur-md
                      "
                    >
                      {currentProject.number}
                    </div>

                    {/* Featured */}

                    {currentProject.featured && (
                      <div
                        className="
                          absolute
                          right-4
                          top-4
                          flex
                          items-center
                          gap-1
                          rounded-full
                          bg-[--color-primary]
                          px-2.5
                          py-1
                          text-[8px]
                          font-bold
                          uppercase tracking-wider
                          text-[--color-text]
                        "
                      >
                        <Sparkles size={10} />
                        Featured
                      </div>
                    )}

                    {/* Counter */}

                    <div
                      className="
                        absolute
                        bottom-3
                        left-3
                        rounded-full
                        border
                        border-white/20
                        bg-black/30
                        px-2.5
                        py-1
                        text-[8px]
                        font-medium
                        text-white
                        backdrop-blur-md
                      "
                    >
                      {safeIndex + 1} /{" "}
                      {filteredProjects.length}
                    </div>
                  </div>

                  {/* =======================================
                      CONTENT
                  ======================================= */}

                  <div
                    className="
                      flex
                      flex-col
                      justify-center
                      p-5
                      sm:p-6
                      md:p-7
                    "
                  >

                    {/* Category */}

                    <div className="flex items-center justify-between">
                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          theme-accent
                        "
                      >
                        {currentProject.category}
                      </span>

                      <span className="text-[9px] theme-text-soft">
                        {currentProject.number}
                      </span>
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        mt-2
                        text-2xl
                        font-black
                        tracking-tight
                        sm:text-3xl
                      "
                    >
                      {currentProject.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-2
                        max-w-md
                        text-xs
                        leading-5
                        theme-text-muted
                      "
                    >
                      {currentProject.desc}
                    </p>

                    {/* Technologies */}

                    <div
                      className="
                        mt-4
                        flex
                        flex-wrap
                        gap-1.5
                      "
                    >
                      {currentProject.tech.map(
                        (tech) => (
                          <span
                            key={tech}
                            className="
                              theme-chip
                              rounded-full
                              px-2.5
                              py-1
                              text-[8px]
                              font-medium
                            "
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>

                    {/* Divider */}

                    <div
                      className="
                        my-4
                        h-px
                        bg-[--color-divider]
                      "
                    />

                    {/* Links */}

                    <div className="flex items-center gap-2">

                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group/link
                          flex
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          border-[--color-border]
                          px-3
                          py-2
                          text-[9px]
                          font-semibold
                          theme-text-muted
                          transition
                          hover:border-[--color-primary]
                          hover:theme-accent
                        "
                      >
                        <GitHubIcon />

                        GitHub

                        <ArrowUpRight
                          size={10}
                          className="
                            transition-transform
                            group-hover/link:-translate-y-0.5
                            group-hover/link:translate-x-0.5
                          "
                        />
                      </a>

                      {currentProject.demo !== "#" && (
                        <a
                          href={currentProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group/link
                            flex
                            items-center
                            gap-1.5
                            rounded-full
                            bg-[--color-primary]
                            px-3
                            py-2
                            text-[9px]
                            font-semibold
                            text-[--color-text]
                            transition
                            hover:bg-[--color-primary-strong]
                          "
                        >
                          Live Demo

                          <ExternalLink
                            size={10}
                            className="
                              transition-transform
                              group-hover/link:-translate-y-0.5
                              group-hover/link:translate-x-0.5
                            "
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          {filteredProjects.length > 1 && (
            <div
              className="
                mt-5
                flex
                items-center
                justify-between
              "
            >

              {/* Dots */}

              <div
                className="
                  flex
                  items-center
                  gap-1.5
                "
              >
                {filteredProjects.map(
                  (project, index) => (
                    <button
                      key={project.title}
                      onClick={() =>
                        goToProject(index)
                      }
                      aria-label={`Go to ${project.title}`}
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          index === safeIndex
                            ? "w-7 bg-[--color-primary]"
                            : "w-1.5 bg-[--color-border] hover:bg-[--color-primary]/60"
                        }
                      `}
                    />
                  )
                )}
              </div>

              {/* Arrows */}

              <div className="flex items-center gap-2">

                <button
                  onClick={previousProject}
                  aria-label="Previous project"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[--color-border]
                    theme-text-muted
                    transition-all
                    duration-300
                    hover:border-[--color-primary]
                    hover:bg-[--color-primary]
                    hover:text-white
                  "
                >
                  <ArrowLeft size={15} />
                </button>

                <button
                  onClick={nextProject}
                  aria-label="Next project"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[--color-border]
                    theme-text-muted
                    transition-all
                    duration-300
                    hover:border-[--color-primary]
                    hover:bg-[--color-primary]
                    hover:text-white
                  "
                >
                  <ArrowRight size={15} />
                </button>

              </div>
            </div>
          )}
        </div>

        {/* =================================================
            PROJECT PREVIEW STRIP
        ================================================= */}

        {filteredProjects.length > 1 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mx-auto
              mt-7
              hidden
              max-w-4xl
              gap-2
              overflow-x-auto
              pb-2
              md:flex
            "
          >
            {filteredProjects.map(
              (project, index) => {
                const isActive =
                  index === safeIndex

                return (
                  <button
                    key={project.title}
                    onClick={() =>
                      goToProject(index)
                    }
                    className={`
                      group
                      relative
                      min-w-36
                      overflow-hidden
                      rounded-xl
                      border
                      text-left
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "border-[--color-primary] shadow-lg"
                          : "border-[--color-border] opacity-60 hover:opacity-100"
                      }
                    `}
                  >
                    <div className="relative h-16 overflow-hidden">
                      <img
                        src={project.img}
                        alt=""
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-black/30
                        "
                      />
                    </div>

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        bg-black/50
                        px-2.5
                        py-1.5
                        backdrop-blur-sm
                      "
                    >
                      <p
                        className="
                          truncate
                          text-[9px]
                          font-semibold
                          text-white
                        "
                      >
                        {project.number}{" "}
                        {project.title}
                      </p>
                    </div>
                  </button>
                )
              }
            )}
          </motion.div>
        )}

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mx-auto
            mt-8
            flex
            max-w-4xl
            flex-col
            items-start
            justify-between
            gap-5
            rounded-3xl
            border
            border-[--color-border]
            px-6
            py-5
            sm:flex-row
            sm:items-center
            sm:px-7
          "
        >
          <div>
            <p className="text-sm font-bold">
              Have an idea?
            </p>

            <p className="mt-1 text-xs theme-text-muted">
              Let's turn it into something real.
            </p>
          </div>

          <a
            href="#contact"
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              bg-[--color-primary]
              px-5
              py-2.5
              text-xs
              font-semibold
              text-[--color-text]
              transition
              hover:bg-[--color-primary-strong]
            "
          >
            Let's Work Together

            <ArrowUpRight
              size={14}
              className="
                transition-transform
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

/* =========================================================
   GITHUB ICON
========================================================= */

function GitHubIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.87 10.95.58.1.79-.25.79-.55v-2.16c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.46.12-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.58.24 2.74.12 3.04.75.8 1.2 1.82 1.2 3.08 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.08.78 2.18v3.23c0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  )
}