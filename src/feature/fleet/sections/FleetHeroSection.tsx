"use client";

import Image from "next/image";

export function FleetHeroSection({ content }: { content?: any }) {
	const data = content;
	return (
		<section className="relative w-full overflow-hidden bg-slate-950 pt-20">
			<div className="relative h-[calc(100vh-5rem)] min-h-[500px] w-full">
				<Image
					alt={data?.alt || "Delta Heavy Equipment Fleet Banner"}
					className="object-cover object-center"
					fill
					priority
					quality={100}
					src={data?.image || "/images/fleet-img-banner.png"}
				/>
			</div>
		</section>
	);
}
