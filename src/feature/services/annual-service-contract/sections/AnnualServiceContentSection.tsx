"use client";

import type { Route } from "next";
import Link from "next/link";

import {
	ArrowUpRight,
	Award,
	CalendarCheck,
	CheckCircle2,
	DollarSign,
	ShieldCheck,
	Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const contractBenefits = [
	{
		title: "2 Major Services",
		desc: "Full system fluid flush, major filter replacements, and deep technical inspection.",
		icon: Wrench,
	},
	{
		title: "3 Minor Services",
		desc: "Regular oil & filter maintenance, safety checks, and health diagnostic reports.",
		icon: CalendarCheck,
	},
	{
		title: "OEM Parts & Labor Discounts",
		desc: "Special discounted rates on genuine JCB spare parts, lubricants, and technician labor.",
		icon: DollarSign,
	},
	{
		title: "Authorised Dealer History",
		desc: "Official full-service record from Delta Equipment maximizing machine resale value.",
		icon: Award,
	},
];

export function AnnualServiceContentSection() {
	return (
		<section className="bg-[#FAF6F0] py-16 font-sans text-slate-900 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Main Narrative Intro Card */}
				<div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
					<span className="font-extrabold text-[#EAA800] text-xs uppercase tracking-wider">
						Official Maintenance Program
					</span>
					<h2 className="mt-2 font-extrabold text-2xl text-slate-950 leading-tight sm:text-4xl">
						Peace of Mind & Hassle-Free Machine Ownership
					</h2>
					<p className="mt-4 text-base text-slate-700 leading-relaxed sm:text-lg">
						If you own a JCB machine, you know that it is essential to keep it
						running smoothly to ensure maximum efficiency and profitability.
						That&apos;s why Delta Equipment is offering an Annual Service
						Contract for both new and used JCB machines, comprising of two major
						and three minor services, to give you peace of mind and hassle-free
						ownership.
					</p>

					{/* 4 Package Highlights Grid */}
					<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{contractBenefits.map((b) => {
							const Icon = b.icon;
							return (
								<div
									className="rounded-lg border border-slate-200 bg-[#FAF6F0] p-4"
									key={b.title}
								>
									<Icon className="h-5 w-5 text-[#EAA800]" />
									<h3 className="mt-2 font-bold text-slate-950 text-xs">
										{b.title}
									</h3>
									<p className="mt-1 text-[11px] text-slate-600 leading-snug">
										{b.desc}
									</p>
								</div>
							);
						})}
					</div>
				</div>

				{/* Two Main Detailed Cards */}
				<div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
					{/* Savings & Full-Service History Card */}
					<div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#FCAF20]">
						<div>
							<div className="flex h-12 w-12 items-center justify-center rounded-lg border border-amber-200 bg-amber-50 text-[#EAA800]">
								<DollarSign className="h-6 w-6" />
							</div>

							<h3 className="mt-6 font-extrabold text-2xl text-slate-950">
								Savings & Full-Service History
							</h3>

							<p className="mt-4 text-slate-700 text-sm leading-relaxed sm:text-base">
								By signing up for this contract, you can enjoy a range of
								benefits, including special discounts on genuine JCB parts,
								lubricants, and labor, which will help to minimise your
								maintenance costs. Furthermore, you will have the assurance that
								your machine will have a full-service history from an authorised
								JCB dealer, making it more attractive to potential buyers when
								you decide to sell it.
							</p>
						</div>

						<div className="mt-8 flex items-center justify-between border-slate-100 border-t pt-4">
							<span className="font-semibold text-slate-500 text-xs">
								Maximized Resale Value
							</span>
							<Award className="h-5 w-5 text-[#EAA800]" />
						</div>
					</div>

					{/* Reliable Maintenance Card */}
					<div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#FCAF20]">
						<div>
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-[#FCAF20]">
								<ShieldCheck className="h-6 w-6" />
							</div>

							<h3 className="mt-6 font-extrabold text-2xl text-slate-950">
								Reliable Maintenance
							</h3>

							<p className="mt-4 text-slate-700 text-sm leading-relaxed sm:text-base">
								Another significant advantage of this service contract is that
								your machine will be serviced on time by fully trained
								technicians using genuine JCB parts, which will reduce the risk
								of breakdowns and unexpected downtime. Additionally, your
								machine will receive regular health checks after each service,
								ensuring that it is always in top condition and ready to perform
								at its best.
							</p>
						</div>

						<div className="mt-8 flex items-center justify-between border-slate-100 border-t pt-4">
							<span className="font-semibold text-slate-500 text-xs">
								24/7 Factory-Trained Technicians
							</span>
							<Wrench className="h-5 w-5 text-[#EAA800]" />
						</div>
					</div>
				</div>

				{/* Smart Investment Highlight Card */}
				<div className="mt-10 rounded-lg border border-amber-200 bg-amber-50/70 p-8 text-slate-900 shadow-sm sm:p-10">
					<div className="flex items-start gap-4">
						<CheckCircle2 className="mt-1 h-8 w-8 shrink-0 text-[#EAA800]" />
						<div>
							<h3 className="font-extrabold text-slate-950 text-xl">
								Smart Investment for Your Machine&apos;s Future
							</h3>
							<p className="mt-2 text-base text-slate-700 leading-relaxed">
								Delta Equipment&apos;s Annual Service Contract ensures your
								machine is well-maintained, reducing unexpected breakdowns and
								improving its longevity and resale value.
							</p>
						</div>
					</div>
				</div>

				{/* Call to Action Banner */}
				<div className="mt-16 flex flex-col gap-6 rounded-lg border border-slate-900 bg-slate-950 p-8 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-12">
					<div>
						<h3 className="font-bold text-2xl text-white">
							Enroll Your Machine in an Annual Service Contract
						</h3>
						<p className="mt-2 max-w-xl text-slate-300 text-sm">
							Available for all new and existing JCB backhoes, excavators, wheel
							loaders, and generators in Sudan.
						</p>
					</div>

					<div className="flex items-center gap-3">
						<Link href={"/contact" as Route}>
							<Button className="h-11 bg-[#FCAF20] px-6 font-bold font-sans text-slate-950 text-xs hover:bg-amber-400">
								<span>Enroll Your Machinery</span>
								<ArrowUpRight className="ml-1.5 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
