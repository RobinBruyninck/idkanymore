'use client'

import Link from "next/link"
import { setStoredConsent, useConsent } from "@/lib/consent"

/**
 * GDPR-style cookie banner. Shows until the visitor makes a choice and gates
 * Google Analytics via the shared consent state. Vercel Analytics / Speed
 * Insights are cookieless and run regardless.
 */
export default function CookieConsent() {
  const consent = useConsent()

  if (consent !== null) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-black/15 bg-[#f2f2ee] px-5 py-4 text-black md:px-8"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
        <p className="text-[12px] leading-[1.5] text-black/75">
          This site uses essential cookies to function and, with your consent, analytics cookies to
          understand how the portfolio is used.{" "}
          <Link href="/cookie-settings" className="underline underline-offset-2 hover:text-black">
            Cookie settings
          </Link>
        </p>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setStoredConsent("rejected")}
            className="h-10 border border-black px-5 text-[11px] font-semibold uppercase tracking-[0.06em] text-black transition hover:bg-black hover:text-[#f2f2ee]"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => setStoredConsent("accepted")}
            className="h-10 border border-black bg-black px-5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#f2f2ee] transition hover:bg-transparent hover:text-black"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
