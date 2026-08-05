"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight, Calendar, Clock, Filter, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const ARTICLES_DATA: NewsArticle[] = [
	{
		id: "telehandler-expansion",
		title:
			"Delta Equipment Expands JCB Telehandler Fleet Across Major Infrastructure Projects in Sudan",
		excerpt:
			"New shipment of JCB 540-170 Loadalls delivered to support high-rise construction and mining operations with 17m reach capabilities.",
		category: "Fleet Expansion",
		date: "July 18, 2026",
		readTime: "4 min read",
		image: "/images/info-1.webp",
		featured: true,
	},
	{
		id: "livelink-telematics-update",
		title:
			"JCB LiveLink 4.0: Real-Time Remote Diagnostics & Fuel Efficiency Optimization",
		excerpt:
			"How advanced satellite telematics are empowering equipment managers across Sudan to eliminate idle time and predict maintenance needs.",
		category: "Telematics Tech",
		date: "June 28, 2026",
		readTime: "5 min read",
		image: "/images/info-2.webp",
		featured: false,
	},
	{
		id: "desert-maintenance-guide",
		title:
			"Heavy Machinery Desert Guide: Optimizing Excavator Performance in High Temperatures",
		excerpt:
			"Essential OEM preventive maintenance practices for JCB tracked excavators operating under extreme heat and heavy dust conditions.",
		category: "Field Guide",
		date: "May 14, 2026",
		readTime: "6 min read",
		image: "/images/escavator.webp",
		featured: false,
	},
	{
		id: "mining-zone-expansion",
		title:
			"New Service Hub Opened in Al-Obeidia Mining Zone for 24/7 Field Response",
		excerpt:
			"Delta Equipment establishes specialized mobile service depot stocked with genuine JCB spare parts to serve northern gold mining operations.",
		category: "Dealership News",
		date: "April 02, 2026",
		readTime: "3 min read",
		image: "/images/over-view image.webp",
		featured: false,
	},
];

const CATEGORIES = ["All", "Fleet Expansion", "Telematics Tech", "Field Guide", "Dealership News"];

export function InsightsGridSection() {
	const [activeCategory, setActiveCategory] = useState("All");

	const filteredArticles = activeCategory === "All"
		? ARTICLES_DATA
		: ARTICLES_DATA.filter((item) => item.category === activeCategory);

	const featuredArticle = ARTICLES_DATA.find((a) => a.featured) || ARTICLES_DATA[0];

	return (
		<section className="bg-[#FAF6F0] py-16 sm:py-24 font-sans text-slate-900">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Featured Article Banner */}
				<div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:border-[#FCAF20] mb-12">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
						<div className="lg:col-span-7">
							<div className="flex items-center gap-2">
								<span className="rounded-md bg-slate-950 px-3 py-1 text-xs font-bold text-[#FCAF20]">
									Featured Article
								</span>
								<span className="rounded-md bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-[#EAA800]">
									{featuredArticle.category}
								</span>
							</div>

							<h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
								{featuredArticle.title}
							</h2>

							<p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
								{featuredArticle.excerpt}
							</p>

							<div className="mt-6 flex items-center gap-4 text-xs text-slate-500 font-medium">
								<div className="flex items-center gap-1.5">
									<Calendar className="h-4 w-4 text-[#EAA800]" />
									<span>{featuredArticle.date}</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Clock className="h-4 w-4 text-[#EAA800]" />
									<span>{featuredArticle.readTime}</span>
								</div>
							</div>
						</div>

						<div className="lg:col-span-5">
							<div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-md">
								<Image
									src={featuredArticle.image}
									alt={featuredArticle.title}
									fill
									className="object-cover transition-transform duration-500 hover:scale-105"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Category Filter Tabs */}
				<div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
					<div className="flex items-center gap-2">
						<Filter className="h-4 w-4 text-[#EAA800]" />
						<span className="text-xs font-bold text-slate-950 uppercase tracking-wider">Filter Topics:</span>
					</div>

					<div className="flex flex-wrap gap-2">
						{CATEGORIES.map((cat) => (
							<button
								key={cat}
								type="button"
								onClick={() => setActiveCategory(cat)}
								className={cn(
									"rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer border",
									activeCategory === cat
										? "border-slate-950 bg-slate-950 text-white shadow-sm"
										: "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
								)}
							>
								{cat}
							</button>
						))}
					</div>
				</div>

				{/* Articles Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredArticles.map((article) => (
						<article
							key={article.id}
							className="flex flex-col justify-between overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#FCAF20] hover:shadow-md group"
						>
							<div>
								<div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
									<Image
										src={article.image}
										alt={article.title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<span className="absolute top-3 left-3 rounded-md border border-slate-200 bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-slate-950 shadow-sm">
										{article.category}
									</span>
								</div>

								<div className="mt-5 flex items-center gap-3 text-xs text-slate-500">
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

								<h3 className="mt-3 font-extrabold text-lg text-slate-950 group-hover:text-[#EAA800] transition-colors leading-snug">
									{article.title}
								</h3>

								<p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
									{article.excerpt}
								</p>
							</div>

							<div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
								<span className="text-xs font-bold text-slate-950 group-hover:text-[#EAA800]">Read Insight</span>
								<ArrowUpRight className="h-4 w-4 text-[#EAA800] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
