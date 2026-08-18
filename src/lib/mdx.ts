import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dataDirectory = path.join(process.cwd(), "src/data");

export function getMdxContent(page: string, locale: string, section: string) {
	const fullPath = path.join(dataDirectory, page, locale, `${section}.mdx`);
	
	try {
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);
		return { frontmatter: data, content };
	} catch (error) {
		console.error(`Error reading MDX file: ${fullPath}`, error);
		return null;
	}
}

export function getAllMdxContent(subDir: string, locale: string) {
	const fullDir = path.join(dataDirectory, subDir, locale);
	
	try {
		if (!fs.existsSync(fullDir)) return [];
		
		const fileNames = fs.readdirSync(fullDir);
		const mdxFiles = fileNames.filter((fileName) => fileName.endsWith('.mdx'));
		
		const allContent = mdxFiles.map((fileName) => {
			const fullPath = path.join(fullDir, fileName);
			const fileContents = fs.readFileSync(fullPath, "utf8");
			const { data, content } = matter(fileContents);
			
			// Try to ensure there is an ID either from frontmatter or filename
			return { 
				frontmatter: { ...data, id: data.id || fileName.replace(/\.mdx$/, '') }, 
				content 
			};
		});
		
		return allContent;
	} catch (error) {
		console.error(`Error reading MDX directory: ${fullDir}`, error);
		return [];
	}
}

