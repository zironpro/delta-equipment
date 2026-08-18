"use client";

import type { Route } from "next";
import Link from "next/link";

import {
	ArrowUpRight,
	Award,
	Building2,
	Compass,
	ShieldCheck,
	Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function VisionMissionContentSection({ content }: { content?: any }) {
	const data = {
		commitmentTitle: content?.commitmentTitle || "Our Core Commitment",
		commitmentDescription: content?.commitmentDescription || "At Delta Equipment, we are committed to being Sudan's most trusted provider of JCB heavy equipment, power solutions, and technical services.",
		visionSubtitle: content?.visionSubtitle || "Strategic Direction",
		visionTitle: content?.visionTitle || "Our Vision",
		visionDescription: content?.visionDescription || "Our vision is to drive Sudan's industrial growth by delivering world-class machinery and unmatched after-sales support that empowers businesses across mining, construction, agriculture, and infrastructure sectors.",
		visionFooter: content?.visionFooter || "Global Standards • Local Growth",
		missionSubtitle: content?.missionSubtitle || "Operational Purpose",
		missionTitle: content?.missionTitle || "Our Mission",
		missionDescription: content?.missionDescription || "Our mission is to combine international equipment standards with local technical expertise, ensuring every customer receives reliable solutions tailored to the demanding conditions of the Sudanese market. We believe in building lasting partnerships, upholding the highest standards of service, and contributing to the sustainable development of Sudan's essential industries.",
		missionFooter: content?.missionFooter || "Technical Excellence • Lasting Support",
		pillar1Title: content?.pillar1Title || "Sole Dealership Excellence",
		pillar1Desc: content?.pillar1Desc || "Official JCB representative providing factory-warranted heavy machinery in Sudan.",
		pillar2Title: content?.pillar2Title || "Local Technical Expertise",
		pillar2Desc: content?.pillar2Desc || "Factory-trained engineers delivering 24/7 field service and genuine parts.",
		pillar3Title: content?.pillar3Title || "Sustainable Development",
		pillar3Desc: content?.pillar3Desc || "Empowering Sudan's mining, agriculture, roadworks, and infrastructure.",
		ctaTitle: content?.ctaTitle || "Partner with Delta Equipment",
		ctaDesc: content?.ctaDesc || "Explore our heavy machinery catalog or speak with our equipment specialists today.",
		ctaBtn: content?.ctaBtn || "Explore Machinery Catalog",
	};

	return (
		<section className="bg-[#FAF6F0] py-16 font-sans text-slate-900 sm:py-24">
			<div className="container">
				{/* Intro Commitment Banner */}
				<div className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
					<span className="font-extrabold text-[#EAA800] text-xs uppercase tracking-wider">
						{data.commitmentTitle}
					</span>
					<p className="mx-auto mt-3 max-w-3xl font-bold text-lg text-slate-950 leading-relaxed sm:text-xl">
						{data.commitmentDescription}
					</p>
				</div>

				{/* Vision & Mission Grid */}
				<div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
					{/* Our Vision Card */}
					<div className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#FCAF20] hover:shadow-md sm:p-10">
						<div>
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFC72C] to-[#FCAF20] text-slate-950 shadow-xs">
								<Compass className="h-6 w-6" />
							</div>

							<span className="mt-6 block font-semibold text-[#D69110] text-xs uppercase tracking-wider">
								{data.visionSubtitle}
							</span>
							<h2 className="mt-2 font-manrope font-normal text-2xl text-slate-950 tracking-tight sm:text-3xl">
								{data.visionTitle}
							</h2>

							<p className="mt-4 font-sans text-base text-slate-600 leading-relaxed sm:text-lg">
								{data.visionDescription}
							</p>
						</div>

						<div className="mt-8 flex items-center justify-between border-slate-100 border-t pt-6">
							<span className="font-semibold text-slate-500 text-xs">
								{data.visionFooter}
							</span>
							<Target className="h-5 w-5 text-[#EAA800]" />
						</div>
					</div>

					{/* Our Mission Card */}
					<div className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#FCAF20] hover:shadow-md sm:p-10">
						<div>
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFC72C] to-[#FCAF20] text-slate-950 shadow-xs">
								<Target className="h-6 w-6" />
							</div>

							<span className="mt-6 block font-semibold text-[#D69110] text-xs uppercase tracking-wider">
								{data.missionSubtitle}
							</span>
							<h2 className="mt-2 font-manrope font-normal text-2xl text-slate-950 tracking-tight sm:text-3xl">
								{data.missionTitle}
							</h2>

							<p className="mt-4 font-sans text-base text-slate-600 leading-relaxed sm:text-lg">
								{data.missionDescription}
							</p>
						</div>

						<div className="mt-8 flex items-center justify-between border-slate-100 border-t pt-6">
							<span className="font-semibold text-slate-500 text-xs">
								{data.missionFooter}
							</span>
							<ShieldCheck className="h-5 w-5 text-[#EAA800]" />
						</div>
					</div>
				</div>

				{/* Pillars Card Grid */}
				<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
					<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
						<Building2 className="h-6 w-6 text-[#EAA800]" />
						<h3 className="mt-3 font-bold text-slate-950 text-sm">
							{data.pillar1Title}
						</h3>
						<p className="mt-1 text-slate-600 text-xs">
							{data.pillar1Desc}
						</p>
					</div>

					<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
						<ShieldCheck className="h-6 w-6 text-[#EAA800]" />
						<h3 className="mt-3 font-bold text-slate-950 text-sm">
							{data.pillar2Title}
						</h3>
						<p className="mt-1 text-slate-600 text-xs">
							{data.pillar2Desc}
						</p>
					</div>

					<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
						<Award className="h-6 w-6 text-[#EAA800]" />
						<h3 className="mt-3 font-bold text-slate-950 text-sm">
							{data.pillar3Title}
						</h3>
						<p className="mt-1 text-slate-600 text-xs">
							{data.pillar3Desc}
						</p>
					</div>
				</div>

				{/* Call to Action Banner */}
				<div className="mt-16 flex flex-col gap-6 rounded-lg border border-slate-900 bg-slate-950 p-8 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-12">
					<div>
						<h3 className="font-bold text-2xl text-white">
							{data.ctaTitle}
						</h3>
						<p className="mt-2 max-w-xl text-slate-300 text-sm">
							{data.ctaDesc}
						</p>
					</div>

					<div className="flex items-center gap-3">
						<Link href={"/fleet" as Route}>
							<Button className="h-11 bg-[#FCAF20] px-6 font-bold font-sans text-slate-950 text-xs hover:bg-amber-400">
								<span>{data.ctaBtn}</span>
								<ArrowUpRight className="ml-1.5 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
