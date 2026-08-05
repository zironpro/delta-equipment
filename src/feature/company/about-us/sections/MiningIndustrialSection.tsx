"use client";

import Image from "next/image";

import { Compass, Mountain, Pickaxe, Sun } from "lucide-react";

export function MiningIndustrialSection() {
	return (
		<section
			className="scroll-mt-24 border-slate-200 border-t bg-[#FAF6F0] py-20 font-sans text-slate-900 lg:py-28"
			id="mining-development"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
					{/* Left Visual Column */}
					<div className="order-2 lg:order-1 lg:col-span-5">
						<div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
							<Image
								alt="Supporting Sudan's Mining and Industrial Development"
								className="object-cover"
								fill
								quality={95}
								src="/images/about-us/about-us-support.webp"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

							<div className="absolute right-4 bottom-4 left-4 rounded-lg border border-slate-800 bg-slate-950/90 p-4 backdrop-blur-md">
								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FCAF20] text-slate-950">
										<Pickaxe className="h-5 w-5" />
									</div>
									<div>
										<h4 className="font-bold text-white text-xs">
											Nile River & Northern Mining Zones
										</h4>
										<p className="text-[11px] text-slate-400">
											Gold Mining & Mineral Earthmoving Operations
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Content Column */}
					<div className="order-1 lg:order-2 lg:col-span-7">
						<h2 className="font-extrabold text-3xl text-slate-950 leading-tight tracking-tight sm:text-4xl">
							Supporting Sudan&apos;s Mining and Industrial Development
						</h2>

						<p className="mt-5 text-base text-slate-700 leading-relaxed">
							Mining remains one of Sudan&apos;s most important economic
							sectors, particularly gold mining, quarrying, mineral extraction,
							and associated earthmoving activities across resource-rich regions
							such as the Nile River State and northern mining zones. Delta
							Equipment plays an active role in supporting these operations by
							supplying robust JCB machinery designed for high-performance work
							in harsh field environments where durability, efficiency, and
							reliability are essential.
						</p>

						{/* Key Mining Solution Cards */}
						<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
							<div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
								<Mountain className="h-6 w-6 text-[#EAA800]" />
								<h3 className="mt-3 font-bold text-slate-950 text-sm">
									Gold & Mineral Mining
								</h3>
								<p className="mt-1 text-slate-600 text-xs">
									Heavy excavators & loaders engineered for desert extraction.
								</p>
							</div>

							<div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
								<Sun className="h-6 w-6 text-[#EAA800]" />
								<h3 className="mt-3 font-bold text-slate-950 text-sm">
									Harsh Environment Ready
								</h3>
								<p className="mt-1 text-slate-600 text-xs">
									High-ambient cooling systems for extreme temperatures.
								</p>
							</div>

							<div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
								<Compass className="h-6 w-6 text-[#EAA800]" />
								<h3 className="mt-3 font-bold text-slate-950 text-sm">
									Remote Mining Depots
								</h3>
								<p className="mt-1 text-slate-600 text-xs">
									Dedicated mobile service units in Al-Obeidia & Abu Hamad.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
