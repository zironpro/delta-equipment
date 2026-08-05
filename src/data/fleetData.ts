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
		name: "Tracked Excavators",
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
		id: "dumpers",
		name: "Site Dumpers",
		description: "Rugged articulated site dumpers for heavy payload transport across terrain.",
	},
	{
		id: "generators",
		name: "Power Generators",
		description: "Continuous and standby diesel power generators engineered for harsh environments.",
	},
];

export const FLEET_ITEMS: EquipmentItem[] = [
	{
		id: "jcb-js225hd",
		slug: "jcb-js225hd",
		name: "JCB JS225HD Tracked Excavator",
		model: "JS225HD",
		category: "excavators",
		categoryName: "Tracked Excavators",
		image: "/images/escavator.webp",
		tagline: "Heavy-duty 22-ton excavator designed for rugged mining and quarrying.",
		operatingWeight: "22,500 kg",
		enginePower: "173 HP (129 kW)",
		bucketCapacity: "1.02 - 1.2 m³",
		maxDigDepth: "6.70 m",
		availability: "In Stock",
		badge: "Popular Mining Spec",
		description:
			"The JCB JS225HD features a reinforced heavy-duty upper frame, X-frame chassis, and high breakout force hydraulics built to handle demanding African mining and construction conditions with minimal downtime.",
		keyFeatures: [
			"JCB EcoMAX 4.8L Engine with high torque output",
			"Heavy-duty boom and arm with internal baffle plates",
			"JCB LiveLink Telematics integrated for real-time diagnostics",
			"ROPS/FOPS certified climate-controlled operator cab",
			"7-inch color display panel with multi-function selector",
		],
		specifications: {
			"Operating Weight": "22,500 kg",
			"Engine Model": "JCB EcoMAX 448",
			"Gross Engine Power": "173 HP @ 2000 rpm",
			"Max Dig Depth": "6.70 m",
			"Bucket Tearout": "15,800 kgf",
			"Track Shoe Width": "600 mm / 800 mm",
			"Fuel Tank Capacity": "343 Liters",
		},
	},
	{
		id: "jcb-t65d",
		slug: "jcb-t65d",
		name: "JCB T65D Loadall Telehandler",
		model: "T65D",
		category: "telehandlers",
		categoryName: "Telescopic Handlers",
		image: "/images/escavator.webp",
		tagline: "High reach 9.7m boom handler with 2.3-ton maximum lift capacity.",
		operatingWeight: "11,800 kg",
		enginePower: "130 HP (97 kW)",
		payloadCapacity: "2,300 kg",
		maxReach: "9.70 m",
		availability: "In Stock",
		badge: "Best Seller",
		description:
			"Engineered for high-volume material handling, agricultural operations, and building construction. Features a 3-stage telescopic boom arm and 4WD steer modes for precision positioning in restricted spaces.",
		keyFeatures: [
			"3-stage hydraulic telescoping boom with rapid extension",
			"Selectable 4WD, 2WD, and Crab Steering modes",
			"Regenerative hydraulics for faster cycle times",
			"Single-lever joystick control with proportional hydraulics",
			"Smooth-ride suspension system for load stability",
		],
		specifications: {
			"Max Lift Capacity": "2,300 kg",
			"Max Lift Height": "9.70 m",
			"Engine Power": "130 HP",
			"Transmission Type": "Powershift 4-speed",
			"Overall Width": "2.35 m",
			"Hydraulic Flow Rate": "140 L/min",
			"Turning Radius": "3.85 m",
		},
	},
	{
		id: "jcb-457",
		slug: "jcb-457",
		name: "JCB 457 Heavy Wheel Loader",
		model: "457 HT",
		category: "wheel-loaders",
		categoryName: "Wheel Loaders",
		image: "/images/escavator.webp",
		tagline: "20-ton payload capacity wheel loader built for high output stockpiling.",
		operatingWeight: "20,150 kg",
		enginePower: "282 HP (210 kW)",
		bucketCapacity: "3.5 - 4.5 m³",
		payloadCapacity: "7,500 kg",
		availability: "Available",
		badge: "Heavy Duty",
		description:
			"The JCB 457 Wheel Loader delivers maximum power and high bucket breakout force for heavy gravel, ore, and grain loading. Features a CommandPlus cab with unmatched panoramic visibility.",
		keyFeatures: [
			"Cummins QSB 6.7L engine delivering 282 HP",
			"5-speed transmission with torque converter lock-up",
			"Z-bar linkage for aggressive breakout performance",
			"CommandPlus cab with heated air-suspension seating",
			"Auto-stop idle engine control for fuel savings",
		],
		specifications: {
			"Operating Weight": "20,150 kg",
			"Engine Power": "282 HP",
			"Bucket Capacity": "3.5 m³",
			"Dump Clearance": "3.12 m",
			"Breakout Force": "172 kN",
			"Fuel Tank Capacity": "300 Liters",
		},
	},
	{
		id: "jcb-3cx",
		slug: "jcb-3cx",
		name: "JCB 3CX Eco Backhoe Loader",
		model: "3CX Eco",
		category: "backhoes",
		categoryName: "Backhoe Loaders",
		image: "/images/escavator.webp",
		tagline: "The world's #1 backhoe loader for unmatched versatility and fuel efficiency.",
		operatingWeight: "8,135 kg",
		enginePower: "92 HP (69 kW)",
		bucketCapacity: "1.1 m³",
		maxDigDepth: "4.37 m",
		availability: "In Stock",
		badge: "Flagship Model",
		description:
			"Recognized globally as the ultimate multi-purpose machine. Combines front loader earthmoving power with a rear excavator arm capable of trenching, pipe-laying, and site clearing.",
		keyFeatures: [
			"TorqueLock system reducing fuel consumption by up to 25%",
			"Extradig telescopic dipper for extended depth and reach",
			"Smooth Ride System (SRS) to prevent spillage during transport",
			"EasyControl servo joysticks mounted on side consoles",
			"Heavy-duty planetary front and rear axles",
		],
		specifications: {
			"Operating Weight": "8,135 kg",
			"Engine Power": "92 HP",
			"Max Dig Depth": "4.37 m (Extradig: 5.46 m)",
			"Loader Bucket Capacity": "1.1 m³",
			"Dig Tearout": "6,324 kgf",
			"Travel Speed": "40 km/h",
		},
	},
	{
		id: "jcb-vm117",
		slug: "jcb-vm117",
		name: "JCB VM117 Soil Compaction Roller",
		model: "VM117 D",
		category: "compaction",
		categoryName: "Compaction Rollers",
		image: "/images/escavator.webp",
		tagline: "11-ton single drum soil compactor delivering maximum compaction depth.",
		operatingWeight: "11,300 kg",
		enginePower: "125 HP (93 kW)",
		availability: "Available",
		description:
			"Designed for road construction, dam embankments, and industrial foundation prep. Features dual amplitude dynamic vibration settings to achieve target soil density rapidly.",
		keyFeatures: [
			"Dual frequency and amplitude vibration system",
			"Heavy-duty drum shell with integrated scraper bars",
			"Automatic Vibration Control (AVC) for uniform density",
			"3-point articulation joint for superior traction on inclines",
		],
		specifications: {
			"Operating Weight": "11,300 kg",
			"Drum Width": "2,100 mm",
			"Engine Power": "125 HP",
			"Vibration Frequency": "31 / 36 Hz",
			"Static Linear Load": "33.5 kg/cm",
		},
	},
	{
		id: "jcb-6t-1",
		slug: "jcb-6t-1",
		name: "JCB 6T-1 Swivel Site Dumper",
		model: "6T-1",
		category: "dumpers",
		categoryName: "Site Dumpers",
		image: "/images/escavator.webp",
		tagline: "6-ton payload articulated dumper with 180° swivel skip capability.",
		operatingWeight: "4,410 kg",
		payloadCapacity: "6,000 kg",
		enginePower: "74 HP (55 kW)",
		availability: "In Stock",
		description:
			"The JCB 6T-1 site dumper is built for high volume payload movement in confined or rough site conditions. 180-degree rotating skip allows accurate placement of material left or right.",
		keyFeatures: [
			"180° power swivel skip for side dumping",
			"Permanent 4WD articulated chassis frame",
			"Heavy-duty steel skip construction with 6mm base plate",
			"ROPS folding frame with safety interlock controls",
		],
		specifications: {
			"Payload Capacity": "6,000 kg",
			"Operating Weight": "4,410 kg",
			"Engine Power": "74 HP",
			"Skip Capacity (Heaped)": "3.4 m³",
			"Steering Angle": "±30°",
		},
	},
	{
		id: "jcb-g115qs",
		slug: "jcb-g115qs",
		name: "JCB G115QS Diesel Generator",
		model: "G115QS",
		category: "generators",
		categoryName: "Power Generators",
		image: "/images/escavator.webp",
		tagline: "115 kVA heavy-duty acoustic enclosed diesel generator.",
		operatingWeight: "1,850 kg",
		enginePower: "115 kVA / 92 kW",
		availability: "Available",
		description:
			"High-efficiency industrial diesel generator built into a weatherproof soundproof canopy. Engineered to deliver continuous, reliable power for remote job sites and industrial facilities.",
		keyFeatures: [
			"JCB Dieselmax 4-cylinder turbocharged engine",
			"Deep Sea Electronics (DSE) auto-start controller",
			"Soundproof galvanized steel canopy (68 dBA @ 7m)",
			"24-hour internal bunded fuel tank with level monitoring",
		],
		specifications: {
			"Prime Power": "115 kVA / 92 kW",
			"Standby Power": "125 kVA / 100 kW",
			"Engine Model": "JCB 444 G-TC 92",
			"Fuel Tank Capacity": "285 Liters",
			"Noise Level": "68 dBA at 7 meters",
		},
	},
	{
		id: "jcb-4cx",
		slug: "jcb-4cx",
		name: "JCB 4CX Heavy Duty Backhoe Loader",
		model: "4CX Super",
		category: "backhoes",
		categoryName: "Backhoe Loaders",
		image: "/images/escavator.webp",
		tagline: "4 equal-sized wheels for ultimate traction and supreme loader capacity.",
		operatingWeight: "8,880 kg",
		enginePower: "109 HP (81 kW)",
		bucketCapacity: "1.3 m³",
		maxDigDepth: "5.88 m",
		availability: "On Request",
		badge: "High Performance",
		description:
			"The largest backhoe loader in the JCB lineup featuring 4 equal-size wheels and 3 steer modes (2WS, 4WS, Crab Steer) for maximum stability and traction in muddy site conditions.",
		keyFeatures: [
			"Equal-sized wheels with ground clearance up to 340mm",
			"TorqueLock 6-speed autoshift transmission",
			"Heavy-duty loader arms with 1.3 m³ 6-in-1 shovel",
			"Advanced HVAC operator cab with air-suspension seat",
		],
		specifications: {
			"Operating Weight": "8,880 kg",
			"Engine Power": "109 HP",
			"Max Dig Depth": "5.88 m",
			"Shovel Capacity": "1.3 m³",
			"Tearout Force": "6,590 kgf",
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
