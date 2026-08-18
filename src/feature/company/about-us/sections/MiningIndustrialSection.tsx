"use client";

import Image from "next/image";

import { Compass, Mountain, Pickaxe, Sun } from "lucide-react";

export function MiningIndustrialSection({ content }: { content?: any }) {
	const data = content;
	const ICONS = [Mountain, Sun, Compass];
	return (
		<section
			className="scroll-mt-24 border-slate-200 border-t bg-[#FAF6F0] py-20 font-sans text-slate-900 lg:py-28"
			id="mining-development"
		>
			<div className="container">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
					{/* Left Visual Column */}
					<div className="order-2 lg:order-1 lg:col-span-5">
						<div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
							<Image
								alt={data?.imageAlt || "Supporting Sudan's Mining and Industrial Development"}
								className="object-cover"
								fill
								quality={95}
								src={data?.image || "/images/about-us/about-us-support.webp"}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

							<div className="absolute right-4 bottom-4 left-4 rounded-lg border border-slate-800 bg-slate-950/90 p-4 backdrop-blur-md">
								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFC72C] to-[#FCAF20] text-slate-950 shadow-xs">
										<Pickaxe className="h-5 w-5" />
									</div>
									<div>
										<h4 className="font-bold text-white text-xs">
											{data?.badgeTitle || "Nile River & Northern Mining Zones"}
										</h4>
										<p className="text-[11px] text-slate-400">
											{data?.badgeDesc || "Gold Mining & Mineral Earthmoving Operations"}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Content Column */}
					<div className="order-1 lg:order-2 lg:col-span-7">
						<h2 className="font-manrope font-normal text-3xl text-slate-950 leading-tight tracking-tight sm:text-4xl">
							{data?.title || "Supporting Sudan's Mining and Industrial Development"}
						</h2>

						<p className="mt-5 font-sans text-base text-slate-600 leading-relaxed sm:text-lg">
							{data?.desc || "Mining remains one of Sudan's most important economic sectors, particularly gold mining, quarrying, mineral extraction, and associated earthmoving activities across resource-rich regions such as the Nile River State and northern mining zones. Delta Equipment plays an active role in supporting these operations by supplying robust JCB machinery designed for high-performance work in harsh field environments where durability, efficiency, and reliability are essential."}
						</p>

						{/* Key Mining Solution Cards */}
						<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
							{data?.cards?.map((card: any, idx: number) => {
								const Icon = ICONS[idx % ICONS.length];
								return (
									<div
										className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
										key={idx}
									>
										<Icon className="h-6 w-6 text-[#EAA800]" />
										<h3 className="mt-3 font-bold text-slate-950 text-sm">
											{card.title}
										</h3>
										<p className="mt-1 text-slate-600 text-xs">
											{card.desc}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
