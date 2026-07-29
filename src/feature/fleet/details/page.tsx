"use client";

import Link from "next/link";

import { ArrowLeft, SearchX } from "lucide-react";

import { getEquipmentBySlug } from "@/data/fleetData";

import { FleetCtaSection } from "../sections/FleetCtaSection";
import { EquipmentDetailHero } from "./sections/EquipmentDetailHero";
import { EquipmentSpecsSection } from "./sections/EquipmentSpecsSection";
import { RelatedFleetSection } from "./sections/RelatedFleetSection";

interface EquipmentDetailPageProps {
	slug: string;
}

export default function EquipmentDetailPage({
	slug,
}: EquipmentDetailPageProps) {
	const item = getEquipmentBySlug(slug);

	if (!item) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-[#FAF6F0] px-4 pt-32 pb-20">
				<div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg">
					<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-[#d69110]">
						<SearchX className="h-8 w-8" />
					</div>
					<h1 className="font-bold font-heading text-2xl text-slate-950">
						Machine Not Found
					</h1>
					<p className="mt-2 text-slate-600 text-sm">
						The requested machinery model &quot;{slug}&quot; does not exist or
						has been updated in our catalog.
					</p>
					<Link
						className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-2.5 font-bold text-white text-xs transition-colors hover:bg-slate-800"
						href="/fleet"
					>
						<ArrowLeft className="h-4 w-4" />
						<span>Return to Fleet Catalog</span>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white font-sans text-slate-900">
			<EquipmentDetailHero item={item} />
			<EquipmentSpecsSection item={item} />
			<RelatedFleetSection currentItem={item} />
			<FleetCtaSection />
		</div>
	);
}
