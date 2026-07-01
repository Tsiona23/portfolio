import Reveal from "./Reveal"

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-6 text-4xl font-bold theme-accent">Let’s Connect</h2>
        </Reveal>

        <Reveal>
          <p className="mx-auto mb-12 max-w-lg text-base theme-text-soft sm:text-lg">
            I’m open to freelance work, internships, and collaboration opportunities. Feel free to reach out through any platform below.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          <Reveal delay={0.1}>
            <a
              href="mailto:tsionawithaile@gmail.com"
              className="flex h-16 w-full items-center justify-center rounded-full border border-[--color-border] bg-[--color-surface-muted] text-[--color-primary] shadow-[--color-shadow] transition-all duration-300 hover:scale-110 hover:bg-[--color-primary] hover:text-white sm:h-18 sm:w-18"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href="https://github.com/Tsiona23"
              target="_blank"
              rel="noreferrer"
              className="flex h-16 w-full items-center justify-center rounded-full border border-[--color-border] bg-[--color-surface-muted] text-[--color-primary] shadow-[--color-shadow] transition-all duration-300 hover:scale-110 hover:bg-[--color-primary] hover:text-white sm:h-18 sm:w-18"
              aria-label="GitHub"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 8.84 21.5c.5.08.66-.23.66-.5V19.3c-2.78.6-3.37-1.34-3.37-1.34-.45-1.13-1.1-1.44-1.1-1.44-.9-.62.06-.6.06-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.1.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.66.92.66 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 12 2z" />
              </svg>
            </a>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href="https://www.linkedin.com/in/tsion-haile/"
              target="_blank"
              rel="noreferrer"
              className="flex h-16 w-full items-center justify-center rounded-full border border-[--color-border] bg-[--color-surface-muted] text-[--color-primary] shadow-[--color-shadow] transition-all duration-300 hover:scale-110 hover:bg-[--color-primary] hover:text-white sm:h-18 sm:w-18"
              aria-label="LinkedIn"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2 .7-2.3 1.3v-1.1h-2.8v8.1h2.9v-4.9c0-.2 0-.5.1-.7.2-.5.6-1.1 1.4-1.1 1 0 1.4.8 1.4 1.9v4.8h2.9M7 18.5h2.9V10.4H7v8.1M8.5 6.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8z" />
              </svg>
            </a>
          </Reveal>

          <Reveal delay={0.4}>
            <a
              href="https://t.me/Fairy_light23"
              target="_blank"
              rel="noreferrer"
              className="flex h-16 w-full items-center justify-center rounded-full border border-[--color-border] bg-[--color-surface-muted] text-[--color-primary] shadow-[--color-shadow] transition-all duration-300 hover:scale-110 hover:bg-[--color-primary] hover:text-white sm:h-18 sm:w-18"
              aria-label="Telegram"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.703-.331 4.956c.483 0 .696-.222.968-.485l2.333-2.27 4.852 3.584c.894.492 1.535.239 1.758-.826l3.183-15.004c.326-1.306-.5-1.9-.135-1.664z" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}