"use client";

import { useState } from "react";

import Image from "next/image";

import { Plus } from "lucide-react";

import { DeltaLogo } from "@/components/layout/DeltaLogo";

interface FeatureHotspot {
	id: string;
	top: string;
	left: string;
	title: string;
	description: string;
	direction: "up" | "right" | "left";
}

const FEATURE_HOTSPOTS: FeatureHotspot[] = [
	{
		id: "boom",
		top: "35%",
		left: "31.8%",
		title: "Reinforced Hydraulic Boom",
		description:
			"High-tensile steel boom arm engineered for high breakout force and heavy payload stability.",
		direction: "left",
	},
	{
		id: "hydraulics",
		top: "44%",
		left: "48%",
		title: "High-Pressure Hydraulic System",
		description:
			"Variable-displacement piston pumps delivering 535 L/min hydraulic flow for heavy digging payloads.",
		direction: "up",
	},
	{
		id: "cabin",
		top: "57%",
		left: "56.5%",
		title: "ROPS/FOPS Operator Suite",
		description:
			"Sound-insulated climate cabin with ergonomic joystick controls and LiveLink™ GPS telematics.",
		direction: "up",
	},
	{
		id: "bucket",
		top: "76%",
		left: "30.5%",
		title: "Heavy-Duty Reinforced Bucket",
		description:
			"Extreme-service bucket with forged AR400 wear teeth engineered for granite, quarry, and harsh rock excavation.",
		direction: "left",
	},
	{
		id: "undercarriage",
		top: "80%",
		left: "64%",
		title: "Reinforced Steel Undercarriage",
		description:
			"Heavy-duty sealed track rollers and forged steel links built for rugged quarry and mining terrain.",
		direction: "right",
	},
];

function FeatureHotspotMarker({ hotspot }: { hotspot: FeatureHotspot }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className="-translate-x-1/2 -translate-y-1/2 group absolute z-30"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
			style={{ top: hotspot.top, left: hotspot.left }}
		>
			{/* Precision Scope Target Marker Pin */}
			<div className="relative flex items-center justify-center">
				<span className="absolute h-9 w-9 animate-ping rounded-full bg-[#FCAF20]/40" />
				<button
					aria-label={hotspot.title}
					className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-900/25 bg-white/95 text-slate-950 shadow-md backdrop-blur-xs transition-all duration-300 group-hover:scale-125 group-hover:border-[#D69110] group-hover:bg-[#FCAF20] group-hover:shadow-xl"
					onClick={() => setIsOpen(!isOpen)}
					type="button"
				>
					<Plus
						className={`h-4 w-4 stroke-[2.5] transition-transform duration-300 ${
							isOpen ? "rotate-45 text-slate-950" : "group-hover:rotate-45"
						}`}
					/>
				</button>
			</div>

			{/* Animated Connecting Line */}
			{hotspot.direction === "left" && (
				<div
					className={`-translate-y-1/2 pointer-events-none absolute top-1/2 right-full transition-all duration-300 ease-out ${
						isOpen ? "opacity-100" : "opacity-0"
					}`}
				>
					<div
						className={`h-0.5 bg-gradient-to-l from-[#FCAF20] to-[#D69110] transition-all duration-300 ${
							isOpen ? "w-10 sm:w-16" : "w-0"
						}`}
					/>
				</div>
			)}
			{hotspot.direction === "right" && (
				<div
					className={`-translate-y-1/2 pointer-events-none absolute top-1/2 left-full transition-all duration-300 ease-out ${
						isOpen ? "opacity-100" : "opacity-0"
					}`}
				>
					<div
						className={`h-0.5 bg-gradient-to-r from-[#FCAF20] to-[#D69110] transition-all duration-300 ${
							isOpen ? "w-10 sm:w-16" : "w-0"
						}`}
					/>
				</div>
			)}
			{hotspot.direction === "up" && (
				<div
					className={`-translate-x-1/2 pointer-events-none absolute bottom-full left-1/2 mb-1 transition-all duration-300 ease-out ${
						isOpen ? "opacity-100" : "opacity-0"
					}`}
				>
					<div
						className={`w-0.5 bg-gradient-to-b from-[#D69110] to-[#FCAF20] transition-all duration-300 ${
							isOpen ? "h-8 sm:h-12" : "h-0"
						}`}
					/>
				</div>
			)}

			{/* Description Popover Card */}
			<div
				className={`absolute z-40 w-60 rounded-xl border border-amber-200/90 bg-white/95 p-4 text-left text-slate-950 shadow-2xl backdrop-blur-md transition-all duration-300 sm:w-64 ${
					hotspot.direction === "left"
						? "-translate-y-1/2 top-1/2 right-full mr-10 sm:mr-16"
						: hotspot.direction === "right"
							? "-translate-y-1/2 top-1/2 left-full ml-10 sm:ml-16"
							: "-translate-x-1/2 bottom-full left-1/2 mb-10 sm:mb-14"
				} ${
					isOpen
						? "pointer-events-auto scale-100 opacity-100"
						: "pointer-events-none scale-95 opacity-0"
				}`}
			>
				<span className="font-semibold text-[#D69110] text-[10px] uppercase tracking-wider">
					{hotspot.tag || "Engineering Feature"}
				</span>
				<h4 className="mt-0.5 font-manrope font-normal text-base text-slate-950 tracking-tight">
					{hotspot.title}
				</h4>
				<p className="mt-1.5 font-sans text-slate-600 text-xs leading-relaxed">
					{hotspot.description}
				</p>
			</div>
		</div>
	);
}

export function FeaturesShowcaseSection({ content }: { content?: any }) {
	const data = content;
	return (
		<section className="hidden border-slate-200/80 border-t bg-[#F6F1EA] py-16 font-sans text-slate-900 sm:py-20 md:block lg:py-24">
			<div className="container">
				{/* Section Header */}
				<div className="flex flex-col items-center text-center">
					<div className="overflow-hidden">
						<h2
							className="reveal-on-scroll font-manrope font-normal text-3xl text-reveal-up text-slate-950 tracking-tight sm:text-5xl"
							data-animate="fast-up"
						>
							{data?.title}
						</h2>
					</div>

					<div className="mt-4 max-w-2xl overflow-hidden">
						<p
							className="reveal-on-scroll font-sans text-base text-reveal-up text-slate-600 leading-relaxed sm:text-lg"
							data-animate="fast-up"
						>
							{data?.desc}
						</p>
					</div>
				</div>

				{/* Full-Width Features Showcase Image Container */}
				<div
					className="reveal-on-scroll relative mt-10 w-full overflow-hidden rounded-2xl border border-amber-300/60 bg-[#F6F1EA] shadow-md sm:mt-14"
					data-animate="scale"
				>
					<div className="relative mx-auto w-full max-w-[1600px] overflow-hidden bg-[#F6F1EA]">
						{/* Top-Left Official JCB & Delta Logos */}
						<div className="absolute top-4 left-4 z-20 flex items-center gap-3 sm:top-6 sm:left-6">
							<Image
								alt="Official JCB Dealer Logo"
								className="h-7 w-auto object-contain sm:h-9"
								height={40}
								priority
								src="/global/logo.svg"
								width={100}
							/>
							<div className="h-6 w-[1px] bg-slate-950/20" />
							<DeltaLogo className="h-5 w-auto text-slate-950 opacity-90 sm:h-6" />
						</div>

						{/* Top-Right Showcase Machine Name & Features Overlay Card */}
						<div className="absolute top-4 right-4 z-20 max-w-xs rounded-xl border border-amber-200/90 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:top-6 sm:right-6 sm:max-w-sm">
							<div className="flex items-center justify-between gap-2 border-slate-100 border-b pb-2.5">
								<div>
									<span className="font-semibold text-[#D69110] text-[10px] uppercase tracking-wider">
										{data?.featuredTag}
									</span>
									<h3 className="font-manrope font-normal text-lg text-slate-950 tracking-tight sm:text-xl">
										{data?.machineTitle}
									</h3>
								</div>
								<span className="inline-block shrink-0 rounded-md border border-amber-200 bg-amber-50 px-2 py-0.5 font-bold text-[#D69110] text-xs">
									{data?.machineWeight}
								</span>
							</div>

							{/* Key Feature Specs Checklist */}
							<div className="mt-3 space-y-2">
								{data?.specs?.map((spec: any, idx: number) => (
									<div
										className="flex items-center justify-between text-xs"
										key={idx}
									>
										<span className="font-medium text-slate-500">
											{spec.label}
										</span>
										<span className="font-bold text-slate-950">{spec.value}</span>
									</div>
								))}
							</div>
						</div>

						<Image
							alt="Advanced Heavy Machinery Features and Specifications"
							className="h-auto w-full object-cover object-center"
							height={900}
							priority
							quality={100}
							src={data?.mainImage || "/images/features-img.webp"}
							width={1600}
						/>

						{/* Interactive Feature Hotspots with Hover Lines */}
						{data?.hotspots?.map((hotspot: any) => (
							<FeatureHotspotMarker
								hotspot={{ ...hotspot, tag: data?.hotspotTag }}
								key={hotspot.id}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
