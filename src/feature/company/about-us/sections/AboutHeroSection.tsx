"use client";

export function AboutHeroSection({ content }: { content?: any }) {
	const data = content;
	const scrollToSection = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden border-slate-200/80 border-b bg-[#FAF6F0] pt-28 pb-16 font-sans text-slate-950 lg:min-h-[70vh]">
			{/* Subtle geometric line pattern in background matching reference layout */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
				<svg
					className="h-full w-full object-cover"
					fill="none"
					height="600"
					viewBox="0 0 1200 600"
					width="1200"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M-100 600L600 -100M600 -100L1300 600M200 600L600 200M600 200L1000 600"
						stroke="#EAA800"
						strokeDasharray="4 4"
						strokeWidth="1"
					/>
				</svg>
			</div>

			<div className="relative z-10 container text-center">
				{/* Top Subtitle Label */}
				<div className="inline-block">
					<span className="font-bold text-[#EAA800] text-sm uppercase tracking-widest sm:text-base">
						{data?.tag || "About Us"}
					</span>
				</div>

				{/* Single Large Centered Main Heading */}
				<h1 className="mx-auto mt-3 max-w-5xl font-manrope font-normal text-3xl text-slate-950 uppercase leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
					{data?.title || "POWERING SUDAN'S HEAVY MACHINERY & INFRASTRUCTURE"}
				</h1>

				{/* Sub-description */}
				<p className="mx-auto mt-6 max-w-2xl text-center font-sans text-base text-slate-600 leading-relaxed sm:text-lg">
					{data?.desc || "Delta Equipment is the sole authorized JCB dealer in Sudan, supplying heavy earthmovers, diesel generators, genuine OEM spare parts, and 24/7 technical support nationwide."}
				</p>
			</div>
		</section>
	);
}
