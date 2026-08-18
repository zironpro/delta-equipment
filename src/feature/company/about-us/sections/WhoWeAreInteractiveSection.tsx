"use client";

import { useState } from "react";

import Image from "next/image";

import {
	Building2,
	CheckCircle2,
	ChevronRight,
	History,
	Layers,
	MapPin,
	ShieldCheck,
	Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

const sectionsData = [
	{
		id: "overview",
		number: "01",
		label: "Company Overview",
		icon: Building2,
		title: "Sole Authorized JCB Dealer in Sudan",
		tagline: "Heavy machinery, generators & 15+ years leadership",
		content: [
			"Delta Equipment is the sole authorized JCB dealer in Sudan, providing heavy equipment solutions, diesel generators, genuine spare parts, and technical support for projects across the country.",
			"Backed by a management team with over 15 years of experience in heavy machinery and equipment solutions, the company has built a strong reputation for reliability, technical expertise, and long-term operational support.",
		],
		highlights: [
			"100% Sole Authorized JCB Representative",
			"Over 15 Years Executive Management Experience",
			"Genuine OEM Parts & Factory Warranties",
			"Comprehensive Technical Support & Maintenance",
		],
		image: "/images/about-us/company-overview.webp",
	},
	{
		id: "evolution",
		number: "02",
		label: "Dealership Evolution",
		icon: History,
		title: "Growth & Expansion Milestones",
		tagline:
			"From power solutions entry in 2018 to sole JCB dealership in 2024",
		content: [
			"Delta Equipment began supplying and supporting JCB diesel generators in Sudan in 2018, establishing a trusted presence in power solutions before expanding its official sole JCB dealership in 2024 to include heavy machinery and construction equipment.",
		],
		timelineSteps: [
			{
				year: "2018",
				title: "Power Solutions Entry",
				desc: "Began supplying and supporting JCB diesel generators across Sudan, establishing a trusted reputation in industrial power solutions.",
				icon: Zap,
			},
			{
				year: "2024",
				title: "Sole Dealership Expansion",
				desc: "Officially expanded the dealership to become the sole authorized provider for all JCB heavy machinery, excavators, Loadalls, and construction equipment.",
				icon: ShieldCheck,
			},
		],
		image: "/images/about-us/dealership-evolution.webp",
		mobileImage: "/images/about-us/dealership-evolution-mobile.webp",
	},
	{
		id: "sectors",
		number: "03",
		label: "Sectors Supported",
		icon: Layers,
		title: "Empowering Sudan's Vital Industries",
		tagline: "Mining, infrastructure, agriculture & public initiatives",
		content: [
			"Today, the company supports Sudan's mining, construction, infrastructure, agriculture, roadworks, and industrial sectors, serving both private and government projects with dependable equipment and responsive technical service.",
		],
		sectorsList: [
			{
				name: "Mining & Extraction",
				desc: "Gold mining, quarrying, and heavy earthmoving.",
			},
			{
				name: "Infrastructure & Roadworks",
				desc: "National highways, bridges, and civil works.",
			},
			{
				name: "Agriculture",
				desc: "Irrigation & large agricultural projects like Gezira Scheme.",
			},
			{
				name: "Construction & Industrial",
				desc: "Heavy foundation work, manufacturing & power.",
			},
			{
				name: "Government Initiatives",
				desc: "National public infrastructure development.",
			},
		],
		image: "/images/about-us/sectors-supported.webp",
		mobileImage: "/images/about-us/sectors-supported-mobile.webp",
	},
	{
		id: "presence",
		number: "04",
		label: "Field Coverage",
		icon: MapPin,
		title: "Extensive Field Experience Across Major Regions",
		tagline: "Khartoum, Atbara, Al-Obeidia, Abu Hamad & Gezira",
		content: [
			"With extensive field experience across Khartoum, Atbara, Al-Obeidia, Abu Hamad, and Sudan's major mining regions, Delta Equipment has become a key sole provider of JCB machinery for demanding heavy-duty operations.",
		],
		regionsList: [
			{ city: "Khartoum", role: "Main Office & Central Spare Parts Hub" },
			{ city: "Atbara", role: "Main Northern Office & Mining Hub" },
			{ city: "Al-Obeidia", role: "Gold Mining Operations Branch" },
			{ city: "Abu Hamad", role: "Northern Mining Zone Branch" },
			{ city: "Gezira Scheme", role: "Mashrou Al Jazira Agricultural Hub" },
		],
		image: "/images/about-us/field-coverage.webp",
		mobileImage: "/images/about-us/field-coverage-mobile.webp",
	},
];

export function WhoWeAreInteractiveSection() {
	const [activeId, setActiveId] = useState("overview");
	const activeSection =
		sectionsData.find((s) => s.id === activeId) || sectionsData[0];

	return (
		<section
			className="scroll-mt-24 border-slate-200 border-t bg-white py-20 font-sans text-slate-900 lg:py-28"
			id="who-we-are"
		>
			<div className="container">
				{/* Section Header */}
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="mt-3 font-manrope font-normal text-3xl text-slate-950 tracking-tight sm:text-4xl lg:text-5xl">
						Who We Are
					</h2>
					<p className="mt-4 font-sans text-base text-slate-600 leading-relaxed sm:text-lg">
						Discover our evolution, sole dealership status, and multi-sector
						support across Sudan.
					</p>
				</div>

				{/* Modern Vertical Navigation + Interactive Showcase Grid */}
				<div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
					{/* Left Vertical Menu Column */}
					<div className="flex flex-col gap-3 lg:sticky lg:top-28 lg:col-span-4">
						{sectionsData.map((section) => {
							const Icon = section.icon;
							const isActive = section.id === activeId;
							return (
								<button
									className={cn(
										"group flex cursor-pointer items-center justify-between rounded-lg border p-4 text-left transition-all duration-300",
										isActive
											? "border-slate-950 border-l-4 border-l-[#FCAF20] bg-slate-950 text-white shadow-lg"
											: "border-slate-200 bg-[#FAF6F0] text-slate-800 hover:border-slate-300 hover:bg-slate-100"
									)}
									key={section.id}
									onClick={() => setActiveId(section.id)}
									type="button"
								>
									<div className="flex items-center gap-3.5">
										<div
											className={cn(
												"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-bold text-xs transition-colors",
												isActive
													? "bg-[#FCAF20] text-slate-950"
													: "bg-white text-slate-700 group-hover:bg-[#FCAF20] group-hover:text-slate-950"
											)}
										>
											<Icon className="h-5 w-5" />
										</div>
										<div>
											<div className="flex items-center gap-2">
												<span
													className={cn(
														"font-bold font-mono text-xs",
														isActive ? "text-[#FCAF20]" : "text-slate-400"
													)}
												>
													{section.number}
												</span>
												<h3 className="font-bold text-sm">{section.label}</h3>
											</div>
											<p
												className={cn(
													"mt-0.5 line-clamp-1 text-xs",
													isActive ? "text-slate-300" : "text-slate-500"
												)}
											>
												{section.tagline}
											</p>
										</div>
									</div>
									<ChevronRight
										className={cn(
											"h-4 w-4 shrink-0 transition-transform",
											isActive
												? "translate-x-1 text-[#FCAF20]"
												: "text-slate-400 group-hover:text-slate-900"
										)}
									/>
								</button>
							);
						})}
					</div>

					{/* Right Content Showcase Card */}
					<div className="lg:col-span-8">
						<div
							className="animate-tab-text rounded-lg border border-slate-200 bg-[#FAF6F0] p-6 shadow-sm sm:p-8"
							key={activeSection.id}
						>
							<div className="flex flex-col gap-6">
								{/* Title & Description */}
								<div>
									<div className="inline-flex items-center gap-2 font-bold font-mono text-[#d69110] text-xs uppercase tracking-wider">
										<span>Section {activeSection.number}</span>
										<span>•</span>
										<span>{activeSection.label}</span>
									</div>
									<h3 className="mt-2 font-bold text-2xl text-slate-950 sm:text-3xl">
										{activeSection.title}
									</h3>
									<div className="mt-3 space-y-2.5">
										{activeSection.content.map((paragraph, idx) => (
											<p
												className="text-slate-700 text-sm leading-relaxed sm:text-base"
												key={idx}
											>
												{paragraph}
											</p>
										))}
									</div>
								</div>

								{/* Dynamic Highlights / Lists */}
								{activeSection.highlights && (
									<div className="grid grid-cols-1 gap-3 border-slate-200 border-t pt-4 sm:grid-cols-2">
										{activeSection.highlights.map((item, idx) => (
											<div className="flex items-center gap-2.5" key={idx}>
												<CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-[#EAA800]" />
												<span className="font-semibold text-slate-900 text-xs">
													{item}
												</span>
											</div>
										))}
									</div>
								)}

								{activeSection.timelineSteps && (
									<div className="space-y-3 border-slate-200 border-t pt-4">
										{activeSection.timelineSteps.map((step) => {
											const StepIcon = step.icon;
											return (
												<div
													className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-3.5 shadow-sm"
													key={step.year}
												>
													<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFC72C] to-[#FCAF20] text-slate-950 shadow-xs">
														<StepIcon className="h-4.5 w-4.5" />
													</div>
													<div>
														<div className="flex items-center gap-2">
															<span className="font-extrabold text-[#EAA800] text-xs">
																{step.year}
															</span>
															<span className="font-bold text-slate-950 text-xs">
																• {step.title}
															</span>
														</div>
														<p className="mt-0.5 text-[11px] text-slate-600 leading-relaxed">
															{step.desc}
														</p>
													</div>
												</div>
											);
										})}
									</div>
								)}

								{activeSection.sectorsList && (
									<div className="grid grid-cols-1 gap-2.5 border-slate-200 border-t pt-4 sm:grid-cols-2">
										{activeSection.sectorsList.map((sec) => (
											<div
												className="rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm"
												key={sec.name}
											>
												<h4 className="font-bold text-slate-950 text-xs">
													{sec.name}
												</h4>
												<p className="mt-0.5 text-[11px] text-slate-600">
													{sec.desc}
												</p>
											</div>
										))}
									</div>
								)}

								{activeSection.regionsList && (
									<div className="grid grid-cols-1 gap-3 border-slate-200 border-t pt-4 sm:grid-cols-2">
										{activeSection.regionsList.map((region, idx) => (
											<div
												className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-xs transition-all hover:border-[#FCAF20]"
												key={idx}
											>
												<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF6F0] text-[#d69110]">
													<MapPin className="h-4 w-4" />
												</div>
												<div>
													<h4 className="font-bold text-slate-950 text-xs">
														{region.city}
													</h4>
													<p className="mt-0.5 text-[11px] text-slate-600">
														{region.role}
													</p>
												</div>
											</div>
										))}
									</div>
								)}

								{/* Responsive Mobile / Desktop Image Section */}
								<div
									className="relative h-[280px] w-full overflow-hidden rounded-lg border border-slate-200 shadow-md sm:h-[360px] lg:h-[420px]"
									key={`img-${activeSection.id}`}
								>
									{activeSection.mobileImage ? (
										<>
											<Image
												alt={activeSection.title}
												className="object-cover sm:hidden"
												fill
												quality={95}
												src={activeSection.mobileImage}
											/>
											<Image
												alt={activeSection.title}
												className="hidden object-cover sm:block"
												fill
												quality={95}
												src={activeSection.image}
											/>
										</>
									) : (
										<Image
											alt={activeSection.title}
											className="object-cover"
											fill
											quality={95}
											src={activeSection.image}
										/>
									)}
									{/* Curtain Reveal Overlay */}
									<div
										className="pointer-events-none absolute inset-0 z-20 animate-image-curtain border-[#FCAF20] border-r-4 bg-slate-950"
										key={`curtain-${activeSection.id}`}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
