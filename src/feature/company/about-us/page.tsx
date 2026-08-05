"use client";

import { AboutHeroSection } from "./sections/AboutHeroSection";
import { WhoWeAreInteractiveSection } from "./sections/WhoWeAreInteractiveSection";
import { MiningIndustrialSection } from "./sections/MiningIndustrialSection";
import { NationwidePresenceSection } from "./sections/NationwidePresenceSection";
import { IndustrialGrowthSection } from "./sections/IndustrialGrowthSection";

export default function AboutUsPage() {
	return (
		<main className="min-h-screen bg-[#FAF6F0] font-sans text-slate-900 selection:bg-[#FCAF20] selection:text-slate-950">
			<AboutHeroSection />
			<WhoWeAreInteractiveSection />
			<MiningIndustrialSection />
			<NationwidePresenceSection />
			<IndustrialGrowthSection />
		</main>
	);
}
