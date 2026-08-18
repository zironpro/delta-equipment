import { VisionMissionHeroSection } from "./sections/VisionMissionHeroSection";
import { VisionMissionContentSection } from "./sections/VisionMissionContentSection";

export default function VisionMissionPage({ mdxData }: { mdxData?: any }) {
	return (
		<main className="min-h-screen bg-[#FAF6F0] font-sans text-slate-900 selection:bg-[#FCAF20] selection:text-slate-950">
			<VisionMissionHeroSection content={mdxData?.heroMdx?.frontmatter} />
			<VisionMissionContentSection content={mdxData?.contentMdx?.frontmatter} />
		</main>
	);
}
