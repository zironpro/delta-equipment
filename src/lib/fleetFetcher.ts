import type { EquipmentItem } from "@/data/fleetData";
import { getAllMdxContent } from "@/lib/mdx";

export function getLocalizedFleet(locale: string): EquipmentItem[] {
	const mdxData = getAllMdxContent("fleet/machines", locale);

	return mdxData.map((item) => {
		const f = item.frontmatter as Record<string, any>;
		return {
			id: f.id,
			slug: f.slug,
			name: f.name,
			model: f.model,
			category: f.category,
			categoryName: f.categoryName,
			image: f.image,
			detailImage: f.detailImage,
			brochure: f.brochure,
			tagline: f.tagline,
			operatingWeight: f.operatingWeight,
			enginePower: f.enginePower,
			payloadCapacity: f.payloadCapacity,
			bucketCapacity: f.bucketCapacity,
			maxDigDepth: f.maxDigDepth,
			maxReach: f.maxReach,
			availability: f.availability || "In Stock",
			badge: f.badge,
			description: item.content,
			keyFeatures: f.keyFeatures || [],
			specifications: f.specifications || {},
		} as EquipmentItem;
	});
}

export function getEquipmentBySlug(
	slug: string,
	locale: string
): EquipmentItem | undefined {
	const fleet = getLocalizedFleet(locale);
	return fleet.find((item) => item.slug === slug || item.id === slug);
}

export function getRelatedEquipment(
	currentId: string,
	category: string,
	locale: string,
	limit = 3
): EquipmentItem[] {
	const fleet = getLocalizedFleet(locale);
	const sameCategory = fleet.filter(
		(item) => item.id !== currentId && item.category === category
	);

	if (sameCategory.length >= limit) {
		return sameCategory.slice(0, limit);
	}

	const otherItems = fleet.filter(
		(item) => item.id !== currentId && item.category !== category
	);

	return [...sameCategory, ...otherItems].slice(0, limit);
}
