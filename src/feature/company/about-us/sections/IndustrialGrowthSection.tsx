"use client";

import type { Route } from "next";
import Link from "next/link";

import {
	ArrowUpRight,
	Globe,
	GraduationCap,
	MapPin,
	PhoneCall,
	ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const growthPillars = [
	{
		title: "International JCB Programs & Exhibitions",
		desc: "Active participation in global JCB technical conventions, machinery showcases, and engineering expos.",
		icon: Globe,
	},
	{
		title: "Continuous Technical Capacity Building",
		desc: "Factory-grade training for local Sudanese engineers and technicians to master LiveLink telematics & hydraulics.",
		icon: GraduationCap,
	},
	{
		title: "International Standards, Local Expertise",
		desc: "Combining global JCB manufacturing excellence with deep localized field experience in Sudan's harshest terrains.",
		icon: ShieldCheck,
	},
];

export function IndustrialGrowthSection({ content }: { content?: any }) {
	const data = content;
	const growthList = data?.growthPillars || growthPillars;
	const ICONS = [Globe, GraduationCap, ShieldCheck];

	return (
		<section className="border-slate-200 border-t bg-[#FAF6F0] py-20 font-sans text-slate-900 lg:py-28">
			<div className="container">
				{/* Main Narrative Card */}
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-manrope font-normal text-3xl text-slate-950 leading-tight tracking-tight sm:text-4xl lg:text-5xl">
						{data?.title || "Commitment to Sudan's Industrial Growth"}
					</h2>
					<p className="mt-5 font-sans text-base text-slate-600 leading-relaxed sm:text-lg">
						{data?.desc || "Through continuous technical development, participation in international JCB programs and exhibitions, and close collaboration with key industrial sectors, Delta Equipment remains committed to supporting Sudan's growing infrastructure and mining industries. By combining international equipment standards with local technical expertise, Delta Equipment continues to strengthen operational capacity across Sudan's most essential sectors."}
					</p>
				</div>

				{/* Commitment Pillars Grid */}
				<div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
					{growthList.map((p: any, idx: number) => {
						const Icon = ICONS[idx % ICONS.length] || Globe;
						return (
							<div
								className="hover:-translate-y-1 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#FCAF20]"
								key={p.title}
							>
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFC72C] to-[#FCAF20] text-slate-950 shadow-xs">
									<Icon className="h-6 w-6" />
								</div>
								<h3 className="mt-5 font-manrope font-normal text-lg text-slate-950 tracking-tight">
									{p.title}
								</h3>
								<p className="mt-2 font-sans text-slate-600 text-xs leading-relaxed">
									{p.desc}
								</p>
							</div>
						);
					})}
				</div>

				{/* Final Call To Action Banner */}
				<div className="mt-20 rounded-lg border border-slate-900 bg-slate-950 p-8 text-white shadow-xl sm:p-12">
					<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
						<div className="lg:col-span-8">
							<h3 className="font-bold text-2xl text-white sm:text-3xl">
								{data?.ctaTitle || "Partner with Sudan's Sole Authorized JCB Dealer"}
							</h3>
							<p className="mt-3 max-w-xl text-slate-300 text-sm">
								{data?.ctaDesc || "Equip your mining, construction, or agricultural project with world-class JCB machinery, diesel generators, and 24/7 technical field support."}
							</p>

							<div className="mt-6 flex flex-wrap gap-4 font-semibold text-slate-300 text-xs">
								<div className="flex items-center gap-2">
									<PhoneCall className="h-4 w-4 text-[#FCAF20]" />
									<span>{data?.contactInfo?.[0] || "Khartoum & Atbara Main Offices"}</span>
								</div>
								<div className="flex items-center gap-2">
									<MapPin className="h-4 w-4 text-[#FCAF20]" />
									<span>{data?.contactInfo?.[1] || "Al-Obeidia & Abu Hamad Mining Depots"}</span>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-3 lg:col-span-4">
							<Link href={"/fleet" as Route}>
								<Button className="h-11 w-full cursor-pointer justify-center bg-[#FCAF20] font-bold font-sans text-slate-950 text-sm hover:bg-amber-400">
									<span>{data?.buttonPrimary || "Explore Fleet Catalog"}</span>
									<ArrowUpRight className="ml-1.5 h-4 w-4" />
								</Button>
							</Link>

							<Link href={"/contact" as Route}>
								<Button
									className="h-11 w-full cursor-pointer justify-center border-slate-700 bg-slate-900 font-sans font-semibold text-sm text-white hover:bg-slate-800"
									variant="outline"
								>
									<span>{data?.buttonSecondary || "Contact Specialists"}</span>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
