"use client";

import { useState } from "react";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Calendar, Clock, Filter } from "lucide-react";



import { cn } from "@/lib/utils";

interface NewsArticle {
	id: string;
	title: string;
	excerpt: string;
	category: string;
	date: string;
	readTime: string;
	image: string;
	featured?: boolean;
}

interface InsightsGridSectionProps {
	blogs?: NewsArticle[];
}

export function InsightsGridSection({ blogs = [] }: InsightsGridSectionProps) {
	const [activeCategory, setActiveCategory] = useState("All Topics");

	const filteredArticles = blogs.filter((a) => {
		if (activeCategory === "All Topics") return true;
		return a.category === activeCategory;
	});

	return (
		<section className="bg-[#FAF6F0] pb-24 font-sans text-slate-900">
			<div className="container">


				{/* Category Filter Tabs */}
				<div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-slate-200 border-b pb-4">
					<div className="flex items-center gap-2">
						<Filter className="h-4 w-4 text-[#EAA800]" />
						<span className="font-bold text-slate-950 text-xs uppercase tracking-wider">
							Filter Topics:
						</span>
					</div>

					<div className="flex flex-wrap gap-2">
						{/* Extract unique categories dynamically, with "All Topics" always first */}
						{["All Topics", ...Array.from(new Set(blogs.map(b => b.category)))].map((cat) => (
							<button
								className={cn(
									"cursor-pointer rounded-lg border px-4 py-2 font-bold text-xs transition-all",
									activeCategory === cat
										? "border-slate-950 bg-slate-950 text-white shadow-sm"
										: "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
								)}
								key={cat}
								onClick={() => setActiveCategory(cat)}
								type="button"
							>
								{cat}
							</button>
						))}
					</div>
				</div>

				{/* Articles Grid */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{filteredArticles.map((article) => (
						<Link
							href={`/company/insights-and-news/${article.id}` as Route}
							className="group flex flex-col justify-between overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#FCAF20] hover:shadow-md"
							key={article.id}
						>
							<div>
								<div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
									<Image
										alt={article.title}
										className="object-cover transition-transform duration-500 group-hover:scale-105"
										fill
										src={article.image}
									/>
									<span className="absolute top-3 left-3 rounded-md border border-slate-200 bg-white/90 px-3 py-1 font-bold text-[11px] text-slate-950 shadow-sm backdrop-blur-md">
										{article.category}
									</span>
								</div>

								<div className="mt-5 flex items-center gap-3 text-slate-500 text-xs">
									<div className="flex items-center gap-1">
										<Calendar className="h-3.5 w-3.5 text-[#EAA800]" />
										<span>{article.date}</span>
									</div>
									<span>•</span>
									<div className="flex items-center gap-1">
										<Clock className="h-3.5 w-3.5 text-[#EAA800]" />
										<span>{article.readTime}</span>
									</div>
								</div>

								<h3 className="mt-3 font-extrabold text-lg text-slate-950 leading-snug transition-colors group-hover:text-[#EAA800]">
									{article.title}
								</h3>

								<p className="mt-2 line-clamp-3 text-slate-600 text-xs leading-relaxed sm:text-sm">
									{article.excerpt}
								</p>
							</div>

							<div className="mt-6 flex items-center justify-between border-slate-100 border-t pt-4">
								<span className="font-bold text-slate-950 text-xs group-hover:text-[#EAA800]">
									Read Insight
								</span>
								<ArrowUpRight className="group-hover:-translate-y-0.5 h-4 w-4 text-[#EAA800] transition-transform group-hover:translate-x-0.5" />
							</div>
						</Link>
					))}
				</div>
			</div>

		</section>
	);
}
