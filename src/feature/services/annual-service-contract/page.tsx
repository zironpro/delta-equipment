"use client";

import { AnnualServiceHeroSection } from "./sections/AnnualServiceHeroSection";
import { AnnualServiceContentSection } from "./sections/AnnualServiceContentSection";

export default function AnnualServiceContractPage() {
	return (
		<main className="min-h-screen bg-[#FAF6F0] font-sans text-slate-900 selection:bg-[#FCAF20] selection:text-slate-950">
			<AnnualServiceHeroSection />
			<AnnualServiceContentSection />
		</main>
	);
}
