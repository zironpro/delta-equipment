import HomePage from "@/feature/home/page";
import { getMdxContent, getAllMdxContent } from "@/lib/mdx";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const heroData = getMdxContent("home", locale, "HeroSection")?.frontmatter;
	const categoryData = getMdxContent("home", locale, "CategorySection")?.frontmatter;
	const overviewData = getMdxContent("home", locale, "OverviewSection")?.frontmatter;
	const featuresData = getMdxContent("home", locale, "FeaturesShowcaseSection")?.frontmatter;
	let newsData = getMdxContent("home", locale, "NewsSection")?.frontmatter;
	const faqData = getMdxContent("home", locale, "FaqSection")?.frontmatter;
	const ctaData = getMdxContent("home", locale, "CtaSection")?.frontmatter;

	const blogs = getAllMdxContent("company/insights-and-news/blogs", locale).map((file) => file.frontmatter);
	if (newsData) {
		newsData = { ...newsData, articles: blogs };
	}

	return <HomePage mdxData={{ heroData, categoryData, overviewData, featuresData, newsData, faqData, ctaData }} />;
}
