"use client";

import Image from "next/image";

import { Building2, CheckCircle2, MapPin, Sprout, Wrench } from "lucide-react";

const branchesData = [
	{
		id: "khartoum",
		number: "01",
		name: "Khartoum Headquarters",
		role: "Executive HQ & Central Spare Parts Depot",
		type: "Main Headquarters",
		icon: Building2,
		details:
			"Central executive hub, primary spare parts distribution warehouse, master technical team, and client relations office coordinating equipment supply nationwide.",
		projects: [
			"Government Infrastructure Initiatives",
			"National Power Generation Projects",
			"Heavy Fleet Sales & Financing",
		],
		image: "/images/about-us/locations/Khartoum.webp",
	},
	{
		id: "atbara",
		number: "02",
		name: "Atbara Operations Center",
		role: "Northern Operations & Industrial Center",
		type: "Mining & Industrial Hub",
		icon: Building2,
		details:
			"Primary industrial regional hub coordinating heavy machinery deployment, maintenance workshops, and mining support across River Nile State.",
		projects: [
			"Nile River State Mining Support",
			"Railway & Transport Infrastructure",
			"Industrial Plant Maintenance",
		],
		image: "/images/about-us/locations/Atbara.webp",
	},
	{
		id: "al-obeidia",
		number: "03",
		name: "Al-Obeidia Mining Branch",
		role: "Gold Mining & Extraction Field Branch",
		type: "Field Operations Branch",
		icon: Wrench,
		details:
			"Dedicated field branch providing 24/7 on-site technical service, hydraulic repair, and genuine parts for gold processing operations.",
		projects: [
			"Gold Processing Fleet Support",
			"Artisanal & Commercial Quarrying",
			"24/7 Field Rapid Response Units",
		],
		image: "/images/about-us/locations/Al-Obeidia.webp",
	},
	{
		id: "abu-hamad",
		number: "04",
		name: "Abu Hamad Mining Depot",
		role: "Northern Mining Zone Field Branch",
		type: "Remote Field Depot",
		icon: MapPin,
		details:
			"Field operations depot supporting gold extraction and heavy earthmoving across Sudan's northernmost mineral reserves.",
		projects: [
			"Northern Mining Sector Support",
			"Remote Machinery Logistics",
			"LiveLink Telematics Monitoring",
		],
		image: "/images/about-us/locations/Abu-Hamad.webp",
	},
	{
		id: "gezira",
		number: "05",
		name: "Gezira Irrigation Scheme",
		role: "Mashrou Al Jazira Agriculture Support",
		type: "Major Project Hub",
		icon: Sprout,
		details:
			"Specialized support for one of the world's largest irrigation projects, delivering JCB excavators, loaders, and agricultural machinery.",
		projects: [
			"Irrigation Canal Earthmoving",
			"Agricultural Land Preparation",
			"Government Agricultural Initiatives",
		],
		image: "/images/about-us/locations/Gezira.webp",
	},
];

export function NationwidePresenceSection() {
	return (
		<section
			className="scroll-mt-24 border-slate-200 border-t bg-white py-20 font-sans text-slate-900 lg:py-28"
			id="nationwide-presence"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="mt-3 font-extrabold text-3xl text-slate-950 tracking-tight sm:text-4xl lg:text-5xl">
						Nationwide Presence & Strategic Hubs
					</h2>
					<p className="mt-4 text-base text-slate-600 leading-relaxed">
						Delta Equipment operates strategic hubs positioned across Sudan —
						ensuring rapid spare parts delivery, expert technical support, and
						heavy equipment field service nationwide.
					</p>
				</div>

				{/* Borderless Alternating Regional Story Rows Layout */}
				<div className="mt-20 space-y-20">
					{branchesData.map((branch, index) => {
						const isEven = index % 2 === 0;
						return (
							<div
								className="grid grid-cols-1 items-center gap-10 border-slate-100 border-b pb-20 last:border-0 last:pb-0 lg:grid-cols-12"
								key={branch.id}
							>
								{/* Image Column */}
								<div
									className={`lg:col-span-6 ${
										isEven ? "order-1 lg:order-1" : "order-1 lg:order-2"
									}`}
								>
									<div className="relative h-[320px] w-full overflow-hidden rounded-lg border border-slate-200 shadow-sm sm:h-[400px]">
										<Image
											alt={`${branch.name} Regional Operations`}
											className="object-cover"
											fill
											quality={95}
											src={branch.image}
										/>
										<div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-3.5 py-1 text-white backdrop-blur-md">
											<span className="h-2 w-2 rounded-full bg-[#FCAF20]" />
											<span className="font-bold text-xs uppercase tracking-wider">
												{branch.type}
											</span>
										</div>
									</div>
								</div>

								{/* Content Column */}
								<div
									className={`lg:col-span-6 ${
										isEven ? "order-2 lg:order-2" : "order-2 lg:order-1"
									}`}
								>
									<div className="space-y-4">
										<div className="flex items-center gap-3">
											<span className="font-extrabold font-mono text-[#d69110] text-sm">
												LOCATION {branch.number}
											</span>
											<span className="h-px w-10 bg-[#d69110]/40" />
										</div>

										<h3 className="font-bold text-3xl text-slate-950 sm:text-4xl">
											{branch.name}
										</h3>

										<p className="font-semibold text-[#d69110] text-sm sm:text-base">
											{branch.role}
										</p>

										<p className="text-slate-700 text-sm leading-relaxed sm:text-base">
											{branch.details}
										</p>

										{/* Key Initiatives Bullets */}
										<div className="border-slate-200 border-t pt-4">
											<h4 className="font-bold text-slate-950 text-xs uppercase tracking-wider">
												Key Regional Initiatives:
											</h4>
											<div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
												{branch.projects.map((proj, idx) => (
													<div
														className="flex items-center gap-2 text-slate-800 text-xs"
														key={idx}
													>
														<CheckCircle2 className="h-4 w-4 shrink-0 text-[#d69110]" />
														<span>{proj}</span>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
