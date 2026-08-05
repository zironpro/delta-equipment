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
		description: "Browse the entire fleet of JCB heavy equipment and machinery.",
	},
	{
		id: "excavators",
		name: "Excavators",
		description: "Heavy-duty excavators built for maximum breakout force and productivity.",
	},
	{
		id: "telehandlers",
		name: "Telescopic Handlers",
		description: "Versatile Loadall telehandlers engineered for high reach and heavy lifting.",
	},
	{
		id: "wheel-loaders",
		name: "Wheel Loaders",
		description: "High-capacity wheel loaders for tough material handling and quarrying.",
	},
	{
		id: "backhoes",
		name: "Backhoe Loaders",
		description: "Industry-defining 3CX & 4CX backhoe loaders for multipurpose performance.",
	},
	{
		id: "compaction",
		name: "Compaction Rollers",
		description: "Soil and asphalt rollers for optimal density and smooth finishing.",
	},
	{
		id: "skid-steer",
		name: "Skid Steer Loaders",
		description: "Compact & agile skid steer loaders for tight space earthmoving and material handling.",
	},
	{
		id: "power",
		name: "Generators",
		description: "Continuous and standby diesel power generators engineered for harsh environments.",
	},
];

export const FLEET_ITEMS: EquipmentItem[] = [
	{
		id: "jcb-30-plus",
		slug: "jcb-30-plus",
		name: "JCB 30 Plus Excavator",
		model: "30 Plus",
		category: "excavators",
		categoryName: "Excavators",
		image: "/images/catagory/escavator.webp",
		tagline: "Class leading lift capacity with Perkins power for maximum job site productivity.",
		operatingWeight: "2,800 kg",
		enginePower: "25 HP",
		bucketCapacity: "0.07 m³",
		availability: "In Stock",
		badge: "Popular",
		description:
			"The JCB 30 Plus compact excavator is powered by a reliable PERKINS 403D-15 engine delivering 25 HP. Designed for best-in-class operator comfort, superior lift capacity, and renowned JCB build quality.",
		keyFeatures: [
			"More Power with PERKINS 403D-15 Engine",
			"Class Leading Lift Capacity",
			"Assurance Of World Class JCB Quality",
			"Best In Class Operator Comfort",
			"650+ Dealership Outlets",
			"3000 Hours/1 Year Warranty",
		],
		specifications: {
			"Engine Model": "PERKINS 403D-15",
			"Engine Power": "25 HP",
			"Bucket Capacity": "0.07 cu.m",
			"Operating Weight": "2,800 kg",
			Warranty: "3000 Hours / 1 Year",
		},
	},
	{
		id: "jcb-81",
		slug: "jcb-81",
		name: "JCB 81 Tracked Excavator",
		model: "81",
		category: "excavators",
		categoryName: "Excavators",
		image: "/images/catagory/escavator.webp",
		tagline: "High fuel efficiency with superior digging force and 8-ton operating capacity.",
		operatingWeight: "8,000 kg",
		enginePower: "76 HP",
		bucketCapacity: "0.24 - 0.32 m³",
		availability: "In Stock",
		badge: "Heavy Duty",
		description:
			"The JCB 81 8-ton excavator features a robust Kirloskar 4R 1040 NA engine producing 76 HP. Engineered for exceptional fuel economy, heavy-duty reinforced structure, and extended maintenance intervals.",
		keyFeatures: [
			"More Fuel Efficiency",
			"Excellent Digging Ability & Improved Lifting Capacity",
			"Durable Heavy-Duty Reinforced Structure",
			"Extended Service Intervals (Engine Oil: 500 hrs, Hydraulic Oil: 5,000 hrs)",
		],
		specifications: {
			"Engine Model": "Kirloskar 4R 1040 NA",
			"Engine Power": "76 HP",
			"Bucket Capacity": "0.24 - 0.32 cu.m",
			"Operating Weight": "8,000 kg",
			"Engine Oil Service": "500 Hours",
			"Hydraulic Oil Service": "5,000 Hours",
		},
	},
	{
		id: "jcb-130",
		slug: "jcb-130",
		name: "JCB 130 Tracked Excavator",
		model: "130",
		category: "excavators",
		categoryName: "Excavators",
		image: "/images/catagory/escavator.webp",
		tagline: "13-ton class tracked excavator built for enhanced productivity and AC cabin operator comfort.",
		operatingWeight: "12,800 kg",
		enginePower: "80 HP",
		bucketCapacity: "0.50 - 0.65 m³",
		availability: "In Stock",
		badge: "High Efficiency",
		description:
			"The JCB 130 13-ton tracked excavator is powered by the dependable JCB 444 NA engine producing 80 HP. Designed for demanding construction and quarry applications with enhanced fuel efficiency and a fully air-conditioned cabin.",
		keyFeatures: [
			"Enhanced Fuel Efficiency with JCB 444 NA Engine",
			"Enhanced Site Productivity & Breakout Force",
			"Built for Extreme Job Site Reliability",
			"Comfortable Fully Air-Conditioned Operator Cabin",
		],
		specifications: {
			"Engine Model": "JCB 444 NA",
			"Engine Power": "80 HP",
			"Bucket Capacity": "0.50 - 0.65 cu.m",
			"Operating Weight": "12,800 kg",
			"Cabin Type": "Air Conditioned Cabin",
		},
	},
	{
		id: "jcb-140",
		slug: "jcb-140",
		name: "JCB 140 Tracked Excavator",
		model: "140",
		category: "excavators",
		categoryName: "Excavators",
		image: "/images/catagory/escavator.webp",
		tagline: "14-ton excavator with Cummins 100 HP engine, 10 working modes, and smart control display.",
		operatingWeight: "14,320 kg",
		enginePower: "100 HP",
		bucketCapacity: "0.63 - 0.72 m³",
		availability: "In Stock",
		badge: "Smart Control",
		description:
			"The JCB 140 14-ton tracked excavator is powered by a high-output Cummins 4BT 3.9C engine producing 100 HP. Featuring 10 customizable working modes, 6% higher productivity output, and advanced smart control display monitoring.",
		keyFeatures: [
			"6% Higher Output with Cummins 4BT 3.9C Engine",
			"10 Versatile Working Modes for All Applications",
			"Advanced Smart Control Multi-Function Display",
			"Long Maintenance Intervals for Engine & Hydraulics",
		],
		specifications: {
			"Engine Model": "Cummins 4BT 3.9C",
			"Engine Power": "100 HP",
			"Bucket Capacity": "0.63 - 0.72 cu.m",
			"Operating Weight": "14,320 kg",
			"Working Modes": "10 Selectable Modes",
		},
	},
	{
		id: "jcb-nxt-205",
		slug: "jcb-nxt-205",
		name: "JCB NXT 205 Tracked Excavator",
		model: "NXT 205",
		category: "excavators",
		categoryName: "Excavators",
		image: "/images/catagory/escavator.webp",
		tagline: "20.5-ton excavator with 140 HP Cummins engine, Eco mode fuel saving, and Power+ mode productivity.",
		operatingWeight: "20,500 kg",
		enginePower: "140 HP",
		bucketCapacity: "0.90 - 1.02 m³",
		availability: "In Stock",
		badge: "Heavy Duty",
		description:
			"The JCB NXT 205 20.5-ton excavator is powered by a high-torque Cummins 6 BT 5.9C engine generating 140 HP. Features Eco mode fuel savings, Power & Power+ modes for heavy earthmoving, and 10 versatile working modes.",
		keyFeatures: [
			"Fuel Saving Eco Mode with Cummins 6 BT 5.9C Engine",
			"Power & Power+ Modes for Maximum Digging Productivity",
			"10 Versatile Working Modes",
			"Long Maintenance Intervals for Engine & Hydraulics",
		],
		specifications: {
			"Engine Model": "Cummins 6 BT 5.9C",
			"Engine Power": "140 HP",
			"Bucket Capacity": "0.90 - 1.02 cu.m",
			"Operating Weight": "20,500 kg",
			"Power Modes": "Eco, Power & Power+ Modes",
		},
	},
	{
		id: "jcb-nxt-210-lc",
		slug: "jcb-nxt-210-lc",
		name: "JCB NXT 210 LC Tracked Excavator",
		model: "NXT 210 LC",
		category: "excavators",
		categoryName: "Excavators",
		image: "/images/catagory/escavator.webp",
		tagline: "21.2-ton Long Undercarriage excavator with 140 HP Cummins engine and heavy-duty 0.9m³ bucket.",
		operatingWeight: "21,250 kg",
		enginePower: "104 kW (140 HP)",
		bucketCapacity: "0.9 m³ GP / HD",
		availability: "In Stock",
		badge: "Long Carriage",
		description:
			"The JCB NXT 210 LC 21.25-ton long-undercarriage excavator is powered by a high-torque Cummins 6BT 5.9C engine producing 104 kW (140 HP). Features General Purpose & Heavy Duty 0.9 m³ bucket options, Eco fuel savings mode, and Power+ performance.",
		keyFeatures: [
			"Cummins 6BT 5.9C Engine producing 104 kW (140 HP)",
			"Long Undercarriage (LC) Frame for Enhanced Stability",
			"0.9 cu.m General Purpose & Heavy Duty Bucket Options",
			"Fuel Saving Eco Mode, Power & Power+ Modes",
			"10 Versatile Working Modes with Extended Maintenance",
		],
		specifications: {
			"Engine Model": "Cummins 6BT 5.9C",
			"Engine Power": "104 kW (140 HP)",
			"Bucket Capacity": "0.9 cu.m GP / HD",
			"Operating Weight": "21,250 kg",
			"Undercarriage": "Long Carriage (LC)",
		},
	},
	{
		id: "jcb-nxt-215-lc",
		slug: "jcb-nxt-215-lc",
		name: "JCB NXT 215 LC Tracked Excavator",
		model: "NXT 215 LC",
		category: "excavators",
		categoryName: "Excavators",
		image: "/images/catagory/escavator.webp",
		tagline: "21.5-ton Long Undercarriage excavator with IntelliControl, Eco mode, and Power+ performance.",
		operatingWeight: "21,500 kg",
		enginePower: "140 HP",
		bucketCapacity: "0.90 - 1.02 m³",
		availability: "In Stock",
		badge: "IntelliControl",
		description:
			"The JCB NXT 215 LC 21.5-ton long-undercarriage excavator is powered by a high-torque Cummins 6BT 5.9C engine generating 140 HP. Features IntelliControl system for effortless operation, Eco mode fuel savings, and Power & Power+ modes.",
		keyFeatures: [
			"IntelliControl Smart System for Ease of Use & Serviceability",
			"Cummins 6BT 5.9C Engine delivering 140 HP",
			"Loaded with Power & Power+ Modes for Higher Productivity",
			"Fuel Saving Eco Mode",
			"Extended Service Intervals (Engine Oil: 500 hrs, Hydraulic Oil: 5,000 hrs)",
		],
		specifications: {
			"Engine Model": "Cummins 6BT 5.9C",
			"Engine Power": "140 HP",
			"Bucket Capacity": "0.90 - 1.02 cu.m",
			"Operating Weight": "21,500 kg",
			"Control System": "JCB IntelliControl System",
		},
	},
	{
		id: "jcb-225-lc-m",
		slug: "jcb-225-lc-m",
		name: "JCB 225 LC M Heavy Duty Excavator",
		model: "225 LC M",
		category: "excavators",
		categoryName: "Excavators",
		image: "/images/catagory/escavator.webp",
		tagline: "22.2-tonne excavator with 148 HP Cummins engine, Ecohydraulics, and reinforced dig-end.",
		operatingWeight: "22,200 kg (22.2 Tonne)",
		enginePower: "148 HP",
		bucketCapacity: "0.90 - 1.05 m³",
		availability: "In Stock",
		badge: "Ecohydraulics",
		description:
			"The JCB 225 LC M 22.2-tonne excavator is powered by a high-output Cummins 6BTAA 5.9 engine producing 148 HP. Engineered with heavy-duty dig-end structural reinforcement, Ecohydraulics fuel economy system, and IntelliControl technology.",
		keyFeatures: [
			"Heavy-Duty Dig-End for Next-Level Structural Durability",
			"Cummins 6BTAA 5.9 Engine producing 148 HP",
			"Ecohydraulics & Advanced Working Modes for State-of-the-Art Fuel Economy",
			"IntelliControl System for Ease of Operation & Maintenance",
			"Extended Service Intervals (Engine Oil: 500 hrs, Hydraulic Oil: 5,000 hrs)",
		],
		specifications: {
			"Engine Model": "Cummins 6BTAA 5.9",
			"Engine Power": "148 HP",
			"Bucket Capacity": "0.90 - 1.05 cu.m",
			"Operating Weight": "22.2 Tonne (22,200 kg)",
			"Hydraulic System": "JCB Ecohydraulics System",
		},
	},
	{
		id: "jcb-345-lc-hd",
		slug: "jcb-345-lc-hd",
		name: "JCB 345 LC HD Mining Excavator",
		model: "345 LC HD",
		category: "excavators",
		categoryName: "Excavators",
		image: "/images/catagory/escavator.webp",
		tagline: "34-ton heavy duty mining excavator powered by 221 HP JCB DIESELMAX 672 engine for quarrying.",
		operatingWeight: "32,940 - 34,462 kg",
		enginePower: "165 kW (221 HP)",
		bucketCapacity: "1.24 - 1.80 m³",
		availability: "In Stock",
		badge: "Mining & Quarry",
		description:
			"The JCB 345 LC HD 34-ton heavy-duty excavator is engineered with a powerful 165 kW (221 HP) JCB DIESELMAX 672 engine. Purpose-built to excel in severe mining and quarrying environments with maximum breakout force and enhanced uptime monitoring.",
		keyFeatures: [
			"JCB DIESELMAX 672 Engine delivering 165 kW (221 HP)",
			"Assures Longevity & Boosts Heavy Digging Productivity",
			"Vital Heavy-Duty Build to Excel in Quarrying & Mining Tasks",
			"Enhanced Uptime Monitoring & Dedicated Dealer Customer Support",
			"Heavy Duty 1.24 - 1.80 m³ Bucket Capacity Range",
		],
		specifications: {
			"Engine Model": "JCB DIESELMAX 672",
			"Engine Power": "165 kW (221 HP)",
			"Bucket Capacity": "1.24 - 1.80 m³",
			"Operating Weight": "32,940 - 34,462 kg",
			"Target Application": "Heavy Mining & Quarrying",
		},
	},
];

export function getEquipmentBySlug(slug: string): EquipmentItem | undefined {
	return FLEET_ITEMS.find((item) => item.slug === slug || item.id === slug);
}

export function getRelatedEquipment(
	currentId: string,
	category: string,
	limit = 3
): EquipmentItem[] {
	const sameCategory = FLEET_ITEMS.filter(
		(item) => item.id !== currentId && item.category === category
	);

	if (sameCategory.length >= limit) {
		return sameCategory.slice(0, limit);
	}

	const otherItems = FLEET_ITEMS.filter(
		(item) => item.id !== currentId && item.category !== category
	);

	return [...sameCategory, ...otherItems].slice(0, limit);
}
