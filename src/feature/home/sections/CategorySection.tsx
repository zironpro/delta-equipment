"use client";

import Image from "next/image";

import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CategoryCard {
	id: string;
	title: string;
	image: string;
}

const MACHINERY_CATEGORIES: CategoryCard[] = [
	{
		id: "excavators",
		title: "Tracked Excavators",
		image: "/images/escavator.png",
	},
	{
		id: "telehandlers",
		title: "Telescopic Handlers",
		image: "/images/escavator.png",
	},
	{
		id: "wheel-loaders",
		title: "Wheel Loaders",
		image: "/images/escavator.png",
	},
	{
		id: "backhoes",
		title: "Backhoe Loaders",
		image: "/images/escavator.png",
	},
	{
		id: "compaction",
		title: "Compaction Rollers",
		image: "/images/escavator.png",
	},
	{
		id: "skid-steer",
		title: "Skid Steer Loaders",
		image: "/images/escavator.png",
	},
	{
		id: "dump-trucks",
		title: "Site Dumpers",
		image: "/images/escavator.png",
	},
	{
		id: "power",
		title: "Power Generators",
		image: "/images/escavator.png",
	},
];

export function CategorySection() {
	return (
		<section className="bg-[#FAF6F0] px-4 pt-12 pb-6 sm:px-6 sm:pt-16 sm:pb-8 lg:px-8 lg:pt-20 lg:pb-10">
			<div className="mx-auto max-w-7xl">
				{/* Section Header */}
				<div className="flex flex-col justify-between gap-6 border-slate-200/80 border-b pb-10 md:flex-row md:items-end">
					<div className="max-w-2xl">
						<h2 className="font-bold font-heading text-3xl text-slate-950 tracking-tight sm:text-5xl">
							Explore Equipment by Category
						</h2>
					</div>

					<Button className="cursor-pointer self-start border border-slate-900 bg-slate-950 font-bold font-sans text-white shadow-md transition-colors hover:border-slate-800 hover:bg-slate-800 md:self-auto">
						<span>View Full Catalog</span>
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</div>

				{/* Categories Grid - 4 Cards per Row in Portrait Aspect Ratio */}
				<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{MACHINERY_CATEGORIES.map((category) => (
						<div
							className="group hover:-translate-y-1.5 relative flex aspect-[3/4] h-[340px] w-full cursor-pointer flex-col items-center justify-between overflow-hidden rounded-lg border border-slate-200/90 bg-white p-6 shadow-soft-lg transition-all duration-300 hover:border-[#FFB800] hover:shadow-soft-xl"
							key={category.id}
						>
							{/* Bold and Thick JCB Yellow Background Chevron (Top-Right -> Center -> Bottom-Right) */}
							<svg
								aria-hidden="true"
								className="pointer-events-none absolute inset-0 h-full w-full opacity-30 transition-all duration-500 group-hover:scale-105 group-hover:opacity-60"
								fill="none"
								viewBox="0 0 300 400"
								xmlns="http://www.w3.org/2000/svg"
							>
								<polyline
									points="310,-20 60,200 310,420"
									stroke="#FFB800"
									strokeLinecap="square"
									strokeLinejoin="miter"
									strokeWidth="80"
								/>
							</svg>

							{/* Machinery Image directly on white background */}
							<div className="relative z-10 flex h-3/4 w-full items-center justify-center">
								<Image
									alt={category.title}
									className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
									height={280}
									src={category.image}
									width={340}
								/>
							</div>

							{/* Bottom Category Name Only */}
							<div className="relative z-10 flex h-1/4 items-center justify-center text-center">
								<h3 className="font-bold font-heading text-2xl text-slate-950 transition-colors group-hover:text-[#D49800]">
									{category.title}
								</h3>
							</div>
						</div>
					))}
				</div>

				{/* Dealer Certification Banner */}
				<div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-lg border border-amber-500/30 bg-gradient-to-r from-[#FFF8E6] via-amber-50/60 to-[#FFF8E6] p-8 shadow-sm md:flex-row">
					<div className="flex items-center gap-4">
						<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#FFB800] font-bold text-slate-950 shadow-md">
							<ShieldCheck className="h-7 w-7" />
						</div>
						<div>
							<h4 className="font-bold font-heading text-slate-950 text-xl">
								Official JCB Warranty & Genuine Parts Guaranteed
							</h4>
							<p className="mt-0.5 font-sans text-slate-600 text-sm">
								Every machine comes with factory-backed JCB warranty, OEM spare
								parts support, and 24/7 field service across Sudan.
							</p>
						</div>
					</div>

					<Button className="shrink-0 cursor-pointer bg-slate-950 font-bold font-sans text-white hover:bg-slate-800">
						<span>Request Fleet Quote</span>
					</Button>
				</div>
			</div>
		</section>
	);
}
