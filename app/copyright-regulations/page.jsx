import Link from "next/link"

const sections = [
  {
    title: "General policy",
    body: "All content on this website — including text, images and video — is protected by copyright and belongs to Robin Bruyninckx unless otherwise stated. Unauthorized use or distribution is not allowed.",
  },
  {
    title: "Fair use & permissions",
    body: "Some uses of the work (commentary, criticism, education) may fall under fair use. For any other use, please ask for written permission first.",
  },
  {
    title: "Third-party material",
    body: "Where stock or third-party material is used, it remains the property of its respective owners and is credited where required.",
  },
  {
    title: "Reporting an issue",
    body: "If you believe your work has been used on this site in a way that infringes copyright, please get in touch via the contact page and it will be reviewed.",
  },
]

export default function CopyrightRegulations() {
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
          Copyright
        </h1>

        <p className="mt-5 max-w-[640px] text-[13px] leading-[1.6] text-black/75">
          This page outlines how the work on this site may be used and how to report a copyright issue.
        </p>

        <div className="mt-8 space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="border-t border-black/10 pt-4">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.05em]">{section.title}</h2>
              <p className="mt-1.5 max-w-[640px] text-[12px] leading-[1.6] text-black/70">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block h-11 border border-black bg-black px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-transparent hover:text-black"
          >
            Contact about copyright
          </Link>
        </div>
      </section>
    </main>
  )
}
