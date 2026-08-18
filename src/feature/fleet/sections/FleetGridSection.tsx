"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { SearchX, Sparkles } from "lucide-react";

import {
	type EquipmentItem,
	FLEET_CATEGORIES,
	FLEET_ITEMS,
} from "@/data/fleetData";

import { EquipmentCard } from "../components/EquipmentCard";
import { EquipmentFilter } from "../components/EquipmentFilter";
import { SpecModal } from "../components/SpecModal";

function FleetGridContent() {
	const searchParams = useSearchParams();
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [sortBy, setSortBy] = useState<string>("featured");
	const [selectedSpecItem, setSelectedSpecItem] =
		useState<EquipmentItem | null>(null);

	useEffect(() => {
		const cat = searchParams.get("category");
		if (cat) {
			setSelectedCategory(cat);
		}
	}, [searchParams]);

	// Compute category counts
	const categoryListWithCounts = useMemo(() => {
		return FLEET_CATEGORIES.map((cat) => {
			if (cat.id === "all") {
				return { ...cat, count: FLEET_ITEMS.length };
			}
			const count = FLEET_ITEMS.filter(
				(item) => item.category === cat.id
			).length;
			return { ...cat, count };
		});
	}, []);

	// Filter and sort items dynamically
	const filteredItems = useMemo(() => {
		let result = [...FLEET_ITEMS];

		// Category filter
		if (selectedCategory !== "all") {
			result = result.filter((item) => item.category === selectedCategory);
		}

		// Text search query
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase().trim();
			result = result.filter(
				(item) =>
					item.name.toLowerCase().includes(query) ||
					item.model.toLowerCase().includes(query) ||
					item.categoryName.toLowerCase().includes(query) ||
					item.tagline.toLowerCase().includes(query) ||
					item.description.toLowerCase().includes(query)
			);
		}

		// Sorting
		if (sortBy === "model-asc") {
			result.sort((a, b) => a.model.localeCompare(b.model));
		} else if (sortBy === "category") {
			result.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
		}

		return result;
	}, [selectedCategory, searchQuery, sortBy]);

	return (
		<section
			className="bg-[#FAF6F0] py-12 text-slate-900 sm:py-16 lg:py-20"
			id="fleet-catalog"
			suppressHydrationWarning
		>
			<div className="container space-y-8">
				{/* Header */}
				<div className="flex flex-col space-y-2 border-slate-200/80 border-b pb-6">
					<h2 className="font-manrope font-normal text-3xl text-slate-950 tracking-tight sm:text-5xl">
						Heavy Duty Machinery
					</h2>
				</div>

				{/* Filter & Search Controls Bar */}
				<EquipmentFilter
					categories={categoryListWithCounts}
					onSearchChange={setSearchQuery}
					onSelectCategory={setSelectedCategory}
					onSortChange={setSortBy}
					searchQuery={searchQuery}
					selectedCategory={selectedCategory}
					sortBy={sortBy}
					totalItemsCount={filteredItems.length}
				/>

				{/* Cards Grid */}
				{filteredItems.length > 0 ? (
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{/* Render Equipment Cards */}
						{filteredItems.map((item) => (
							<EquipmentCard
								item={item}
								key={item.id}
								onViewSpecs={(selected) => setSelectedSpecItem(selected)}
							/>
						))}
					</div>
				) : (
					<div className="flex flex-col items-center justify-center rounded-lg border border-slate-300 border-dashed bg-white px-6 py-16 text-center">
						<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-[#d69110]">
							<SearchX className="h-8 w-8" />
						</div>
						<h3 className="font-bold font-heading text-slate-950 text-xl">
							No Equipment Found
						</h3>
						<p className="mt-2 max-w-md text-slate-600 text-sm">
							We couldn&apos;t find any machines matching &quot;{searchQuery}
							&quot;. Try clearing filters or searching for another keyword.
						</p>
						<button
							className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-2.5 font-bold text-white text-xs transition-all hover:bg-slate-800"
							onClick={() => {
								setSearchQuery("");
								setSelectedCategory("all");
							}}
							type="button"
						>
							<Sparkles className="h-4 w-4 text-[#FCAF20]" />
							<span>Reset All Filters</span>
						</button>
					</div>
				)}
			</div>

			{/* Interactive Spec Details Modal */}
			<SpecModal
				item={selectedSpecItem}
				onClose={() => setSelectedSpecItem(null)}
			/>
		</section>
	);
}

export function FleetGridSection() {
	return (
		<Suspense fallback={null}>
			<FleetGridContent />
		</Suspense>
	);
}
