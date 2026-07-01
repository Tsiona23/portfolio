import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark"

    const storedTheme = window.localStorage.getItem("theme")?.trim().toLowerCase()
    if (storedTheme === "light" || storedTheme === "dark") return storedTheme

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  })

  useEffect(() => {
    const root = document.documentElement
    const isDark = theme === "dark"

    root.classList.toggle("dark", isDark)
    root.setAttribute("data-theme", isDark ? "dark" : "light")
    root.style.colorScheme = isDark ? "dark" : "light"
    window.localStorage.setItem("theme", theme)
  }, [theme])

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      aria-label="Toggle theme"
      className="theme-toggle fixed right-6 top-12 z-110 flex h-8 w-16 items-center rounded-full px-1"
    >
      <div
        className={`theme-toggle-knob flex h-6 w-6 items-center justify-center rounded-full text-[10px] transition-transform duration-300 ${isDark ? "translate-x-8" : "translate-x-0"}`}
      >
        <span>{isDark ? "🌙" : "☀️"}</span>
      </div>
    </button>
  )
}