"use client";

import { AnnualServiceContentSection } from "./sections/AnnualServiceContentSection";
import { AnnualServiceHeroSection } from "./sections/AnnualServiceHeroSection";

export default function AnnualServiceContractPage({ mdxData }: { mdxData?: any }) {
	return (
		<main className="min-h-screen bg-[#FAF6F0] selection:bg-[#FCAF20] selection:text-slate-950">
			<AnnualServiceHeroSection content={mdxData?.heroData} />
			<AnnualServiceContentSection content={mdxData?.contentData} />
		</main>
	);
}
