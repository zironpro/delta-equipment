"use client";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Calendar, Clock } from "lucide-react";

interface NewsArticle {
	id: string;
	title: string;
	excerpt: string;
	category: string;
	date: string;
	readTime: string;
	image: string;
}

const NEWS_ARTICLES: NewsArticle[] = [
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
];

export function NewsSection() {
	return (
		<section
			className="relative bg-[#FAF6F0] pt-6 pb-20 text-slate-900 sm:pt-8 sm:pb-24 lg:pt-10 lg:pb-28"
			id="news"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
					<div className="max-w-2xl">
						<h2 className="mt-4 font-bold font-heading text-3xl text-slate-950 tracking-tight sm:text-5xl">
							News &amp; Equipment Insights
						</h2>
						<p className="mt-4 font-normal font-sans text-base text-slate-600 leading-relaxed sm:text-lg">
							Stay informed with fleet expansions, technological breakthroughs,
							and expert heavy machinery maintenance practices from Delta
							Equipment.
						</p>
					</div>

					<Link
						className="group inline-flex items-center gap-2 font-medium font-sans text-slate-900 text-sm transition-colors hover:text-[#D49800]"
						href={"/company/insights-and-news" as Route}
					>
						<span>View All Articles</span>
						<ArrowUpRight className="group-hover:-translate-y-0.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
					</Link>
				</div>

				{/* News Articles Grid */}
				<div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{NEWS_ARTICLES.map((article) => (
						<Link
							className="group hover:-translate-y-1 flex cursor-pointer flex-col overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/5"
							href={"/company/insights-and-news" as Route}
							key={article.id}
						>
							{/* Article Image Container */}
							<div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
								<Image
									alt={article.title}
									className="object-cover transition-transform duration-500 group-hover:scale-105"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									src={article.image}
								/>
								{/* Category Badge overlay */}
								<div className="absolute top-4 left-4 rounded-lg bg-slate-950/90 px-3 py-1 font-semibold text-[#FFB800] text-xs backdrop-blur-sm">
									{article.category}
								</div>
							</div>

							{/* Article Content */}
							<div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
								<div>
									{/* Date & Read Time */}
									<div className="flex items-center gap-4 font-sans text-slate-500 text-xs">
										<div className="flex items-center gap-1.5">
											<Calendar className="h-3.5 w-3.5 text-slate-400" />
											<span>{article.date}</span>
										</div>
										<div className="flex items-center gap-1.5">
											<Clock className="h-3.5 w-3.5 text-slate-400" />
											<span>{article.readTime}</span>
										</div>
									</div>

									{/* Article Title */}
									<h3 className="mt-4 font-bold font-heading text-lg text-slate-950 leading-snug transition-colors group-hover:text-[#D49800] sm:text-xl">
										{article.title}
									</h3>

									{/* Excerpt */}
									<p className="mt-3 line-clamp-3 font-normal font-sans text-slate-600 text-sm leading-relaxed">
										{article.excerpt}
									</p>
								</div>

								{/* Read More Link */}
								<div className="mt-6 flex items-center gap-1.5 font-medium font-sans text-slate-950 text-xs uppercase tracking-wider transition-colors group-hover:text-[#D49800]">
									<span>Read Full Story</span>
									<ArrowUpRight className="group-hover:-translate-y-0.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
