"use client";

import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight, Award, Globe, GraduationCap, PhoneCall, ShieldCheck, Mail, MapPin } from "lucide-react";
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

export function IndustrialGrowthSection() {
	return (
		<section className="bg-[#FAF6F0] py-20 lg:py-28 font-sans text-slate-900 border-t border-slate-200">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Main Narrative Card */}
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
						Commitment to Sudan&apos;s Industrial Growth
					</h2>
					<p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed">
						Through continuous technical development, participation in international JCB programs and exhibitions, and close collaboration with key industrial sectors, Delta Equipment remains committed to supporting Sudan&apos;s growing infrastructure and mining industries. By combining international equipment standards with local technical expertise, Delta Equipment continues to strengthen operational capacity across Sudan&apos;s most essential sectors.
					</p>
				</div>

				{/* Commitment Pillars Grid */}
				<div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
					{growthPillars.map((p) => {
						const Icon = p.icon;
						return (
							<div
								key={p.title}
								className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#FCAF20] hover:-translate-y-1"
							>
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-[#FCAF20]">
									<Icon className="h-6 w-6" />
								</div>
								<h3 className="mt-5 font-bold text-base text-slate-950">{p.title}</h3>
								<p className="mt-2 text-xs text-slate-600 leading-relaxed">{p.desc}</p>
							</div>
						);
					})}
				</div>

				{/* Final Call To Action Banner */}
				<div className="mt-20 rounded-3xl border border-slate-900 bg-slate-950 p-8 sm:p-12 text-white shadow-xl">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
						<div className="lg:col-span-8">
							<h3 className="text-2xl font-bold text-white sm:text-3xl">
								Partner with Sudan&apos;s Sole Authorized JCB Dealer
							</h3>
							<p className="mt-3 text-sm text-slate-300 max-w-xl">
								Equip your mining, construction, or agricultural project with world-class JCB machinery, diesel generators, and 24/7 technical field support.
							</p>

							<div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
								<div className="flex items-center gap-2">
									<PhoneCall className="h-4 w-4 text-[#FCAF20]" />
									<span>Khartoum & Atbara Main Offices</span>
								</div>
								<div className="flex items-center gap-2">
									<MapPin className="h-4 w-4 text-[#FCAF20]" />
									<span>Al-Obeidia & Abu Hamad Mining Depots</span>
								</div>
							</div>
						</div>

						<div className="lg:col-span-4 flex flex-col gap-3">
							<Link href={"/fleet" as Route}>
								<Button className="w-full justify-center bg-[#FCAF20] font-bold font-sans text-slate-950 hover:bg-amber-400 h-12 text-sm cursor-pointer">
									<span>Explore Heavy Fleet Catalog</span>
									<ArrowUpRight className="ml-1.5 h-4 w-4" />
								</Button>
							</Link>

							<Link href={"#contact" as Route}>
								<Button variant="outline" className="w-full justify-center border-slate-700 bg-slate-900 font-semibold font-sans text-white hover:bg-slate-800 h-12 text-sm cursor-pointer">
									<span>Contact Machinery Specialists</span>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
