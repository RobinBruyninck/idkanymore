'use client'

import { useState } from "react"
import Link from "next/link"
import { toast } from "@/components/ui/toast"

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"
const WEB3FORMS_ACCESS_KEY = "69b70554-737d-4952-b191-7673f9fe7054"

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setSubmitting(true)
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })
      const data = await response.json()

      if (response.ok && data.success) {
        toast.success("Thanks — your message has been sent.")
        form.reset()
      } else {
        toast.error(data.message || "Message could not be sent. Please email me directly.")
      }
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main
      className="relative min-h-[100dvh] overflow-x-hidden bg-[#0d0d0d] px-5 pb-24 pt-8 text-[#f2f2ee] md:px-10 md:pb-28 md:pt-10"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <section className="mx-auto w-full max-w-[1400px]">
        <h1 className="text-[clamp(3.4rem,12vw,11rem)] font-black leading-[0.88] tracking-[-0.045em] text-[#f2f2ee]">
          Contact me
        </h1>

        <div className="mt-10 grid gap-14 md:grid-cols-12 md:gap-12">
          <div className="space-y-4 text-[13px] uppercase leading-[1.45] tracking-[0.05em] text-[#f2f2ee]/80 md:col-span-4">
            <p>
              robin.bruyninckx@hotmail.com
            </p>

            <p>
              Based in Antwerp
              <br />
              Visual Design Student
            </p>

            <p className="max-w-[280px] text-[11px] leading-[1.4] text-[#f2f2ee]/65">
              Interested in working together, asking a question or just want to get in touch? Fill in the form
              and I will respond as soon as possible.
            </p>
          </div>

          <div className="md:col-span-8">
            <form
              id="contact-form"
              method="POST"
              action={WEB3FORMS_ENDPOINT}
              onSubmit={handleSubmit}
              className="w-full max-w-[760px]"
            >
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New message from your portfolio" />
              {/* Honeypot — Web3Forms silently drops submissions where this is filled. */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                style={{ display: "none" }}
              />

              <label className="block">
                <span className="mb-1 block text-[13px] font-semibold uppercase tracking-[0.05em] text-[#f2f2ee]">
                  Name (required)
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="h-11 w-full border-b border-[#f2f2ee]/50 bg-transparent text-[14px] text-[#f2f2ee] outline-none focus:border-[#f2f2ee]"
                />
              </label>

              <label className="mt-6 block">
                <span className="mb-1 block text-[13px] font-semibold uppercase tracking-[0.05em] text-[#f2f2ee]">
                  Email (required)
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="h-11 w-full border-b border-[#f2f2ee]/50 bg-transparent text-[14px] text-[#f2f2ee] outline-none focus:border-[#f2f2ee]"
                />
              </label>

              <label className="mt-6 block">
                <span className="mb-1 block text-[13px] font-semibold uppercase tracking-[0.05em] text-[#f2f2ee]">
                  Message (required)
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border-b border-[#f2f2ee]/50 bg-transparent py-2 text-[14px] text-[#f2f2ee] outline-none focus:border-[#f2f2ee]"
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="mt-8 h-11 w-full border border-[#f2f2ee] bg-[#f2f2ee] px-8 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#0d0d0d] transition hover:bg-transparent hover:text-[#f2f2ee] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {submitting ? "Sending..." : "EMAIL ME"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <nav className="relative z-30 mt-8 grid grid-cols-2 gap-2 text-[11px] font-bold uppercase leading-none tracking-[-0.01em] md:absolute md:bottom-4 md:left-4 md:mt-0 md:flex md:flex-col md:gap-y-1 md:text-[12px] md:tracking-normal">
        <Link href="/" className="flex min-h-10 items-center justify-center border border-[#f2f2ee]/40 px-2 md:min-h-0 md:justify-start md:border-0 md:px-0">
          Home
        </Link>
        <Link href="/projects" className="flex min-h-10 items-center justify-center border border-[#f2f2ee]/40 px-2 md:min-h-0 md:justify-start md:border-0 md:px-0">
          Projects
        </Link>
        <Link href="/about" className="flex min-h-10 items-center justify-center border border-[#f2f2ee]/40 px-2 md:min-h-0 md:justify-start md:border-0 md:px-0">
          About
        </Link>
        <a
          href="https://www.linkedin.com/in/robin-bruyninckx-ba01b6294/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-10 items-center justify-center border border-[#f2f2ee]/40 px-2 md:min-h-0 md:justify-start md:border-0 md:px-0"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/robinbruyninck/"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 flex min-h-10 items-center justify-center border border-[#f2f2ee]/40 px-2 text-[12px] md:col-span-1 md:min-h-0 md:justify-start md:border-0 md:px-0 md:text-[12px]"
        >
          Instagram
        </a>
      </nav>
    </main>
  )
}
