"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
	return (
		<section className="relative flex min-h-[100dvh] min-h-screen w-full flex-col overflow-hidden bg-[#FAF6F0] pt-24 pb-8 md:pt-28 md:pb-20">
			{/* Full Hero Background Image */}
			<div className="absolute inset-0 z-0">
				{/* Desktop Background */}
				<div className="absolute inset-0 hidden md:block">
					<Image
						alt="Delta Heavy Equipment background banner"
						className="object-cover object-center"
						fill
						priority
						quality={100}
						src="/images/hero-bg.webp"
					/>
				</div>
				{/* Mobile Background */}
				<div className="absolute inset-0 md:hidden">
					<Image
						alt="Delta Heavy Equipment background banner mobile"
						className="object-cover object-center"
						fill
						priority
						quality={100}
						src="/images/hero-bg-mobile.webp"
					/>
				</div>
			</div>

			{/* Foreground Content overlay */}
			<div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
				<div className="flex w-full max-w-xl flex-col justify-between md:justify-center md:space-y-6 lg:max-w-2xl">
					{/* Top Text Content on Mobile */}
					<div className="space-y-3 sm:space-y-4">
						<h1 className="font-bold font-heading text-4xl text-slate-950 leading-tight sm:text-6xl lg:text-7xl">
							Reliable Machinery{" "}
							<span className="block text-[#EAA800]">for Every Challenge</span>
						</h1>

						<p className="max-w-lg font-sans text-base text-slate-700 leading-relaxed sm:text-lg">
							Sudan&apos;s premier partner for heavy machinery and 24/7 OEM
							support.
						</p>
					</div>

					{/* Action Buttons at Bottom on Mobile */}
					<div className="flex flex-wrap items-center gap-3 pt-4 sm:gap-4 md:pt-2">
						<Link
							className="group btn-curve btn-curve-dark inline-flex h-12 items-center justify-center rounded-lg bg-slate-950 px-6 font-medium font-sans text-sm text-white shadow-md transition-all active:scale-[0.98]"
							href="/fleet"
						>
							<span>Explore Fleet</span>
							<ArrowUpRight className="group-hover:-translate-y-0.5 ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
						</Link>

						<Link
							className="btn-curve btn-curve-outline inline-flex h-12 items-center justify-center rounded-lg border border-slate-300/80 bg-white/90 px-6 font-medium font-sans text-slate-900 text-sm shadow-xs backdrop-blur-sm transition-all active:scale-[0.98]"
							href="/contact"
						>
							<span>Get Quote</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
