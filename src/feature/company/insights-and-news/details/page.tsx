import Image from "next/image";
import Link from "next/link";

import { Calendar, ChevronDown, ChevronRight, Clock, Home } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function InsightsDetailPage({
	blog,
	locale = "en",
}: {
	blog: any;
	locale?: string;
}) {
	const isAr = locale === "ar";
	const homeLabel = isAr ? "الرئيسية" : "Home";
	const insightsLabel = isAr ? "الرؤى والأخبار" : "Insights & News";

	return (
		<main className="min-h-screen bg-[#FAF6F0] pt-32 pb-24 font-sans text-slate-900 selection:bg-[#FCAF20] selection:text-slate-950">
			<div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<nav className="mb-8 flex items-center space-x-2 font-medium text-slate-500 text-xs sm:text-sm">
					<Link
						className="flex items-center transition-colors hover:text-[#EAA800]"
						href={isAr ? "/ar" : "/en"}
					>
						<Home className={`h-3.5 w-3.5 ${isAr ? "ml-1" : "mr-1"}`} />
						{homeLabel}
					</Link>
					<ChevronRight
						className={`h-3.5 w-3.5 text-slate-400 ${isAr ? "rotate-180" : ""}`}
					/>
					<Link
						className="transition-colors hover:text-[#EAA800]"
						href={
							isAr
								? "/ar/company/insights-and-news"
								: "/en/company/insights-and-news"
						}
					>
						{insightsLabel}
					</Link>
					<ChevronRight
						className={`h-3.5 w-3.5 text-slate-400 ${isAr ? "rotate-180" : ""}`}
					/>
					<span className="max-w-[150px] truncate text-slate-900 sm:max-w-xs md:max-w-sm lg:max-w-md">
						{blog.title}
					</span>
				</nav>

				<article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
					<div className="flex flex-wrap items-center gap-3">
						<span className="rounded-md bg-[#EAA800] px-3 py-1 font-extrabold text-[11px] text-slate-950 uppercase tracking-wider">
							{blog.category}
						</span>
						<div className="flex items-center gap-3 text-slate-500 text-xs">
							<div className="flex items-center gap-1">
								<Calendar className="h-3.5 w-3.5 text-[#EAA800]" />
								<span>{blog.date}</span>
							</div>
							<span>•</span>
							<div className="flex items-center gap-1">
								<Clock className="h-3.5 w-3.5 text-[#EAA800]" />
								<span>{blog.readTime || "5 min read"}</span>
							</div>
						</div>
					</div>

					<h1 className="mt-6 font-extrabold text-3xl text-slate-950 leading-tight sm:text-4xl md:text-5xl">
						{blog.title}
					</h1>

					<p className="mt-6 font-medium text-lg text-slate-700 leading-relaxed sm:text-xl">
						{blog.excerpt}
					</p>

					{blog.image && (
						<div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
							<Image
								alt={blog.title}
								className="object-cover"
								fill
								priority
								src={blog.image}
							/>
						</div>
					)}

					<div className="mt-12 max-w-none">
						<ReactMarkdown
							components={{
								h2: ({ node, ...props }) => (
									<h2
										className="mt-12 mb-6 inline-block border-[#EAA800] border-b-2 pb-3 font-extrabold text-2xl text-slate-900 sm:text-3xl"
										{...props}
									/>
								),
								h3: ({ node, ...props }) => (
									<h3
										className="mt-10 mb-4 font-bold text-slate-800 text-xl sm:text-2xl"
										{...props}
									/>
								),
								p: ({ node, ...props }) => (
									<p
										className="mb-6 text-[17px] text-slate-600 leading-loose sm:text-lg"
										{...props}
									/>
								),
								ul: ({ node, ...props }) => (
									<ul className="mb-8 list-none space-y-4 pl-2" {...props} />
								),
								li: ({ node, ...props }) => (
									<li
										className="relative pl-7 text-[17px] text-slate-600 before:absolute before:top-2.5 before:left-1 before:h-2 before:w-2 before:rounded-full before:bg-[#EAA800] before:content-[''] sm:text-lg"
										{...props}
									/>
								),
								table: ({ node, ...props }) => (
									<div className="my-10 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
										<table
											className="w-full text-left text-slate-600 text-sm sm:text-base"
											{...props}
										/>
									</div>
								),
								thead: ({ node, ...props }) => (
									<thead
										className="border-slate-200 border-b bg-slate-50 font-bold text-slate-900 text-xs uppercase tracking-wider sm:text-sm"
										{...props}
									/>
								),
								th: ({ node, ...props }) => (
									<th
										className="border-slate-200 border-r px-6 py-5 last:border-r-0"
										{...props}
									/>
								),
								td: ({ node, ...props }) => (
									<td
										className="border-slate-100 border-r border-b px-6 py-4 last:border-r-0"
										{...props}
									/>
								),
								strong: ({ node, ...props }) => (
									<strong
										className="font-extrabold text-slate-900"
										{...props}
									/>
								),
								a: ({ node, ...props }) => (
									<a
										className="font-semibold text-[#EAA800] hover:text-[#C58E00] hover:underline"
										{...props}
									/>
								),
								details: ({ node, ...props }) => (
									<details
										className="group mb-4 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
										name="faq-accordion"
										{...props}
									/>
								),
								summary: ({ node, children, ...props }) => (
									<summary
										className="flex cursor-pointer list-none items-center justify-between bg-slate-50 px-6 py-4 font-bold text-lg text-slate-900 outline-none transition-colors hover:bg-slate-100 focus:ring-2 focus:ring-[#EAA800] [&::-webkit-details-marker]:hidden"
										{...props}
									>
										<span>{children}</span>
										<ChevronDown className="ml-4 h-5 w-5 flex-shrink-0 text-slate-500 transition-transform duration-300 group-open:rotate-180" />
									</summary>
								),
							}}
							rehypePlugins={[rehypeRaw]}
							remarkPlugins={[remarkGfm]}
						>
							{blog.content}
						</ReactMarkdown>
					</div>
				</article>
			</div>
		</main>
	);
}
