import Reveal from "./Reveal"

const contacts = [
  {
    name: "Email",
    href: "mailto:tsionawithaile@gmail.com",
    label: "tsionawithaile@gmail.com",
    icon: "email",
  },
  {
    name: "GitHub",
    href: "https://github.com/Tsiona23",
    label: "GitHub",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tsion-haile/",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    name: "Telegram",
    href: "https://t.me/Fairy_light23",
    label: "Telegram",
    icon: "telegram",
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--color-primary-soft] opacity-20 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl">

        {/* TOP DIVIDER */}
        <div className="mb-12 h-px w-full bg-[--color-border]" />

        {/* HEADER */}
        <div className="text-center">

          <Reveal>
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="h-px w-7 bg-[--color-primary]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] theme-accent">
                Get In Touch
              </span>

              <span className="h-px w-7 bg-[--color-primary]" />
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let’s{" "}
              <span className="theme-accent">Connect.</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 theme-text-muted">
              I’m open to freelance work, internships, and collaboration
              opportunities. Feel free to reach out.
            </p>
          </Reveal>

        </div>


        {/* CONTACT LINKS */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">

          {contacts.map((contact, index) => (
            <Reveal
              key={contact.name}
              delay={0.1 + index * 0.08}
            >
              <a
                href={contact.href}
                target={contact.icon === "email" ? undefined : "_blank"}
                rel={contact.icon === "email" ? undefined : "noreferrer"}
                aria-label={contact.name}
                className="group flex items-center gap-2 text-xs font-medium theme-text-muted transition-colors duration-300 hover:text-[--color-primary]"
              >

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[--color-border] transition-all duration-300 group-hover:border-[--color-primary]/50 group-hover:bg-[--color-primary-soft]">
                  <ContactIcon type={contact.icon} />
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  {contact.label}
                </span>

              </a>
            </Reveal>
          ))}

        </div>


        {/* BOTTOM MESSAGE */}
        <Reveal delay={0.5}>
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[--color-border] pt-5 sm:flex-row">

            <p className="text-[10px] theme-text-soft">
              © {new Date().getFullYear()} Tsion Hailekiros.
            </p>


          </div>
        </Reveal>

      </div>
    </section>
  )
}


/* =========================================================
   CONTACT ICONS
========================================================= */

function ContactIcon({ type }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  }

  switch (type) {

    /* =====================================================
       EMAIL
    ===================================================== */

    case "email":
      return (
        <svg
          {...common}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
          />

          <polyline points="3,7 12,13 21,7" />
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
       LINKEDIN
    ===================================================== */

    case "linkedin":
      return (
        <svg
          {...common}
          fill="currentColor"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2 .7-2.3 1.3v-1.1h-2.8v8.1h2.9v-4.9c0-.2 0-.5.1-.7.2-.5.6-1.1 1.4-1.1 1 0 1.4.8 1.4 1.9v4.8h2.9M7 18.5h2.9V10.4H7v8.1M8.5 6.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8z" />
        </svg>
      )


    /* =====================================================
       TELEGRAM
    ===================================================== */

    case "telegram":
      return (
        <svg
          {...common}
          fill="currentColor"
        >
          <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.703-.331 4.956c.483 0 .696-.222.968-.485l2.333-2.27 4.852 3.584c.894.492 1.535.239 1.758-.826l3.183-15.004c.326-1.306-.5-1.9-.135-1.664z" />
        </svg>
      )


    default:
      return null
  }
}