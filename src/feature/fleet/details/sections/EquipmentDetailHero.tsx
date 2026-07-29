"use client";

import Image from "next/image";
import Link from "next/link";

import {
	ArrowUpRight,
	ChevronRight,
	Download,
	Gauge,
	Weight,
} from "lucide-react";

import type { EquipmentItem } from "@/data/fleetData";

interface EquipmentDetailHeroProps {
	item: EquipmentItem;
}

export function EquipmentDetailHero({ item }: EquipmentDetailHeroProps) {
	return (
		<section className="relative overflow-hidden bg-[#FAF6F0] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Breadcrumb Navigation */}
				<nav className="mb-6 flex flex-wrap items-center gap-2 font-medium text-slate-600 text-xs uppercase tracking-wider">
					<Link className="transition-colors hover:text-slate-950" href="/">
						Home
					</Link>
					<ChevronRight className="h-3.5 w-3.5 text-slate-400" />
					<Link
						className="transition-colors hover:text-slate-950"
						href="/fleet"
					>
						Equipment Fleet
					</Link>
					<ChevronRight className="h-3.5 w-3.5 text-slate-400" />
					<span className="font-semibold text-[#d69110]">{item.model}</span>
				</nav>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
					{/* Left Column: Machinery Details & Headline */}
					<div className="space-y-6 lg:col-span-7">
						<div>
							<div className="inline-flex items-center gap-2 rounded-full border border-[#EAA800]/40 bg-[#FCAF20]/20 px-3.5 py-1 font-semibold text-slate-950 text-xs shadow-xs">
								<span className="h-2 w-2 animate-pulse rounded-full bg-[#d69110]" />
								<span>{item.categoryName}</span>
							</div>

							<h1 className="mt-3 font-bold font-heading text-3xl text-slate-950 leading-tight sm:text-5xl lg:text-6xl">
								{item.name}
							</h1>

							<p className="mt-4 font-sans text-base text-slate-700 leading-relaxed sm:text-lg">
								{item.tagline}
							</p>
						</div>

						{/* Key Metrics Grid */}
						<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
							<div className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-xs">
								<div className="flex items-center gap-2 text-slate-500">
									<Weight className="h-4 w-4 text-[#d69110]" />
									<span className="font-semibold text-[11px] uppercase tracking-wider">
										Weight
									</span>
								</div>
								<p className="mt-1 font-bold font-heading text-base text-slate-950">
									{item.operatingWeight}
								</p>
							</div>

							<div className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-xs">
								<div className="flex items-center gap-2 text-slate-500">
									<Gauge className="h-4 w-4 text-[#d69110]" />
									<span className="font-semibold text-[11px] uppercase tracking-wider">
										Engine
									</span>
								</div>
								<p className="mt-1 font-bold font-heading text-base text-slate-950">
									{item.enginePower}
								</p>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
							<a
								className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 font-bold text-sm text-white shadow-md transition-all hover:bg-[#FCAF20] hover:text-slate-950 active:scale-[0.98]"
								href="#contact"
							>
								<span>Request Official Quote</span>
								<ArrowUpRight className="h-4.5 w-4.5" />
							</a>

							<button
								className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 font-semibold text-slate-800 text-sm shadow-xs transition-colors hover:bg-slate-50"
								onClick={() =>
									alert(
										`Downloading specification brochure for ${item.name}...`
									)
								}
								type="button"
							>
								<Download className="h-4.5 w-4.5 text-slate-600" />
								<span>Download Spec Sheet</span>
							</button>
						</div>
					</div>

					{/* Right Column: Hero Product Showcase Image */}
					<div className="relative h-72 w-full overflow-hidden rounded-2xl p-6 sm:h-96 lg:col-span-5">
						<Image
							alt={item.name}
							className="object-contain p-4 transition-transform duration-700 hover:scale-105"
							fill
							priority
							sizes="(max-width: 1024px) 100vw, 40vw"
							src={item.image}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
