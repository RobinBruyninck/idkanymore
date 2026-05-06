import Image from "next/image"
import Link from "next/link"

import { projects as projectItems } from "./projects-data"

export default function ProjectsPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-white px-4 py-6 text-black md:px-8 md:py-8 md:h-screen"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      {/* Mobile: Minimal Archive List */}
      <div className="flex flex-col h-full md:hidden">
        {/* Mobile Header */}
        <div className="mb-6">
          <h1 className="text-[24px] font-black uppercase leading-tight tracking-tight">
            Projects
          </h1>
        </div>

        {/* Mobile Project List */}
        <div className="flex-1 overflow-y-auto">
          <ul className="space-y-2 text-[14px] font-medium uppercase leading-tight tracking-[-0.02em]">
            {projectItems.map((project) => (
              <li key={project.id}>
                <Link
                  href={project.href}
                  className="inline-block hover:text-black/60 transition-colors"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Footer Navigation */}
        <nav className="mt-8 pt-4 border-t border-black/10 flex flex-wrap gap-x-3 gap-y-2 text-[12px] font-bold uppercase leading-[1]">
          <Link href="/" className="px-2 py-2 hover:text-black/60">
            Home
          </Link>
          <Link href="/about" className="px-2 py-2 hover:text-black/60">
            About
          </Link>
          <a href="https://www.linkedin.com/in/robin-bruyninckx-ba01b6294/" target="_blank" rel="noopener noreferrer" className="px-2 py-2 hover:text-black/60">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/robin-bruyninck/" target="_blank" rel="noopener noreferrer" className="px-2 py-2 hover:text-black/60">
            Instagram
          </a>
          <Link href="/contact" className="px-2 py-2 hover:text-black/60">
            Contact
          </Link>
        </nav>
      </div>

      {/* Desktop: Original Layout */}
      <div className="hidden md:flex md:flex-col md:h-full">
        <h1 className="pointer-events-none relative z-40 mx-auto flex w-full max-w-[1600px] flex-col justify-between pl-[6%] text-[clamp(2.8rem,16vw,5.6rem)] font-black uppercase leading-[0.76] tracking-[-0.065em] md:h-[84vh] md:pl-[8%] md:text-[clamp(3.2rem,15vw,11rem)]">
          <span className="block">PRO</span>
          <span className="block md:pl-[35%]">JEC</span>
          <span className="block md:pl-[66%]">TS</span>
        </h1>

        <Link
          href="/projects/project-1"
          className="pointer-events-auto absolute bottom-[4%] left-[14%] z-10 w-[clamp(290px,26vw,410px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995]"
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
          className="pointer-events-auto absolute left-[46%] top-[8%] z-10 w-[clamp(240px,32vw,460px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995]"
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
          className="pointer-events-auto absolute left-[1%] top-[40px] z-0 w-[clamp(350px,32vw,520px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995]"
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
          className="pointer-events-auto absolute right-[6%] top-[28%] z-10 w-[clamp(240px,18vw,320px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995]"
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
          className="absolute bottom-[9%] left-[46%] z-20 w-[clamp(240px,24vw,420px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995]"
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

        <nav className="absolute z-20 bottom-3 left-3 flex flex-col gap-y-1 text-[12px] font-bold uppercase leading-[1]">
          <Link href="/" className="hover:text-black/60">
            Home
          </Link>
          <Link href="/about" className="hover:text-black/60">
            About
          </Link>
          <a href="https://www.linkedin.com/in/robin-bruyninckx-ba01b6294/" target="_blank" rel="noopener noreferrer" className="hover:text-black/60">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/robin-bruyninck/" target="_blank" rel="noopener noreferrer" className="hover:text-black/60">
            Instagram
          </a>
          <Link href="/contact" className="hover:text-black/60">
            Contact
          </Link>
        </nav>
      </div>
    </main>
  )
}