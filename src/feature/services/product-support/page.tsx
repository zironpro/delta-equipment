"use client";

import { ProductSupportHeroSection } from "./sections/ProductSupportHeroSection";
import { ProductSupportContentSection } from "./sections/ProductSupportContentSection";

export default function ProductSupportPage({ mdxData }: { mdxData?: any }) {
	return (
		<main className="min-h-screen bg-[#FAF6F0] selection:bg-[#FCAF20] selection:text-slate-950">
			<ProductSupportHeroSection content={mdxData?.heroData} />
			<ProductSupportContentSection content={mdxData?.contentData} />
		</main>
	);
}
