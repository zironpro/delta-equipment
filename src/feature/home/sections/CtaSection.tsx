"use client";

import Image from "next/image";

export function CtaSection() {
	return (
		<section className="relative z-10 w-full overflow-hidden bg-white">
			<div className="relative h-[260px] sm:h-[340px] lg:h-[500px] w-full">
				<Image
					alt="JCB Heavy Equipment Showcase"
					className="object-cover object-center"
					fill
					priority
					quality={100}
					src="/images/cta-banner.png"
				/>
			</div>
		</section>
	);
}
