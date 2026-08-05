import type { Metadata } from "next";
import MessageFromMdPage from "@/feature/company/message-from-md/page";

export const metadata: Metadata = {
	title: "Message from MD | Delta Equipment - Authorized JCB Dealer Sudan",
	description:
		"Read the official statement from the Managing Director of Delta Equipment, Sudan's sole authorized JCB dealer.",
};

export default function MessageFromMdRoute() {
	return <MessageFromMdPage />;
}
