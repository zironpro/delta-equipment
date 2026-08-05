import type { Metadata } from "next";
import InsightsAndNewsPage from "@/feature/company/insights-and-news/page";

export const metadata: Metadata = {
	title: "Insights & News | Delta Equipment - Authorized JCB Dealer Sudan",
	description:
		"Stay updated on JCB heavy machinery releases, fleet expansion announcements, satellite telematics technology, and field guides across Sudan.",
};

export default function InsightsAndNewsRoute() {
	return <InsightsAndNewsPage />;
}
