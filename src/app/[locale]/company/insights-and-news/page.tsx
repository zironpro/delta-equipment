import type { Metadata } from "next";
import InsightsAndNewsPage from "@/feature/company/insights-and-news/page";
import { getMdxContent, getAllMdxContent } from "@/lib/mdx";

export const metadata: Metadata = {
	title: "Insights & News | Delta Equipment - Authorized JCB Dealer Sudan",
	description:
		"Stay updated on JCB heavy machinery releases, fleet expansion announcements, satellite telematics technology, and field guides across Sudan.",
};

export default async function InsightsAndNewsRoute({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const heroMdx = getMdxContent("company/insights-and-news", locale, "HeroSection");
	const blogs = getAllMdxContent("company/insights-and-news/blogs", locale).map((file) => file.frontmatter);

	return <InsightsAndNewsPage mdxData={{ heroMdx, blogs }} />;
}
