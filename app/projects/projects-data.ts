export type ProjectItem = {
	id: string
	title: string
	meta: string
	place: string
	year: string
	href: string
	image: string
	objectPosition?: string
	tall?: boolean
}

export const projects: ProjectItem[] = [
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
