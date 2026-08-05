"use client";

import Image from "next/image";

export function FleetCtaSection() {
	return (
		<section className="w-full overflow-hidden bg-white">
			<div className="relative h-[260px] w-full sm:h-[340px] lg:h-[400px]">
				<Image
					alt="JCB Heavy Equipment Showcase"
					className="object-cover object-center"
					fill
					priority
					quality={100}
					src="/images/cta-bg.webp"
				/>
			</div>
		</section>
	);
}
