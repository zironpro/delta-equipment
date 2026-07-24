import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Manrope, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const futura = localFont({
	src: [
		{
			path: "../assets/font/futura/Futuru-Thin.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "../assets/font/futura/Futuru-Extralight.ttf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../assets/font/futura/Futuru-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../assets/font/futura/Futuru-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/font/futura/Futuru-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/font/futura/Futuru-Semibold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../assets/font/futura/Futuru-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../assets/font/futura/Futuru-Extrabold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../assets/font/futura/Futuru-Black.ttf",
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
			className={`${futura.variable} ${barlowCondensed.variable} ${oswald.variable} ${manrope.variable} ${inter.variable} h-full scroll-smooth antialiased`}
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
