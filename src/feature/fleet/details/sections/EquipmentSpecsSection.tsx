"use client";

import { CheckCircle2, FileText, Wrench } from "lucide-react";

import type { EquipmentItem } from "@/data/fleetData";

interface EquipmentSpecsSectionProps {
	item: EquipmentItem;
}

export function EquipmentSpecsSection({ item }: EquipmentSpecsSectionProps) {
	return (
		<section className="bg-white py-12 sm:py-16 lg:py-20">
			<div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
				{/* Machine Overview & Description */}
				<div className="max-w-4xl space-y-4">
					<span className="font-semibold text-[#d69110] text-xs uppercase tracking-wider">
						Product Overview
					</span>
					<h2 className="font-bold font-heading text-2xl text-slate-950 sm:text-3xl">
						Engineering & Performance Details
					</h2>
					<p className="font-sans text-base text-slate-700 leading-relaxed sm:text-lg">
						{item.description}
					</p>
				</div>

				{/* Key Features List Grid */}
				<div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8">
					<h3 className="mb-6 flex items-center gap-2 font-bold font-heading text-slate-950 text-xl">
						<Wrench className="h-5 w-5 text-[#d69110]" />
						<span>Key Features & Operator Benefits</span>
					</h3>

					<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						{item.keyFeatures.map((feature, idx) => (
							<li
								className="flex items-start gap-3 text-slate-800 text-sm"
								key={idx}
							>
								<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d69110]" />
								<span className="leading-snug">{feature}</span>
							</li>
						))}
					</ul>
				</div>

				{/* Detailed Specifications Table */}
				<div className="space-y-6">
					<div className="flex items-center gap-2 border-slate-200 border-b pb-4">
						<FileText className="h-5 w-5 text-[#d69110]" />
						<h3 className="font-bold font-heading text-slate-950 text-xl">
							Technical Specifications Matrix
						</h3>
					</div>

					<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
						<table className="w-full text-left text-slate-700 text-sm">
							<tbody className="divide-y divide-slate-200">
								{Object.entries(item.specifications).map(([key, val], idx) => (
									<tr
										className={idx % 2 === 0 ? "bg-slate-50/60" : "bg-white"}
										key={key}
									>
										<td className="w-1/2 px-6 py-4 font-semibold text-slate-900">
											{key}
										</td>
										<td className="w-1/2 px-6 py-4 font-medium text-slate-700">
											{val}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
}
