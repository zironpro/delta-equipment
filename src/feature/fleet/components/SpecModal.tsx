"use client";

import { useEffect } from "react";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import {
	ArrowUpRight,
	CheckCircle2,
	Download,
	FileText,
	Shield,
	X,
} from "lucide-react";

import type { EquipmentItem } from "@/data/fleetData";

interface SpecModalProps {
	item: EquipmentItem | null;
	onClose: () => void;
}

export function SpecModal({ item, onClose }: SpecModalProps) {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		if (item) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			document.body.style.overflow = "unset";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [item, onClose]);

	if (!item) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
			{/* Backdrop */}
			<div
				className="fade-in fixed inset-0 animate-in bg-slate-950/70 backdrop-blur-xs transition-opacity duration-200"
				onClick={onClose}
			/>

			{/* Modal Card Box */}
			<div className="zoom-in-95 relative z-10 flex max-h-[90vh] w-full max-w-4xl animate-in flex-col overflow-hidden rounded-2xl bg-white shadow-2xl duration-200">
				{/* Modal Header */}
				<div className="flex items-center justify-between border-slate-200 border-b bg-slate-50 px-6 py-4">
					<div className="flex items-center gap-3">
						<span className="rounded-md bg-slate-950 px-3 py-1 font-bold text-sm text-white">
							{item.model}
						</span>
						<div>
							<span className="font-semibold text-[#d69110] text-xs uppercase">
								{item.categoryName}
							</span>
							<h3 className="font-bold font-heading text-lg text-slate-950 sm:text-xl">
								{item.name}
							</h3>
						</div>
					</div>

					<button
						aria-label="Close dialog"
						className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-colors hover:bg-slate-300 hover:text-slate-950"
						onClick={onClose}
						type="button"
					>
						<X className="h-5 w-5" />
					</button>
				</div>

				{/* Modal Scrollable Body */}
				<div className="flex-1 space-y-8 overflow-y-auto p-6 sm:p-8">
					{/* Machine Image & Key Specs Header */}
					<div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center">
						<div className="relative h-64 w-full overflow-hidden rounded-xl bg-slate-100/80 md:col-span-6">
							<Image
								alt={item.name}
								className="object-contain p-4"
								fill
								priority
								src={item.image}
							/>
						</div>

						<div className="flex flex-col justify-center space-y-4 md:col-span-6">
							<p className="font-sans text-base text-slate-700 leading-relaxed">
								{item.description}
							</p>

							{/* Key Metrics Badges */}
							<div className="grid grid-cols-2 gap-3 pt-2">
								<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
									<span className="font-semibold text-[11px] text-slate-400 uppercase">
										Operating Weight
									</span>
									<p className="mt-0.5 font-bold text-base text-slate-950">
										{item.operatingWeight}
									</p>
								</div>

								<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
									<span className="font-semibold text-[11px] text-slate-400 uppercase">
										Engine Power
									</span>
									<p className="mt-0.5 font-bold text-base text-slate-950">
										{item.enginePower}
									</p>
								</div>
							</div>

							<div className="flex items-center gap-2 pt-1 text-slate-600 text-xs">
								<Shield className="h-4 w-4 shrink-0 text-emerald-600" />
								<span>
									Full 1-Year Factory Warranty & 24/7 Field Maintenance Included
								</span>
							</div>
						</div>
					</div>

					{/* Key Features List */}
					<div>
						<h4 className="border-slate-200 border-b pb-2 font-bold font-heading text-lg text-slate-950">
							Key Performance Features
						</h4>
						<ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
							{item.keyFeatures.map((feature, idx) => (
								<li
									className="flex items-start gap-2.5 text-slate-700 text-sm"
									key={idx}
								>
									<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#d69110]" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Full Technical Specifications Table */}
					<div>
						<h4 className="flex items-center gap-2 border-slate-200 border-b pb-2 font-bold font-heading text-lg text-slate-950">
							<FileText className="h-5 w-5 text-[#d69110]" />
							<span>Technical Specifications</span>
						</h4>

						<div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
							<table className="w-full text-left text-slate-700 text-sm">
								<tbody className="divide-y divide-slate-200 bg-white">
									{Object.entries(item.specifications).map(
										([key, val], idx) => (
											<tr
												className={
													idx % 2 === 0 ? "bg-slate-50/60" : "bg-white"
												}
												key={key}
											>
												<td className="w-1/2 px-4 py-3 font-semibold text-slate-900">
													{key}
												</td>
												<td className="w-1/2 px-4 py-3 text-slate-700">
													{val}
												</td>
											</tr>
										)
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				{/* Modal Footer Actions */}
				<div className="flex flex-col gap-3 border-slate-200 border-t bg-slate-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
					<button
						className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-medium text-slate-800 text-xs shadow-xs transition-colors hover:bg-slate-100"
						onClick={() => {
							const capacity = item.bucketCapacity || item.payloadCapacity;
							const capacityLine = capacity ? `\n- Capacity: ${capacity}` : "";
							const blob = new Blob(
								[
									`JCB ${item.name} Official Specification Sheet\n\nTagline: ${item.tagline}\nCategory: ${item.category}\n\nKey Specs:\n- Engine Power: ${item.enginePower}\n- Operating Weight: ${item.operatingWeight}${capacityLine}\n\nFor official sales & inquiries in Sudan, contact Delta Equipment (info@deltaequipment.sd)`,
								],
								{ type: "text/plain;charset=utf-8" }
							);
							const url = URL.createObjectURL(blob);
							const a = document.createElement("a");
							a.href = url;
							a.download = `JCB-${item.name.replace(/\s+/g, "-")}-Specs.txt`;
							document.body.appendChild(a);
							a.click();
							document.body.removeChild(a);
							URL.revokeObjectURL(url);
						}}
						type="button"
					>
						<Download className="h-4 w-4 text-slate-600" />
						<span>Download Product PDF Brochure</span>
					</button>

					<Link
						className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#FCAF20] px-6 py-2.5 font-bold text-slate-950 text-xs shadow-md transition-all hover:bg-amber-400 active:scale-[0.98]"
						href={"/contact" as Route}
						onClick={onClose}
					>
						<span>Request Official Quote</span>
						<ArrowUpRight className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</div>
	);
}
