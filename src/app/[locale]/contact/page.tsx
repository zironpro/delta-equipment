import type { Metadata } from "next";
import ContactPage from "@/feature/contact/page";
import { getMdxContent } from "@/lib/mdx";

export const metadata: Metadata = {
	title: "Contact Us | Delta Equipment - Authorized JCB Dealer Sudan",
	description:
		"Get in touch with Delta Equipment in Khartoum, Atbara, Al-Obeidia, or Abu Hamad for heavy machinery sales, genuine JCB parts, and 24/7 technical field support.",
};

export default async function ContactRoute({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const heroData = getMdxContent("contact", locale, "ContactHeroSection")?.frontmatter;
	const formData = getMdxContent("contact", locale, "ContactFormSection")?.frontmatter;
	const mapData = getMdxContent("contact", locale, "ContactMapSection")?.frontmatter;

	return <ContactPage mdxData={{ heroData, formData, mapData }} />;
}
