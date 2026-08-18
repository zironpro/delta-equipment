import FleetPage from "@/feature/fleet/page";
import { getMdxContent } from "@/lib/mdx";
import { getLocalizedFleet } from "@/lib/fleetFetcher";

export const metadata = {
	title: "Heavy Equipment Fleet | Delta Equipment Sudan",
	description:
		"Explore Sudan's premier fleet of official JCB excavators, telehandlers, wheel loaders, backhoe loaders, and compaction machinery.",
};

export default async function Fleet({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const heroData = getMdxContent("fleet", locale, "FleetHeroSection")?.frontmatter;
	const gridData = getMdxContent("fleet", locale, "FleetGridSection")?.frontmatter;
	const highlightsData = getMdxContent("fleet", locale, "FleetHighlightsSection")?.frontmatter;
	const fleetItems = getLocalizedFleet(locale);

	return <FleetPage mdxData={{ heroData, gridData, highlightsData }} fleetItems={fleetItems} locale={locale} />;
}
