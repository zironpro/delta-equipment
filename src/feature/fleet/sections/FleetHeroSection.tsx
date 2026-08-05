"use client";

import Image from "next/image";

export function FleetHeroSection() {
	return (
		<section className="relative w-full overflow-hidden bg-[#FAF6F0] pt-20">
			<div className="relative h-[55vh] min-h-[380px] w-full sm:h-[65vh] md:h-[75vh] lg:h-[85vh]">
				<Image
					alt="Delta Heavy Equipment Fleet Banner"
					className="object-cover object-center"
					fill
					priority
					quality={100}
					src="/images/products-banner.webp"
				/>
			</div>
		</section>
	);
}
