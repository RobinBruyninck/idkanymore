"use client"

import Link from "next/link"
import { useState } from "react"
import { setStoredConsent, useConsent } from "@/lib/consent"

export default function CookieSettings() {
  const consent = useConsent()
  const [saved, setSaved] = useState(false)

  const apply = (value) => {
    setStoredConsent(value)
    setSaved(true)
  }

  const statusLabel =
    consent === "accepted"
      ? "Analytics cookies are ON"
      : consent === "rejected"
        ? "Analytics cookies are OFF"
        : "No choice made yet"

  return (
    <main
      className="min-h-[100dvh] bg-white px-5 pb-24 pt-8 text-black md:px-10 md:pt-10"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <section className="mx-auto w-full max-w-[820px]">
        <Link
          href="/"
          className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] hover:text-black/70"
        >
          ← Back to home
        </Link>

        <h1 className="mt-7 text-[clamp(2rem,5vw,3.4rem)] font-black uppercase leading-[0.92] tracking-[-0.03em]">
          Cookie settings
        </h1>

        <p className="mt-5 max-w-[640px] text-[13px] leading-[1.6] text-black/75">
          Essential functionality on this site works without cookies. Analytics cookies (Google
          Analytics) are only used if you accept them, and help understand how the portfolio is used.
          Visitor metrics from Vercel are collected without cookies.
        </p>

        <div className="mt-7 border border-black/15 px-5 py-4 text-[12px] uppercase tracking-[0.06em] text-black/80">
          Current status: <span className="font-semibold text-black">{statusLabel}</span>
        </div>

        <div className="mt-6 space-y-5">
          <div className="border-b border-black/10 pb-4">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.05em]">Essential cookies</h2>
            <p className="mt-1 text-[12px] leading-[1.5] text-black/65">
              Always on. Needed for basic page functionality and security. These cannot be turned off.
            </p>
          </div>

          <div className="pb-2">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.05em]">Analytics cookies</h2>
            <p className="mt-1 text-[12px] leading-[1.5] text-black/65">
              Optional. Google Analytics, loaded only after you accept.
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => apply("accepted")}
            className="h-11 flex-1 border border-black bg-black px-6 text-[12px] font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-transparent hover:text-black"
          >
            Accept analytics
          </button>
          <button
            type="button"
            onClick={() => apply("rejected")}
            className="h-11 flex-1 border border-black px-6 text-[12px] font-semibold uppercase tracking-[0.06em] text-black transition hover:bg-black hover:text-white"
          >
            Reject analytics
          </button>
        </div>

        {saved ? (
          <p className="mt-4 text-[12px] uppercase tracking-[0.06em] text-black/70">
            Saved. Your choice is stored on this device.
          </p>
        ) : null}
      </section>
    </main>
  )
}
