"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

export function HeroSection({ content }: { content?: any }) {
	const [scrollY, setScrollY] = useState(0);

	const data = content;

	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					setScrollY(window.scrollY);
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="sticky top-0 z-0 flex h-screen min-h-[100dvh] w-full flex-col justify-between overflow-hidden bg-black pt-16 pb-6 sm:pt-20 md:pt-22">
			{/* Full Screen Hero Background Image with Parallax Transform */}
			<div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
				<div
					className="-top-[5%] relative h-[115%] w-full will-change-transform"
					style={{
						transform: `translate3d(0, -${scrollY * 0.25}px, 0) scale(${1 + Math.min(0.15, scrollY * 0.0003)})`,
					}}
				>
					<Image
						alt="Delta Heavy Equipment - Primary Machinery Banner"
						className="hidden object-cover object-center sm:block"
						fill
						priority
						quality={100}
						src={data.desktopImage}
					/>
					<Image
						alt="Delta Heavy Equipment - Primary Machinery Banner"
						className="block object-cover object-center sm:hidden"
						fill
						priority
						quality={100}
						src={data.mobileImage}
					/>
					{/* Top-focused dark overlay gradient so sky supports white text while machines at bottom stay bright & highlighted */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-transparent" />
				</div>
			</div>

			{/* Top-aligned Typography Block placed high in sky area with Parallax and Fade */}
			<div
				className="relative z-10 flex container flex-col items-center pt-12 text-center transition-all duration-75 ease-out sm:pt-16 md:pt-20 lg:pt-24"
				style={{
					transform: `translate3d(0, ${scrollY * 0.15}px, 0)`,
					opacity: Math.max(0, 1 - scrollY / 500),
				}}
			>
				<div className="flex flex-col items-center space-y-2 sm:space-y-3">
					{/* Line 1: Michroma, Weight 400, Letter Spacing 0.08em */}
					<h2
						className="font-michroma font-normal text-xs text-white/90 uppercase drop-shadow-md sm:text-sm md:text-base lg:text-lg"
						style={{ letterSpacing: "0.08em" }}
					>
						{data.subheading1}
					</h2>

					{/* Line 2: Josefin Sans, Weight 100, Letter Spacing 0.14em - single line fit */}
					<h1
						className="whitespace-nowrap font-[100] font-josefin-sans text-3xl text-white uppercase leading-tight drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
						style={{ fontWeight: 100, letterSpacing: "0.14em" }}
					>
						{data.heading}
					</h1>

					{/* Line 3: Michroma, Weight 400, Letter Spacing 0.04em */}
					<h3
						className="font-michroma font-normal text-xs text-white/90 uppercase drop-shadow-md sm:text-sm md:text-base lg:text-lg"
						style={{ letterSpacing: "0.04em" }}
					>
						{data.subheading2}
					</h3>
				</div>
			</div>
		</section>
	);
}
