"use client";

import { useState } from "react";
import Link from "next/link";
import type { Route } from "next";

import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";

interface FaqItem {
	id: string;
	question: string;
	answer: string;
	category: string;
}

export function FaqSection({ content }: { content?: any }) {
	const data = content;
	const [openId, setOpenId] = useState<string | null>("faq-1");

	const toggleFaq = (id: string) => {
		setOpenId((prev) => (prev === id ? null : id));
	};

	return (
		<section className="border-slate-200/80 border-t bg-[#FAF6F0] py-16 font-sans text-slate-900 sm:py-20 lg:py-24">
			<div className="container">
				{/* Section Header */}
				<div className="mx-auto flex max-w-3xl flex-col items-center text-center">

					<div className="overflow-hidden">
						<h2
							className="reveal-on-scroll text-reveal-up font-manrope font-normal text-3xl text-slate-950 tracking-tight sm:text-5xl"
							data-animate="fast-up"
						>
							{data?.title}
						</h2>
					</div>

					<div className="mt-4 overflow-hidden max-w-2xl">
						<p
							className="reveal-on-scroll text-reveal-up font-sans text-base text-slate-600 leading-relaxed sm:text-lg"
							data-animate="fast-up"
						>
							{data?.desc}
						</p>
					</div>
				</div>

				{/* Interactive FAQ Accordion Grid */}
				<div className="mt-12 space-y-4">
					{data?.faqItems?.map((item: any, idx: number) => {
						const isOpen = openId === item.id;
						return (
							<div
								className={`reveal-on-scroll stagger-${(idx % 3) + 1} group overflow-hidden rounded-2xl border transition-all duration-300 ${
									isOpen
										? "border-[#FCAF20] bg-white shadow-md"
										: "border-slate-200/90 bg-white/80 hover:border-amber-300 hover:bg-white shadow-xs"
								}`}
								data-animate="fast-up"
								key={item.id}
							>
								<button
									aria-expanded={isOpen}
									className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-hidden"
									onClick={() => toggleFaq(item.id)}
									type="button"
								>
									<div className="flex items-center gap-3.5 pr-2">
										<span className="font-semibold text-[#D69110] text-xs uppercase tracking-wider shrink-0">
											0{idx + 1}
										</span>
										<h3 className="font-manrope font-normal text-lg text-slate-950 tracking-tight sm:text-xl">
											{item.question}
										</h3>
									</div>

									<div
										className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
											isOpen
												? "bg-[#FCAF20] text-slate-950 rotate-180 shadow-xs"
												: "bg-amber-100/70 text-[#D69110] group-hover:bg-[#FFC72C] group-hover:text-slate-950"
										}`}
									>
										<ChevronDown className="h-5 w-5 transition-transform duration-300" />
									</div>
								</button>

								{/* Collapsible Content */}
								<div
									className={`grid transition-all duration-300 ease-in-out ${
										isOpen ? "grid-rows-[1fr] opacity-100 pb-6 px-6" : "grid-rows-[0fr] opacity-0 px-6"
									}`}
								>
									<div className="overflow-hidden">
										<div className="border-slate-100 border-t pt-4">
											<span className="mb-1.5 block font-semibold text-[#D69110] text-xs uppercase tracking-wider">
												{item.category}
											</span>
											<p className="font-sans text-base text-slate-600 leading-relaxed">
												{item.answer}
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Bottom Support Banner */}
				<div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl border border-amber-200/80 bg-gradient-to-r from-white via-[#FFFBF5] to-[#FFF6E5] p-6 text-center shadow-xs sm:flex-row sm:text-left">
					<div className="flex items-center gap-3">
						<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFC72C] to-[#FCAF20] text-slate-950 shadow-xs">
							<PhoneCall className="h-5.5 w-5.5" />
						</div>
						<div>
							<h4 className="font-manrope font-normal text-lg text-slate-950 tracking-tight">
								{data?.supportTitle}
							</h4>
							<p className="font-sans text-slate-600 text-xs sm:text-sm">
								{data?.supportDesc}
							</p>
						</div>
					</div>

					<Link href={"/contact" as Route}>
						<Button className="h-10 cursor-pointer bg-[#FCAF20] px-5 font-bold font-sans text-slate-950 text-xs shadow-xs transition-colors hover:bg-amber-400">
							<span>{data?.supportButton}</span>
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
