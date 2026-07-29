import type { Metadata } from "next";
import { getEquipmentBySlug } from "@/data/fleetData";
import EquipmentDetailPage from "@/feature/fleet/details/page";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const resolvedParams = await params;
	const item = getEquipmentBySlug(resolvedParams.slug);

	if (!item) {
		return {
			title: "Machine Not Found | Delta Equipment",
			description: "The requested equipment item was not found in Delta Equipment's fleet.",
		};
	}

	return {
		title: `${item.name} | Delta Equipment Fleet`,
		description: item.tagline || item.description,
	};
}

export default async function Page({ params }: PageProps) {
	const resolvedParams = await params;
	return <EquipmentDetailPage slug={resolvedParams.slug} />;
}
