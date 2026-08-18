"use client";

import { FleetGridSection } from "./sections/FleetGridSection";
import { FleetHeroSection } from "./sections/FleetHeroSection";
import { FleetHighlightsSection } from "./sections/FleetHighlightsSection";

export default function FleetPage() {
	return (
		<div className="min-h-screen bg-white font-sans text-slate-900">
			<FleetHeroSection />
			<FleetGridSection />
			<FleetHighlightsSection />
		</div>
	);
}
