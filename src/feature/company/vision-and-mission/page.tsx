"use client";

import { VisionMissionHeroSection } from "./sections/VisionMissionHeroSection";
import { VisionMissionContentSection } from "./sections/VisionMissionContentSection";

export default function VisionMissionPage() {
	return (
		<main className="min-h-screen bg-[#FAF6F0] font-sans text-slate-900 selection:bg-[#FCAF20] selection:text-slate-950">
			<VisionMissionHeroSection />
			<VisionMissionContentSection />
		</main>
	);
}
