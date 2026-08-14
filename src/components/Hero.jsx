import { motion } from "framer-motion"
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react"

import profile from "../assets/images/profile.jpg"
import CVButton from "./CVButton"
import ThemeToggle from "./ThemeToggle"

const technologies = [
  "React",
  "Node.js",
  "Python",
  "MongoDB",
  "JavaScript",
]

export default function Hero() {
  return (
    <section
      id="home"
      className="theme-shell relative min-h-screen overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left pink glow */}
        <div
          className="
            absolute
            -left-32
            top-20
            h-72
            w-72
            rounded-full
            bg-[--color-primary-soft]
            blur-3xl
          "
        />

        {/* Right pink glow */}
        <div
          className="
            absolute
            -right-32
            top-40
            h-96
            w-96
            rounded-full
            bg-[--color-primary-soft]
            blur-3xl
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(var(--color-text)_1px,transparent_1px),linear-gradient(90deg,var(--color-text)_1px,transparent_1px)]
            bg-size-[50px_50px]
          "
        />
      </div>

      {/* THEME TOGGLE */}
      <ThemeToggle />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* ===================================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="text-center lg:text-left"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.5,
              }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[--color-border]
                bg-[--color-primary-soft]
                px-4
                py-2
                text-sm
                font-medium
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[--color-primary]
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[--color-primary]
                  "
                />
              </span>

              Available for opportunities
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.5,
              }}
              className="mb-3 text-lg font-medium theme-text-muted"
            >
              Hi, I'm{" "}
              <span className="font-semibold theme-accent">
                Tsion
              </span>{" "}
              👋
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="
                text-5xl
                font-black
                leading-[1.05]
                tracking-[-0.04em]
                sm:text-6xl
                md:text-7xl
                lg:text-[4.7rem]
                xl:text-[5.2rem]
              "
            >
              Building digital

              <br />

              <span className="relative inline-block">
                experiences

                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 1,
                    duration: 0.7,
                  }}
                  className="
                    absolute
                    bottom-1
                    left-0
                    -z-10
                    h-2
                    rounded-full
                    bg-[--color-primary-soft]
                  "
                />
              </span>

              <br />

              with{" "}
              <span className="theme-accent">
                code
              </span>{" "}
              & creativity.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="
                mx-auto
                mt-6
                max-w-xl
                text-base
                leading-7
                theme-text-muted
                sm:text-lg
                lg:mx-0
              "
            >
              Software developer passionate about turning ideas
              into modern, functional, and meaningful digital
              experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.6,
              }}
              className="
                mt-8
                flex
                flex-col
                items-center
                gap-3
                sm:flex-row
                lg:justify-start
              "
            >
              {/* Primary button */}
              <motion.a
                href="#projects"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="
                  theme-button-primary
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  px-7
                  py-3.5
                  font-semibold
                  sm:w-auto
                "
              >
                View My Projects

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </motion.a>

              {/* Secondary button */}
              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="
                  theme-button-secondary
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  px-7
                  py-3.5
                  font-semibold
                  sm:w-auto
                "
              >
                Let's Connect
              </motion.a>
            </motion.div>

            {/* CV */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.5,
              }}
              className="mt-5"
            >
              <CVButton />
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.95,
                duration: 0.6,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                justify-center
                gap-2
                lg:justify-start
              "
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 1 + index * 0.08,
                  }}
                  className="
                    theme-chip
                    rounded-full
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    transition
                    hover:border-[--color-primary]
                    hover:bg-[--color-primary-soft]
                  "
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* ===================================================== */}
          {/* RIGHT VISUAL */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-140
            "
          >
            {/* Pink glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-90
                w-90
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[--color-primary-soft]
                blur-[100px]
              "
            />

            {/* Decorative circle - top right */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                -right-4
                -top-4
                h-24
                w-24
                rounded-full
                border
                border-[--color-primary]
                opacity-30
              "
            />

            {/* Decorative circle - bottom left */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-6
                -left-6
                h-20
                w-20
                rounded-full
                border
                border-[--color-primary]
                opacity-20
              "
            />

            {/* ================================================= */}
            {/* MAIN PROFILE CARD */}
            {/* ================================================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                mx-auto
                w-67.5
                sm:w-82.5
                md:w-92.5
              "
            >
              <div
                className="
                  theme-panel
                  relative
                  rounded-[2.5rem]
                  p-3
                  shadow-2xl
                "
              >
                {/* IMAGE */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-4xl
                    bg-[--color-surface-muted]
                  "
                >
                  <img
                    src={profile}
                    alt="Tsion - Software Developer"
                    className="
                      block
                      aspect-4/5
                      h-auto
                      w-full
                      object-cover
                      object-center
                    "
                  />

                  {/* Image gradient */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-36
                      bg-linear-to-t
                      from-black/70
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* Profile information */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-xl font-bold text-white">
                          Tsion
                        </p>

                        <p className="mt-0.5 text-xs text-white/75">
                          Software Developer
                        </p>
                      </div>

                      {/* Status */}
                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          px-3
                          py-1.5
                          text-[10px]
                          font-medium
                          text-white
                          backdrop-blur-md
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[--color-primary]
                          "
                        />

                        Available
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card bottom bar */}
                <div className="flex items-center justify-between px-2 pb-1 pt-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-xl
                        bg-[--color-primary-soft]
                        theme-accent
                      "
                    >
                      <Code2 size={16} />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold">
                        Full Stack Developer
                      </p>

                      <p className="text-[9px] theme-text-soft">
                        Web • Apps • APIs
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[--color-primary]
                      "
                    />

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[--color-primary]
                        opacity-50
                      "
                    />

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[--color-primary]
                        opacity-25
                      "
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* CODE CARD */}
            {/* SITS BESIDE THE PHOTO — NEVER OVER THE IMAGE */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -6, 0],
              }}
              transition={{
                opacity: {
                  delay: 0.9,
                  duration: 0.6,
                },
                x: {
                  delay: 0.9,
                  duration: 0.6,
                },
                y: {
                  delay: 1.5,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                theme-panel
                absolute
                -right-4
                top-16
                z-20
                hidden
                w-47.5
                overflow-hidden
                rounded-2xl
                shadow-xl
                lg:block
              "
            >
              {/* Terminal header */}
              <div
                className="
                  flex
                  items-center
                  gap-1.5
                  border-b
                  border-[--color-divider]
                  px-3
                  py-2.5
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[--color-primary]
                  "
                />

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[--color-border]
                  "
                />

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[--color-border]
                  "
                />

                <span className="ml-auto text-[8px] theme-text-soft">
                  tsion.dev
                </span>
              </div>

              {/* Code */}
              <div className="p-3 font-mono text-[9px] leading-5">
                <p>
                  <span className="theme-accent">
                    const
                  </span>{" "}
                  developer =
                </p>

                <p className="pl-3">
                  {"{"}
                </p>

                <p className="pl-5">
                  <span className="theme-accent">
                    name:
                  </span>{" "}
                  "Tsion",
                </p>

                <p className="pl-5">
                  <span className="theme-accent">
                    passion:
                  </span>{" "}
                  "Building",
                </p>

                <p className="pl-5">
                  <span className="theme-accent">
                    available:
                  </span>{" "}
                  true
                </p>

                <p className="pl-3">
                  {"}"}
                </p>
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* TECH STACK CARD */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              className="
                theme-panel
                absolute
                -bottom-6
                -left-5
                z-20
                hidden
                rounded-2xl
                px-4
                py-3
                shadow-xl
                sm:block
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[--color-primary-soft]
                    theme-accent
                  "
                >
                  <Code2 size={19} />
                </div>

                <div>
                  <p className="text-xs font-bold">
                    Building with code
                  </p>

                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="text-[9px] theme-text-soft">
                      React
                    </span>

                    <span className="text-[9px] theme-text-soft">
                      •
                    </span>

                    <span className="text-[9px] theme-text-soft">
                      Node
                    </span>

                    <span className="text-[9px] theme-text-soft">
                      •
                    </span>

                    <span className="text-[9px] theme-text-soft">
                      AI
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* SPARKLE */}
            {/* ================================================= */}

            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute
                bottom-24
                right-0
                hidden
                theme-accent
                sm:block
              "
            >
              <Sparkles size={28} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          theme-text-soft
          transition
          hover:theme-accent
          md:flex
        "
      >
        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.25em]
          "
        >
          Scroll to explore
        </span>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  )
}