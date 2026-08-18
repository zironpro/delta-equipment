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

interface InsightsGridSectionProps {
	blogs?: NewsArticle[];
}

export function InsightsGridSection({ blogs = [] }: InsightsGridSectionProps) {
	const [activeCategory, setActiveCategory] = useState("All Topics");
	const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(
		null
	);

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
