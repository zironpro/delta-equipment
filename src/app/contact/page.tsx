import type { Metadata } from "next";
import ContactPage from "@/feature/contact/page";

export const metadata: Metadata = {
	title: "Contact Us | Delta Equipment - Authorized JCB Dealer Sudan",
	description:
		"Get in touch with Delta Equipment in Khartoum, Atbara, Al-Obeidia, or Abu Hamad for heavy machinery sales, genuine JCB parts, and 24/7 technical field support.",
};

export default function ContactRoute() {
	return <ContactPage />;
}
