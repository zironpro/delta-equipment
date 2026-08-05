import type { Metadata } from "next";
import VisionMissionPage from "@/feature/company/vision-and-mission/page";

export const metadata: Metadata = {
	title: "Vision & Mission | Delta Equipment - Authorized JCB Dealer Sudan",
	description:
		"Discover Delta Equipment's vision and mission for driving industrial growth across Sudan's mining, construction, agriculture, and infrastructure sectors.",
};

export default function VisionMissionRoute() {
	return <VisionMissionPage />;
}
