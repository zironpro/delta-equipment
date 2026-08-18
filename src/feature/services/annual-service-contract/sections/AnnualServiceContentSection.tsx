"use client";

import type { Route } from "next";
import Link from "next/link";

import {
	ArrowUpRight,
	CheckCircle2,
	DollarSign,
	ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function AnnualServiceContentSection({ content }: { content?: any }) {
	const data = content;
	return (
		<section className="bg-[#FAF6F0] py-16 font-sans text-slate-900 sm:py-24">
			<div className="container">
				{/* Main Narrative Intro Card */}
				<div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
					<h2 className="font-manrope font-normal text-2xl text-slate-950 tracking-tight sm:text-4xl">
						{data?.title || "Annual Service Contract"}
					</h2>
					<p className="mt-4 font-sans text-base text-slate-600 leading-relaxed sm:text-lg">
						{data?.desc || "If you own a JCB machine, you know that it is essential to keep it running smoothly to ensure maximum efficiency and profitability. That's why Delta Equipment is offering an Annual Service Contract for both new and used JCB machines, comprising of two major and three minor services, to give you peace of mind and hassle-free ownership."}
					</p>
				</div>

				{/* Two Main Detailed Cards */}
				<div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
					{/* Savings & Full-Service History Card */}
					<div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#FCAF20]">
						<div>
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFC72C] to-[#FCAF20] text-slate-950 shadow-xs">
								<DollarSign className="h-6 w-6" />
							</div>

							<h3 className="mt-6 font-manrope font-normal text-2xl text-slate-950 tracking-tight">
								{data?.feature1Title || "Savings & Full-Service History"}
							</h3>

							<p className="mt-4 font-sans text-slate-600 text-sm leading-relaxed sm:text-base">
								{data?.feature1Desc || "By signing up for this contract, you can enjoy a range of benefits, including special discounts on genuine JCB parts, lubricants, and labor, which will help to minimise your maintenance costs. Furthermore, you will have the assurance that your machine will have a full-service history from an authorised JCB dealer, making it more attractive to potential buyers when you decide to sell it."}
							</p>
						</div>
					</div>

					{/* Reliable Maintenance Card */}
					<div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#FCAF20]">
						<div>
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFC72C] to-[#FCAF20] text-slate-950 shadow-xs">
								<ShieldCheck className="h-6 w-6" />
							</div>

							<h3 className="mt-6 font-manrope font-normal text-2xl text-slate-950 tracking-tight">
								{data?.feature2Title || "Reliable Maintenance"}
							</h3>

							<p className="mt-4 text-slate-700 text-sm leading-relaxed sm:text-base">
								{data?.feature2Desc || "Another significant advantage of this service contract is that your machine will be serviced on time by fully trained technicians using genuine JCB parts, which will reduce the risk of breakdowns and unexpected downtime. Additionally, your machine will receive regular health checks after each service, ensuring that it is always in top condition and ready to perform at its best."}
							</p>
						</div>
					</div>
				</div>

				{/* Smart Investment Highlight Card */}
				<div className="mt-10 rounded-lg border border-amber-200 bg-amber-50/70 p-8 text-slate-900 shadow-sm sm:p-10">
					<div className="flex items-start gap-4">
						<CheckCircle2 className="mt-1 h-8 w-8 shrink-0 text-[#EAA800]" />
						<div>
							<h3 className="font-extrabold text-slate-950 text-xl">
								{data?.highlightTitle || "Smart Investment for Your Machine's Future"}
							</h3>
							<p className="mt-2 text-base text-slate-700 leading-relaxed">
								{data?.highlightDesc || "Delta Equipment's Annual Service Contract ensures your machine is well-maintained, reducing unexpected breakdowns and improving its longevity and resale value."}
							</p>
						</div>
					</div>
				</div>

				{/* Call to Action Banner */}
				<div className="mt-16 flex flex-col gap-6 rounded-lg border border-slate-900 bg-slate-950 p-8 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-12">
					<div>
						<h3 className="font-bold text-2xl text-white">
							{data?.ctaTitle || "Enroll Your Machine in an Annual Service Contract"}
						</h3>
						<p className="mt-2 max-w-xl text-slate-300 text-sm">
							{data?.ctaDesc || "Contact us today to sign up and protect your investment."}
						</p>
					</div>

					<div className="flex items-center gap-3">
						<Link href={"/contact" as Route}>
							<Button className="h-11 bg-[#FCAF20] px-6 font-bold font-sans text-slate-950 text-xs hover:bg-amber-400">
								<span>{data?.ctaBtn || "Contact Us"}</span>
								<ArrowUpRight className="ml-1.5 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
