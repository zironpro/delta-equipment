export interface EquipmentSpec {
	label: string;
	value: string;
}

export interface EquipmentCategory {
	id: string;
	name: string;
	description: string;
	count?: number;
}

export interface EquipmentItem {
	id: string;
	slug: string;
	name: string;
	model: string;
	category: string;
	categoryName: string;
	image: string;
	detailImage?: string;
	tagline: string;
	operatingWeight: string;
	enginePower: string;
	payloadCapacity?: string;
	bucketCapacity?: string;
	maxDigDepth?: string;
	maxReach?: string;
	availability: "In Stock" | "Available" | "On Request";
	badge?: string;
	description: string;
	keyFeatures: string[];
	specifications: Record<string, string>;
}

export const FLEET_CATEGORIES: EquipmentCategory[] = [
	{
		id: "all",
		name: "All Equipment",
		description:
			"Browse the entire fleet of JCB heavy equipment and machinery.",
	},
	{
		id: "excavators",
		name: "Excavators",
		description:
			"Heavy-duty excavators built for maximum breakout force and productivity.",
	},
	{
		id: "telehandlers",
		name: "Telescopic Handlers",
		description:
			"Versatile Loadall telehandlers engineered for high reach and heavy lifting.",
	},
	{
		id: "wheel-loaders",
		name: "Wheel Loaders",
		description:
			"High-capacity wheel loaders for tough material handling and quarrying.",
	},
	{
		id: "backhoes",
		name: "Backhoe Loaders",
		description:
			"Industry-defining 3CX & 4CX backhoe loaders for multipurpose performance.",
	},
	{
		id: "compaction",
		name: "Compaction Rollers",
		description:
			"Soil and asphalt rollers for optimal density and smooth finishing.",
	},
	{
		id: "skid-steer",
		name: "Skid Steer Loaders",
		description:
			"Compact & agile skid steer loaders for tight space earthmoving and material handling.",
	},
	{
		id: "power",
		name: "Generators",
		description:
			"Continuous and standby diesel power generators engineered for harsh environments.",
	},
];




