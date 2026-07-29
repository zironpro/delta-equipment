"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import type { EquipmentCategory } from "@/data/fleetData";

interface EquipmentFilterProps {
	categories: EquipmentCategory[];
	selectedCategory: string;
	onSelectCategory: (categoryId: string) => void;
	searchQuery: string;
	onSearchChange: (query: string) => void;
	sortBy: string;
	onSortChange: (sort: string) => void;
	totalItemsCount: number;
}

export function EquipmentFilter({
	categories,
	selectedCategory,
	onSelectCategory,
	searchQuery,
	onSearchChange,
	sortBy,
	onSortChange,
	totalItemsCount,
}: EquipmentFilterProps) {
	return (
		<div className="flex flex-col space-y-6">
			{/* Top Bar: Search & Sort Selector */}
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				{/* Search Input Box */}
				<div className="relative flex-1 max-w-md">
					<Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
					<input
						className="w-full rounded-lg border border-slate-300/90 bg-white py-2.5 pr-10 pl-10 text-slate-900 text-sm placeholder-slate-400 shadow-xs transition-all focus:border-[#FCAF20] focus:ring-2 focus:ring-[#FCAF20]/20 focus:outline-hidden"
						onChange={(e) => onSearchChange(e.target.value)}
						placeholder="Search by model, capacity, or keyword..."
						type="text"
						value={searchQuery}
					/>
					{searchQuery && (
						<button
							aria-label="Clear search"
							className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-slate-400 hover:text-slate-700"
							onClick={() => onSearchChange("")}
							type="button"
						>
							<X className="h-4 w-4" />
						</button>
					)}
				</div>

				{/* Right Side: Total items counter & Sort Dropdown */}
				<div className="flex items-center justify-between gap-3 sm:justify-end">
					<span className="font-sans text-slate-600 text-xs">
						Showing <strong className="text-slate-950 font-bold">{totalItemsCount}</strong> machines
					</span>

					<div className="flex items-center gap-2">
						<SlidersHorizontal className="h-4 w-4 text-slate-400 hidden sm:inline-block" />
						<select
							className="rounded-lg border border-slate-300/90 bg-white px-3 py-2 text-slate-800 text-xs shadow-xs focus:border-[#FCAF20] focus:ring-2 focus:ring-[#FCAF20]/20 focus:outline-hidden"
							onChange={(e) => onSortChange(e.target.value)}
							value={sortBy}
						>
							<option value="featured">Featured Order</option>
							<option value="model-asc">Model Name (A-Z)</option>
							<option value="category">Category</option>
						</select>
					</div>
				</div>
			</div>

			{/* Category Filter Pills (Horizontal Scrollable) */}
			<div className="no-scrollbar -mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0">
				{categories.map((cat) => {
					const isActive = selectedCategory === cat.id;
					return (
						<button
							className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 font-semibold text-xs transition-all duration-200 ${
								isActive
									? "bg-slate-950 text-white font-bold shadow-md shadow-slate-950/20"
									: "border border-slate-200/90 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
							}`}
							key={cat.id}
							onClick={() => onSelectCategory(cat.id)}
							type="button"
						>
							<span>{cat.name}</span>
							{cat.count !== undefined && (
								<span
									className={`rounded-full px-2 py-0.5 text-[10px] ${
										isActive
											? "bg-[#FCAF20] text-slate-950 font-bold"
											: "bg-slate-100 text-slate-600"
									}`}
								>
									{cat.count}
								</span>
							)}
						</button>
					);
				})}
			</div>
		</div>
	);
}
