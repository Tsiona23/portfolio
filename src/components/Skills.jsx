import { motion } from "framer-motion"
import Reveal from "./Reveal"

const skills = [
  {
    number: "01",
    title: "Frontend",
    description: "Building clean and responsive interfaces.",
    items: [
      { name: "HTML5", level: 95, color: "#E34F26", icon: "html" },
      { name: "CSS3", level: 90, color: "#1572B6", icon: "css" },
      { name: "JavaScript", level: 90, color: "#F7DF1E", icon: "javascript" },
      { name: "React", level: 85, color: "#61DAFB", icon: "react" },
    ],
  },
  {
    number: "02",
    title: "Backend",
    description: "Building reliable systems and APIs.",
    items: [
      { name: "Node.js", level: 75, color: "#339933", icon: "node" },
      { name: "Express.js", level: 75, color: "#000000", icon: "express" },
      { name: "PHP", level: 80, color: "#777BB4", icon: "php" },
      { name: "MongoDB", level: 75, color: "#47A248", icon: "mongodb" },
    ],
  },
  {
    number: "03",
    title: "Mobile",
    description: "Creating practical mobile experiences.",
    items: [
      { name: "Kotlin", level: 80, color: "#7F52FF", icon: "kotlin" },
      { name: "Firebase", level: 75, color: "#FFCA28", icon: "firebase" },
    ],
  },
  {
    number: "04",
    title: "Languages",
    description: "Languages used for problem solving.",
    items: [
      { name: "Java", level: 80, color: "#ED8B00", icon: "java" },
      { name: "Python", level: 70, color: "#3776AB", icon: "python" },
      { name: "C++", level: 65, color: "#00599C", icon: "cpp" },
    ],
  },
]

const stack = [
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Node.js", icon: "node", color: "#339933" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  { name: "Firebase", icon: "firebase", color: "#FFCA28" },
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "GitHub", icon: "github", color: "currentColor" },
  { name: "Tailwind", icon: "tailwind", color: "#06B6D4" },
  { name: "Vite", icon: "vite", color: "#646CFF" },
  { name: "Express", icon: "express", color: "currentColor" },
  { name: "Socket.io", icon: "socket", color: "currentColor" },
]

const categoryVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[--color-primary-soft] blur-[110px]"
      />

      <div className="relative mx-auto max-w-5xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <Reveal>
          <div className="mb-9 max-w-2xl">

            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-px w-8 bg-[--color-primary]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] theme-accent">
                My Toolkit
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Skills that turn{" "}
              <span className="theme-accent">
                ideas
              </span>{" "}
              into reality.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 theme-text-muted">
              Technologies I use to design, build, and bring digital
              experiences to life.
            </p>

          </div>
        </Reveal>


        {/* =====================================================
            SKILLS
        ===================================================== */}

        <div className="divide-y divide-[--color-border]">

          {skills.map((category, index) => (
            <SkillSection
              key={category.title}
              category={category}
              index={index}
            />
          ))}

        </div>


        {/* =====================================================
            DEVELOPMENT STACK
        ===================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-9"
        >

          <div className="mb-4">

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] theme-accent">
              Development Stack
            </span>

            <h3 className="mt-1 text-lg font-bold">
              Tools I build with.
            </h3>

          </div>


          <div className="flex flex-wrap gap-2">

            {stack.map((item, index) => (
              <StackItem
                key={item.name}
                item={item}
                index={index}
              />
            ))}

          </div>

        </motion.div>


        {/* =====================================================
            FOOTER MESSAGE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-7 flex items-center gap-3 border-t border-[--color-border] pt-5"
        >

          <motion.div
            animate={{
              rotate: [0, 8, -8, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[--color-primary-soft] text-xs text-[--color-primary]"
          >
            ✦
          </motion.div>

          <div>
            <p className="text-xs font-semibold">
              Always learning. Always building.
            </p>

            <p className="text-[10px] theme-text-muted">
              My toolkit grows with every project.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  )
}


/* =========================================================
   SKILL SECTION
========================================================= */

function SkillSection({ category, index }) {
  return (
    <motion.div
      variants={categoryVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        delay: index * 0.05,
      }}
      className="py-7 first:pt-0 last:pb-0"
    >

      <div className="grid gap-5 md:grid-cols-[180px_1fr]">

        {/* =================================================
            CATEGORY INFO
        ================================================= */}

        <div>

          <div className="flex items-center gap-2">

            <span className="text-[10px] font-semibold theme-text-soft">
              {category.number}
            </span>

            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[--color-primary]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] theme-accent">
              {category.title}
            </span>

          </div>

          <h3 className="mt-1.5 text-lg font-bold tracking-tight">
            {category.title}
          </h3>

          <p className="mt-1 max-w-45 text-[11px] leading-5 theme-text-muted">
            {category.description}
          </p>

        </div>


        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        <div className="flex flex-wrap content-start gap-2">

          {category.items.map((skill, index) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}

        </div>

      </div>

    </motion.div>
  )
}


/* =========================================================
   SKILL ITEM
========================================================= */

function SkillItem({ skill, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.3,
        delay: index * 0.04,
      }}
      whileHover={{
        y: -2,
        scale: 1.03,
      }}
      className="group flex cursor-default items-center gap-1.5 rounded-lg border border-[--color-border] px-2.5 py-1.5 transition-all duration-200 hover:border-[--color-primary]/50 hover:bg-[--color-primary-soft]"
    >

      <TechIcon
        type={skill.icon}
        color={skill.color}
      />

      <span className="text-[10px] font-medium theme-text-muted transition-colors group-hover:text-[--color-primary]">
        {skill.name}
      </span>

    </motion.div>
  )
}


/* =========================================================
   STACK ITEM
========================================================= */

function StackItem({ item, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.035,
        duration: 0.3,
      }}
      whileHover={{
        y: -2,
        scale: 1.03,
      }}
      className="group flex cursor-default items-center gap-1.5 rounded-lg border border-[--color-border] px-2.5 py-1.5 transition-all duration-200 hover:border-[--color-primary]/50 hover:bg-[--color-primary-soft]"
    >

      <TechIcon
        type={item.icon}
        color={item.color}
      />

      <span className="text-[10px] font-medium theme-text-muted transition-colors group-hover:text-[--color-primary]">
        {item.name}
      </span>

    </motion.div>
  )
}


/* =========================================================
   TECHNOLOGY ICONS
   Custom SVG icons — no icon package required.
========================================================= */

function TechIcon({ type, color }) {
  const common = {
    width: 17,
    height: 17,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  }

  switch (type) {

    /* =====================================================
       HTML5
    ===================================================== */

    case "html":
      return (
        <svg {...common}>
          <path
            d="M3 2h18l-1.63 18.37L12 22l-7.37-1.63L3 2Z"
            fill={color}
          />

          <path
            d="M12 6v12.5l4.9-1.36.72-8.14H12V6Z"
            fill="white"
          />
        </svg>
      )


    /* =====================================================
       CSS3
    ===================================================== */

    case "css":
      return (
        <svg {...common}>
          <path
            d="M3 2h18l-1.63 18.37L12 22l-7.37-1.63L3 2Z"
            fill={color}
          />

          <path
            d="M12 6h5.2l-.2 2.1H12v2h4.8l-.5 5.4-4.3 1.2V14.5l2.1-.6.15-1.7H12V6Z"
            fill="white"
          />
        </svg>
      )


    /* =====================================================
       JAVASCRIPT
    ===================================================== */

    case "javascript":
      return (
        <svg {...common}>
          <rect
            width="24"
            height="24"
            rx="2"
            fill={color}
          />

          <path
            d="M12.6 18.2c.5.9 1.2 1.4 2.3 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.7-1.6l-.6-.3c-1.7-.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.3-3 1.4 0 2.4.5 3.1 1.8l-1.7 1.1c-.4-.7-.8-1-1.4-1-.7 0-1.1.4-1.1 1 0 .7.4.9 1.4 1.3l.6.3c2 .9 3.1 1.8 3.1 3.7 0 2.1-1.7 3.3-4 3.3-2.2 0-3.6-1-4.3-2.4l2.2-.9Z"
            fill="#111827"
          />
        </svg>
      )


    /* =====================================================
       REACT
    ===================================================== */

    case "react":
      return (
        <svg {...common}>
          <circle
            cx="12"
            cy="12"
            r="2"
            fill={color}
          />

          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            stroke={color}
            strokeWidth="1.5"
          />

          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            transform="rotate(60 12 12)"
            stroke={color}
            strokeWidth="1.5"
          />

          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            transform="rotate(120 12 12)"
            stroke={color}
            strokeWidth="1.5"
          />
        </svg>
      )


    /* =====================================================
       NODE.JS
    ===================================================== */

    case "node":
      return (
        <svg {...common}>
          <path
            d="M12 2 21 7v10l-9 5-9-5V7l9-5Z"
            fill={color}
          />

          <path
            d="M9.2 10.2v4.6l2.8 1.6 2.8-1.6v-4.6L12 8.6l-2.8 1.6Z"
            fill="white"
          />
        </svg>
      )


    /* =====================================================
       EXPRESS
    ===================================================== */

    case "express":
      return (
        <svg {...common}>
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
          />

          <path
            d="M5.5 12h13"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      )


    /* =====================================================
       PHP
    ===================================================== */

    case "php":
      return (
        <svg {...common}>
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="6"
            fill={color}
          />

          <text
            x="12"
            y="14"
            textAnchor="middle"
            fontSize="6"
            fontWeight="bold"
            fill="white"
          >
            PHP
          </text>
        </svg>
      )


    /* =====================================================
       MONGODB
    ===================================================== */

    case "mongodb":
      return (
        <svg {...common}>
          <path
            d="M12 2c1.5 3 4.8 5.5 4.8 9.6 0 4-2.2 7.1-4.8 9.4-2.6-2.3-4.8-5.4-4.8-9.4C7.2 7.5 10.5 5 12 2Z"
            fill={color}
          />

          <path
            d="M12 5v13"
            stroke="white"
            strokeWidth="1"
            opacity=".7"
          />
        </svg>
      )


    /* =====================================================
       KOTLIN
    ===================================================== */

    case "kotlin":
      return (
        <svg {...common}>
          <defs>
            <linearGradient
              id="kotlin-gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop
                offset="0"
                stopColor="#7F52FF"
              />

              <stop
                offset="1"
                stopColor="#E44857"
              />
            </linearGradient>
          </defs>

          <rect
            width="24"
            height="24"
            rx="3"
            fill="url(#kotlin-gradient)"
          />

          <path
            d="M5 19V5h14L12 12l7 7H5Z"
            fill="white"
            opacity=".9"
          />
        </svg>
      )


    /* =====================================================
       FIREBASE
    ===================================================== */

    case "firebase":
      return (
        <svg {...common}>
          <path
            d="M5 20 7.2 7.5l3 3.6L14.5 4 20 20H5Z"
            fill={color}
          />

          <path
            d="M10.2 11.1 14.5 4l.8 3.5-2.6 3.8-2.5-.2Z"
            fill="#FFA000"
          />
        </svg>
      )


    /* =====================================================
       JAVA
    ===================================================== */

    case "java":
      return (
        <svg {...common}>
          <path
            d="M8 17c-1.5.5-2.2 1.2-2.2 2 0 1.5 2.7 2.5 6.2 2.5s6.2-1 6.2-2.5c0-.7-.7-1.4-2-1.9.3.4.5.8.5 1.2 0 1.1-2.1 1.8-4.7 1.8s-4.7-.7-4.7-1.8c0-.4.2-.9.7-1.3Z"
            fill={color}
          />

          <path
            d="M9 13c-1.2.5-1.8 1.2-1.8 2 0 1.4 2.1 2.4 4.8 2.4s4.8-1 4.8-2.4c0-.6-.4-1.2-1.1-1.6.2.3.3.6.3.9 0 .8-1.6 1.4-3.6 1.4S9 15.1 9 14.3c0-.4.2-.8.6-1.3Z"
            fill={color}
          />
        </svg>
      )


    /* =====================================================
       PYTHON
    ===================================================== */

    case "python":
      return (
        <svg {...common}>
          <path
            d="M12 2c-3.2 0-3.7 1.4-3.7 3.1v2.1h3.8v.9H6.8C4.1 8.1 3 9.6 3 12.2c0 2.6 1.1 4.1 3.8 4.1h1.5v-2.5c0-1.8 1.5-3.2 3.3-3.2h3.8c1.7 0 3.1-1.4 3.1-3.1V5.1C18.5 3.1 16.4 2 12 2Z"
            fill="#3776AB"
          />

          <path
            d="M12 22c3.2 0 3.7-1.4 3.7-3.1v-2.1h-3.8v-.9h5.3c2.7 0 3.8-1.5 3.8-4.1 0-2.6-1.1-4.1-3.8-4.1h-1.5v2.5c0 1.8-1.5 3.2-3.3 3.2H8.6c-1.7 0-3.1 1.4-3.1 3.1v2.4C5.5 20.9 7.6 22 12 22Z"
            fill="#FFD43B"
          />
        </svg>
      )


    /* =====================================================
       C++
    ===================================================== */

    case "cpp":
      return (
        <svg {...common}>
          <circle
            cx="12"
            cy="12"
            r="10"
            fill={color}
          />

          <path
            d="M7 12c0 2.8 1.8 4.5 4.4 4.5 1.4 0 2.5-.5 3.3-1.4"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />

          <path
            d="M16 9v6M13 12h6"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      )


    /* =====================================================
       GIT
    ===================================================== */

    case "git":
      return (
        <svg {...common}>
          <path
            d="M21.6 11.2 12.8 2.4a1.4 1.4 0 0 0-2 0L9 4.2l2.3 2.3a1.7 1.7 0 0 1 2.1 2.1l2.2 2.2a1.7 1.7 0 1 1-1 1l-2-2v5.1a1.7 1.7 0 1 1-1.4 0V10a1.7 1.7 0 0 1-1-1.5L8 6.3 2.4 11.9a1.4 1.4 0 0 0 0 2l8.8 8.8a1.4 1.4 0 0 0 2 0l8.4-8.5a2.1 2.1 0 0 0 0-3Z"
            fill={color}
          />
        </svg>
      )


    /* =====================================================
       GITHUB
    ===================================================== */

    case "github":
      return (
        <svg
          {...common}
          fill="currentColor"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.87 10.95.58.1.79-.25.79-.55v-2.16c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.46.12-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.58.24 2.74.12 3.04.75.8 1.2 1.82 1.2 3.08 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.08.78 2.18v3.23c0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      )


    /* =====================================================
       TAILWIND
    ===================================================== */

    case "tailwind":
      return (
        <svg {...common}>
          <path
            d="M12 5c-3.3 0-5.4 1.7-6.3 5.1 1.2-1.7 2.6-2.3 4.2-1.8.9.3 1.6 1.1 2.4 1.9 1.2 1.3 2.6 2.8 5.7 2.8 3.3 0 5.4-1.7 6.3-5.1-1.2 1.7-2.6 2.3-4.2 1.8-.9-.3-1.6-1.1-2.4-1.9C16.5 6.5 15.1 5 12 5Z"
            fill="#06B6D4"
          />
        </svg>
      )


    /* =====================================================
       VITE
    ===================================================== */

    case "vite":
      return (
        <svg {...common}>
          <path
            d="m12 2 9 3-9 17L3 5l9-3Z"
            fill="#646CFF"
          />

          <path
            d="m13 5-2 8h2l-1 5 4-7h-2l2-6h-3Z"
            fill="white"
          />
        </svg>
      )


    /* =====================================================
       SOCKET.IO
    ===================================================== */

    case "socket":
      return (
        <svg {...common}>
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="currentColor"
          />

          <path
            d="M8 12h8M12 8v8"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      )


    /* =====================================================
       DEFAULT
    ===================================================== */

    default:
      return (
        <div
          className="h-4 w-4 rounded-full"
          style={{
            backgroundColor: color,
          }}
        />
      )
  }
}