"use client";

import { FleetGridSection } from "./sections/FleetGridSection";
import { FleetHeroSection } from "./sections/FleetHeroSection";
import { FleetHighlightsSection } from "./sections/FleetHighlightsSection";

import { type EquipmentItem } from "@/data/fleetData";

export default function FleetPage({ mdxData, fleetItems, locale }: { mdxData?: any; fleetItems: EquipmentItem[]; locale: string }) {
	return (
		<div className="min-h-screen bg-white font-sans text-slate-900">
			<FleetHeroSection content={mdxData?.heroData} />
			<FleetGridSection content={mdxData?.gridData} fleetItems={fleetItems} locale={locale} />
			<FleetHighlightsSection content={mdxData?.highlightsData} />
		</div>
	);
}
