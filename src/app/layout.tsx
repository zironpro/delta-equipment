import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Manrope, Oswald } from "next/font/google";
import "./globals.css";

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
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	title: "DELTA EQUIPMENT | Premium Heavy Industrial Machinery & Fleet Rental",
	description:
		"High-performance excavators, wheel loaders, backhoes, and telehandlers engineered for maximum productivity, reliability, and precision.",
};

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className={`${barlowCondensed.variable} ${oswald.variable} ${manrope.variable} ${inter.variable} h-full scroll-smooth antialiased`}
			lang="en"
		>
			<body className="flex min-h-full flex-col bg-white font-sans text-slate-900 selection:bg-[#FFB800] selection:text-slate-950">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
