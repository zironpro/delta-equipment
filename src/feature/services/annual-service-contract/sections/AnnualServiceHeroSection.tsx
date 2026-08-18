"use client";

export function AnnualServiceHeroSection() {
	return (
		<section className="relative flex min-h-[45vh] flex-col justify-center overflow-hidden bg-[#FAF6F0] pt-28 pb-16 text-slate-950 font-sans border-b border-slate-200/80">
			{/* Geometric background pattern */}
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
						Services & Support
					</span>
				</div>

				{/* Single Centered Main Heading */}
				<h1 className="mx-auto mt-3 max-w-4xl font-manrope font-normal text-3xl text-slate-950 uppercase leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
					ANNUAL SERVICE CONTRACT FOR JCB MACHINERY
				</h1>

				{/* Sub-description */}
				<p className="mx-auto mt-6 max-w-2xl text-center font-sans text-base text-slate-600 leading-relaxed sm:text-lg">
					Hassle-free ownership, 2 major & 3 minor scheduled services, OEM parts discounts, and guaranteed full-service dealer history across Sudan.
				</p>
			</div>
		</section>
	);
}
