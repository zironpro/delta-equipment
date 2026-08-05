"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DeltaLogo } from "@/components/layout/DeltaLogo";

export function MdLetterSection() {
	return (
		<section className="bg-[#FAF6F0] py-16 sm:py-24 font-sans text-slate-900">
			<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				{/* Letterhead Paper Container */}
				<div className="relative overflow-hidden rounded-lg border border-slate-300 bg-white shadow-md">
					{/* Top Gold Accent Bar */}
					<div className="h-2 w-full bg-[#FCAF20]" />

					<div className="p-8 sm:p-14">
						{/* Official Letterhead Header */}
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b-2 border-slate-950 pb-8">
							{/* Logos: Delta & JCB */}
							<div className="flex items-center gap-4">
								<DeltaLogo className="h-8 w-auto text-slate-950" />
								<div className="h-8 w-[1px] bg-slate-300" />
								<Image
									src="/global/logo.svg"
									alt="JCB Official Logo"
									width={110}
									height={40}
									className="h-8 w-auto object-contain"
								/>
							</div>

							{/* Right Letterhead Details */}
							<div className="text-left sm:text-right font-sans text-xs text-slate-700 leading-tight space-y-1">
								<p className="font-bold text-slate-950 text-xs">DELTA EQUIPMENT CO. LTD.</p>
								<p className="text-[11px] text-slate-600">Sole Authorized Dealer for JCB in Sudan</p>
								<p className="text-[11px] text-slate-500 font-medium">Khartoum • Atbara • Al-Obeidia • Abu Hamad</p>
							</div>
						</div>

						{/* Header Salutation */}
						<div className="pt-8">
							<span className="font-extrabold text-lg text-slate-950 sm:text-xl">
								Dear Valued Customers & Partners,
							</span>
						</div>

						{/* Message Body */}
						<div className="mt-6 space-y-6 text-base text-slate-700 leading-relaxed">
							<p>
								Welcome to <strong>Delta Equipment</strong>, the sole authorized JCB dealer in Sudan. It is my privilege to introduce our company and the comprehensive range of heavy equipment, power solutions, and technical services we provide to support Sudan&apos;s growing industrial and infrastructure sectors.
							</p>

							<p>
								Since beginning our journey in 2018 with JCB diesel generators, we have grown to become the official sole representative for JCB machinery in Sudan. Today, we serve the mining, construction, agriculture, and infrastructure sectors with genuine JCB equipment, spare parts, and responsive technical support backed by over 15 years of industry experience.
							</p>

							{/* Highlight Quote Box */}
							<div className="my-8 rounded-lg border border-amber-200 bg-amber-50/60 p-6 sm:p-8">
								<div className="flex gap-4">
									<Quote className="h-8 w-8 text-[#EAA800] shrink-0" />
									<p className="font-medium text-slate-950 text-base sm:text-lg italic leading-relaxed">
										&ldquo;Our team is committed to providing reliable solutions that keep your operations running efficiently, even in the most demanding conditions. From the gold mining regions of the Nile River State to infrastructure projects across Khartoum and beyond, Delta Equipment stands with you every step of the way.&rdquo;
									</p>
								</div>
							</div>

							<p>
								We take great pride in supporting Sudan&apos;s development and building long-term partnerships with our customers. Thank you for choosing Delta Equipment as your trusted JCB partner.
							</p>
						</div>

						{/* Sign-off & Signature Block */}
						<div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
							<div>
								<p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
									Sincerely,
								</p>
								<h3 className="mt-2 font-extrabold text-slate-950 text-lg">
									Managing Director
								</h3>
								<p className="text-sm font-bold text-[#EAA800]">
									Delta Equipment • Official JCB Dealer Sudan
								</p>
							</div>

							<div className="flex items-center gap-3">
								<Link href={"/fleet" as Route}>
									<Button className="bg-slate-950 font-bold font-sans text-white hover:bg-slate-800 text-xs h-10 px-5">
										<span>Explore Machinery Catalog</span>
										<ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
									</Button>
								</Link>

								<Link href={"/about" as Route}>
									<Button variant="outline" className="border-slate-300 bg-white font-semibold font-sans text-slate-900 hover:bg-slate-50 text-xs h-10 px-5">
										<span>About Delta</span>
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
