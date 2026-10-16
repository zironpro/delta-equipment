import type { Metadata } from "next";
import {
	Barlow_Condensed,
	Inter,
	Josefin_Sans,
	Manrope,
	Michroma,
	Oswald,
} from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";

const futura = localFont({
	src: [
		{
			path: "../../assets/font/futura/Futuru-Thin.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../assets/font/futura/Futuru-Extralight.ttf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../../assets/font/futura/Futuru-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../assets/font/futura/Futuru-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../assets/font/futura/Futuru-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../assets/font/futura/Futuru-Semibold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../assets/font/futura/Futuru-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../assets/font/futura/Futuru-Extrabold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../assets/font/futura/Futuru-Black.ttf",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-futura",
	display: "swap",
});

const barlowCondensed = Barlow_Condensed({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
	variable: "--font-barlow-condensed",
	display: "swap",
});

const oswald = Oswald({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-oswald",
	display: "swap",
});

const manrope = Manrope({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
	variable: "--font-manrope",
	display: "swap",
});

const inter = Inter({
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const michroma = Michroma({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-michroma",
	display: "swap",
});

const josefinSans = Josefin_Sans({
	weight: ["100", "300", "400", "600", "700"],
	subsets: ["latin"],
	variable: "--font-josefin-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "DELTA EQUIPMENT | Premium Heavy Industrial Machinery",
	description:
		"High-performance excavators, wheel loaders, backhoes, and telehandlers engineered for maximum productivity, reliability, and precision.",
	verification: {
		google: "5K6i1rcZhWRUT-q-pXFqz5ZdB-OKeFKzp0Wkwa3aHOc",
	},
};

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollAnimateProvider } from "@/components/layout/ScrollAnimateProvider";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { getMdxContent } from "@/lib/mdx";

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	const dir = locale === "ar" ? "rtl" : "ltr";
	const navbarData = getMdxContent("layout", locale, "Navbar")?.frontmatter;
	const footerData = getMdxContent("layout", locale, "Footer")?.frontmatter;

	return (
		<html
			className={`${futura.variable} ${barlowCondensed.variable} ${oswald.variable} ${manrope.variable} ${inter.variable} ${michroma.variable} ${josefinSans.variable} h-full scroll-smooth antialiased`}
			dir={dir}
			lang={locale}
		>
			<GoogleTagManager gtmId="GTM-5JVV7SLF" />
			<body className="flex min-h-full flex-col bg-white font-sans text-slate-900 selection:bg-[#FFB800] selection:text-slate-950">
				<Navbar data={navbarData} />
				<ScrollAnimateProvider>{children}</ScrollAnimateProvider>
				<Footer data={footerData} />
			</body>
			<GoogleAnalytics gaId="G-KFNT07G98T" />
		</html>
	);
}
