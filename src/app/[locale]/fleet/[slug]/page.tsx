import type { Metadata } from "next";
import { getEquipmentBySlug, getRelatedEquipment } from "@/lib/fleetFetcher";
import EquipmentDetailPage from "@/feature/fleet/details/page";
import { getMdxContent } from "@/lib/mdx";

interface PageProps {
	params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const resolvedParams = await params;
	const item = getEquipmentBySlug(resolvedParams.slug, resolvedParams.locale);

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
	const uiData = getMdxContent("fleet", resolvedParams.locale, "DetailsUI")?.frontmatter;
	const item = getEquipmentBySlug(resolvedParams.slug, resolvedParams.locale);
	const relatedItems = item ? getRelatedEquipment(item.id, item.category, resolvedParams.locale, 3) : [];

	return <EquipmentDetailPage item={item} relatedItems={relatedItems} locale={resolvedParams.locale} uiData={uiData} />;
}
