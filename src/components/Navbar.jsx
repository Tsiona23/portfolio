import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

const links = ["home", "about", "projects", "skills", "contact"]

export default function Navbar() {
  const [active, setActive] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      setScrolled(scrollPosition > 30)

      let currentSection = "home"

      links.forEach((id) => {
        const section = document.getElementById(id)

        if (section) {
          const sectionTop = section.offsetTop - 180

          if (scrollPosition >= sectionTop) {
            currentSection = id
          }
        }
      })

      setActive(currentSection)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = (id) => {
    setActive(id)
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-0"
      }`}
    >
      {/* NAVBAR */}
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-8 ${
          scrolled
            ? "rounded-full border border-[--color-border] bg-[--color-surface-raised] py-3 shadow-lg backdrop-blur-2xl"
            : "py-5"
        }`}
      >
        {/* LOGO */}
        <a
          href="#home"
          onClick={() => handleNavClick("home")}
          className="group flex items-center gap-2"
        >
          <motion.div
            whileHover={{ rotate: 8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[--color-text] text-sm font-bold text-[--color-bg] shadow-sm transition-all group-hover:bg-[--color-surface] group-hover:text-[--color-text]"
          >
            T
          </motion.div>

          <div className="hidden sm:block">
            <span className="block text-sm font-bold tracking-tight text-[--color-text]">
              Tsion
            </span>

            <span className="block text-[10px] font-medium tracking-[0.18em] text-[--color-text-muted]">
              DEV
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 rounded-full border border-[--color-border] bg-[--color-surface]/50 p-1 backdrop-blur-md md:flex">
          {links.map((link) => {
            const isActive = active === link

            return (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => handleNavClick(link)}
                className="relative rounded-full px-4 py-2 text-sm font-medium capitalize"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-[--color-surface] shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive
                      ? "font-semibold text-[--color-text]"
                      : "text-[--color-text-muted] hover:text-[--color-text]"
                  }`}
                >
                  {link}
                </span>
              </a>
            )
          })}
        </div>

        {/* RIGHT ACTION */}
        <div className="hidden items-center gap-2 md:flex">
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-1.5 rounded-full bg-[--color-surface] px-4 py-2 text-sm font-semibold text-[--color-text] shadow-sm transition hover:bg-[--color-text] hover:text-[--color-surface]"
          >
            Let's Talk

            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[--color-border] bg-[--color-surface] text-[--color-text] transition hover:bg-[--color-text] hover:text-[--color-surface] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-2 overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-surface-raised] p-2 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link, index) => {
                const isActive = active === link

                return (
                  <motion.a
                    key={link}
                    href={`#${link}`}
                    onClick={() => handleNavClick(link)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium capitalize transition ${
                      isActive
                        ? "bg-[--color-surface] font-semibold text-[--color-text] shadow-sm"
                        : "text-[--color-text-muted] hover:bg-[--color-surface]/60 hover:text-[--color-text]"
                    }`}
                  >
                    <span>{link}</span>

                    {isActive && (
                      <motion.span
                        layoutId="mobileActive"
                        className="h-1.5 w-1.5 rounded-full bg-[--color-text]"
                      />
                    )}
                  </motion.a>
                )
              })}

              <div className="my-1 h-px bg-[--color-text]/10" />

              <a
                href="#contact"
                onClick={() => handleNavClick("contact")}
                className="flex items-center justify-center gap-2 rounded-2xl bg-[--color-surface] px-4 py-3.5 font-semibold text-[--color-text] shadow-sm transition hover:bg-[--color-text] hover:text-[--color-surface]"
              >
                Let's Talk
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}