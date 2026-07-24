"use client";

import { CategorySection } from "./sections/CategorySection";
import { CtaSection } from "./sections/CtaSection";
import { HeroSection } from "./sections/HeroSection";
import { NewsSection } from "./sections/NewsSection";
import { OverviewSection } from "./sections/OverviewSection";
import { ShowcaseCarouselSection } from "./sections/ShowcaseCarouselSection";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-white font-sans text-slate-900">
			<HeroSection />
			<CategorySection />
			<OverviewSection />
			<ShowcaseCarouselSection />
			<NewsSection />
			<CtaSection />
		</div>
	);
}
