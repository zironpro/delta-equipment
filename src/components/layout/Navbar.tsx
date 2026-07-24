"use client";

import { useEffect, useState } from "react";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Menu, PhoneCall, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { DeltaLogo } from "./DeltaLogo";

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			setIsScrolled(currentScrollY > 20);

			if (currentScrollY <= 20) {
				setIsVisible(true);
			} else if (currentScrollY > lastScrollY && currentScrollY > 80) {
				setIsVisible(false);
			} else if (currentScrollY < lastScrollY) {
				setIsVisible(true);
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks: { name: string; href: Route }[] = [
		{ name: "Equipment Fleet", href: "#fleet" as Route },
		{ name: "LiveLink Telematics", href: "#telematics" as Route },
		{ name: "Services & Support", href: "#services" as Route },
		{ name: "About Us", href: "#about" as Route },
		{ name: "Contact", href: "#contact" as Route },
	];

	return (
		<header
			className={cn(
				"fixed top-0 right-0 left-0 z-50 w-full transform transition-all duration-300",
				isVisible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full",
				isScrolled || mobileMenuOpen
					? "border-slate-200/70 border-b bg-[#FAF6F0]/95 shadow-sm backdrop-blur-md"
					: "border-slate-200/40 border-b bg-[#FAF6F0]/80 backdrop-blur-md"
			)}
		>
			<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<Link className="flex items-center gap-3" href="/">
					<DeltaLogo className="h-7 w-auto text-slate-950" />
					<div className="h-6 w-[1px] bg-slate-300" />
					<Image
						alt="JCB Official Logo"
						className="h-7 w-auto object-contain"
						height={36}
						priority
						src="/global/logo.svg"
						width={92}
					/>
				</Link>

				{/* Desktop Navigation Links */}
				<nav className="hidden items-center gap-8 md:flex">
					{navLinks.map((link) => (
						<Link
							className="font-medium font-sans text-slate-700 text-sm transition-colors hover:text-[#EAA800]"
							href={link.href}
							key={link.name}
						>
							{link.name}
						</Link>
					))}
				</nav>

				{/* Right Side CTA Actions */}
				<div className="hidden items-center gap-4 sm:flex">
					<a
						className="hidden items-center gap-2 font-medium font-sans text-slate-700 text-xs transition-colors hover:text-slate-950 lg:flex"
						href="tel:+18005550199"
					>
						<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFB800]/20 text-[#D49800]">
							<PhoneCall className="h-4 w-4" />
						</div>
						<div className="text-left">
							<div className="text-[10px] text-slate-400 uppercase tracking-wider">
								24/7 Fleet Support
							</div>
							<div className="font-semibold text-slate-900">
								+1 (800) 555-0199
							</div>
						</div>
					</a>

					<Button
						className="group bg-slate-950 font-medium font-sans text-white hover:bg-slate-800"
						size="sm"
					>
						<span>Get Instant Quote</span>
						<ArrowUpRight className="group-hover:-translate-y-0.5 ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
					</Button>
				</div>

				{/* Mobile Hamburger Menu Button */}
				<button
					aria-label="Toggle navigation menu"
					className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300/80 bg-white text-slate-800 transition-colors hover:bg-slate-100 md:hidden"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					type="button"
				>
					{mobileMenuOpen ? (
						<X className="h-5 w-5" />
					) : (
						<Menu className="h-5 w-5" />
					)}
				</button>
			</div>

			{/* Mobile Dropdown Drawer */}
			{mobileMenuOpen && (
				<div className="border-slate-200/80 border-b bg-[#FAF6F0] px-4 pt-4 pb-6 md:hidden">
					<nav className="flex flex-col space-y-4">
						{navLinks.map((link) => (
							<Link
								className="font-medium font-sans text-base text-slate-800 transition-colors hover:text-[#EAA800]"
								href={link.href}
								key={link.name}
								onClick={() => setMobileMenuOpen(false)}
							>
								{link.name}
							</Link>
						))}

						<div className="border-slate-200 border-t pt-4">
							<a
								className="mb-4 flex items-center gap-3 font-medium font-sans text-slate-800 text-sm"
								href="tel:+18005550199"
							>
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFB800]/20 text-[#D49800]">
									<PhoneCall className="h-4 w-4" />
								</div>
								<span>+1 (800) 555-0199 (24/7 Support)</span>
							</a>

							<Button className="w-full justify-center bg-slate-950 font-medium font-sans text-white hover:bg-slate-800">
								<span>Get Instant Quote</span>
								<ArrowUpRight className="ml-1 h-4 w-4" />
							</Button>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
