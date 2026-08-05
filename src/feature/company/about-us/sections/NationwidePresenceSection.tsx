"use client";

import { useState } from "react";

import Image from "next/image";

import { Building, MapPin, Sprout, Wrench } from "lucide-react";

import { cn } from "@/lib/utils";

const branchesData = [
	{
		id: "khartoum",
		name: "Khartoum",
		role: "Headquarters & Main Spare Parts Depot",
		type: "Main Office",
		icon: Building,
		details:
			"Central executive hub, primary spare parts distribution warehouse, master technical team, and client relations office.",
		projects: [
			"Government Infrastructure Initiatives",
			"National Power Generation Projects",
			"Heavy Fleet Sales & Financing",
		],
		image: "/images/info-1.png",
	},
	{
		id: "atbara",
		name: "Atbara",
		role: "Northern Operations & Industrial Center",
		type: "Main Office",
		icon: Building,
		details:
			"Primary industrial regional hub coordinating heavy machinery deployment, maintenance workshops, and mining support.",
		projects: [
			"Nile River State Mining Support",
			"Railway & Transport Infrastructure",
			"Industrial Plant Maintenance",
		],
		image: "/images/info-2.png",
	},
	{
		id: "al-obeidia",
		name: "Al-Obeidia",
		role: "Gold Mining & Extraction Branch",
		type: "Regional Branch",
		icon: Wrench,
		details:
			"Dedicated field branch providing 24/7 on-site technical service, hydraulic repair, and parts for gold mining operations.",
		projects: [
			"Gold Processing Support",
			"Artisanal & Commercial Quarrying",
			"24/7 Field Rapid Response",
		],
		image: "/images/escavator.png",
	},
	{
		id: "abu-hamad",
		name: "Abu Hamad",
		role: "Northern Mining Zone Branch",
		type: "Regional Branch",
		icon: MapPin,
		details:
			"Field operations depot supporting gold extraction and heavy earthmoving across Sudan's northernmost mineral reserves.",
		projects: [
			"Northern Mining Sector Support",
			"Remote Machinery Logistics",
			"LiveLink Telematics Monitoring",
		],
		image: "/images/over-view image.png",
	},
	{
		id: "gezira",
		name: "Gezira Scheme",
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
		image: "/images/fleet-bg.png",
	},
];

export function NationwidePresenceSection() {
	const [activeBranchId, setActiveBranchId] = useState("khartoum");
	const activeBranch =
		branchesData.find((b) => b.id === activeBranchId) || branchesData[0];

	return (
		<section
			className="scroll-mt-24 border-slate-200 border-t bg-white py-20 font-sans text-slate-900 lg:py-28"
			id="nationwide-presence"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-extrabold text-3xl text-slate-950 tracking-tight sm:text-4xl">
						Nationwide Presence in Sudan
					</h2>
					<p className="mt-4 text-base text-slate-600 leading-relaxed">
						Delta Equipment operates from its main offices in Khartoum and
						Atbara, with additional branches in Al-Obeidia and Abu Hamad,
						enabling effective service coverage across Sudan&apos;s key
						industrial, construction, and mining regions. The company has also
						contributed to major national projects, including government-related
						initiatives and support to large-scale agricultural developments
						such as the Gezira Scheme (Mashrou Al Jazira).
					</p>
				</div>

				{/* Interactive Branch Selector Buttons */}
				<div className="mt-12 flex flex-wrap justify-center gap-3">
					{branchesData.map((branch) => {
						const Icon = branch.icon;
						const isActive = branch.id === activeBranchId;
						return (
							<button
								className={cn(
									"flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 font-bold text-xs transition-all",
									isActive
										? "scale-105 border-slate-950 bg-slate-950 text-white shadow-md"
										: "border-slate-200 bg-[#FAF6F0] text-slate-800 hover:bg-slate-200/70"
								)}
								key={branch.id}
								onClick={() => setActiveBranchId(branch.id)}
								type="button"
							>
								<Icon className="h-4 w-4 text-[#EAA800]" />
								<span>{branch.name}</span>
							</button>
						);
					})}
				</div>

				{/* Branch Detail Interactive Showcase Card */}
				<div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-[#FAF6F0] p-6 shadow-sm transition-all duration-300 sm:p-10">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
						<div className="lg:col-span-7">
							<div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 font-semibold text-slate-900 text-xs shadow-sm">
								<span>{activeBranch.type}</span>
							</div>

							<h3 className="mt-3 font-bold text-2xl text-slate-950 sm:text-3xl">
								{activeBranch.name} Operations
							</h3>

							<p className="mt-1 font-semibold text-[#EAA800] text-sm">
								{activeBranch.role}
							</p>

							<p className="mt-4 text-slate-700 text-sm leading-relaxed sm:text-base">
								{activeBranch.details}
							</p>

							{/* Key Supported Projects */}
							<div className="mt-6 border-slate-200 border-t pt-4">
								<h4 className="font-bold text-slate-950 text-xs uppercase tracking-wider">
									Key Regional Initiatives & Projects:
								</h4>
								<div className="mt-3 space-y-2">
									{activeBranch.projects.map((proj, idx) => (
										<div
											className="flex items-center gap-2 text-slate-700 text-xs"
											key={idx}
										>
											<div className="h-1.5 w-1.5 rounded-full bg-[#EAA800]" />
											<span>{proj}</span>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Right Location Media */}
						<div className="lg:col-span-5">
							<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
								<Image
									alt={`${activeBranch.name} Branch Operations`}
									className="object-cover transition-transform duration-500 hover:scale-105"
									fill
									src={activeBranch.image}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
