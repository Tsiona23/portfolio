export default function CVButton() {
  return (
    <a
      href="/assets/cv.pdf"
      download
      className="inline-block w-full rounded-2xl bg-[--color-primary] px-6 py-3 text-center font-medium text-white transition hover:scale-[1.02] hover:bg-[--color-primary-strong] sm:w-auto"
    >
      Download CV
    </a>
  )
}