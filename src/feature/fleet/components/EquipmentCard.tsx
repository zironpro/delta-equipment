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
			className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-lg border border-slate-200 bg-white p-5 text-slate-950 shadow-xs transition-all duration-300 hover:border-[#FCAF20] hover:shadow-xl focus:outline-hidden"
			href={`/fleet/${item.slug}`}
		>
			{/* Low Opacity Background Watermark Model Name */}
			<div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden">
				<span className="-rotate-12 scale-125 transform font-black font-heading text-7xl text-slate-100 uppercase tracking-tighter transition-transform duration-700 group-hover:scale-150">
					{item.model}
				</span>
			</div>

			{/* Dynamic Diagonal Slash with Brand Color (JCB Gold #FCAF20) */}
			<div className="pointer-events-none absolute top-0 right-0 h-full w-full bg-gradient-to-bl from-[#FCAF20]/90 via-[#FCAF20]/20 to-transparent opacity-85 transition-opacity duration-300 [clip-path:polygon(40%_0,100%_0,100%_100%,70%_100%)] group-hover:opacity-100" />

			{/* Top Bar: Model Title & Action Icon */}
			<div className="relative z-10 flex items-start justify-between">
				<div>
					<span className="inline-block rounded-xs border border-slate-200 bg-white px-2.5 py-0.5 font-black font-heading text-slate-950 text-xl uppercase tracking-tight shadow-xs">
						{item.model}
					</span>
				</div>

				<div className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 shadow-xs transition-all group-hover:border-[#d69110] group-hover:bg-[#FCAF20] group-hover:text-slate-950">
					<ArrowUpRight className="h-4 w-4" />
				</div>
			</div>

			{/* Central Machinery Image Over Diagonal Brand Slash */}
			<div className="relative z-10 flex flex-1 items-center justify-center py-2">
				<Image
					alt={item.name}
					className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-108"
					fill
					priority={false}
					sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
					src={item.image}
				/>
			</div>

			{/* Minimal Footer: Category & Key Specs */}
			<div className="relative z-10 flex items-center justify-between border-slate-100 border-t pt-3">
				<div className="flex flex-col">
					<span className="font-bold font-heading text-[#d69110] text-[10px] uppercase tracking-wider">
						{item.categoryName}
					</span>
					<span className="font-medium font-sans text-slate-600 text-xs">
						{item.operatingWeight} • {item.enginePower}
					</span>
				</div>
			</div>
		</Link>
	);
}
