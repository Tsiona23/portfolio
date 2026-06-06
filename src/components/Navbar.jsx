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
    <nav className="fixed top-0 left-0 right-0 z-100 bg-white text-black dark:bg-slate-950 dark:text-white backdrop-blur-xl border-b border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl text-[#f488be] font-bold tracking-tighter">Tsion</h1>

        <div className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className={`capitalize transition ${
                active === l ? "text-[#f488be]" : "text-gray-600 dark:text-gray-300 hover:text-[#f488be] dark:hover:text-[#f488be]"
              }`}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black dark:text-white"
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-black/5 dark:border-white/5"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l}`}
                  onClick={() => setIsOpen(false)}
                  className={`capitalize text-lg font-medium transition ${
                    active === l ? "text-[#f488be]" : "text-gray-600 dark:text-gray-300"
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