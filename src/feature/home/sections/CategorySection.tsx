"use client";

import * as React from "react";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

export function CategorySection({ content }: { content?: any }) {
	const data = content;
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
	);

	return (
		<section className="bg-[#FAF6F0] pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
			<div className="container">
				{/* Section Header */}
				<div className="flex flex-col justify-between gap-6 border-slate-200/80 border-b pb-5 md:flex-row md:items-end">
					<div className="max-w-2xl">
						<h2 className="font-manrope font-normal text-3xl text-slate-950 tracking-tight sm:text-5xl">
							{data?.title}
						</h2>
					</div>

					<div className="flex items-center gap-3 self-start md:self-auto">
						<Link href={"/fleet" as Route}>
							<Button className="cursor-pointer border border-slate-900 bg-slate-950 font-bold font-sans text-white shadow-md transition-colors hover:border-slate-800 hover:bg-slate-800">
								<span>{data?.button1}</span>
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>

				{/* Auto-sliding Carousel for Categories */}
				<div className="mt-0">
					<Carousel
						className="w-full"
						opts={{
							align: "start",
							loop: true,
						}}
						plugins={[plugin.current]}
					>
						<CarouselContent className="-ml-6 pt-16 pb-6">
							{data?.categories?.map((category: any) => (
								<CarouselItem
									className="basis-full pl-6 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
									key={category.id}
								>
									<Link
										className="group hover:-translate-y-2 relative flex h-full w-full flex-col items-center justify-end rounded-lg border border-amber-200/80 bg-gradient-to-b from-[#FFFBF2] to-[#FFF3D6] p-6 text-center shadow-soft-lg transition-all duration-300 hover:border-[#FCAF20] hover:shadow-soft-xl"
										href={
											`/fleet?category=${category.id}#fleet-catalog` as Route
										}
									>
										{/* Top Pop-Out Machinery Image breaking out of card top edge */}
										<div className="-mt-16 group-hover:-translate-y-2 relative flex h-40 w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
											<Image
												alt={category.title}
												className="h-full w-auto object-contain drop-shadow-md"
												height={180}
												src={category.image}
												width={220}
											/>
										</div>

										{/* Card Text Content */}
										<div className="mt-4 flex flex-col items-center pb-2">
											<h3 className="font-manrope font-semibold text-slate-950 text-xl transition-colors group-hover:text-[#D69110]">
												{category.title}
											</h3>
										</div>
									</Link>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>

				{/* Dealer Certification Banner */}
				<div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-[#FFF8E6] via-amber-50/60 to-[#FFF8E6] p-8 shadow-sm md:flex-row">
					<div className="flex items-center gap-4">
						<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#FFB800] font-bold text-slate-950 shadow-md">
							<ShieldCheck className="h-7 w-7" />
						</div>
						<div>
							<h4 className="font-manrope font-semibold text-slate-950 text-xl">
								{data?.dealerTitle}
							</h4>
							<p className="mt-0.5 font-sans text-slate-600 text-sm">
								{data?.dealerDesc}
							</p>
						</div>
					</div>

					<Link href={"/contact" as Route}>
						<Button className="shrink-0 cursor-pointer bg-slate-950 font-bold font-sans text-white hover:bg-slate-800">
							<span>{data?.button2}</span>
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
