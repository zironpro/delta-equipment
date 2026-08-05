"use client";

import { MdHeroSection } from "./sections/MdHeroSection";
import { MdLetterSection } from "./sections/MdLetterSection";

export default function MessageFromMdPage() {
	return (
		<main className="min-h-screen bg-[#FAF6F0] font-sans text-slate-900 selection:bg-[#FCAF20] selection:text-slate-950">
			<MdHeroSection />
			<MdLetterSection />
		</main>
	);
}
