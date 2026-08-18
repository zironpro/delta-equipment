import { MdHeroSection } from "./sections/MdHeroSection";
import { MdLetterSection } from "./sections/MdLetterSection";

export default function MessageFromMdPage({ mdxData }: { mdxData?: any }) {
	return (
		<main className="min-h-screen bg-[#FAF6F0] font-sans text-slate-900 selection:bg-[#FCAF20] selection:text-slate-950">
			<MdHeroSection content={mdxData?.heroMdx?.frontmatter} />
			<MdLetterSection content={mdxData?.letterMdx?.frontmatter} />
		</main>
	);
}
