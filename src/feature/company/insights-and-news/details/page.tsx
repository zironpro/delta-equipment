import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, Clock, Home } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function InsightsDetailPage({ blog }: { blog: any }) {
	return (
		<main className="min-h-screen bg-[#FAF6F0] pb-24 pt-32 font-sans text-slate-900 selection:bg-[#FCAF20] selection:text-slate-950">
			<div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<nav className="mb-8 flex items-center space-x-2 text-xs font-medium text-slate-500 sm:text-sm">
					<Link
						href="/"
						className="flex items-center hover:text-[#EAA800] transition-colors"
					>
						<Home className="mr-1 h-3.5 w-3.5" />
						Home
					</Link>
					<ChevronRight className="h-3.5 w-3.5 text-slate-400" />
					<Link
						href="/company/insights-and-news"
						className="hover:text-[#EAA800] transition-colors"
					>
						Insights & News
					</Link>
					<ChevronRight className="h-3.5 w-3.5 text-slate-400" />
					<span className="text-slate-900 truncate max-w-[150px] sm:max-w-xs md:max-w-sm lg:max-w-md">
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

					<div className="prose prose-slate prose-lg mt-12 max-w-none prose-headings:font-extrabold prose-headings:text-slate-950 prose-a:text-[#EAA800] prose-a:font-semibold hover:prose-a:text-[#C58E00] prose-img:rounded-xl">
						<ReactMarkdown>{blog.content}</ReactMarkdown>
					</div>
				</article>
			</div>
		</main>
	);
}
