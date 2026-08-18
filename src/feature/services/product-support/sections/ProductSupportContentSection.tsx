"use client";

import type { Route } from "next";
import Link from "next/link";

import {
	ArrowUpRight,
	CheckCircle2,
	MapPin,
	Package,
	ShieldCheck,
	Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const afterSalesPillars = [
	{
		title: "Genuine Spare Parts Supply",
		desc: "Authentic JCB OEM components backed by factory warranty to eliminate operational downtime.",
		icon: Package,
	},
	{
		title: "Preventive Maintenance Programs",
		desc: "Scheduled inspection routines designed to preserve machine efficiency and extend engine life.",
		icon: ShieldCheck,
	},
	{
		title: "Technical Diagnostics & Troubleshooting",
		desc: "Advanced LiveLink and computerized diagnostics to pinpoint machine errors rapidly.",
		icon: Wrench,
	},
	{
		title: "On-Site Field Service Support",
		desc: "Dedicated mobile engineering units responding 24/7 across Sudan's mining and construction zones.",
		icon: MapPin,
	},
];

const supportedEquipmentList = [
	"JCB 3CX & 4CX Backhoe Loaders",
	"Heavy Tracked & Wheeled Excavators",
	"Wheel Loaders & Telehandlers",
	"JCB Diesel Generators (Power Solutions)",
];

export function ProductSupportContentSection({ content }: { content?: any }) {
	const data = content;
	const pillarsList = data?.pillars || afterSalesPillars;
	const ICONS = [Package, ShieldCheck, Wrench, MapPin];

	return (
		<section className="bg-[#FAF6F0] py-16 font-sans text-slate-900 sm:py-24">
			<div className="container">
				{/* Main Overview Narrative Card */}
				<div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
					<span className="font-semibold text-[#D69110] text-xs uppercase tracking-wider">
						{data?.tag || "Official After-Sales & Engineering Support"}
					</span>
					<h2 className="mt-2 font-manrope font-normal text-2xl text-slate-950 tracking-tight sm:text-4xl">
						{data?.title || "Trusted Sole Supplier of Genuine JCB Parts & Support in Sudan"}
					</h2>
					<p className="mt-4 font-sans text-base text-slate-600 leading-relaxed sm:text-lg">
						{data?.desc || "Delta Equipment is a trusted sole supplier of genuine JCB spare parts in Sudan, ensuring machinery operates at peak performance and long-term reliability. Our after-sales support includes genuine spare parts supply, preventive maintenance programs, technical diagnostics and troubleshooting, and on-site field service support."}
					</p>

					{/* 4 Core Pillars Badges Grid */}
					<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{pillarsList.map((p: any, idx: number) => {
							const Icon = ICONS[idx % ICONS.length] || Package;
							return (
								<div
									className="rounded-lg border border-slate-200 bg-[#FAF6F0] p-4"
									key={p.title}
								>
									<Icon className="h-5 w-5 text-[#EAA800]" />
									<h3 className="mt-2 font-bold text-slate-950 text-xs">
										{p.title}
									</h3>
									<p className="mt-1 text-[11px] text-slate-600 leading-snug">
										{p.desc}
									</p>
								</div>
							);
						})}
					</div>
				</div>

				{/* Two Main Feature Content Cards */}
				<div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
					{/* Genuine Spare Parts Supply Card */}
					<div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#FCAF20]">
						<div>
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFC72C] to-[#FCAF20] text-slate-950 shadow-xs">
								<Package className="h-6 w-6" />
							</div>

							<h3 className="mt-6 font-manrope font-normal text-2xl text-slate-950 tracking-tight">
								{data?.feature1Title || "Genuine Spare Parts Supply"}
							</h3>

							<p className="mt-4 font-sans text-slate-600 text-sm leading-relaxed sm:text-base">
								{data?.feature1Desc || "We provide genuine JCB spare parts to ensure your machinery operates at peak performance with long-term reliability. Our extensive inventory covers a wide range of JCB equipment, including backhoe loaders, excavators, wheel loaders, and diesel generators."}
							</p>

							{/* Covered Equipment Checklist */}
							<div className="mt-6 space-y-2 border-slate-100 border-t pt-4">
								<span className="mb-2 block font-semibold text-slate-950 text-xs uppercase tracking-wider">
									{data?.feature1ListTag || "Covered JCB Equipment Lines:"}
								</span>
								{(data?.supportedEquipmentList || supportedEquipmentList).map((item: string) => (
									<div
										className="flex items-center gap-2 font-semibold text-slate-800 text-xs"
										key={item}
									>
										<CheckCircle2 className="h-4 w-4 shrink-0 text-[#D69110]" />
										<span>{item}</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Technical Support Network Card */}
					<div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#FCAF20]">
						<div>
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFC72C] to-[#FCAF20] text-slate-950 shadow-xs">
								<MapPin className="h-6 w-6" />
							</div>

							<h3 className="mt-6 font-manrope font-normal text-2xl text-slate-950 tracking-tight">
								{data?.feature2Title || "Technical Support Network"}
							</h3>

							<p className="mt-4 text-slate-700 text-sm leading-relaxed sm:text-base">
								{data?.feature2Desc || "With an established technical support network across Khartoum, Atbara, and other operational regions, Delta Equipment ensures responsive local service and dependable support. Our technical support structure helps reduce downtime and maintain operational efficiency across critical projects."}
							</p>

							{/* Regional Coverage Highlight */}
							<div className="mt-6 rounded-lg border border-slate-200 bg-[#FAF6F0] p-4">
								<h4 className="font-bold text-slate-950 text-xs">
									{data?.feature2SubTag || "Key Regional Service Hubs:"}
								</h4>
								<p className="mt-1 text-slate-600 text-xs" dangerouslySetInnerHTML={{ __html: data?.feature2SubDesc || `Main Service Depots in <strong>Khartoum</strong> & <strong>Atbara</strong>, with remote field units in <strong>Al-Obeidia</strong> and <strong>Abu Hamad</strong>.` }} />
							</div>
						</div>

						<div className="mt-8 flex items-center justify-between border-slate-100 border-t pt-4">
							<span className="font-semibold text-slate-500 text-xs">
								{data?.feature2Label || "24/7 Field Diagnostics"}
							</span>
							<Wrench className="h-5 w-5 text-[#EAA800]" />
						</div>
					</div>
				</div>

				{/* Call to Action Banner */}
				<div className="mt-16 flex flex-col gap-6 rounded-lg border border-slate-900 bg-slate-950 p-8 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-12">
					<div>
						<h3 className="font-bold text-2xl text-white">
							{data?.ctaTitle || "Need OEM Spare Parts or Technical Service?"}
						</h3>
						<p className="mt-2 max-w-xl text-slate-300 text-sm">
							{data?.ctaDesc || "Inquire directly with our spare parts inventory specialists or request an emergency field diagnostic engineer."}
						</p>
					</div>

					<div className="flex items-center gap-3">
						<Link href={"/contact" as Route}>
							<Button className="h-11 bg-[#FCAF20] px-6 font-bold font-sans text-slate-950 text-xs hover:bg-amber-400">
								<span>{data?.ctaBtn || "Request Genuine Parts Quote"}</span>
								<ArrowUpRight className="ml-1.5 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
