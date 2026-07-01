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
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 text-black backdrop-blur-xl dark:border-white/5 dark:bg-slate-950/90 dark:text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-lg font-bold tracking-tighter text-[#f488be] sm:text-xl">Tsion</h1>

        <div className="hidden gap-6 text-sm md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className={`capitalize transition ${
                active === l
                  ? "text-[#f488be]"
                  : "text-gray-600 hover:text-[#f488be] dark:text-gray-300 dark:hover:text-[#f488be]"
              }`}
            >
              {l}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-black transition hover:border-[#f488be] hover:text-[#f488be] dark:border-white/10 dark:text-white md:hidden"
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
            className="border-b border-black/5 bg-white/95 dark:border-white/5 dark:bg-slate-950/95 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l}`}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-lg font-medium capitalize transition ${
                    active === l
                      ? "bg-[#f488be]/10 text-[#f488be]"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10"
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