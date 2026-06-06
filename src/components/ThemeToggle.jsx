import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark"
    const storedTheme = localStorage.getItem("theme")?.trim().toLowerCase()
    if (storedTheme === "light" || storedTheme === "dark") return storedTheme
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  })

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    const isDark = theme === "dark"

    root.classList.toggle("dark", isDark)
    body.classList.toggle("dark", isDark)

    root.style.colorScheme = isDark ? "dark" : "light"
    root.style.setProperty("--bg-primary", isDark ? "#0b0b10" : "#ffffff")
    root.style.setProperty("--text-primary", isDark ? "#ffffff" : "#000000")
    root.style.backgroundColor = isDark ? "#0b0b10" : "#ffffff"
    body.style.backgroundColor = isDark ? "#0b0b10" : "#ffffff"
    body.style.color = isDark ? "#ffffff" : "#000000"

    localStorage.setItem("theme", theme)
  }, [theme])

  const isDark = theme === "dark"

  return (
    <button
      onClick={() =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
      }
      aria-label="Toggle theme"
      className="
        fixed top-12 right-6
        w-16 h-8

        rounded-full

        bg-white/10 dark:bg-white/5
        backdrop-blur-xl

        border border-white/20 dark:border-white/10

        shadow-lg shadow-black/20

        transition-all duration-500

        flex items-center

        px-1
      "
      style={{ zIndex: 110 }}
    >
      {/* Sliding knob */}
      <div
        className={`
          w-6 h-5 rounded-full

          bg-white/40 dark:bg-white/20
          backdrop-blur-2xl

          border border-white/40 dark:border-white/20

          shadow-md

          flex items-center justify-center text-xs

          transform transition-transform duration-500

          ${isDark ? "translate-x-8" : "translate-x-0"}
        `}
      >
        {isDark ? "🌙" : "☀️"}
      </div>

      {/* Icons background */}
      <div className="absolute w-full flex justify-between px-2 text-[10px] opacity-40 pointer-events-none">
        <span>☀️</span>
        <span>🌙</span>
      </div>
    </button>
  )
}