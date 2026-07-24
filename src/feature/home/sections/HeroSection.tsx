"use client";

import Image from "next/image";

import { ArrowUpRight, ShieldCheck, Wrench, Zap } from "lucide-react";

export function HeroSection() {
	return (
		<section className="relative flex min-h-[90vh] w-full flex-col justify-center overflow-hidden bg-[#FAF6F0] pt-24 pb-16 lg:min-h-screen lg:pt-28 lg:pb-20">
			{/* Full Hero Background Image */}
			<div className="absolute inset-0 z-0">
				<Image
					alt="Delta Heavy Equipment background banner"
					className="object-cover object-right lg:object-center"
					fill
					priority
					quality={100}
					src="/images/bg-hero.png"
				/>
				{/* Subtle left gradient overlay for max text legibility */}
				<div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/95 via-[#FAF6F0]/70 to-transparent lg:via-[#FAF6F0]/50" />
			</div>

			{/* Foreground Content overlay */}
			<div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
				<div className="max-w-xl lg:max-w-2xl">
					{/* Main Headline */}
					<h1 className="mt-5 font-bold font-heading text-4xl text-slate-950 sm:text-6xl lg:text-7xl">
						Reliable Machinery{" "}
						<span className="block text-[#EAA800]">for Every Challenge</span>
					</h1>

					{/* Subtitle Copy */}
					<p className="mt-5 max-w-xl font-normal font-sans text-base text-slate-700 leading-relaxed sm:text-lg sm:leading-relaxed">
						Sudan&apos;s premier partner for heavy machinery, high-payload
						excavators, Loadall telehandlers, and 24/7 OEM maintenance support.
					</p>

					{/* Action Buttons Row */}
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a
							className="group inline-flex h-12 items-center justify-center rounded-lg bg-slate-950 px-6 font-medium font-sans text-sm text-white shadow-md transition-all hover:bg-slate-800 active:scale-[0.98]"
							href="#fleet"
						>
							<span>Explore Machinery</span>
							<ArrowUpRight className="group-hover:-translate-y-0.5 ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
						</a>

						<a
							className="inline-flex h-12 items-center justify-center rounded-lg px-6 font-medium font-sans text-slate-900 text-sm transition-all hover:text-slate-950 active:scale-[0.98]"
							href="#contact"
						>
							<span>Get a Quote</span>
						</a>
					</div>

					{/* Key Features / Assurance Highlights */}
					<div className="mt-12 grid grid-cols-2 gap-4 border-slate-300/60 border-t pt-6 sm:grid-cols-3">
						<div className="flex items-center gap-2.5">
							<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFB800]/20 text-slate-900">
								<Zap className="h-4 w-4 text-[#D49800]" />
							</div>
							<span className="font-medium text-slate-800 text-xs sm:text-sm">
								100% Genuine JCB
							</span>
						</div>

						<div className="flex items-center gap-2.5">
							<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFB800]/20 text-slate-900">
								<Wrench className="h-4 w-4 text-[#D49800]" />
							</div>
							<span className="font-medium text-slate-800 text-xs sm:text-sm">
								24/7 Field Support
							</span>
						</div>

						<div className="col-span-2 flex items-center gap-2.5 sm:col-span-1">
							<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFB800]/20 text-slate-900">
								<ShieldCheck className="h-4 w-4 text-[#D49800]" />
							</div>
							<span className="font-medium text-slate-800 text-xs sm:text-sm">
								Factory Warranty
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
