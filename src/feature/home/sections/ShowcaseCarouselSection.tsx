"use client";

import * as React from "react";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface Hotspot {
	id: string;
	top: string;
	left: string;
	title: string;
	description: string;
}

interface SlideData {
	id: string;
	image: string;
	title: string;
	model?: string;
	category?: string;
	taglineLead?: string;
	taglineAccent?: string;
	hasCustomOverlay?: boolean;
	hotspots?: Hotspot[];
}

const CAROUSEL_SLIDES: SlideData[] = [
	{
		id: "slide-1",
		image: "/images/info-1.png",
		title: "T65D Telescopic Handlers",
		model: "T65D",
		category: "TELESCOPIC HANDLERS",
		taglineLead: "REACH HIGHER. LIFT MORE. ",
		taglineAccent: "DO MORE.",
		hasCustomOverlay: true,
		hotspots: [
			{
				id: "boom",
				top: "28%",
				left: "45%",
				title: "Telescopic Boom Arm",
				description: "9.7m max reach with 23-ton payload lift capability.",
			},
			{
				id: "cab",
				top: "52%",
				left: "68%",
				title: "ROPS/FOPS Operator Cab",
				description: "360° view sound-isolated cabin with LiveLink™ GPS.",
			},
			{
				id: "fork",
				top: "32%",
				left: "18%",
				title: "Quick-Fit Attachment",
				description: "Heavy-duty hydraulic pallet forks & bucket mount.",
			},
			{
				id: "tire",
				top: "70%",
				left: "48%",
				title: "All-Terrain 4-Wheel Drive",
				description: "4-wheel crab steering for rough construction sites.",
			},
		],
	},
	{
		id: "slide-2",
		image: "/images/info-2.png",
		title: "JS380 Heavy Excavator",
		model: "JS380",
		category: "HEAVY EXCAVATORS",
		taglineLead: "POWERFUL DIGGING. EXTREME PAYLOAD. ",
		taglineAccent: "ZERO DOWNTIME.",
		hasCustomOverlay: true,
		hotspots: [
			{
				id: "bucket",
				top: "44%",
				left: "32%",
				title: "Heavy Rock Bucket",
				description: "2.7m³ reinforced bucket for extreme quarry extraction.",
			},
			{
				id: "arm",
				top: "24%",
				left: "48%",
				title: "Reinforced Excavator Boom",
				description:
					"7.3m maximum digging depth with 535 L/min hydraulic flow.",
			},
			{
				id: "cab-2",
				top: "42%",
				left: "68%",
				title: "Command Operator Suite",
				description: "Ergonomic controls with automated load sensing.",
			},
			{
				id: "tracks",
				top: "65%",
				left: "65%",
				title: "Steel Crawler Tracks",
				description:
					"Heavy-duty steel tracks for high stability on loose soil.",
			},
		],
	},
];

function HotspotMarker({ hotspot }: { hotspot: Hotspot }) {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div
			className="group absolute z-30"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
			style={{ top: hotspot.top, left: hotspot.left }}
		>
			{/* Interactive Dot in White with Pulsing Expanding Ring */}
			<div className="relative flex items-center justify-center">
				<span className="absolute h-8 w-8 animate-ping rounded-full bg-white/60" />
				<button
					aria-label={hotspot.title}
					className="relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white text-slate-950 shadow-black/40 shadow-lg ring-4 ring-white/40 transition-transform duration-300 group-hover:scale-125"
					onClick={() => setIsOpen(!isOpen)}
					type="button"
				>
					<span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
				</button>
			</div>

			{/* Info Popover Card on Hover or Press (Light Color Theme) */}
			<div
				className={`-translate-x-1/2 absolute bottom-full left-1/2 mb-3 w-60 rounded-xl border border-slate-200/90 bg-white/95 p-3.5 text-left text-slate-950 shadow-2xl backdrop-blur-md transition-all duration-300 ${
					isOpen
						? "pointer-events-auto scale-100 opacity-100"
						: "pointer-events-none scale-95 opacity-0"
				}`}
			>
				<h4 className="mt-1 font-bold font-heading text-slate-950 text-sm leading-tight">
					{hotspot.title}
				</h4>
				<p className="mt-1 font-sans text-slate-600 text-xs leading-relaxed">
					{hotspot.description}
				</p>
				{/* Pointer Triangle */}
				<div className="-translate-x-1/2 absolute top-full left-1/2 border-4 border-transparent border-t-white/95" />
			</div>
		</div>
	);
}

export function ShowcaseCarouselSection() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);

	const plugin = React.useRef(
		Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: true })
	);

	React.useEffect(() => {
		if (!api) return;

		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<section className="bg-[#FAF6F0] px-4 pt-4 pb-6 sm:px-6 sm:pt-6 sm:pb-8 lg:px-8 lg:pt-6 lg:pb-10">
			<div className="mx-auto max-w-7xl">
				{/* Section Header */}
				<div className="mb-8 max-w-3xl">
					<h2 className="mt-3 font-bold font-heading text-3xl text-slate-950 tracking-tight sm:text-5xl">
						World-Class Machinery in Action
					</h2>
					<p className="mt-3 font-normal font-sans text-base text-slate-600 leading-relaxed sm:text-lg">
						Explore our flagship JCB excavators and heavy telescopic handlers
						built for high-payload reliability across Sudan.
					</p>
				</div>

				<Carousel
					className="relative h-[480px] w-full overflow-hidden rounded-lg border border-slate-200/90 bg-white shadow-soft-xl sm:h-[580px] lg:h-[650px]"
					opts={{
						loop: true,
					}}
					plugins={[plugin.current]}
					setApi={setApi}
				>
					<CarouselContent className="-ml-0 h-[480px] w-full sm:h-[580px] lg:h-[650px]">
						{CAROUSEL_SLIDES.map((slide) => (
							<CarouselItem
								className="relative h-[480px] w-full pl-0 sm:h-[580px] lg:h-[650px]"
								key={slide.id}
							>
								{/* Framed Image */}
								<div className="relative h-full w-full">
									<Image
										alt={slide.title}
										className="object-cover object-center"
										fill
										priority
										quality={100}
										src={slide.image}
									/>
								</div>

								{/* Interactive Hotspot Dots with Pulsing Circles */}
								{slide.hotspots?.map((hotspot) => (
									<HotspotMarker hotspot={hotspot} key={hotspot.id} />
								))}

								{/* Custom Top-Right Overlay */}
								{slide.hasCustomOverlay && (
									<div className="absolute top-10 right-6 z-20 text-right font-sans drop-shadow-xl sm:right-10 lg:right-12">
										<div className="font-black font-heading text-5xl text-[#FFB800] leading-none tracking-tighter sm:text-7xl lg:text-8xl">
											{slide.model}
										</div>
										{slide.category && (
											<div className="mt-1 font-bold font-heading text-lg text-white uppercase tracking-wider sm:text-2xl lg:text-3xl">
												{slide.category}
											</div>
										)}
										<div className="mt-2 font-bold font-sans text-[11px] text-white uppercase tracking-widest sm:text-xs">
											<span>{slide.taglineLead}</span>
											<span className="text-[#FFB800]">
												{slide.taglineAccent}
											</span>
										</div>
									</div>
								)}
							</CarouselItem>
						))}
					</CarouselContent>

					{/* Large Lucide Arrow Navigation */}
					<div className="hidden sm:block">
						<CarouselPrevious />
						<CarouselNext />
					</div>

					{/* Slide Counter Indicator at Bottom Right */}
					<div className="absolute right-6 bottom-8 z-20 flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/90 px-4 py-1.5 font-mono text-slate-900 text-xs shadow-md backdrop-blur-md sm:right-10">
						<span className="font-bold text-[#D49800]">0{current}</span>
						<span className="text-slate-400">/</span>
						<span className="text-slate-600">0{CAROUSEL_SLIDES.length}</span>
					</div>
				</Carousel>
			</div>
		</section>
	);
}
