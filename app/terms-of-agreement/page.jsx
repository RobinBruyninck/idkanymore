import Link from "next/link"

const sections = [
  {
    title: "Acceptance of terms",
    body: "By using this website you agree to be bound by these terms, as well as any additional guidelines posted on the site.",
  },
  {
    title: "Use of the site",
    body: "This is a personal portfolio. You may browse the work freely. Please do not use the site for unlawful purposes or attempt to disrupt its operation.",
  },
  {
    title: "Intellectual property",
    body: "All design work, images and text on this site belong to Robin Bruyninckx unless otherwise stated. They may not be copied, distributed or modified without permission.",
  },
  {
    title: "Limitation of liability",
    body: "The site is provided as is. We are not liable for any damages arising from its use, including direct, indirect or consequential losses.",
  },
  {
    title: "Changes to these terms",
    body: "These terms may be updated at any time. Continued use of the site after changes constitutes acceptance of the updated terms.",
  },
]

export default function TermsOfAgreement() {
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
          Terms of agreement
        </h1>

        <p className="mt-5 max-w-[640px] text-[13px] leading-[1.6] text-black/75">
          Please read these terms before using this website. By accessing the site you agree to comply
          with them.
        </p>

        <div className="mt-8 space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="border-t border-black/10 pt-4">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.05em]">{section.title}</h2>
              <p className="mt-1.5 max-w-[640px] text-[12px] leading-[1.6] text-black/70">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
