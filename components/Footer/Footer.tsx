"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()

  // The home pages have their own full-screen editorial layout, so the global
  // footer is hidden there.
  if (pathname === "/" || pathname === "/home") {
    return null
  }

  return (
    <footer
      className="w-full border-t border-black/15 bg-white px-5 py-6 text-black md:px-10"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 text-[11px] uppercase tracking-[0.06em] text-black/65 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {currentYear} Robin Bruyninckx — Studio Excentriek</p>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/terms-of-agreement" className="hover:text-black">
            Terms
          </Link>
          <Link href="/copyright-regulations" className="hover:text-black">
            Copyright
          </Link>
          <Link href="/cookie-settings" className="hover:text-black">
            Cookie settings
          </Link>
        </nav>
      </div>
    </footer>
  )
}
