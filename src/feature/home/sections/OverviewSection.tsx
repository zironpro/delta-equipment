"use client";

import Image from "next/image";

import { CheckCircle2, ShieldCheck, Wrench, Zap } from "lucide-react";

interface PillarItem {
	icon: React.ElementType;
	title: string;
	description: string;
}

const BRAND_PILLARS: PillarItem[] = [
	{
		icon: ShieldCheck,
		title: "Factory Certified",
		description: "100% genuine JCB machinery, factory warranty, and OEM parts.",
	},
	{
		icon: Wrench,
		title: "24/7 Field Service",
		description:
			"Mobile technician units equipped for immediate site maintenance.",
	},
	{
		icon: Zap,
		title: "Maximum Fleet Uptime",
		description:
			"Engineered to withstand extreme African industrial environments.",
	},
	{
		icon: CheckCircle2,
		title: "Turnkey Support",
		description:
			"Complete equipment leasing, sales, operator training & support.",
	},
];

export function OverviewSection() {
	return (
		<section className="border-slate-200/80 border-t bg-[#FAF6F0] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
			<div className="mx-auto max-w-7xl">
				{/* Split Grid: Left Side Heading & Image, Right Side Text & Pillars */}
				<div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
					{/* Left Side: Bold Heading (Sticky on Desktop) */}
					<div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
						<div className="jcb-accent-border pl-4">
							<h2 className="font-bold font-heading text-3xl text-slate-950 leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
								Sudan&apos;s Official Dealer for Heavy JCB Machinery
							</h2>
						</div>
					</div>

					{/* Right Side: Overview Image, Description & Key Pillars */}
					<div className="lg:col-span-7">
						{/* Overview Image at Top of Right Side */}
						<div className="relative mb-6 overflow-hidden rounded-lg border border-slate-200/90 shadow-md">
							<Image
								alt="JCB Overview Machinery"
								className="h-auto w-full rounded-lg object-cover transition-transform duration-500 hover:scale-105"
								height={400}
								src="/images/over-view image.png"
								width={700}
							/>
						</div>

						<p className="font-medium font-sans text-lg text-slate-700 leading-relaxed sm:text-xl">
							As the authorized JCB dealer in Sudan, Delta Equipment provides
							world-class earthmoving, excavation, telescopic handling, and
							power generation solutions built to excel in the most challenging
							industrial environments.
						</p>
						<p className="mt-4 font-sans text-base text-slate-600 leading-relaxed">
							We combine heavy-duty British machinery engineering with
							comprehensive local field service, factory-certified spare parts,
							and dedicated technical assistance—ensuring your fleet delivers
							unbroken productivity across mining, infrastructure, quarry, and
							agricultural sites.
						</p>

						{/* Pillars Grid */}
						<div className="mt-10 grid grid-cols-1 gap-6 border-slate-200/80 border-t pt-8 sm:grid-cols-2">
							{BRAND_PILLARS.map((pillar) => {
								const IconComp = pillar.icon;
								return (
									<div className="flex items-start gap-3.5" key={pillar.title}>
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFB800] text-slate-950 shadow-sm">
											<IconComp className="h-5 w-5" />
										</div>
										<div>
											<h3 className="font-bold font-heading text-lg text-slate-950">
												{pillar.title}
											</h3>
											<p className="mt-0.5 font-sans text-slate-600 text-sm leading-snug">
												{pillar.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
