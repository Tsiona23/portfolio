import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Laptop,
  Sparkles,
} from "lucide-react"

const stats = [
  {
    value: "5+",
    label: "Projects Built",
  },
  {
    value: "5+",
    label: "Technologies",
  },
  {
    value: "∞",
    label: "Ideas to Build",
  },
]

const interests = [
  "Full Stack Development",
  "AI & Intelligent Systems",
  "UI / UX",
  "Problem Solving",
]

export default function About() {
  return (
    <section
      id="about"
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
        <div
          className="
            absolute
            -right-40
            top-32
            h-72
            w-72
            rounded-full
            bg-[--color-primary-soft]
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -left-40
            bottom-10
            h-64
            w-64
            rounded-full
            bg-[--color-primary-soft]
            blur-[100px]
            opacity-60
          "
        />
      </div>

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

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
          className="mb-12"
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
              About Me
            </span>
          </div>

          <div
            className="
              mt-5
              flex
              flex-col
              gap-4
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <h2
                className="
                  max-w-3xl
                  text-4xl
                  font-black
                  leading-[1.05]
                  tracking-[-0.04em]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                More than just
                <span className="theme-accent">
                  {" "}
                  code.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  theme-text-muted
                  sm:text-base
                "
              >
                I'm a developer who enjoys turning ideas
                into useful, beautiful, and meaningful
                digital experiences.
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

              Developer mindset
            </div>
          </div>
        </motion.div>

        {/* =================================================
            ABOUT GRID
        ================================================= */}

        <div
          className="
            grid
            gap-5
            lg:grid-cols-[1.25fr_0.75fr]
          "
        >

          {/* =================================================
              MAIN ABOUT CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              theme-panel
              rounded-4xl
              p-6
              sm:p-7
              lg:p-8
            "
          >
            {/* TOP LABEL */}

            <div className="flex items-center justify-between">
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[--color-primary-soft]
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  theme-accent
                "
              >
                <Sparkles size={13} />

                Developer
              </div>

              <span className="text-[10px] theme-text-soft">
                01 / 04
              </span>
            </div>

            {/* TEXT */}

            <div className="mt-7 space-y-4">
              <p
                className="
                  text-lg
                  font-semibold
                  leading-relaxed
                  sm:text-xl
                "
              >
                I love building things that live at the
                intersection of{" "}
                <span className="theme-accent">
                  technology
                </span>
                , creativity, and real-world problems.
              </p>

              <p
                className="
                  text-xs
                  leading-6
                  theme-text-muted
                  sm:text-sm
                "
              >
                I'm an Information Technology student and
                software developer focused on building
                modern web and application experiences. I
                enjoy working across the stack — from
                designing interfaces to building APIs and
                connecting everything together.
              </p>

              <p
                className="
                  text-xs
                  leading-6
                  theme-text-muted
                  sm:text-sm
                "
              >
                I'm constantly learning, experimenting with
                new technologies, and looking for better
                ways to solve problems. For me, development
                isn't just about writing code — it's about
                creating something that people can actually
                use.
              </p>
            </div>

            {/* DIVIDER */}

            <div className="my-6 h-px bg-[--color-divider]" />

            {/* STATS */}

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
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
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                >
                  <p
                    className="
                      text-2xl
                      font-black
                      tracking-tight
                      sm:text-3xl
                    "
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      leading-4
                      theme-text-soft
                      sm:text-xs
                    "
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <div className="grid gap-5">

            {/* =================================================
                EDUCATION
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                theme-card
                rounded-4xl
                p-6
                transition-transform
                duration-300
              "
            >
              <div className="flex items-start justify-between">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[--color-primary-soft]
                    theme-accent
                  "
                >
                  <GraduationCap size={20} />
                </div>

                <ArrowUpRight
                  size={17}
                  className="theme-text-soft"
                />
              </div>

              <p
                className="
                  mt-5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  theme-accent
                "
              >
                Education
              </p>

              <h3
                className="
                  mt-1.5
                  text-base
                  font-bold
                "
              >
                Information Technology
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  theme-text-muted
                "
              >
                Mekelle University
              </p>
            </motion.div>

            {/* =================================================
                CURRENTLY BUILDING
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
                amount: 0.2,
              }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                theme-panel
                rounded-4xl
                p-6
                transition-transform
                duration-300
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
                    rounded-2xl
                    bg-[--color-primary]
                    text-white
                  "
                >
                  <Laptop size={19} />
                </div>

                <div>
                  <p className="text-[10px] theme-text-soft">
                    Currently
                  </p>

                  <p className="text-xs font-bold">
                    Building & Learning
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="
                      theme-chip
                      rounded-full
                      px-2.5
                      py-1.5
                      text-[9px]
                      font-medium
                    "
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* =================================================
                CODE PHILOSOPHY
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
                amount: 0.2,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                relative
                overflow-hidden
                rounded-4xl
                bg-[--color-primary]
                p-6
                text-white
              "
            >
              {/* DECORATIVE CODE SYMBOL */}

              <div
                className="
                  absolute
                  -right-4
                  -top-8
                  text-[100px]
                  font-black
                  leading-none
                  text-white/50
                "
              >
                {"</>"}
              </div>

              <Code2 size={20} />

              <p
                className="
                  relative
                  mt-5
                  text-base
                  font-bold
                  leading-snug
                  sm:text-lg
                "
              >
                "Build it. Break it.
                <br />
                Learn from it.
                <br />
                Build it better."
              </p>

              <p
                className="
                  relative
                  mt-3
                  text-[10px]
                  text-white/70
                "
              >
                My approach to development
              </p>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            BOTTOM TECH STRIP
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
            delay: 0.2,
            duration: 0.6,
          }}
          className="
            mt-5
            flex
            flex-col
            items-start
            justify-between
            gap-4
            rounded-4xl
            border
            border-[--color-border]
            px-5
            py-4
            sm:flex-row
            sm:items-center
            sm:px-7
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-[--color-primary-soft]
                theme-accent
              "
            >
              <Code2 size={17} />
            </div>

            <div>
              <p className="text-xs font-semibold">
                Always learning
              </p>

              <p className="text-[10px] theme-text-soft">
                One project at a time.
              </p>
            </div>
          </div>

          <a
            href="#skills"
            className="
              group
              flex
              items-center
              gap-2
              text-xs
              font-semibold
              theme-accent
            "
          >
            Explore my skills

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