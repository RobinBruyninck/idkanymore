"use client"

import Image from "next/image"
import Link from "next/link"

export default function EditorialHome() {
	return (
		<main
			className="relative min-h-[100dvh] overflow-x-hidden bg-white px-4 pb-6 pt-5 text-black md:h-screen md:px-0 md:pb-0 md:pt-0 md:overflow-hidden"
			style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
		>
			<h1
				className="group relative z-20 w-full max-w-full text-left text-[clamp(1.9rem,10vw,3.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] md:max-w-none md:leading-[0.92] md:absolute md:left-0 md:right-0 md:top-0 md:px-1 md:text-[clamp(40px,4.2vw,76px)]"
				style={{ wordSpacing: "0.18em" }}
			>
				<span
					className="home-line flex w-full flex-col gap-0.5 transition-transform duration-500 ease-out md:gap-1 md:flex-row md:items-baseline md:justify-between group-hover:translate-x-[8px]"
					style={{ animationDelay: "0ms" }}
				>
					<span className="whitespace-normal md:whitespace-nowrap">I’M ROBIN,</span>
					<span className="whitespace-normal md:whitespace-nowrap">A VISUAL DESIGN</span>
					<span className="whitespace-normal md:whitespace-nowrap">STUDENT</span>
				</span>
				<span
					className="home-line flex w-full flex-col gap-0.5 transition-transform duration-500 ease-out delay-75 md:gap-1 md:flex-row md:items-baseline md:justify-between group-hover:translate-x-[-6px]"
					style={{ animationDelay: "140ms" }}
				>
					<span className="whitespace-normal md:whitespace-nowrap">WORKING ACROSS</span>
					<span className="whitespace-normal md:whitespace-nowrap">BRANDING, WEB</span>
				</span>
				<span
					className="home-line flex w-full flex-col gap-0.5 transition-transform duration-500 ease-out delay-100 md:gap-1 md:flex-row md:items-baseline md:justify-between group-hover:translate-x-[7px]"
					style={{ animationDelay: "280ms" }}
				>
					<span className="whitespace-normal md:whitespace-nowrap">DESIGN,</span>
					<span className="whitespace-normal md:whitespace-nowrap">EDITORIAL</span>
					<span className="whitespace-normal md:whitespace-nowrap">DESIGN,</span>
				</span>
				<span
					className="home-line flex w-full flex-col gap-0.5 transition-transform duration-500 ease-out delay-150 md:gap-1 md:flex-row md:items-baseline md:justify-between group-hover:translate-x-[-5px]"
					style={{ animationDelay: "420ms" }}
				>
					<span className="whitespace-normal md:whitespace-nowrap">PRINT,</span>
					<span className="whitespace-normal md:whitespace-nowrap">VISUAL SYSTEMS</span>
					<span className="whitespace-normal md:whitespace-nowrap">AND</span>
				</span>
				<span
					className="home-line block w-full transition-transform duration-500 ease-out delay-200 group-hover:translate-x-[9px]"
					style={{ animationDelay: "560ms" }}
				>
					IMAGE-MAKING.
				</span>
			</h1>

			<figure className="relative mx-auto mt-8 h-[clamp(300px,55vw,420px)] w-full max-w-[100%] overflow-hidden bg-neutral-200 md:absolute md:bottom-0 md:left-[44%] md:z-10 md:mt-0 md:max-w-none md:h-[76vh] md:w-[clamp(320px,34vw,500px)]">
				<Image
					src="/IMG22.jpg"
					alt="Robin portrait"
					width={900}
					height={1200}
					priority
					sizes="(max-width: 768px) 100vw, 500px"
					className="h-full w-full object-cover object-center grayscale"
				/>
			</figure>

<nav className="relative z-20 mt-8 flex flex-wrap gap-x-3 gap-y-2 text-[12px] font-bold uppercase leading-[1] md:absolute md:bottom-3 md:left-3 md:mt-0 md:flex-col md:gap-y-1 md:gap-x-0 md:text-[12px] md:bottom-4 md:left-4">
			<Link href="/projects" className="px-2 py-2 hover:text-black md:px-0 md:py-0">
				Projects
			</Link>
			<Link href="/about" className="px-2 py-2 hover:text-black md:px-0 md:py-0">
				About
			</Link>
			<a href="https://www.linkedin.com/in/robin-bruyninckx-ba01b6294/" target="_blank" rel="noopener noreferrer" className="px-2 py-2 hover:text-black md:px-0 md:py-0">
				LinkedIn
			</a>
			<a href="https://www.instagram.com/robin-bruyninck/" target="_blank" rel="noopener noreferrer" className="px-2 py-2 hover:text-black md:px-0 md:py-0">
				Instagram
			</a>
			<Link href="/contact" className="px-2 py-2 hover:text-black md:px-0 md:py-0">
					Contact
				</Link>
			</nav>

			<style jsx>{`
				@media (max-width: 768px) {
					.home-line {
						animation: home-float 4s ease-in-out infinite alternate;
					}
				}

				@keyframes home-float {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(8px);
					}
				}

				@media (prefers-reduced-motion: reduce) {
					.home-line {
						animation: none !important;
						transition: none !important;
						transform: none !important;
					}
				}
			`}</style>
		</main>
	)
}
