import type { Metadata } from "next";
import ProductSupportPage from "@/feature/services/product-support/page";
import { getMdxContent } from "@/lib/mdx";

export const metadata: Metadata = {
	title: "Product Support | Delta Equipment - Authorized JCB Dealer Sudan",
	description:
		"Discover genuine JCB spare parts supply, technical support networks, and on-site field diagnostics across Khartoum, Atbara, and Sudan.",
};

export default async function ProductSupportRoute({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const heroData = getMdxContent("services/product-support", locale, "ProductSupportHeroSection")?.frontmatter;
	const contentData = getMdxContent("services/product-support", locale, "ProductSupportContentSection")?.frontmatter;

	return <ProductSupportPage mdxData={{ heroData, contentData }} />;
}
