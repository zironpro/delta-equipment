import type { Metadata } from "next";
import AboutUsPage from "@/feature/company/about-us/page";

import { getMdxContent } from "@/lib/mdx";

export const metadata: Metadata = {
	title: "About Us | Delta Equipment - Authorized JCB Dealer Sudan",
	description:
		"Learn about Delta Equipment, Sudan's official authorized dealer for JCB heavy machinery, excavators, Loadalls, and LiveLink telematics since 1998.",
};

export default async function AboutRoute({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const heroData = getMdxContent("about", locale, "AboutHeroSection")?.frontmatter;
	const whoWeAreData = getMdxContent("about", locale, "WhoWeAreInteractiveSection")?.frontmatter;
	const miningData = getMdxContent("about", locale, "MiningIndustrialSection")?.frontmatter;
	const presenceData = getMdxContent("about", locale, "NationwidePresenceSection")?.frontmatter;
	const growthData = getMdxContent("about", locale, "IndustrialGrowthSection")?.frontmatter;

	return <AboutUsPage mdxData={{ heroData, whoWeAreData, miningData, presenceData, growthData }} />;
}
