"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

export function HeroSection() {
	const [scrollY, setScrollY] = useState(0);

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
						className="object-cover object-center"
						fill
						priority
						quality={100}
						src="/images/hero-banner.png"
					/>
					{/* Top-focused dark overlay gradient so sky supports white text while machines at bottom stay bright & highlighted */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-transparent" />
				</div>
			</div>

			{/* Top-aligned Typography Block placed high in sky area with Parallax and Fade */}
			<div
				className="relative z-10 flex container flex-col items-center pt-4 text-center transition-all duration-75 ease-out sm:pt-6 md:pt-8 lg:pt-10"
				style={{
					transform: `translate3d(0, ${scrollY * 0.15}px, 0)`,
					opacity: Math.max(0, 1 - scrollY / 500),
				}}
			>
				<div className="flex flex-col items-center space-y-2 sm:space-y-3">
					{/* Line 1: Michroma, Weight 400, Letter Spacing 0.08em */}
					<h2
						className="font-michroma font-normal text-[10px] text-white/90 uppercase drop-shadow-md sm:text-xs md:text-sm lg:text-base"
						style={{ letterSpacing: "0.08em" }}
					>
						POWERING THE EVOLUTION IN
					</h2>

					{/* Line 2: Josefin Sans, Weight 100, Letter Spacing 0.14em - single line fit */}
					<h1
						className="whitespace-nowrap font-[100] font-josefin-sans text-2xl text-white uppercase leading-tight drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
						style={{ fontWeight: 100, letterSpacing: "0.14em" }}
					>
						HEAVY MACHINERY
					</h1>

					{/* Line 3: Michroma, Weight 400, Letter Spacing 0.04em */}
					<h3
						className="font-michroma font-normal text-[10px] text-white/90 uppercase drop-shadow-md sm:text-xs md:text-sm lg:text-base"
						style={{ letterSpacing: "0.04em" }}
					>
						OEM SOLUTIONS
					</h3>
				</div>
			</div>
		</section>
	);
}
