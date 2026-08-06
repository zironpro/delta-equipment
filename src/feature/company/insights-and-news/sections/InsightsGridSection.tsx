"use client";

import { useState } from "react";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Calendar, Clock, Filter, X } from "lucide-react";

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
		image: "/images/product-details/140.webp",
	},
	{
		id: "jcb-3cx-versatility",
		title:
			"Why the JCB 3CX Backhoe Loader Remains Sudan's Gold Standard Construction Partner",
		excerpt:
			"Versatility, fuel economy, and exceptional resale value make the 3CX backhoe loader the preferred choice for contractors in Khartoum and Port Sudan.",
		category: "Machinery Spotlight",
		date: "April 02, 2026",
		readTime: "4 min read",
		image: "/images/machines.webp",
	},
	{
		id: "atbara-depot-expansion",
		title:
			"Delta Equipment Upgrades Atbara Service Depot with Advanced Hydraulic Diagnostic Benches",
		excerpt:
			"New high-pressure hydraulic testing facilities ensure faster turnaround times for JCB excavator pumps and cylinder rebuilds.",
		category: "Dealer Network",
		date: "March 19, 2026",
		readTime: "3 min read",
		image: "/images/attachments.webp",
	},
];

const CATEGORIES = [
	"All Topics",
	"Fleet Expansion",
	"Telematics Tech",
	"Field Guide",
	"Machinery Spotlight",
	"Dealer Network",
];

export function InsightsGridSection() {
	const [activeCategory, setActiveCategory] = useState("All Topics");
	const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(
		null
	);

	const featuredArticle =
		ARTICLES_DATA.find((a) => a.featured) || ARTICLES_DATA[0];
	const filteredArticles = ARTICLES_DATA.filter((a) => {
		if (activeCategory === "All Topics") return true;
		return a.category === activeCategory;
	});

	return (
		<section className="bg-[#FAF6F0] pb-24 font-sans text-slate-900">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Featured Headline Article Card */}
				<div
					className="group mb-12 cursor-pointer overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#FCAF20] hover:shadow-md sm:p-10"
					onClick={() => setSelectedArticle(featuredArticle)}
				>
					<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
						<div className="lg:col-span-7">
							<div className="flex items-center gap-2">
								<span className="rounded-md bg-[#EAA800] px-3 py-1 font-extrabold text-[11px] text-slate-950 uppercase tracking-wider">
									Featured Insight
								</span>
								<span className="text-slate-500 text-xs">
									• {featuredArticle.category}
								</span>
							</div>

							<h2 className="mt-4 font-extrabold text-2xl text-slate-950 leading-tight transition-colors group-hover:text-[#EAA800] sm:text-3xl">
								{featuredArticle.title}
							</h2>

							<p className="mt-4 text-slate-700 text-sm leading-relaxed sm:text-base">
								{featuredArticle.excerpt}
							</p>

							<div className="mt-6 flex flex-wrap items-center gap-4 font-semibold text-slate-500 text-xs">
								<div className="flex items-center gap-1.5">
									<Calendar className="h-4 w-4 text-[#EAA800]" />
									<span>{featuredArticle.date}</span>
								</div>
								<span>•</span>
								<div className="flex items-center gap-1.5">
									<Clock className="h-4 w-4 text-[#EAA800]" />
									<span>{featuredArticle.readTime}</span>
								</div>
								<div className="ml-auto inline-flex items-center gap-1 font-bold text-slate-950 group-hover:text-[#EAA800]">
									<span>Read Full Article</span>
									<ArrowUpRight className="h-4 w-4 text-[#EAA800]" />
								</div>
							</div>
						</div>

						<div className="lg:col-span-5">
							<div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
								<Image
									alt={featuredArticle.title}
									className="object-cover transition-transform duration-500 group-hover:scale-105"
									fill
									src={featuredArticle.image}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Category Filter Tabs */}
				<div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-slate-200 border-b pb-4">
					<div className="flex items-center gap-2">
						<Filter className="h-4 w-4 text-[#EAA800]" />
						<span className="font-bold text-slate-950 text-xs uppercase tracking-wider">
							Filter Topics:
						</span>
					</div>

					<div className="flex flex-wrap gap-2">
						{CATEGORIES.map((cat) => (
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
						<article
							className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#FCAF20] hover:shadow-md"
							key={article.id}
							onClick={() => setSelectedArticle(article)}
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
						</article>
					))}
				</div>
			</div>

			{/* Article Reader Modal */}
			{selectedArticle && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-xs">
					<div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8">
						<button
							className="absolute top-4 right-4 cursor-pointer rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-slate-200"
							onClick={() => setSelectedArticle(null)}
							type="button"
						>
							<X className="h-5 w-5" />
						</button>

						<div className="flex items-center gap-2">
							<span className="rounded-md bg-[#EAA800] px-3 py-1 font-extrabold text-[11px] text-slate-950 uppercase tracking-wider">
								{selectedArticle.category}
							</span>
							<span className="text-slate-500 text-xs">
								• {selectedArticle.date}
							</span>
						</div>

						<h2 className="mt-4 font-extrabold text-2xl text-slate-950 leading-tight">
							{selectedArticle.title}
						</h2>

						<div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-lg border border-slate-200">
							<Image
								alt={selectedArticle.title}
								className="object-cover"
								fill
								src={selectedArticle.image}
							/>
						</div>

						<div className="mt-6 space-y-4 text-slate-700 text-sm leading-relaxed">
							<p className="font-semibold text-base text-slate-900">
								{selectedArticle.excerpt}
							</p>
							<p>
								Delta Equipment continues to reinforce its commitment to
								Sudan&apos;s mining, construction, and agricultural sectors by
								providing state-of-the-art JCB machinery and reliable
								factory-certified technical field services.
							</p>
							<p>
								For full technical specifications, LiveLink fleet integration
								options, or to arrange on-site maintenance across Sudan, contact
								our technical team directly.
							</p>
						</div>

						<div className="mt-8 flex items-center justify-between gap-4 border-slate-200 border-t pt-4">
							<Button
								asChild
								className="h-10 bg-slate-950 px-5 font-bold font-sans text-white text-xs hover:bg-slate-800"
								onClick={() => setSelectedArticle(null)}
							>
								<Link href={"/contact" as Route}>
									<span>Inquire About This Equipment</span>
									<ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
								</Link>
							</Button>
							<Button
								className="h-10 border-slate-300 bg-white px-4 font-sans font-semibold text-slate-900 text-xs hover:bg-slate-50"
								onClick={() => setSelectedArticle(null)}
								variant="outline"
							>
								Close
							</Button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
