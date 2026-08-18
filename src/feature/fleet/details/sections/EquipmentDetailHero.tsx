"use client";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Download, Gauge, Weight } from "lucide-react";

import type { EquipmentItem } from "@/data/fleetData";

interface EquipmentDetailHeroProps {
	item: EquipmentItem;
}

export function EquipmentDetailHero({ item }: EquipmentDetailHeroProps) {
	return (
		<div className="w-full bg-white pt-16 font-sans">
			{/* Full Width & Screen Height Product Showcase Hero Banner */}
			<section className="relative h-[calc(100vh-4rem)] min-h-[500px] w-full overflow-hidden bg-slate-950">
				<Image
					alt={item.name}
					className="object-cover object-center"
					fill
					priority
					quality={95}
					sizes="100vw"
					src={item.detailImage || item.image}
				/>
				{/* Clean Product Image Container */}
			</section>

			{/* Machine Specifications & Information Bar */}
			<section className="bg-[#FAF6F0] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
						{/* Left: Model Name & Description */}
						<div className="space-y-4 lg:col-span-8">
							<h1 className="font-manrope font-normal text-3xl text-slate-950 tracking-tight sm:text-5xl lg:text-6xl">
								{item.name}
							</h1>

							<p className="max-w-3xl font-sans text-base text-slate-700 leading-relaxed sm:text-lg">
								{item.tagline}
							</p>
						</div>

						{/* Right: Quick Action CTAs */}
						<div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
							<Link
								className="btn-curve btn-curve-dark inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 font-bold text-sm text-white shadow-md transition-all active:scale-[0.98]"
								href={"/contact" as Route}
							>
								<span>Get Quote</span>
								<ArrowUpRight className="h-4 w-4" />
							</Link>

							<button
								className="btn-curve btn-curve-outline inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 font-semibold text-slate-800 text-sm shadow-xs transition-colors"
								onClick={() => {
									const blob = new Blob(
										[
											`JCB ${item.name} Specification Sheet\n\nTagline: ${item.tagline}\nCategory: ${item.category}\n\nFor official sales & inquiries in Sudan, contact Delta Equipment (info@deltaequipment.sd)`,
										],
										{ type: "text/plain;charset=utf-8" }
									);
									const url = URL.createObjectURL(blob);
									const a = document.createElement("a");
									a.href = url;
									a.download = `JCB-${item.name.replace(/\s+/g, "-")}-Brochure.txt`;
									document.body.appendChild(a);
									a.click();
									document.body.removeChild(a);
									URL.revokeObjectURL(url);
								}}
								type="button"
							>
								<Download className="h-4 w-4 text-slate-600" />
								<span>Download Brochure</span>
							</button>
						</div>
					</div>

					{/* Metrics Summary Strip */}
					<div className="mt-8 grid grid-cols-2 gap-4 border-slate-200/80 border-t pt-8 sm:grid-cols-4">
						<div className="rounded-lg border border-slate-200/80 bg-white p-4 shadow-xs">
							<div className="flex items-center gap-2 text-slate-500">
								<Weight className="h-4 w-4 text-[#d69110]" />
								<span className="font-semibold text-slate-500 text-xs uppercase">
									Operating Weight
								</span>
							</div>
							<p className="mt-1 font-bold font-heading text-lg text-slate-950">
								{item.operatingWeight}
							</p>
						</div>

						<div className="rounded-lg border border-slate-200/80 bg-white p-4 shadow-xs">
							<div className="flex items-center gap-2 text-slate-500">
								<Gauge className="h-4 w-4 text-[#d69110]" />
								<span className="font-semibold text-slate-500 text-xs uppercase">
									Engine Power
								</span>
							</div>
							<p className="mt-1 font-bold font-heading text-lg text-slate-950">
								{item.enginePower}
							</p>
						</div>

						{item.bucketCapacity && (
							<div className="rounded-lg border border-slate-200/80 bg-white p-4 shadow-xs">
								<div className="flex items-center gap-2 text-slate-500">
									<span className="font-semibold text-slate-500 text-xs uppercase">
										Bucket Capacity
									</span>
								</div>
								<p className="mt-1 font-bold font-heading text-lg text-slate-950">
									{item.bucketCapacity}
								</p>
							</div>
						)}
					</div>
				</div>
			</section>
		</div>
	);
}
