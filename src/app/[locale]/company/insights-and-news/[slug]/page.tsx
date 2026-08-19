import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getAllMdxContent } from "@/lib/mdx";
import InsightsDetailPage from "@/feature/company/insights-and-news/details/page";

interface InsightsDetailRouteProps {
	params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
	params,
}: InsightsDetailRouteProps): Promise<Metadata> {
	const { locale, slug } = await params;
	const blogs = getAllMdxContent("company/insights-and-news/blogs", locale);
	const blog = blogs.find((b) => b.frontmatter.id === slug);

	if (!blog) {
		return {
			title: "Insight Not Found",
		};
	}

	return {
		title: `${blog.frontmatter.title} | Delta Equipment Insights`,
		description: blog.frontmatter.excerpt,
	};
}

export default async function InsightsDetailRoute({
	params,
}: InsightsDetailRouteProps) {
	const { locale, slug } = await params;

	const blogs = getAllMdxContent("company/insights-and-news/blogs", locale);
	const blog = blogs.find((b) => b.frontmatter.id === slug);

	if (!blog) {
		notFound();
	}

	return <InsightsDetailPage blog={{ ...blog.frontmatter, content: blog.content }} />;
}
