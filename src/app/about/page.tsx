import type { Metadata } from "next";
import AboutUsPage from "@/feature/company/about-us/page";

export const metadata: Metadata = {
	title: "About Us | Delta Equipment - Authorized JCB Dealer Sudan",
	description:
		"Learn about Delta Equipment, Sudan's official authorized dealer for JCB heavy machinery, excavators, Loadalls, and LiveLink telematics since 1998.",
};

export default function AboutRoute() {
	return <AboutUsPage />;
}
