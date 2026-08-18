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

const FAQ_ITEMS: FaqItem[] = [
	{
		id: "faq-1",
		category: "Equipment & Machinery",
		question: "What heavy machinery lines are available through Delta Equipment in Sudan?",
		answer:
			"As Sudan's authorized JCB dealer, we supply the full official lineup of heavy machinery including Excavators, Backhoe Loaders, Wheel Loaders, Telescopic Handlers (Telehandlers), Compaction Rollers, and High-Output Diesel Generators engineered specifically for tropicalized extreme environments.",
	},
	{
		id: "faq-2",
		category: "Spare Parts & Warranty",
		question: "Do you supply 100% genuine OEM JCB spare parts and warranty coverage?",
		answer:
			"Yes, 100% of our spare parts inventory consists of authentic factory-certified OEM JCB components. Every new JCB machine purchase comes backed by full manufacturer warranty, local technical inspection, and genuine part replacements.",
	},
	{
		id: "faq-3",
		category: "Field Support & Maintenance",
		question: "How quickly can mobile technical support deploy to remote mining or construction job sites?",
		answer:
			"Our 24/7 mobile field support units are strategically stationed across Sudan's key mining and industrial hubs (including River Nile, Northern, and Red Sea states). Certified field engineers equipped with diagnostic units and replacement parts can deploy directly to your job site within hours.",
	},
	{
		id: "faq-4",
		category: "Customization & Leasing",
		question: "Can Delta Equipment customize machinery specs or offer flexible fleet leasing packages?",
		answer:
			"Yes. We offer turnkey fleet sizing assessments, operational leasing agreements, heavy-duty rock attachments, reinforced cooling packages for high ambient temperatures, and certified operator training tailored to your project requirements.",
	},
	{
		id: "faq-5",
		category: "Quotations & Inquiries",
		question: "How can I schedule a machine demonstration or request an official quotation?",
		answer:
			"You can request an official price quotation through our online contact form, speak directly with our sales engineering team via hotline, or visit our central showroom in Khartoum for live equipment walkarounds and technical consultations.",
	},
];

export function FaqSection() {
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
							Everything You Need to Know About Delta & JCB Operations
						</h2>
					</div>

					<div className="mt-4 overflow-hidden max-w-2xl">
						<p
							className="reveal-on-scroll text-reveal-up font-sans text-base text-slate-600 leading-relaxed sm:text-lg"
							data-animate="fast-up"
						>
							Find answers to common questions regarding machinery procurement, genuine JCB spare parts, field support, and custom fleet solutions.
						</p>
					</div>
				</div>

				{/* Interactive FAQ Accordion Grid */}
				<div className="mt-12 space-y-4">
					{FAQ_ITEMS.map((item, idx) => {
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
								Have a Specific Machinery Requirement?
							</h4>
							<p className="font-sans text-slate-600 text-xs sm:text-sm">
								Our sales engineers are ready to assist with custom specs & quotations.
							</p>
						</div>
					</div>

					<Link href={"/contact" as Route}>
						<Button className="h-10 cursor-pointer bg-[#FCAF20] px-5 font-bold font-sans text-slate-950 text-xs shadow-xs transition-colors hover:bg-amber-400">
							<span>Speak to Specialist</span>
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
