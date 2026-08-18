import type { Metadata } from "next";
import MessageFromMdPage from "@/feature/company/message-from-md/page";
import { getMdxContent } from "@/lib/mdx";

export const metadata: Metadata = {
	title: "Message from MD | Delta Equipment - Authorized JCB Dealer Sudan",
	description:
		"Read the official statement from the Managing Director of Delta Equipment, Sudan's sole authorized JCB dealer.",
};

export default async function MessageFromMdRoute({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const heroMdx = getMdxContent("company/message-from-md", locale, "HeroSection");
	const letterMdx = getMdxContent("company/message-from-md", locale, "LetterSection");

	return <MessageFromMdPage mdxData={{ heroMdx, letterMdx }} />;
}
