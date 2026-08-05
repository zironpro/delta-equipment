"use client";

import { ProductSupportHeroSection } from "./sections/ProductSupportHeroSection";
import { ProductSupportContentSection } from "./sections/ProductSupportContentSection";

export default function ProductSupportPage() {
	return (
		<main className="min-h-screen bg-[#FAF6F0] font-sans text-slate-900 selection:bg-[#FCAF20] selection:text-slate-950">
			<ProductSupportHeroSection />
			<ProductSupportContentSection />
		</main>
	);
}
