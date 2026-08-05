import type { Metadata } from "next";
import ProductSupportPage from "@/feature/services/product-support/page";

export const metadata: Metadata = {
	title: "Product Support | Delta Equipment - Authorized JCB Dealer Sudan",
	description:
		"Discover genuine JCB spare parts supply, technical support networks, and on-site field diagnostics across Khartoum, Atbara, and Sudan.",
};

export default function ProductSupportRoute() {
	return <ProductSupportPage />;
}
