"use client";

import Image from "next/image";

import { ArrowUpRight, ShieldCheck, Wrench, Zap } from "lucide-react";

export function HeroSection() {
	return (
		<section className="relative flex min-h-[calc(100vh-80px)] w-full flex-col justify-between overflow-hidden bg-[#FAF6F0] pt-24 pb-8 md:min-h-screen md:justify-center md:pt-28 md:pb-20">
			{/* Full Hero Background Image */}
			<div className="absolute inset-0 z-0">
				<Image
					alt="Delta Heavy Equipment background banner"
					className="object-cover object-center"
					fill
					priority
					quality={100}
					src="/images/ChatGPT Image Jul 29, 2026, 11_44_45 AM.png"
				/>
			</div>

			{/* Foreground Content overlay */}
			<div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-1 flex-col justify-between px-4 sm:px-6 md:block md:flex-initial lg:px-8">
				<div className="flex h-full max-w-xl flex-1 flex-col justify-between md:block md:max-w-xl lg:max-w-2xl">
					{/* Top Content (Mobile & Desktop): Main Headline & Subtitle */}
					<div>
						<h1 className="font-bold font-heading text-4xl text-slate-950 sm:text-6xl lg:text-7xl">
							Reliable Machinery{" "}
							<span className="block text-[#EAA800]">for Every Challenge</span>
						</h1>

						<p className="mt-4 max-w-xl font-normal font-sans text-base text-slate-700 leading-relaxed sm:mt-5 sm:text-lg sm:leading-relaxed">
							Sudan&apos;s premier partner for heavy machinery, high-payload
							excavators, Loadall telehandlers, and 24/7 OEM maintenance
							support.
						</p>
					</div>

					{/* Bottom Content (Mobile) / Sequential Content (Desktop): Buttons & Features */}
					<div className="mt-8">
						{/* Action Buttons Row */}
						<div className="flex flex-wrap items-center gap-3 sm:gap-4">
							<a
								className="group inline-flex h-12 flex-1 items-center justify-center rounded-lg bg-slate-950 px-6 font-medium font-sans text-sm text-white shadow-md transition-all hover:bg-slate-800 active:scale-[0.98] sm:flex-initial"
								href="#fleet"
							>
								<span>Explore Machinery</span>
								<ArrowUpRight className="group-hover:-translate-y-0.5 ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
							</a>

							<a
								className="inline-flex h-12 flex-1 items-center justify-center rounded-lg border border-slate-300/80 bg-white/90 px-6 font-medium font-sans text-slate-900 text-sm shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:text-slate-950 active:scale-[0.98] sm:flex-initial"
								href="#contact"
							>
								<span>Get a Quote</span>
							</a>
						</div>

						{/* Key Features / Assurance Highlights */}
						<div className="mt-6 grid grid-cols-2 gap-3 border-slate-300/60 border-t pt-5 sm:mt-12 sm:grid-cols-3 sm:gap-4 sm:pt-6">
							<div className="flex items-center gap-2.5">
								<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FCAF20]/20 text-slate-900">
									<Zap className="h-4 w-4 text-[#d69110]" />
								</div>
								<span className="font-medium text-slate-800 text-xs sm:text-sm">
									100% Genuine JCB
								</span>
							</div>

							<div className="flex items-center gap-2.5">
								<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FCAF20]/20 text-slate-900">
									<Wrench className="h-4 w-4 text-[#d69110]" />
								</div>
								<span className="font-medium text-slate-800 text-xs sm:text-sm">
									24/7 Field Support
								</span>
							</div>

							<div className="col-span-2 flex items-center gap-2.5 sm:col-span-1">
								<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FCAF20]/20 text-slate-900">
									<ShieldCheck className="h-4 w-4 text-[#d69110]" />
								</div>
								<span className="font-medium text-slate-800 text-xs sm:text-sm">
									Factory Warranty
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
