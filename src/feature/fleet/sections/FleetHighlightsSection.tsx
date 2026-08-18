"use client";

import { Activity, ShieldCheck, Truck, Wrench } from "lucide-react";

export function FleetHighlightsSection({ content }: { content?: any }) {
	const data = content;
	const ICONS = [Activity, Wrench, ShieldCheck, Truck];

	return (
		<section className="border-slate-200/80 border-t bg-white py-16 sm:py-20 lg:py-24">
			<div className="container">
				<div className="mx-auto max-w-3xl space-y-3 text-center">
					<span className="font-semibold text-[#d69110] text-xs uppercase tracking-wider">
						{data?.tag || "Delta Value Guarantee"}
					</span>
					<h2 className="font-manrope font-normal text-3xl text-slate-950 tracking-tight sm:text-4xl">
						{data?.title || "Why Contractors Choose Delta Machinery"}
					</h2>
					<p className="font-sans text-base text-slate-600 leading-relaxed sm:text-lg">
						{data?.desc || "Every machine in our fleet comes standard with full official OEM backing and lifetime technical care."}
					</p>
				</div>

				<div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{data?.highlights?.map((item: any, idx: number) => {
						const Icon = ICONS[idx % ICONS.length];
						return (
							<div
								className="group hover:-translate-y-1 relative flex flex-col rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:border-[#FCAF20] hover:bg-white hover:shadow-lg"
								key={idx}
							>
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FCAF20]/20 text-slate-950 transition-colors group-hover:bg-[#FCAF20]">
									<Icon className="h-6 w-6 text-[#d69110] group-hover:text-slate-950" />
								</div>
								<h3 className="mt-5 font-bold font-heading text-lg text-slate-950">
									{item.title}
								</h3>
								<p className="mt-2 text-slate-600 text-sm leading-relaxed">
									{item.desc}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
