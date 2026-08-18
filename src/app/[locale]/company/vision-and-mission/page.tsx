import type { Metadata } from "next";
import VisionMissionPage from "@/feature/company/vision-and-mission/page";
import { getMdxContent } from "@/lib/mdx";

export const metadata: Metadata = {
	title: "Vision & Mission | Delta Equipment - Authorized JCB Dealer Sudan",
	description:
		"Discover Delta Equipment's vision and mission for driving industrial growth across Sudan's mining, construction, agriculture, and infrastructure sectors.",
};

export default async function VisionMissionRoute({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const heroMdx = getMdxContent("company/vision-and-mission", locale, "HeroSection");
	const contentMdx = getMdxContent("company/vision-and-mission", locale, "ContentSection");

	return <VisionMissionPage mdxData={{ heroMdx, contentMdx }} />;
}
