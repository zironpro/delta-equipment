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

export const FLEET_ITEMS: EquipmentItem[] = [
	{
		id: "jcb-30-plus",
		slug: "jcb-30-plus",
		name: "JCB 30 Plus Excavator",
		model: "30 Plus",
		category: "excavators",
		categoryName: "Excavators",
		image: "/images/catagory/mini-escavator.webp",
		detailImage: "/images/product-details/jcb-30plus.webp",
		tagline:
			"Class leading lift capacity with Perkins power for maximum job site productivity.",
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
		detailImage: "/images/product-details/81.webp",
		tagline:
			"High fuel efficiency with superior digging force and 8-ton operating capacity.",
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
		detailImage: "/images/product-details/jcb-130.webp",
		tagline:
			"13-ton class tracked excavator built for enhanced productivity and AC cabin operator comfort.",
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
		detailImage: "/images/product-details/140.webp",
		tagline:
			"14-ton excavator with Cummins 100 HP engine, 10 working modes, and smart control display.",
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
		detailImage: "/images/product-details/nxt-205.webp",
		tagline:
			"20.5-ton excavator with 140 HP Cummins engine, Eco mode fuel saving, and Power+ mode productivity.",
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
		detailImage: "/images/product-details/nxt-210LC.webp",
		tagline:
			"21.2-ton Long Undercarriage excavator with 140 HP Cummins engine and heavy-duty 0.9m³ bucket.",
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
			Undercarriage: "Long Carriage (LC)",
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
		detailImage: "/images/product-details/nxt-215LC.webp",
		tagline:
			"21.5-ton Long Undercarriage excavator with IntelliControl, Eco mode, and Power+ performance.",
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
		detailImage: "/images/product-details/nxt-225lcm.webp",
		tagline:
			"22.2-tonne excavator with 148 HP Cummins engine, Ecohydraulics, and reinforced dig-end.",
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
		detailImage: "/images/product-details/345LC-HD.webp",
		tagline:
			"34-ton heavy duty mining excavator powered by 221 HP JCB DIESELMAX 672 engine for quarrying.",
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
	{
		id: "jcb-455zx",
		slug: "jcb-455zx",
		name: "JCB 455ZX Wheel Loader",
		model: "455ZX",
		category: "wheel-loaders",
		categoryName: "Wheel Loaders",
		image: "/images/catagory/wheel-loaders.webp",
		detailImage: "/images/product-details/455ZX.webp",
		tagline:
			"High productivity 17.8-ton wheel loader with 3.1 cu.m bucket and JCB DIESEL MAX power.",
		operatingWeight: "17,880 Kg",
		enginePower: "165 kW (221hp)",
		bucketCapacity: "3.1 cu.m",
		availability: "In Stock",
		badge: "Wheel Loader",
		description:
			"The JCB 455ZX wheel loader is powered by the robust JCB DIESEL MAX 672 engine producing 165 kW (221hp). Designed for heavy material handling, quarrying, and earthmoving tasks with a 3.1 cu.m bucket capacity, superior fuel economy, and maximum operator cabin comfort.",
		keyFeatures: [
			"Better Fuel Efficiency with JCB DIESEL MAX 672 Engine",
			"Better Productivity for High-Capacity Material Handling",
			"More Cabin Space for Enhanced Operator Ergonomics",
			"Engine Oil & Filter Change Interval after 500 Hours",
		],
		specifications: {
			"Engine Model": "JCB DIESEL MAX 672",
			"Engine Power": "165 kW (221hp)",
			"Bucket Capacity": "3.1 cu.m",
			"Operating Weight": "17,880 Kg",
			"Service Interval": "Engine oil & filter change after 500 hours",
		},
	},
	{
		id: "jcb-432zx-plus",
		slug: "jcb-432zx-plus",
		name: "JCB 432ZX Plus Wheel Loader",
		model: "432ZX Plus",
		category: "wheel-loaders",
		categoryName: "Wheel Loaders",
		image: "/images/catagory/wheel-loaders.webp",
		detailImage: "/images/product-details/432ZX-Plus.webp",
		tagline:
			"Versatile 12-ton wheel loader with Cummins 150hp engine and 2.2 cu.m bucket capacity.",
		operatingWeight: "12,000 Kg",
		enginePower: "112 kW (150hp)",
		bucketCapacity: "2.2 cu.m",
		availability: "In Stock",
		badge: "Wheel Loader",
		description:
			"The JCB 432ZX Plus wheel loader is powered by a high-output Cummins 6 BTA A 5.9C-150C engine producing 112 kW (150hp). Designed for heavy material handling, productivity, and operator comfort with a 2.2 cu.m bucket capacity, excellent fuel efficiency, and extended service intervals.",
		keyFeatures: [
			"Better Fuel Efficiency with Cummins 6 BTA A 5.9C-150C Engine",
			"Better Productivity for High Material Handling Demands",
			"More Cabin Space for Superior Operator Comfort",
			"Engine Oil & Filter Change Interval after 500 Hours",
		],
		specifications: {
			"Engine Model": "Cummins 6 BTA A 5.9C-150C",
			"Engine Power": "112 kW (150hp)",
			"Bucket Capacity": "2.2 cu.m",
			"Operating Weight": "12,000 Kg",
			"Service Interval": "Engine oil & filter change after 500 hours",
		},
	},
	{
		id: "jcb-3dx-plus",
		slug: "jcb-3dx-plus",
		name: "JCB 3DX Plus Backhoe Loader",
		model: "3DX Plus",
		category: "backhoes",
		categoryName: "Backhoe Loaders",
		image: "/images/catagory/backheo-loaders.webp",
		detailImage: "/images/product-details/3DX-plus.webp",
		tagline:
			"High performance 92 HP backhoe loader with 6-in-1 multipurpose bucket and 4WD capabilities.",
		operatingWeight: "7,660 kg",
		enginePower: "92 HP",
		bucketCapacity: "1.0 cu.m",
		maxDigDepth: "4.77 m",
		availability: "In Stock",
		badge: "4 Wheel Drive",
		description:
			"The JCB 3DX Plus backhoe loader is powered by the dependable JCB 444 engine producing 92 HP. Featuring 4-Wheel Drive, a versatile 6-in-1 multipurpose bucket (1.0 cu.m), and a max dig depth of 4.77m, it delivers outstanding fuel efficiency, performance, and operator comfort.",
		keyFeatures: [
			"High on Fuel Efficiency with JCB 444 Engine",
			"High on Performance for Multipurpose Construction Tasks",
			"Best in Class Build Quality and Durability",
			"4 Wheel Drive System for Exceptional Site Traction",
			"Spacious Operator Cabin with Ergonomic Controls",
		],
		specifications: {
			"Engine Model": "JCB 444",
			"Engine Power": "92 HP",
			"6 in 1 Multipurpose Bucket": "1.0 cu.m",
			"Maximum Dig Depth": "4.77 m",
			"Drive Type": "4 Wheel Drive",
		},
	},
	{
		id: "jcb-3dx",
		slug: "jcb-3dx",
		name: "JCB 3DX Backhoe Loader",
		model: "3DX",
		category: "backhoes",
		categoryName: "Backhoe Loaders",
		image: "/images/catagory/backheo-loaders.webp",
		detailImage: "/images/product-details/3DX.webp",
		tagline:
			"Iconic 76 HP backhoe loader with JCB 448 4-cylinder engine and 6-in-1 multipurpose bucket.",
		operatingWeight: "7,460 kg",
		enginePower: "76 HP",
		bucketCapacity: "1.0 cu.m",
		maxDigDepth: "4.77 m",
		availability: "In Stock",
		badge: "Popular",
		description:
			"The JCB 3DX backhoe loader is powered by a reliable JCB 448 4-cylinder engine delivering 76 HP. Featuring 4-Wheel Drive, a 1.0 cu.m 6-in-1 multipurpose bucket, and 4.77m max dig depth, it is the benchmark for performance, fuel efficiency, and job site durability.",
		keyFeatures: [
			"High on Fuel Efficiency with JCB 448 4-Cylinder Engine",
			"High on Performance & Proven Reliability",
			"Best in Class Build Quality & Low Operating Cost",
			"4 Wheel Drive System for Superior Traction",
			"Spacious Operator Cabin with Excellent Visibility",
		],
		specifications: {
			"Engine Model": "JCB 448, 4 Cylinder",
			"Engine Power": "76 HP",
			"6 in 1 Multipurpose Bucket": "1.0 cu.m",
			"Maximum Dig Depth": "4.77 m",
			"Drive Type": "4 Wheel Drive",
		},
	},
	{
		id: "jcb-155",
		slug: "jcb-155",
		name: "JCB Skid Steer Loader 155",
		model: "155",
		category: "skid-steer",
		categoryName: "Skid Steer Loaders",
		image: "/images/catagory/skid-steers-loaders.webp",
		detailImage: "/images/product-details/skid-steer-loaders-155.webp",
		tagline:
			"Compact 57 HP skid steer loader with Perkins turbo power and IP67/69 waterproof connectors.",
		operatingWeight: "730 kg (Payload) / 2,900 kg (Operating)",
		enginePower: "57 HP",
		availability: "In Stock",
		badge: "Compact & Agile",
		description:
			"The JCB Skid Steer Loader 155 is a compact wonder powered by a Perkins 404D-22T engine delivering 57 HP. Engineered to work efficiently in demanding environments with unmatched safety, operator comfort, and IP 67/69 certified dust and waterproof electrical connectors.",
		keyFeatures: [
			"Compact & Efficient Perkins 404D - 22T Engine (57 HP)",
			"Unmatched Operator Safety & Comfort in Any Condition",
			"IP 67/69 Certified Dust and Waterproof Electrical Connectors",
			"Designed for Maximum Returns with Lowest Maintenance Cost",
			"Versatile Performance for Multi-Application Job Sites",
		],
		specifications: {
			"Engine Model": "Perkins 404D - 22T",
			"Engine Power": "57 HP",
			"Operating Weight": "730 Kg / 2900 Kg",
			"Electrical Protection": "IP 67 / 69 Certified Dust & Waterproof",
		},
	},
	{
		id: "jcb-530-70",
		slug: "jcb-530-70",
		name: "JCB 530-70 Telehandler",
		model: "530-70",
		category: "telehandlers",
		categoryName: "Telescopic Handlers",
		image: "/images/catagory/telescopic-handlers.webp",
		detailImage: "/images/product-details/530-70.webp",
		tagline:
			"Versatile 7m reach telehandler with 3,000 kg payload capacity and Q-Fit attachment system.",
		operatingWeight: "7,000 kg",
		enginePower: "76 HP",
		payloadCapacity: "3,000 kg",
		maxReach: "7 m",
		availability: "In Stock",
		badge: "Loadall",
		description:
			"The JCB 530-70 telescopic handler is powered by a dependable JCB 448 4-cylinder engine producing 76 HP. Featuring a maximum lift height of 7m and 3,000 kg payload capacity, Q-Fit mechanism for rapid attachment changes, and a 360° Hi-Viz cabin with ROPS & FOPS safety protection.",
		keyFeatures: [
			"Maximum Lift Height of 7m & 3,000 kg Lift Capacity",
			"JCB 448 4-Cylinder Engine Delivering 76 HP",
			"Q-Fit Mechanism for Quick Change of Attachments",
			"360° Hi-Viz Global Cabin Design with ROPS & FOPS Safety",
			"Superior Operational Visibility and Smooth Hydraulics",
		],
		specifications: {
			"Engine Model": "JCB 448 4 Cylinder",
			"Engine Power": "76 HP",
			"Max Reach": "7 m",
			"Max Payload": "3,000 Kg",
			"Cabin Protection": "360° Hi-Viz with ROPS & FOPS",
		},
	},
	{
		id: "jcb-530-110",
		slug: "jcb-530-110",
		name: "JCB 530-110 Telehandler",
		model: "530-110",
		category: "telehandlers",
		categoryName: "Telescopic Handlers",
		image: "/images/catagory/telescopic-handlers.webp",
		detailImage: "/images/product-details/530-110.webp",
		tagline:
			"High-reach 11m telehandler with 3,000 kg payload capacity and Q-Fit attachment system.",
		operatingWeight: "8,500 kg",
		enginePower: "76 HP",
		payloadCapacity: "3,000 kg",
		maxReach: "11 m",
		availability: "In Stock",
		badge: "High Reach Loadall",
		description:
			"The JCB 530-110 telescopic handler is powered by a reliable JCB 448 4-cylinder engine producing 76 HP. Featuring an impressive 11m maximum lift height and 3,000 kg payload capacity, Q-Fit attachment carriage system, and a 360° Hi-Viz cabin design with certified ROPS & FOPS protection.",
		keyFeatures: [
			"High Lift Height of 11m & 3,000 kg Maximum Payload",
			"JCB 448 4-Cylinder Engine Delivering 76 HP",
			"Q-Fit Mechanism for Rapid Carriage & Attachment Swap",
			"360° Hi-Viz Global Cabin Design with ROPS & FOPS Certification",
			"Extended Reach Efficiency for Multi-Storey Job Sites",
		],
		specifications: {
			"Engine Model": "JCB 448 4 Cylinder",
			"Engine Power": "76 HP",
			"Max Reach": "11 m",
			"Max Payload": "3,000 Kg",
			"Cabin Protection": "360° Hi-Viz with ROPS & FOPS",
		},
	},
	{
		id: "jcb-116",
		slug: "jcb-116",
		name: "JCB 116 Soil Compactor",
		model: "116",
		category: "compaction",
		categoryName: "Compaction Rollers",
		image: "/images/catagory/compactors.webp",
		detailImage: "/images/product-details/116D.webp",
		tagline:
			"11.2-ton soil compactor with 100 HP DieselMAX engine, 2,100 mm drum width, and IntelliCompaction.",
		operatingWeight: "11,250 kg",
		enginePower: "100 HP",
		availability: "In Stock",
		badge: "IntelliCompaction",
		description:
			"The JCB 116 soil compactor is powered by a robust JCB Diesel Max TCA-74 / TCA-85 mechanical engine delivering 100 HP. Featuring a 2,100 mm drum width, inline fuel injection system for simple maintenance, superior fuel efficiency, and IntelliCompaction technology for optimal soil density.",
		keyFeatures: [
			"High Fuel Efficiency with JCB Diesel Max Engine (100 HP)",
			"2,100 mm Heavy-Duty Compaction Drum Width",
			"Simple & Easy Mechanical Engine with Inline Fuel Injection System",
			"IntelliCompaction Technology for Uniform Soil Density",
			"Low Maintenance Costs and Extended Uptime Performance",
		],
		specifications: {
			"Engine Model": "JCB Diesel Max TCA-74, TCA-85",
			"Engine Power": "100 HP",
			"Operating Weight": "11,250 kg",
			"Drum Width": "2,100 mm",
			"Compaction System": "JCB IntelliCompaction System",
		},
	},
	{
		id: "jcb-vmt-330",
		slug: "jcb-vmt-330",
		name: "JCB VMT330 Vibratory Roller",
		model: "VMT330",
		category: "compaction",
		categoryName: "Compaction Rollers",
		image: "/images/catagory/mini-roller.webp",
		detailImage: "/images/product-details/vmt-330.webp",
		tagline:
			"Compact 3.3-ton tandem vibratory roller with 45 HP Simpson engine and 1,250 mm drum width.",
		operatingWeight: "3,300 kg",
		enginePower: "45 HP",
		availability: "In Stock",
		badge: "Tandem Roller",
		description:
			"The JCB VMT330 tandem vibratory roller is powered by a reliable SIMPSON - SJ327 engine producing 45 HP. Designed for smooth compaction finishing with a 1,250 mm drum width, 3,300 kg operating weight, extended warranty, and easy parts availability.",
		keyFeatures: [
			"SIMPSON - SJ327 Fuel Efficient Engine (45 HP)",
			"1,250 mm Precision Tandem Compaction Drum Width",
			"Extended Warranty Coverage for Operational Peace of Mind",
			"Best-in-Class Nationwide Service Network",
			"Easy & Rapid Spare Parts Availability",
		],
		specifications: {
			"Engine Model": "SIMPSON - SJ327",
			"Engine Power": "45 HP",
			"Operating Weight": "3,300 kg",
			"Drum Width": "1,250 mm",
			Support: "Extended Warranty & Nationwide Service",
		},
	},
	{
		id: "jcb-g275qs",
		slug: "jcb-g275qs",
		name: "JCB Canopy Set G275QS Generator",
		model: "G275QS",
		category: "power",
		categoryName: "Generators",
		image: "/images/catagory/generators.webp",
		detailImage: "/images/product-details/canopy-set.webp",
		tagline:
			"Heavy-duty 250 kVA prime power canopy generator with DSE 4520 control panel and 50mm acoustic insulation.",
		operatingWeight: "3,936 kg",
		enginePower: "250 kVA Prime",
		availability: "In Stock",
		badge: "Canopy Set",
		description:
			"The JCB G275QS is a reliable and durable diesel generator designed for continuous and backup power. Delivering 250 kVA prime power with a 449L fuel tank, DSE 4520 auto-control panel, and 50mm Rock Wool acoustic insulation for ultra-quiet operation in demanding environments.",
		keyFeatures: [
			"250 kVA Prime Power Output for Continuous & Standby Duty",
			"DSE 4520 Advanced Auto-Start Control Panel System",
			"50mm Rock Wool Sound Acoustic Insulation for Low Noise",
			"High-Capacity 449 Litre Fuel Tank for Extended Autonomy",
			"Durable Weatherproof & Anti-Corrosion Canopy Design",
		],
		specifications: {
			"Prime Power": "250 kVA",
			"Control Panel": "DSE 4520",
			"Acoustic Insulation": "50mm Rock Wool Sound",
			"Fuel Tank Capacity": "449 L",
			Dimensions: "3800 × 1400 × 2290 mm",
			Weight: "3,936 kg",
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
