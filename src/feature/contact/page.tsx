"use client";

import { ContactFormSection } from "./sections/ContactFormSection";
import { ContactHeroSection } from "./sections/ContactHeroSection";
import { ContactMapSection } from "./sections/ContactMapSection";

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-[#FAF6F0] font-sans text-slate-900 selection:bg-[#FCAF20] selection:text-slate-950">
			<ContactHeroSection />
			<ContactFormSection />
			<ContactMapSection />
		</main>
	);
}
