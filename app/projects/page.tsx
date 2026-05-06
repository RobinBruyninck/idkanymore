import Image from "next/image"
import Link from "next/link"

import { projects as projectItems } from "./projects-data"

export default function ProjectsPage() {
  return (
    <main
      className="relative flex min-h-[100dvh] flex-col overflow-x-hidden bg-white px-4 py-6 text-black md:px-8 md:py-8"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      {/* Mobile-only hero */}
      <div className="relative z-40 mx-auto w-full max-w-[1600px] px-4 md:hidden">
        <div className="mobile-hero bg-white/0 py-6">
          <h1 className="mobile-hero-title text-[28px] font-black uppercase leading-tight tracking-tight">
            Projects
          </h1>
        </div>
      </div>

      {/* Desktop hero (unchanged) */}
      <h1 className="hidden pointer-events-none relative z-40 mx-auto w-full max-w-[1600px] flex-col justify-between pl-[6%] text-[clamp(2.8rem,16vw,5.6rem)] font-black uppercase leading-[0.76] tracking-[-0.065em] md:flex md:h-[84vh] md:pl-[8%] md:text-[clamp(3.2rem,15vw,11rem)]">
        <span className="block">PRO</span>
        <span className="block md:pl-[35%]">JEC</span>
        <span className="block md:pl-[66%]">TS</span>
      </h1>

      <section className="relative z-30 mt-8 grid gap-4 md:hidden">
        {projectItems.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="block overflow-hidden border border-black/10 bg-white"
          >
            <div className="relative aspect-[4/3] w-full bg-neutral-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                loading="eager"
                className="object-cover"
              />
            </div>

            <div className="space-y-1 border-t border-black/10 px-4 py-3">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-[15px] font-black uppercase leading-[0.95] tracking-[-0.04em]">
                  {project.title}
                </h2>
                <span className="shrink-0 text-[11px] font-bold uppercase leading-none">
                  {project.year}
                </span>
              </div>

              <p className="text-[11px] font-bold uppercase leading-[1] tracking-[-0.02em]">
                {project.meta}
              </p>

              <p className="max-w-[95%] text-[13px] leading-[1.2] tracking-[-0.02em] text-black/75">
                {project.place}
              </p>
            </div>
          </Link>
        ))}
      </section>

      <Link
        href="/projects/project-1"
        className="pointer-events-auto absolute bottom-[4%] left-[14%] z-10 hidden w-[clamp(290px,26vw,410px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995] md:block"
      >
        <div className="w-full">
          <Image
            src="/project-1.jpg"
            alt="Artwork poster"
            width={1200}
            height={1200}
            sizes="16vw"
            loading="eager"
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </Link>

      <Link
        href="/projects/project-2"
        className="pointer-events-auto absolute left-[46%] top-[8%] z-10 hidden w-[clamp(240px,32vw,460px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995] md:block"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/project2.jpg"
            alt="Graphic artwork"
            fill
            sizes="32vw"
            loading="eager"
            className="object-contain"
            priority
          />
        </div>
      </Link>

      <Link
        href="/projects/project-3"
        className="pointer-events-auto absolute left-[1%] top-[40px] z-0 hidden w-[clamp(350px,32vw,520px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995] md:block"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src="/project-4.jpg"
            alt="Project artwork four"
            fill
            sizes="32vw"
            loading="eager"
            className="object-contain"
            priority
          />
        </div>
      </Link>

      <Link
        href="/projects/project-4"
        className="pointer-events-auto absolute right-[6%] top-[28%] z-10 hidden w-[clamp(240px,18vw,320px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995] md:block"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src="/project3.jpg"
            alt="Project artwork three"
            fill
            sizes="13vw"
            loading="eager"
            className="object-contain"
            priority
          />
        </div>
      </Link>

      <Link
        href="/projects/project-5"
        className="absolute bottom-[9%] left-[46%] z-20 hidden w-[clamp(240px,24vw,420px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995] md:block"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
          <Image
            src="/portfolio-preview.jpg"
            alt="After the Message preview"
            fill
            sizes="24vw"
            loading="eager"
            className="object-cover"
            priority
          />
        </div>
      </Link>

      <nav className="relative z-20 mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-bold uppercase leading-[1] md:absolute md:bottom-3 md:left-3 md:mt-0 md:flex-col md:gap-y-1 md:text-[12px] md:bottom-4 md:left-4">
        <Link href="/" className="px-1 py-1.5 hover:text-black md:px-0 md:py-0">
          Home
        </Link>
        <Link href="/about" className="px-1 py-1.5 hover:text-black md:px-0 md:py-0">
          About
        </Link>
        <a href="https://www.linkedin.com/in/robin-bruyninckx-ba01b6294/" target="_blank" rel="noopener noreferrer" className="px-1 py-1.5 hover:text-black md:px-0 md:py-0">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/robin-bruyninck/" target="_blank" rel="noopener noreferrer" className="px-1 py-1.5 hover:text-black md:px-0 md:py-0">
          Instagram
        </a>
        <Link href="/contact" className="px-1 py-1.5 hover:text-black md:px-0 md:py-0">
          Contact
        </Link>
      </nav>
    </main>
  )
}