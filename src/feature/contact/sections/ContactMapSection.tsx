"use client";

import { useEffect, useRef, useState } from "react";

import Map, {
	FullscreenControl,
	Marker,
	NavigationControl,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

import { ChevronDown, Navigation } from "lucide-react";

// Delta Equipment Main Headquarters - Atbara, Sudan
const LAT = 17.7022;
const LNG = 33.9864;
const LOCATION_TITLE = "Delta Equipment Main Headquarters";

const DARK_MATTER_STYLE = {
	version: 8 as const,
	sources: {
		"carto-dark": {
			type: "raster" as const,
			tiles: [
				"https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
				"https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
				"https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
				"https://d.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
			],
			tileSize: 256,
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
		},
	},
	layers: [
		{
			id: "carto-dark-layer",
			type: "raster" as const,
			source: "carto-dark",
			minzoom: 0,
			maxzoom: 19,
		},
	],
};

const MAP_PROVIDERS = [
	{
		name: "Google Maps",
		url: `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`,
		icon: (
			<svg
				className="h-4 w-4 text-emerald-500"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
			</svg>
		),
	},
	{
		name: "Apple Maps",
		url: `https://maps.apple.com/?daddr=${LAT},${LNG}&q=${encodeURIComponent(LOCATION_TITLE)}`,
		icon: (
			<svg
				className="h-4 w-4 text-sky-400"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.09c.67-.81 1.12-1.94.99-3.09-.97.04-2.14.65-2.83 1.46-.62.72-1.16 1.88-1.01 3.01 1.08.08 2.18-.57 2.85-1.38z" />
			</svg>
		),
	},
	{
		name: "Waze",
		url: `https://waze.com/ul?ll=${LAT},${LNG}&navigate=yes`,
		icon: (
			<svg
				className="h-4 w-4 text-cyan-400"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path d="M12 2C6.48 2 2 6.48 2 12c0 3.09 1.41 5.84 3.63 7.67.24.2.49.38.75.55.51.34 1.06.62 1.64.83.6.22 1.22.37 1.86.45.68.08 1.37.08 2.05 0 .64-.08 1.26-.23 1.86-.45.58-.21 1.13-.49 1.64-.83.26-.17.51-.35.75-.55C20.59 17.84 22 15.09 22 12c0-5.52-4.48-10-10-10zm-3 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm6 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
			</svg>
		),
	},
	{
		name: "OpenStreetMap",
		url: `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=;${LAT},${LNG}`,
		icon: (
			<svg
				className="h-4 w-4 text-[#FCAF20]"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
				<line x1="9" x2="9" y1="3" y2="18" />
				<line x1="15" x2="15" y1="6" y2="21" />
			</svg>
		),
	},
];

export function ContactMapSection({ content }: { content?: any }) {
	const data = content;
	const [primaryUrl, setPrimaryUrl] = useState(MAP_PROVIDERS[0].url);
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (
			typeof navigator !== "undefined" &&
			/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)
		) {
			setPrimaryUrl(MAP_PROVIDERS[1].url);
		}
	}, []);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<section className="mb-16 w-full px-4 font-sans lg:mb-24">
			<div className="relative mx-auto h-[400px] max-w-6xl overflow-hidden rounded-lg border border-slate-800/50 shadow-2xl lg:h-[500px]">
				{/* Top-Left Provider Dropdown Control */}
				<div className="absolute top-4 left-4 z-10" ref={dropdownRef}>
					<div className="inline-flex divide-x divide-slate-200 overflow-hidden rounded-lg bg-white text-black shadow-lg">
						<a
							className="flex items-center gap-2 px-4 py-2.5 font-normal text-sm transition-colors hover:bg-slate-100"
							href={primaryUrl}
							rel="noopener noreferrer"
							target="_blank"
						>
							<Navigation className="h-4 w-4 fill-black text-black" />
							<span>{data?.getDirectionsText || "Get Directions"}</span>
						</a>
						<button
							aria-label="Select Map Provider"
							className="flex items-center justify-center px-2.5 py-2.5 transition-colors hover:bg-slate-100"
							onClick={() => setIsOpen(!isOpen)}
							type="button"
						>
							<ChevronDown
								className={`h-4 w-4 transition-transform duration-200 ${
									isOpen ? "rotate-180" : ""
								}`}
							/>
						</button>
					</div>

					{isOpen && (
						<div className="absolute top-full left-0 z-20 mt-2 w-52 rounded-lg border border-slate-800 bg-slate-950 py-1 shadow-2xl backdrop-blur-md">
							<div className="border-slate-800/80 border-b px-3 py-1.5 font-semibold text-[10px] text-slate-400 uppercase tracking-wider">
								{data?.chooseMapAppText || "Choose Map App"}
							</div>
							{MAP_PROVIDERS.map((provider) => (
								<a
									className="flex items-center gap-2.5 px-3 py-2 text-slate-200 text-sm transition-colors hover:bg-slate-900 hover:text-white"
									href={provider.url}
									key={provider.name}
									onClick={() => setIsOpen(false)}
									rel="noopener noreferrer"
									target="_blank"
								>
									{provider.icon}
									<span>{provider.name}</span>
								</a>
							))}
						</div>
					)}
				</div>

				{/* MapLibre Dark Matter Interactive Map Component */}
				<Map
					cooperativeGestures={true}
					initialViewState={{
						longitude: LNG,
						latitude: LAT,
						zoom: 15,
					}}
					mapStyle={DARK_MATTER_STYLE}
					style={{ width: "100%", height: "100%" }}
				>
					<Marker anchor="bottom" latitude={LAT} longitude={LNG}>
						<div className="flex flex-col items-center gap-1">
							<span className="mb-1 whitespace-nowrap font-medium text-sm text-white drop-shadow-md">
								{data?.locationTitle || LOCATION_TITLE}
							</span>
							<svg
								className="drop-shadow-lg"
								fill="#FCAF20"
								height="36"
								viewBox="0 0 24 24"
								width="36"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clipRule="evenodd"
									d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
									fillRule="evenodd"
								/>
							</svg>
						</div>
					</Marker>

					<NavigationControl position="bottom-right" />
					<FullscreenControl position="bottom-right" />
				</Map>
			</div>
		</section>
	);
}
