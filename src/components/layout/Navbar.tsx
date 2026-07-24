"use client";

import { useEffect, useState } from "react";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Menu, X } from "lucide-react";

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
				"border-[#E59D18] border-b bg-[#FCAF20] shadow-md"
			)}
		>
			<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Left Logo: JCB & Delta (mobile only) */}
				<Link className="group flex items-center gap-2.5 sm:gap-3.5" href="/">
					<Image
						alt="JCB Official Logo"
						className="h-9 w-auto object-contain sm:h-11"
						height={48}
						priority
						src="/global/logo.svg"
						width={130}
					/>
					<div className="h-5 w-[1px] bg-slate-950/30 md:hidden" />
					<DeltaLogo className="h-4.5 w-auto text-slate-950 opacity-85 transition-opacity group-hover:opacity-100 md:hidden" />
				</Link>

				{/* Desktop Navigation Links */}
				<nav className="hidden items-center gap-8 md:flex">
					{navLinks.map((link) => (
						<Link
							className="font-sans font-semibold text-slate-950 text-sm transition-colors hover:text-white"
							href={link.href}
							key={link.name}
						>
							{link.name}
						</Link>
					))}
				</nav>

				{/* Right Side Actions & Desktop Delta Logo */}
				<div className="flex items-center gap-4">
					<div className="hidden items-center gap-4 sm:flex">
						<Button
							className="group bg-slate-950 font-medium font-sans text-white hover:bg-slate-800"
							size="sm"
						>
							<span>Get Instant Quote</span>
							<ArrowUpRight className="group-hover:-translate-y-0.5 ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
						</Button>
					</div>

					{/* Desktop Vertical Divider */}
					<div className="hidden h-7 w-[1px] bg-slate-950/25 md:block" />

					{/* Desktop Delta Logo */}
					<Link className="group hidden items-center md:inline-flex" href="/">
						<DeltaLogo className="h-6 w-auto text-slate-950 opacity-85 transition-opacity group-hover:opacity-100 lg:h-7" />
					</Link>
				</div>

				{/* Mobile Hamburger Menu Button */}
				<button
					aria-label="Toggle navigation menu"
					className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-950/20 bg-slate-950 text-white transition-colors hover:bg-slate-800 md:hidden"
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
				<div className="border-[#E59D18] border-b bg-[#FCAF20] px-4 pt-4 pb-6 md:hidden">
					<nav className="flex flex-col space-y-4">
						{navLinks.map((link) => (
							<Link
								className="font-sans font-semibold text-base text-slate-950 transition-colors hover:text-white"
								href={link.href}
								key={link.name}
								onClick={() => setMobileMenuOpen(false)}
							>
								{link.name}
							</Link>
						))}

						<div className="border-slate-950/20 border-t pt-4">
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
