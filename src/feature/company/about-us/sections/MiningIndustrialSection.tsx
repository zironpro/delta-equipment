"use client";

import Image from "next/image";
import { HardHat, Pickaxe, ShieldAlert, Mountain, Sun, Compass } from "lucide-react";

export function MiningIndustrialSection() {
	return (
		<section id="mining-development" className="bg-[#FAF6F0] py-20 lg:py-28 font-sans text-slate-900 border-t border-slate-200 scroll-mt-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
					{/* Left Visual Column */}
					<div className="lg:col-span-5 order-2 lg:order-1">
						<div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl group">
							<Image
								src="/images/escavator.png"
								alt="JCB Mining Excavators in Sudan Desert"
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

							<div className="absolute bottom-4 left-4 right-4 rounded-xl border border-slate-800 bg-slate-950/90 p-4 backdrop-blur-md">
								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FCAF20] text-slate-950">
										<Pickaxe className="h-5 w-5" />
									</div>
									<div>
										<h4 className="font-bold text-xs text-white">Nile River & Northern Mining Zones</h4>
										<p className="text-[11px] text-slate-400">Gold Mining & Mineral Earthmoving Operations</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Content Column */}
					<div className="lg:col-span-7 order-1 lg:order-2">
						<h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl leading-tight">
							Supporting Sudan&apos;s Mining and Industrial Development
						</h2>

						<p className="mt-5 text-base text-slate-700 leading-relaxed">
							Mining remains one of Sudan&apos;s most important economic sectors, particularly gold mining, quarrying, mineral extraction, and associated earthmoving activities across resource-rich regions such as the Nile River State and northern mining zones. Delta Equipment plays an active role in supporting these operations by supplying robust JCB machinery designed for high-performance work in harsh field environments where durability, efficiency, and reliability are essential.
						</p>

						{/* Key Mining Solution Cards */}
						<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
							<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
								<Mountain className="h-6 w-6 text-[#EAA800]" />
								<h3 className="mt-3 font-bold text-sm text-slate-950">Gold & Mineral Mining</h3>
								<p className="mt-1 text-xs text-slate-600">Heavy excavators & loaders engineered for desert extraction.</p>
							</div>

							<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
								<Sun className="h-6 w-6 text-[#EAA800]" />
								<h3 className="mt-3 font-bold text-sm text-slate-950">Harsh Environment Ready</h3>
								<p className="mt-1 text-xs text-slate-600">High-ambient cooling systems for extreme temperatures.</p>
							</div>

							<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
								<Compass className="h-6 w-6 text-[#EAA800]" />
								<h3 className="mt-3 font-bold text-sm text-slate-950">Remote Mining Depots</h3>
								<p className="mt-1 text-xs text-slate-600">Dedicated mobile service units in Al-Obeidia & Abu Hamad.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
