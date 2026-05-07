'use client'

import Image from "next/image"
import Link from "next/link"

const mobileProjects = [
  {
    id: "01",
    title: "EXCENTRIEK",
    meta: "VINYL / IDENTITY",
    place: "ANTWERP",
    year: "2025",
    href: "/projects/project-1",
    image: "/project-1.jpg",
  },
  {
    id: "02",
    title: "MIDNIGHT MIRAGE",
    meta: "EDITORIAL",
    place: "BRUSSELS",
    year: "2025",
    href: "/projects/project-2",
    image: "/project2.jpg",
  },
  {
    id: "03",
    title: "VISUAL SCORE",
    meta: "VISUAL SYSTEM",
    place: "ANTWERP",
    year: "2026",
    href: "/projects/project-3",
    image: "/project-4.jpg",
  },
  {
    id: "04",
    title: "AIR OF NO NATION",
    meta: "IDENTITY SYSTEM",
    place: "ANTWERP",
    year: "2026",
    href: "/projects/project-4",
    image: "/project3.jpg",
  },
  {
    id: "05",
    title: "MESSAGE",
    meta: "VISUAL FX",
    place: "ANTWERP",
    year: "2025",
    href: "/projects/project-5",
    image: "/portfolio-preview.jpg",
  },
]

export default function ProjectsPage() {
  return (
    <main
      className="relative flex min-h-[100dvh] flex-col overflow-x-hidden bg-white px-4 py-6 text-black md:px-8 md:py-8"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      {/* Mobile-only editorial index */}
      <section className="md:hidden min-h-[100dvh] bg-white px-0 py-0 text-black">
        <header className="flex items-end justify-between border-b border-black/30 py-2">
          <h1 className="text-[26px] font-black uppercase leading-none tracking-[-0.04em]">
            PROJECTS
          </h1>
          <p className="text-[10px] font-bold uppercase leading-none tracking-[-0.01em] text-black/70">
            {mobileProjects.length} Results
          </p>
        </header>

        <div className="pb-6">
          {mobileProjects.map((project, index) => (
            <Link
              key={project.id}
              href={project.href}
              className={`grid grid-cols-[42%_1fr] gap-3 border-t border-black/30 py-3 ${index === mobileProjects.length - 1 ? "border-b" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="42vw"
                  loading="eager"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 pt-0.5">
                <p className="text-[10px] font-bold uppercase leading-[1.1] tracking-[-0.01em] text-black/70">
                  {project.meta}
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase leading-[1.1] tracking-[-0.01em] text-black/70">
                  {project.year}
                </p>
                <h2 className="mt-1.5 pr-1 text-[16px] font-black uppercase leading-[0.98] tracking-[-0.03em] break-words">
                  {project.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <nav className="relative z-30 mt-8 grid grid-cols-2 gap-2 text-[11px] font-bold uppercase leading-none tracking-[-0.01em] md:absolute md:bottom-4 md:left-4 md:mt-0 md:flex md:flex-col md:gap-y-1 md:text-[12px] md:tracking-normal">
          <Link href="/" className="flex min-h-10 items-center justify-center border border-black/40 px-2 md:min-h-0 md:justify-start md:border-0 md:px-0">
            Home
          </Link>
          <Link href="/about" className="flex min-h-10 items-center justify-center border border-black/40 px-2 md:min-h-0 md:justify-start md:border-0 md:px-0">
            About
          </Link>
          <Link href="/contact" className="flex min-h-10 items-center justify-center border border-black/40 px-2 md:min-h-0 md:justify-start md:border-0 md:px-0">
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/robin-bruyninckx-ba01b6294/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-10 items-center justify-center border border-black/40 px-2 md:min-h-0 md:justify-start md:border-0 md:px-0"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/robinbruyninck/"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 flex min-h-10 items-center justify-center border border-black/40 px-2 text-[12px] md:col-span-1 md:min-h-0 md:justify-start md:border-0 md:px-0 md:text-[12px]"
          >
            Instagram
          </a>
        </nav>
      </section>

      {/* Desktop hero (unchanged) */}
      <h1 className="pointer-events-none relative z-40 mx-auto hidden w-full max-w-[1600px] flex-col justify-between pl-[6%] text-[clamp(2.8rem,16vw,5.6rem)] font-black uppercase leading-[0.76] tracking-[-0.065em] md:flex md:h-[84vh] md:pl-[8%] md:text-[clamp(3.2rem,15vw,11rem)]">
        <span className="block">PRO</span>
        <span className="block md:pl-[35%]">JEC</span>
        <span className="block md:pl-[66%]">TS</span>
      </h1>

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
            sizes="(max-width: 768px) 100vw, 410px"
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

      <nav className="relative z-20 hidden mt-8 flex-wrap gap-x-4 gap-y-2 text-[13px] font-bold uppercase leading-[1] md:absolute md:bottom-4 md:left-4 md:mt-0 md:flex md:flex-col md:gap-y-1 md:text-[12px]">
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