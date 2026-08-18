"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import type { EquipmentItem } from "@/data/fleetData";

interface EquipmentCardProps {
	item: EquipmentItem;
	onViewSpecs?: (item: EquipmentItem) => void;
}

export function EquipmentCard({ item }: EquipmentCardProps) {
	return (
		<Link
			aria-label={`View detail page for ${item.name}`}
			className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-xl border border-slate-200/90 bg-white p-5 text-slate-950 shadow-xs transition-all duration-500 hover:border-[#FCAF20] hover:shadow-2xl focus:outline-hidden"
			href={`/fleet/${item.slug}`}
		>
			{/* Dynamic Diagonal Slash -> Expands smoothly to 100% Full Background Fill on Hover */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-[#FFD56B] via-[#FCAF20] to-[#F39C12]/80 opacity-90 transition-all duration-500 ease-in-out [clip-path:polygon(42%_0,100%_0,100%_100%,72%_100%)] group-hover:opacity-100 group-hover:[clip-path:polygon(0%_0,100%_0,100%_100%,0%_100%)]" />

			{/* Top Bar: Model Title Badge & Action Button */}
			<div className="relative z-10 flex items-start justify-between">
				<div>
					<span className="inline-block rounded-md border border-slate-200 bg-white px-3 py-1 font-bold font-manrope text-slate-950 text-base uppercase tracking-tight shadow-xs transition-all duration-300 group-hover:border-slate-950/20 group-hover:bg-white/90">
						{item.model}
					</span>
				</div>

				<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-xs transition-all duration-300 group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white">
					<ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</div>
			</div>

			{/* Central Machinery Image Over Dynamic Background */}
			<div className="relative z-10 flex flex-1 items-center justify-center py-2">
				<Image
					alt={item.name}
					className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-108 group-hover:-translate-y-1"
					fill
					priority={false}
					sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
					src={item.image}
				/>
			</div>

			{/* Minimal Footer: Category & Key Specs */}
			<div className="relative z-10 flex items-center justify-between border-slate-200/80 border-t pt-3 transition-colors duration-300 group-hover:border-slate-950/20">
				<div className="flex flex-col">
					<span className="font-bold font-sans text-[#D69110] text-[11px] uppercase tracking-wider transition-colors duration-300 group-hover:text-slate-950">
						{item.categoryName}
					</span>
					<span className="font-medium font-sans text-slate-600 text-xs transition-colors duration-300 group-hover:text-slate-900">
						{item.operatingWeight} • {item.enginePower}
					</span>
				</div>
			</div>
		</Link>
	);
}
