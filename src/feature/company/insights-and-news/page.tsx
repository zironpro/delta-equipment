import { InsightsHeroSection } from "./sections/InsightsHeroSection";
import { InsightsGridSection } from "./sections/InsightsGridSection";

export default function InsightsAndNewsPage({ mdxData }: { mdxData?: any }) {
	return (
		<main className="min-h-screen bg-[#FAF6F0] font-sans text-slate-900 selection:bg-[#FCAF20] selection:text-slate-950">
			<InsightsHeroSection content={mdxData?.heroMdx?.frontmatter} />
			<InsightsGridSection blogs={mdxData?.blogs} />
		</main>
	);
}
