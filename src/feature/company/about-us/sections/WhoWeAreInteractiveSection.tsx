"use client";

import { useState } from "react";
import Image from "next/image";
import {
	Building2,
	CheckCircle2,
	ChevronRight,
	Factory,
	History,
	Layers,
	MapPin,
	ShieldCheck,
	Truck,
	Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabsData = [
	{
		id: "overview",
		label: "Company Overview",
		icon: Building2,
		title: "Sole Authorized JCB Dealer in Sudan",
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
		image: "/images/info-1.webp",
	},
	{
		id: "evolution",
		label: "Dealership Evolution",
		icon: History,
		title: "Growth & Expansion Milestones",
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
		image: "/images/info-2.webp",
	},
	{
		id: "sectors",
		label: "Sectors Supported",
		icon: Layers,
		title: "Empowering Sudan's Vital Industries",
		content: [
			"Today, the company supports Sudan's mining, construction, infrastructure, agriculture, roadworks, and industrial sectors, serving both private and government projects with dependable equipment and responsive technical service.",
		],
		sectorsList: [
			{ name: "Mining & Extraction", desc: "Gold mining, quarrying, and heavy earthmoving." },
			{ name: "Infrastructure & Roadworks", desc: "National highways, bridges, and civil works." },
			{ name: "Agriculture", desc: "Irrigation & large agricultural projects like Gezira Scheme." },
			{ name: "Construction & Industrial", desc: "Heavy foundation work, manufacturing & power." },
			{ name: "Government Initiatives", desc: "National public infrastructure development." },
		],
		image: "/images/over-view image.webp",
	},
	{
		id: "presence",
		label: "Field Coverage",
		icon: MapPin,
		title: "Extensive Field Experience Across Major Regions",
		content: [
			"With extensive field experience across Khartoum, Atbara, Al-Obeidia, Abu Hamad, and Sudan's major mining regions, Delta Equipment has become a key sole provider of JCB machinery for demanding heavy-duty operations.",
		],
		regionsList: [
			"Khartoum (Main Office & Spare Parts Hub)",
			"Atbara (Main Office & Mining Hub)",
			"Al-Obeidia (Mining Operations Branch)",
			"Abu Hamad (Northern Mining Zone Branch)",
			"Gezira Scheme (Mashrou Al Jazira)",
		],
		image: "/images/escavator.webp",
	},
];

export function WhoWeAreInteractiveSection() {
	const [activeTabId, setActiveTabId] = useState("overview");
	const activeTab = tabsData.find((t) => t.id === activeTabId) || tabsData[0];

	return (
		<section id="who-we-are" className="bg-white py-20 lg:py-28 font-sans text-slate-900 border-t border-slate-200 scroll-mt-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
						Who We Are
					</h2>
					<p className="mt-4 text-base text-slate-600">
						Discover our evolution, sole dealership status, and multi-sector support across Sudan.
					</p>
				</div>

				{/* Interactive Navigation Tabs */}
				<div className="mt-12 flex justify-center">
					<div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl border border-slate-200 bg-[#FAF6F0] p-2 shadow-sm">
						{tabsData.map((tab) => {
							const Icon = tab.icon;
							const isActive = tab.id === activeTabId;
							return (
								<button
									key={tab.id}
									type="button"
									onClick={() => setActiveTabId(tab.id)}
									className={cn(
										"flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-bold transition-all cursor-pointer",
										isActive
											? "bg-slate-950 text-white shadow-md"
											: "text-slate-700 hover:bg-slate-200/70 hover:text-slate-950"
									)}
								>
									<Icon className="h-4 w-4 text-[#EAA800]" />
									<span>{tab.label}</span>
								</button>
							);
						})}
					</div>
				</div>

				{/* Tab Content Display Area */}
				<div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-[#FAF6F0] p-6 sm:p-10 shadow-sm transition-all duration-300">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
						{/* Left Tab Description */}
						<div className="lg:col-span-7">
							<h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">
								{activeTab.title}
							</h3>

							<div className="mt-4 space-y-3">
								{activeTab.content.map((paragraph, index) => (
									<p key={index} className="text-sm sm:text-base text-slate-700 leading-relaxed">
										{paragraph}
									</p>
								))}
							</div>

							{/* Tab 1 Highlights */}
							{activeTab.highlights && (
								<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
									{activeTab.highlights.map((item, idx) => (
										<div key={idx} className="flex items-center gap-2.5">
											<CheckCircle2 className="h-4.5 w-4.5 text-[#EAA800] shrink-0" />
											<span className="text-xs font-semibold text-slate-900">{item}</span>
										</div>
									))}
								</div>
							)}

							{/* Tab 2 Timeline Steps */}
							{activeTab.timelineSteps && (
								<div className="mt-6 space-y-4 pt-4 border-t border-slate-200">
									{activeTab.timelineSteps.map((step) => {
										const StepIcon = step.icon;
										return (
											<div key={step.year} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
												<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-[#FCAF20] font-bold">
													<StepIcon className="h-5 w-5" />
												</div>
												<div>
													<div className="flex items-center gap-2">
														<span className="font-extrabold text-sm text-[#EAA800]">{step.year}</span>
														<span className="font-bold text-sm text-slate-950">• {step.title}</span>
													</div>
													<p className="mt-1 text-xs text-slate-600 leading-relaxed">{step.desc}</p>
												</div>
											</div>
										);
									})}
								</div>
							)}

							{/* Tab 3 Sectors List */}
							{activeTab.sectorsList && (
								<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
									{activeTab.sectorsList.map((sec) => (
										<div key={sec.name} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
											<h4 className="font-bold text-xs text-slate-950">{sec.name}</h4>
											<p className="mt-0.5 text-[11px] text-slate-600">{sec.desc}</p>
										</div>
									))}
								</div>
							)}

							{/* Tab 4 Regions List */}
							{activeTab.regionsList && (
								<div className="mt-6 space-y-2 pt-4 border-t border-slate-200">
									{activeTab.regionsList.map((region, idx) => (
										<div key={idx} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
											<MapPin className="h-4 w-4 text-[#EAA800] shrink-0" />
											<span className="font-semibold text-xs text-slate-900">{region}</span>
										</div>
									))}
								</div>
							)}
						</div>

						{/* Right Tab Visual Image */}
						<div className="lg:col-span-5">
							<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
								<Image
									src={activeTab.image}
									alt={activeTab.title}
									fill
									className="object-cover transition-all duration-500 hover:scale-105"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
