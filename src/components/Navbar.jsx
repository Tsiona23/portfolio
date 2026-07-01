import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const links = ["home", "about", "projects", "skills", "contact"]

export default function Navbar() {
  const [active, setActive] = useState("home")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          const top = section.offsetTop - 120
          if (window.scrollY >= top) {
            setActive(id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="theme-panel fixed inset-x-0 top-0 z-50 backdrop-blur-xl [-webkit-backdrop-filter:blur(24px)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-bold tracking-tighter theme-accent sm:text-xl">
          Tsion
        </a>

        <div className="hidden gap-6 text-sm md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className={`capitalize transition ${
                active === l
                  ? "theme-accent"
                  : "theme-text-muted hover:theme-accent"
              }`}
            >
              {l}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[--color-border] theme-text-muted transition hover:border-[--color-primary] hover:theme-accent md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="theme-panel border-t md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l}`}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-lg font-medium capitalize transition ${
                    active === l
                      ? "bg-[--color-primary-soft] theme-accent"
                      : "theme-text-muted hover:bg-[--color-surface-muted]"
                  }`}
                >
                  {l}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}