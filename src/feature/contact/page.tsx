"use client";

import { ContactHeroSection } from "./sections/ContactHeroSection";
import { ContactFormSection } from "./sections/ContactFormSection";

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-[#FAF6F0] font-sans text-slate-900 selection:bg-[#FCAF20] selection:text-slate-950">
			<ContactHeroSection />
			<ContactFormSection />
		</main>
	);
}
