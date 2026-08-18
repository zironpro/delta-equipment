import type { Metadata } from "next";
import AnnualServiceContractPage from "@/feature/services/annual-service-contract/page";
import { getMdxContent } from "@/lib/mdx";

export const metadata: Metadata = {
	title: "Annual Service Contract | Delta Equipment - Authorized JCB Dealer Sudan",
	description:
		"Enroll in Delta Equipment's Annual Service Contract for new & used JCB machines. Comprises 2 major and 3 minor services, genuine parts discounts, and authorised service history.",
};

export default async function AnnualServiceContractRoute({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const heroData = getMdxContent("services/annual-service-contract", locale, "AnnualServiceHeroSection")?.frontmatter;
	const contentData = getMdxContent("services/annual-service-contract", locale, "AnnualServiceContentSection")?.frontmatter;

	return <AnnualServiceContractPage mdxData={{ heroData, contentData }} />;
}
