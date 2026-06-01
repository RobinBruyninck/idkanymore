"use client"

import Image from "next/image"
import Link from "next/link"

export default function EditorialHome() {
	return (
		<main
			className="relative h-[100dvh] overflow-hidden bg-white px-4 py-4 text-black md:h-screen md:px-0 md:py-0"
			style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
		>
			<section className="relative flex h-full flex-col gap-1 overflow-hidden md:hidden">
				<figure className="relative h-[41dvh] w-full overflow-hidden bg-neutral-200">
					<Image
						src="/IMG22.jpg"
						alt="Robin portrait"
						fill
						sizes="100vw"
						priority
						className="object-cover object-[50%_68%] grayscale"
					/>
				</figure>

				<p
					style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}
					className="w-full max-w-full whitespace-pre-line text-[clamp(24px,7vw,48px)] font-bold uppercase leading-[1.01] tracking-[-0.045em]"
				>
					{"I'M ROBIN, A VISUAL DESIGN\nSTUDENT WORKING ACROSS\nBRANDING, WEB DESIGN,\nEDITORIAL DESIGN, PRINT,\nVISUAL SYSTEMS AND\nIMAGE-MAKING."}
				</p>
			<style>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(12px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
				<nav className="mt-auto grid grid-cols-2 gap-2 text-[11px] font-bold uppercase leading-none tracking-[-0.01em]">
					<Link href="/projects" className="flex min-h-10 items-center justify-center border border-black/40 px-2">
						Projects
					</Link>
					<Link href="/about" className="flex min-h-10 items-center justify-center border border-black/40 px-2">
						About
					</Link>
					<Link href="/contact" className="flex min-h-10 items-center justify-center border border-black/40 px-2">
						Contact
					</Link>
					<a
						href="https://www.linkedin.com/in/robin-bruyninckx-ba01b6294/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex min-h-10 items-center justify-center border border-black/40 px-2"
					>
						LinkedIn
					</a>
					<a
						href="https://www.instagram.com/robinbruyninck/"
						target="_blank"
						rel="noopener noreferrer"
						className="col-span-2 flex min-h-10 items-center justify-center border border-black/40 px-2 text-[12px]"
					>
						Instagram
					</a>
				</nav>
			</section>

			<h1
				className="group relative z-20 hidden w-full max-w-full text-left text-[clamp(2.5rem,12vw,4.8rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] md:absolute md:left-0 md:right-0 md:top-0 md:flex md:px-1 md:text-[clamp(40px,4.2vw,76px)] md:flex-col md:justify-between"
				style={{ wordSpacing: "0.18em" }}
			>
				<span
					className="home-line flex w-full flex-col gap-0.5 transition-transform duration-500 ease-out md:gap-1 md:flex-row md:items-baseline md:justify-between group-hover:translate-x-[8px]"
					style={{ animationDelay: "0ms" }}
				>
					<span className="whitespace-normal md:whitespace-nowrap">I&apos;M ROBIN,</span>
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

			<figure className="relative mx-auto hidden mt-8 h-[clamp(300px,55vw,420px)] w-full max-w-[100%] overflow-hidden bg-neutral-200 md:absolute md:bottom-0 md:left-[44%] md:z-10 md:mt-0 md:block md:max-w-none md:h-[76vh] md:w-[clamp(320px,34vw,500px)]">
				<Image
					src="/IMG22.jpg"
					alt="Robin portrait"
					width={900}
					height={1200}
					priority
					sizes="(max-width: 768px) 100vw, 500px"
					className="h-full w-full object-cover object-bottom grayscale"
				/>
			</figure>

			<nav className="relative z-20 hidden mt-8 flex-wrap gap-x-3 gap-y-2 text-[12px] font-bold uppercase leading-[1] md:absolute md:bottom-4 md:left-4 md:mt-0 md:flex md:flex-col md:gap-x-0 md:gap-y-1 md:text-[12px]">
				<Link href="/projects" className="px-2 py-2 hover:text-black md:px-0 md:py-0">
					Projects
				</Link>
				<Link href="/about" className="px-2 py-2 hover:text-black md:px-0 md:py-0">
					About
				</Link>
				<a
					href="https://www.linkedin.com/in/robin-bruyninckx-ba01b6294/"
					target="_blank"
					rel="noopener noreferrer"
					className="px-2 py-2 hover:text-black md:px-0 md:py-0"
				>
					LinkedIn
				</a>
				<a
					href="https://www.instagram.com/robinbruyninck/"
					target="_blank"
					rel="noopener noreferrer"
					className="px-2 py-2 hover:text-black md:px-0 md:py-0"
				>
					Instagram
				</a>
				<Link href="/contact" className="px-2 py-2 hover:text-black md:px-0 md:py-0">
					Contact
				</Link>
			</nav>
		</main>
	)
}
