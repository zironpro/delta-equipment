"use client";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import {
	ArrowRight,
	ArrowUpRight,
	CheckCircle2,
	ShieldCheck,
	Wrench,
	Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface PillarItem {
	icon: React.ElementType;
	title: string;
	description: string;
	drawing: React.ReactNode;
}

const BRAND_PILLARS: PillarItem[] = [
	{
		icon: ShieldCheck,
		title: "Factory Certified Machinery",
		description:
			"Direct access to genuine JCB heavy equipment with full manufacturer warranty and 100% authentic OEM spare parts.",
		drawing: (
			<svg
				className="-top-6 -right-6 pointer-events-none absolute h-48 w-48 text-[#FCAF20]/25 transition-transform duration-500 group-hover:scale-110"
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
				viewBox="0 0 200 200"
			>
				<circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
				<circle cx="100" cy="100" r="60" />
				<circle cx="100" cy="100" r="40" strokeDasharray="2 2" />
				<path d="M100 10 V 190 M10 100 H 190" strokeDasharray="6 6" />
				<path d="M40 40 L160 160 M160 40 L40 160" strokeWidth="0.5" />
				<rect height="60" rx="6" strokeWidth="1.5" width="60" x="70" y="70" />
			</svg>
		),
	},
	{
		icon: Wrench,
		title: "24/7 Mobile Technical Support",
		description:
			"Fully equipped mobile service units with factory-trained technicians ready to deploy across remote mining and job sites in Sudan.",
		drawing: (
			<svg
				className="-right-6 -bottom-6 pointer-events-none absolute h-48 w-48 text-[#FCAF20]/25 transition-transform duration-500 group-hover:scale-110"
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
				viewBox="0 0 200 200"
			>
				<path d="M10 100 Q 50 20, 100 100 T 190 100" strokeWidth="1.5" />
				<path d="M10 120 Q 50 40, 100 120 T 190 120" strokeDasharray="3 3" />
				<circle cx="100" cy="100" r="70" strokeDasharray="5 5" />
				<path d="M30 30 H 170 V 170 H 30 Z" strokeDasharray="4 4" />
				<circle cx="150" cy="50" r="16" strokeWidth="1.5" />
				<path d="M142 50 H 158 M150 42 V 58" />
			</svg>
		),
	},
	{
		icon: Zap,
		title: "Engineered for Extreme Terrains",
		description:
			"High-durability machinery built to deliver unbroken performance under Sudan's intense ambient temperatures and harsh environments.",
		drawing: (
			<svg
				className="-top-6 -right-6 pointer-events-none absolute h-48 w-48 text-[#FCAF20]/25 transition-transform duration-500 group-hover:scale-110"
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
				viewBox="0 0 200 200"
			>
				<path
					d="M0 160 C 40 120, 80 180, 120 140 C 160 100, 180 150, 200 130"
					strokeWidth="1.5"
				/>
				<path
					d="M0 130 C 50 90, 90 150, 130 110 C 170 70, 190 120, 200 100"
					strokeDasharray="4 4"
				/>
				<path
					d="M0 100 C 60 60, 100 120, 140 80 C 180 40, 190 90, 200 70"
					strokeDasharray="2 2"
				/>
				<polygon
					points="100,20 170,60 170,140 100,180 30,140 30,60"
					strokeWidth="1.2"
				/>
				<line strokeDasharray="4 4" x1="100" x2="100" y1="20" y2="180" />
			</svg>
		),
	},
	{
		icon: CheckCircle2,
		title: "Turnkey Fleet Solutions",
		description:
			"Comprehensive equipment supply, flexible leasing options, certified operator training, and lifetime maintenance agreements.",
		drawing: (
			<svg
				className="-right-6 -bottom-6 pointer-events-none absolute h-48 w-48 text-[#FCAF20]/25 transition-transform duration-500 group-hover:scale-110"
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
				viewBox="0 0 200 200"
			>
				<g strokeDasharray="3 3">
					<line x1="0" x2="200" y1="40" y2="40" />
					<line x1="0" x2="200" y1="80" y2="80" />
					<line x1="0" x2="200" y1="120" y2="120" />
					<line x1="0" x2="200" y1="160" y2="160" />
					<line x1="40" x2="40" y1="0" y2="200" />
					<line x1="80" x2="80" y1="0" y2="200" />
					<line x1="120" x2="120" y1="0" y2="200" />
					<line x1="160" x2="160" y1="0" y2="200" />
				</g>
				<circle cx="80" cy="80" r="10" strokeWidth="1.5" />
				<circle cx="160" cy="40" r="8" strokeWidth="1.5" />
				<circle cx="120" cy="160" r="12" strokeWidth="1.5" />
				<line strokeWidth="1.5" x1="80" x2="160" y1="80" y2="40" />
				<line strokeWidth="1.5" x1="80" x2="120" y1="80" y2="160" />
			</svg>
		),
	},
];

export function OverviewSection() {
	return (
		<section className="border-slate-200/80 border-t bg-[#FAF6F0] py-16 font-sans text-slate-900 sm:py-20 lg:py-24">
			<div className="container">
				{/* Centered Section Header with Fast Text Reveal Animations */}
				<div className="mx-auto flex max-w-4xl flex-col items-center text-center">
					<div className="overflow-hidden">
						<h2
							className="reveal-on-scroll font-manrope font-normal text-3xl text-reveal-up text-slate-950 tracking-tight sm:text-5xl lg:text-5xl"
							data-animate="fast-up"
						>
							Sudan&apos;s Authorized Dealer for Heavy JCB Machinery
						</h2>
					</div>
					<div className="mt-4 max-w-2xl overflow-hidden">
						<p
							className="reveal-on-scroll font-sans text-base text-reveal-up text-slate-600 leading-relaxed sm:text-lg"
							data-animate="fast-up"
						>
							Powering Sudan&apos;s infrastructure, mining, and agricultural
							developments with industry-leading heavy equipment and end-to-end
							lifetime support.
						</p>
					</div>
				</div>

				{/* Two-Column Grid: Feature Image (Left) & Overview Narrative (Right) */}
				<div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
					{/* Left Column: Feature Image & Quick Stats Bar */}
					<div
						className="reveal-on-scroll flex flex-col gap-6 lg:col-span-6"
						data-animate="left"
					>
						<div className="group relative overflow-hidden rounded-2xl border border-amber-200/80 bg-white p-2.5 shadow-sm transition-all duration-300 hover:border-[#FCAF20] hover:shadow-md">
							<div className="relative overflow-hidden rounded-xl bg-amber-50/50">
								<Image
									alt="JCB Heavy Machinery Fleet Overview"
									className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-103"
									height={500}
									priority
									src="/images/over-view image.webp"
									width={800}
								/>
							</div>
						</div>
					</div>

					{/* Right Column: Executive Overview Narrative with Fast Text Reveal */}
					<div
						className="reveal-on-scroll flex flex-col gap-6 lg:col-span-6"
						data-animate="right"
					>
						<div className="rounded-2xl border border-amber-200/80 bg-white p-6 shadow-xs sm:p-8">
							<div className="mb-2 overflow-hidden">
								<div
									className="reveal-on-scroll inline-flex items-center gap-1.5 font-semibold text-[#D69110] text-reveal-up text-xs uppercase tracking-wider"
									data-animate="fast-up"
								>
									<span className="h-1.5 w-1.5 rounded-full bg-[#FCAF20]" />
									Executive Summary
								</div>
							</div>
							<div className="overflow-hidden">
								<h3
									className="reveal-on-scroll font-manrope font-normal text-2xl text-reveal-up text-slate-950 tracking-tight sm:text-3xl"
									data-animate="fast-up"
								>
									Unrivaled Heavy Equipment Excellence
								</h3>
							</div>
							<div className="overflow-hidden">
								<p
									className="reveal-on-scroll mt-4 font-sans text-base text-reveal-up text-slate-600 leading-relaxed sm:text-lg"
									data-animate="fast-up"
								>
									As the official JCB dealer in Sudan, Delta Equipment supplies
									heavy-duty earthmoving, excavation, telescopic handling, and
									power generation solutions engineered to excel in demanding
									environments.
								</p>
							</div>
							<div className="overflow-hidden">
								<p
									className="reveal-on-scroll mt-4 font-sans text-base text-reveal-up text-slate-600 leading-relaxed sm:text-lg"
									data-animate="fast-up"
								>
									We combine heavy-duty British machinery engineering with
									comprehensive local field service, factory-certified spare
									parts, and dedicated technical assistance—ensuring your fleet
									delivers unbroken productivity across mining, infrastructure,
									quarry, and agricultural sites.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Brand Pillars Row (4 Columns Side-by-Side in a Row) */}
				<div className="mt-12 sm:mt-16">
					<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{BRAND_PILLARS.map((pillar, idx) => {
							const IconComp = pillar.icon;
							return (
								<div
									className={`reveal-on-scroll stagger-${idx + 1} group relative flex flex-col justify-between overflow-hidden rounded-xl border border-amber-200/80 bg-gradient-to-br from-white via-[#FFFBF5] to-[#FFF6E5] p-6 shadow-xs transition-all duration-300 hover:border-[#FCAF20] hover:shadow-md`}
									data-animate="scale"
									key={pillar.title}
								>
									{/* Custom Technical SVG Blueprint Drawing */}
									{pillar.drawing}

									<div className="relative z-10">
										<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFC72C] to-[#FCAF20] text-slate-950 shadow-xs">
											<IconComp className="h-5.5 w-5.5" />
										</div>
										<div className="overflow-hidden">
											<h4
												className="reveal-on-scroll font-manrope font-normal text-lg text-reveal-up text-slate-950 tracking-tight sm:text-xl"
												data-animate="fast-up"
											>
												{pillar.title}
											</h4>
										</div>
										<div className="overflow-hidden">
											<p
												className="reveal-on-scroll mt-2 font-sans text-reveal-up text-slate-600 text-xs leading-relaxed sm:text-sm"
												data-animate="fast-up"
											>
												{pillar.description}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Bottom CTA Banner (Overlay Theme with Background Pattern) */}
				<div
					className="reveal-on-scroll -mb-16 sm:-mb-20 lg:-mb-24 relative z-20 mt-14 overflow-hidden rounded-2xl border border-amber-300/80 bg-[#FFFDF9] p-6 text-slate-950 shadow-xl sm:p-8 lg:p-10"
					data-animate="scale"
				>
					<Image
						alt="CTA Card Background Pattern"
						className="pointer-events-none object-cover"
						fill
						src="/images/card-bg.webp"
					/>
					{/* Gradient Overlay Layer */}
					<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FFFDF9]/92 via-[#FFF8EC]/85 to-[#FFF3DC]/90" />

					<div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
						<div className="max-w-2xl">
							<div className="overflow-hidden">
								<h3
									className="reveal-on-scroll font-manrope font-normal text-2xl text-reveal-up text-slate-950 tracking-tight sm:text-4xl"
									data-animate="fast-up"
								>
									Need Fleet Sizing or Custom Equipment Quotes?
								</h3>
							</div>
							<div className="overflow-hidden">
								<p
									className="reveal-on-scroll mt-2 font-sans text-base text-reveal-up text-slate-700"
									data-animate="fast-up"
								>
									Our heavy machinery engineers are ready to assist with
									technical specifications, job site assessments, and customized
									sales or leasing plans.
								</p>
							</div>
						</div>
						<div className="flex w-full flex-wrap items-center gap-3.5 sm:w-auto">
							<Link className="w-full sm:w-auto" href={"/contact" as Route}>
								<Button className="h-11 w-full cursor-pointer bg-[#FCAF20] px-6 font-bold font-sans text-slate-950 text-sm shadow-xs transition-colors hover:bg-amber-400 sm:w-auto">
									<span>Contact Specialists</span>
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
							<Link className="w-full sm:w-auto" href={"/fleet" as Route}>
								<Button
									className="h-11 w-full cursor-pointer border border-amber-300 bg-white px-6 font-sans font-semibold text-slate-950 text-sm shadow-xs transition-colors hover:bg-amber-50 sm:w-auto"
									variant="outline"
								>
									<span>View Machinery Fleet</span>
									<ArrowUpRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
