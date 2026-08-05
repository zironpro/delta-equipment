"use client";

import { InsightsHeroSection } from "./sections/InsightsHeroSection";
import { InsightsGridSection } from "./sections/InsightsGridSection";

export default function InsightsAndNewsPage() {
	return (
		<main className="min-h-screen bg-[#FAF6F0] font-sans text-slate-900 selection:bg-[#FCAF20] selection:text-slate-950">
			<InsightsHeroSection />
			<InsightsGridSection />
		</main>
	);
}
