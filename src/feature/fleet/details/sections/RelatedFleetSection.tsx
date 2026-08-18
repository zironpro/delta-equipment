"use client";

import { useState } from "react";

import type { EquipmentItem } from "@/data/fleetData";

import { EquipmentCard } from "../../components/EquipmentCard";
import { SpecModal } from "../../components/SpecModal";

interface RelatedFleetSectionProps {
	relatedItems: EquipmentItem[];
	locale: string;
	uiData: any;
}

export function RelatedFleetSection({ relatedItems, locale, uiData }: RelatedFleetSectionProps) {
	const [selectedSpecItem, setSelectedSpecItem] =
		useState<EquipmentItem | null>(null);

	if (relatedItems.length === 0) return null;

	return (
		<section className="border-slate-200 border-t bg-[#FAF6F0] py-12 sm:py-16 lg:py-20">
			<div className="container space-y-8">
				<div className="flex flex-col space-y-2">
					<span className="font-semibold text-[#d69110] text-xs uppercase tracking-wider">
						{uiData?.recommendations || "Recommendations"}
					</span>
					<h2 className="font-bold font-heading text-2xl text-slate-950 sm:text-3xl">
						{uiData?.similarEquipment || "Similar Heavy Equipment"}
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{relatedItems.map((item) => (
						<EquipmentCard
							item={item}
							key={item.id}
							locale={locale}
							onViewSpecs={(selected) => setSelectedSpecItem(selected)}
						/>
					))}
				</div>
			</div>

			<SpecModal
				item={selectedSpecItem}
				onClose={() => setSelectedSpecItem(null)}
			/>
		</section>
	);
}
