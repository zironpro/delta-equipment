"use client";

import { CategorySection } from "./sections/CategorySection";
import { CtaSection } from "./sections/CtaSection";
import { FaqSection } from "./sections/FaqSection";
import { FeaturesShowcaseSection } from "./sections/FeaturesShowcaseSection";
import { HeroSection } from "./sections/HeroSection";
import { NewsSection } from "./sections/NewsSection";
import { OverviewSection } from "./sections/OverviewSection";

export default function HomePage({ mdxData }: { mdxData?: any }) {
	return (
		<div className="min-h-screen bg-white font-sans text-slate-900">
			<HeroSection content={mdxData?.heroData} />
			<div className="relative z-10 bg-[#FAF6F0] shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.3)]">
				<CategorySection content={mdxData?.categoryData} />
				<OverviewSection content={mdxData?.overviewData} />
				<FeaturesShowcaseSection content={mdxData?.featuresData} />
				{/* <ShowcaseCarouselSection /> */}
				<NewsSection content={mdxData?.newsData} />
				<FaqSection content={mdxData?.faqData} />
				<CtaSection content={mdxData?.ctaData} />
			</div>
		</div>
	);
}
