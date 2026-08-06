"use client";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";

import { DeltaLogo } from "./DeltaLogo";

export function Footer() {
	return (
		<footer className="border-zinc-900 border-t bg-black font-sans text-slate-300">
			{/* Main Footer Container */}
			<div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-20">
				<div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-16">
					{/* Brand Column (4 cols) */}
					<div className="col-span-2 lg:col-span-4">
						<div className="flex items-center gap-4">
							<Link className="inline-block" href={"/" as Route}>
								<DeltaLogo className="h-9 w-auto text-white" />
							</Link>
							<div className="h-7 w-[1px] bg-zinc-800" />
							<Image
								alt="JCB Official Logo"
								className="h-8 w-auto rounded-sm object-contain"
								height={36}
								priority
								src="/global/logo.svg"
								unoptimized
								width={92}
							/>
						</div>

						<p className="mt-5 max-w-sm font-sans text-slate-400 text-sm leading-relaxed">
							Sudan&apos;s official authorized dealer for JCB heavy industrial
							machinery, high-payload excavators, Loadall telehandlers, and
							power generation solutions.
						</p>

						{/* Social Media Links (Rounded LG SVG Icons) */}
						<div className="mt-6 flex items-center gap-3">
							{/* Instagram */}
							<a
								aria-label="Instagram"
								className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-slate-400 transition-all duration-300 hover:border-[#FFB800] hover:bg-[#FFB800] hover:text-slate-950"
								href="https://instagram.com"
								rel="noreferrer"
								target="_blank"
							>
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
								>
									<rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
									<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
								</svg>
							</a>

							{/* Facebook */}
							<a
								aria-label="Facebook"
								className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-slate-400 transition-all duration-300 hover:border-[#FFB800] hover:bg-[#FFB800] hover:text-slate-950"
								href="https://facebook.com"
								rel="noreferrer"
								target="_blank"
							>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
							</a>

							{/* LinkedIn */}
							<a
								aria-label="LinkedIn"
								className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-slate-400 transition-all duration-300 hover:border-[#FFB800] hover:bg-[#FFB800] hover:text-slate-950"
								href="https://linkedin.com"
								rel="noreferrer"
								target="_blank"
							>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								</svg>
							</a>
						</div>
					</div>

					{/* Links Column 1: Machinery Spectrum (3 cols) */}
					<div className="col-span-1 lg:col-span-3">
						<h3 className="font-bold font-heading text-lg text-white uppercase tracking-wider">
							Equipment Spectrum
						</h3>
						<ul className="mt-4 space-y-2.5 font-sans text-sm">
							{[
								"Tracked Excavators",
								"Telescopic Handlers",
								"Wheel Loaders",
								"Backhoe Loaders",
								"Compaction Rollers",
								"Site Dumpers",
								"Power Generators",
							].map((item) => (
								<li key={item}>
									<Link
										className="inline-flex items-center text-slate-400 transition-colors hover:text-[#FFB800]"
										href={"/fleet" as Route}
									>
										<span>{item}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Links Column 2: Service & Legal (2 cols) */}
					<div className="col-span-1 lg:col-span-2">
						<div>
							<h3 className="font-bold font-heading text-lg text-white uppercase tracking-wider">
								Services
							</h3>
							<ul className="mt-4 space-y-2.5 font-sans text-sm">
								{[
									{
										label: "24/7 Field Support",
										href: "/services/product-support",
									},
									{
										label: "Factory Warranty",
										href: "/services/product-support",
									},
									{
										label: "OEM Spare Parts",
										href: "/services/product-support",
									},
									{
										label: "Annual Service Contract",
										href: "/services/annual-service-contract",
									},
									{
										label: "Preventive Maintenance",
										href: "/services/annual-service-contract",
									},
								].map((item) => (
									<li key={item.label}>
										<Link
											className="inline-flex items-center text-slate-400 transition-colors hover:text-[#FFB800]"
											href={item.href as Route}
										>
											<span>{item.label}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Links Column 3: Contact & Sudan HQ (3 cols) */}
					<div className="col-span-2 lg:col-span-3">
						<h3 className="font-bold font-heading text-lg text-white uppercase tracking-wider">
							Sudan Headquarters
						</h3>
						<ul className="mt-4 space-y-3.5 font-sans text-slate-400 text-sm">
							<li className="flex items-start gap-3">
								<MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB800]" />
								<span>
									Khartoum Industrial Zone, Al Amarat, Khartoum, Sudan
								</span>
							</li>
							<li className="flex items-center gap-3">
								<PhoneCall className="h-4 w-4 shrink-0 text-[#FFB800]" />
								<a
									className="font-mono transition-colors hover:text-[#FFB800]"
									href="tel:+249183456789"
								>
									+249 183 456 789
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="h-4 w-4 shrink-0 text-[#FFB800]" />
								<a
									className="transition-colors hover:text-[#FFB800]"
									href="mailto:info@deltaequipment.sd"
								>
									info@deltaequipment.sd
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Clock className="h-4 w-4 shrink-0 text-[#FFB800]" />
								<span>Mon – Sat: 8:00 AM – 5:00 PM</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Sub-footer */}
				<div className="mt-14 flex flex-col items-center justify-between gap-4 border-zinc-900 border-t pt-8 font-sans text-slate-500 text-xs sm:flex-row">
					<p>
						© 2026 DELTA EQUIPMENT. Official JCB Dealer in Sudan. All rights
						reserved.
					</p>

					<p className="text-slate-400">
						Designed &amp; Developed by{" "}
						<a
							className="font-medium text-white transition-colors hover:text-[#FFB800] hover:underline"
							href="https://zironpro.com"
							rel="noreferrer"
							target="_blank"
						>
							Ziron Pro
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
