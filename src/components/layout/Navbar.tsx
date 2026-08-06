"use client";

import type { ComponentType } from "react";
import { useEffect, useState } from "react";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import {
	ArrowUpRight,
	Building2,
	ChevronRight,
	FileText,
	Menu,
	Newspaper,
	ShieldCheck,
	Target,
	Wrench,
	X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { ChevronDownSvg } from "@/assets/svg/ChevronIcon";

import { cn } from "@/lib/utils";

import { DeltaLogo } from "./DeltaLogo";

interface ProductNavItem {
	name: string;
	href: Route;
	bgImage?: string;
	icon?: ComponentType<{ className?: string }>;
	description?: string;
}

const productsNavItems: ProductNavItem[] = [
	{
		name: "Machines",
		href: "/fleet" as Route,
		bgImage: "/images/machines.webp",
	},
	{
		name: "Attachments",
		href: "/fleet" as Route,
		bgImage: "/images/attachments.webp",
	},
];

const companyNavItems = [
	{
		name: "About Us",
		description:
			"Sudan's official authorized dealer for JCB heavy industrial & construction machinery.",
		href: "/about" as Route,
		icon: Building2,
	},
	{
		name: "Message from MD",
		description:
			"A statement from our Managing Director on engineering & corporate commitment.",
		href: "/company/message-from-md" as Route,
		icon: FileText,
	},
	{
		name: "Vision & Mission",
		description:
			"Driving heavy infrastructure growth and empowering industries across Sudan.",
		href: "/company/vision-and-mission" as Route,
		icon: Target,
	},
	{
		name: "Insights & News",
		description:
			"Latest announcements, fleet expansion, field maintenance guides & JCB tech.",
		href: "/company/insights-and-news" as Route,
		icon: Newspaper,
	},
];

interface ServiceNavItem {
	name: string;
	description?: string;
	href: Route;
	icon?: ComponentType<{ className?: string }>;
	bgImage?: string;
}

const servicesNavItems: ServiceNavItem[] = [
	{
		name: "Product Support",
		description:
			"Complete technical diagnostics, mobile field engineering & genuine JCB spare parts.",
		href: "/services/product-support" as Route,
		icon: Wrench,
		bgImage: "/images/product-support.webp",
	},
	{
		name: "Annual Service Contract",
		description:
			"Customized preventive maintenance agreements & 24/7 technical field SLAs across Sudan.",
		href: "/services/annual-service-contract" as Route,
		icon: ShieldCheck,
		bgImage: "/images/annual-contract.webp",
	},
];

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
	const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
	const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
	const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
	const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
					<Link
						className="font-sans font-semibold text-slate-950 text-sm transition-colors hover:text-white"
						href={"/" as Route}
					>
						Home
					</Link>
					{/* Products Mega Dropdown */}
					<div
						className="relative py-4"
						onMouseEnter={() => setProductsDropdownOpen(true)}
						onMouseLeave={() => setProductsDropdownOpen(false)}
					>
						<button
							aria-expanded={productsDropdownOpen}
							className={cn(
								"flex cursor-pointer items-center gap-1.5 font-sans font-semibold text-slate-950 text-sm transition-colors hover:text-white focus:outline-none",
								productsDropdownOpen && "text-white"
							)}
							onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
							type="button"
						>
							<span>Products</span>
							<ChevronDownSvg
								className={cn(
									"h-2.5 w-2.5 transition-transform duration-200",
									productsDropdownOpen && "rotate-180"
								)}
							/>
						</button>

						{/* Dropdown Menu Panel - 2 in a row grid */}
						{productsDropdownOpen && (
							<div className="-translate-x-1/2 fade-in-0 zoom-in-95 absolute top-full left-1/2 z-50 w-[540px] animate-in pt-1 duration-200">
								<div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-4 shadow-2xl ring-1 ring-black/20">
									<div className="px-2 pt-1 pb-2">
										<span className="font-bold text-[#FCAF20] text-[10px] uppercase tracking-wider">
											JCB Equipment & Tools
										</span>
									</div>

									<div className="grid grid-cols-2 gap-3">
										{productsNavItems.map((item) => {
											if (item.bgImage) {
												return (
													<Link
														className="group relative flex min-h-[140px] flex-col justify-end overflow-hidden rounded-lg border border-slate-800 p-4 transition-all duration-300 hover:border-[#FCAF20]/60"
														href={item.href}
														key={item.name}
														onClick={() => setProductsDropdownOpen(false)}
													>
														<Image
															alt={item.name}
															className="object-cover transition-transform duration-500 group-hover:scale-105"
															fill
															quality={95}
															src={item.bgImage}
														/>

														<div className="relative z-10 flex items-center gap-1 font-bold text-base text-white transition-colors group-hover:text-[#FCAF20]">
															<span>{item.name}</span>
															<ChevronRight className="-translate-x-1 h-4 w-4 text-[#FCAF20] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
														</div>
													</Link>
												);
											}

											const Icon = item.icon;
											return (
												<Link
													className="group flex flex-col justify-between rounded-lg border border-slate-800/80 bg-slate-900/90 p-4 transition-all duration-200 hover:border-[#FCAF20]/50 hover:bg-slate-900"
													href={item.href}
													key={item.name}
													onClick={() => setProductsDropdownOpen(false)}
												>
													<div>
														{Icon && (
															<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-[#FCAF20] transition-colors group-hover:border-[#FCAF20]/40 group-hover:bg-[#FCAF20]/15">
																<Icon className="h-5 w-5" />
															</div>
														)}

														<div className="mt-3 flex items-center gap-1 font-semibold text-slate-100 text-sm transition-colors group-hover:text-[#FCAF20]">
															<span>{item.name}</span>
															<ChevronRight className="-translate-x-1 h-3.5 w-3.5 text-[#FCAF20] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
														</div>

														{item.description && (
															<p className="mt-1.5 line-clamp-3 text-slate-400 text-xs leading-relaxed">
																{item.description}
															</p>
														)}
													</div>
												</Link>
											);
										})}
									</div>
								</div>
							</div>
						)}
					</div>

					{/* Company Mega Dropdown */}
					<div
						className="relative py-4"
						onMouseEnter={() => setCompanyDropdownOpen(true)}
						onMouseLeave={() => setCompanyDropdownOpen(false)}
					>
						<button
							aria-expanded={companyDropdownOpen}
							className={cn(
								"flex cursor-pointer items-center gap-1.5 font-sans font-semibold text-slate-950 text-sm transition-colors hover:text-white focus:outline-none",
								companyDropdownOpen && "text-white"
							)}
							onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
							type="button"
						>
							<span>Company</span>
							<ChevronDownSvg
								className={cn(
									"h-2.5 w-2.5 transition-transform duration-200",
									companyDropdownOpen && "rotate-180"
								)}
							/>
						</button>

						{/* Dropdown Menu Panel */}
						{companyDropdownOpen && (
							<div className="-translate-x-1/2 fade-in-0 zoom-in-95 absolute top-full left-1/2 z-50 w-[660px] animate-in pt-1 duration-200">
								<div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-4 shadow-2xl ring-1 ring-black/20">
									<div className="grid grid-cols-12 gap-4">
										{/* Left Side: Navigation Item Names */}
										<div className="col-span-7 flex flex-col justify-between space-y-1">
											<div className="px-3 pt-1 pb-0.5">
												<span className="font-bold text-[#FCAF20] text-[10px] uppercase tracking-wider">
													Delta Machinery Group
												</span>
											</div>

											{companyNavItems.map((item) => {
												const Icon = item.icon;
												return (
													<Link
														className="group flex items-start gap-3 rounded-lg p-2.5 transition-all duration-200 hover:bg-slate-900/90"
														href={item.href}
														key={item.name}
														onClick={() => setCompanyDropdownOpen(false)}
													>
														<div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-[#FCAF20] transition-colors group-hover:border-[#FCAF20]/40 group-hover:bg-[#FCAF20]/15">
															<Icon className="h-4.5 w-4.5" />
														</div>
														<div className="flex-1">
															<div className="flex items-center gap-1 font-semibold text-slate-100 text-sm transition-colors group-hover:text-[#FCAF20]">
																<span>{item.name}</span>
																<ChevronRight className="-translate-x-1 h-3.5 w-3.5 text-[#FCAF20] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
															</div>
															<p className="mt-0.5 line-clamp-2 text-slate-400 text-xs leading-snug">
																{item.description}
															</p>
														</div>
													</Link>
												);
											})}
										</div>

										{/* Right Side: Featured Image Card */}
										<div className="col-span-5">
											<Link
												className="relative block h-full min-h-[250px] w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-900 shadow-md transition-colors hover:border-[#FCAF20]/50"
												href={"/fleet" as Route}
												onClick={() => setCompanyDropdownOpen(false)}
											>
												<Image
													alt="JCB Delta Equipment Showcase"
													className="object-cover"
													fill
													quality={95}
													src="/images/over-view image.webp"
												/>
												{/* Bottom Gradient Overlay */}
												<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

												{/* Bottom Text Overlay */}
												<div className="absolute right-0 bottom-0 left-0 z-10 p-4">
													<span className="font-bold text-[#FCAF20] text-[10px] uppercase tracking-wider">
														Official JCB Partner
													</span>
													<h4 className="mt-0.5 font-bold text-sm text-white">
														Sole Authorized Dealer in Sudan
													</h4>
													<p className="mt-1 flex items-center gap-1 font-semibold text-[11px] text-slate-300">
														<span>Explore Equipment Fleet</span>
														<ArrowUpRight className="h-3 w-3 text-[#FCAF20]" />
													</p>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>

					{/* Services & Support Mega Dropdown */}
					<div
						className="relative py-4"
						onMouseEnter={() => setServicesDropdownOpen(true)}
						onMouseLeave={() => setServicesDropdownOpen(false)}
					>
						<button
							aria-expanded={servicesDropdownOpen}
							className={cn(
								"flex cursor-pointer items-center gap-1.5 font-sans font-semibold text-slate-950 text-sm transition-colors hover:text-white focus:outline-none",
								servicesDropdownOpen && "text-white"
							)}
							onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
							type="button"
						>
							<span>Services & Support</span>
							<ChevronDownSvg
								className={cn(
									"h-2.5 w-2.5 transition-transform duration-200",
									servicesDropdownOpen && "rotate-180"
								)}
							/>
						</button>

						{/* Dropdown Menu Panel - 2 in a row square grid */}
						{servicesDropdownOpen && (
							<div className="-translate-x-1/2 fade-in-0 zoom-in-95 absolute top-full left-1/2 z-50 w-[540px] animate-in pt-1 duration-200">
								<div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-4 shadow-2xl ring-1 ring-black/20">
									<div className="px-2 pt-1 pb-2">
										<span className="font-bold text-[#FCAF20] text-[10px] uppercase tracking-wider">
											JCB Technical Solutions
										</span>
									</div>

									<div className="grid grid-cols-2 gap-3">
										{servicesNavItems.map((item) => {
											if (item.bgImage) {
												return (
													<Link
														className="group relative flex min-h-[140px] flex-col justify-end overflow-hidden rounded-lg border border-slate-800 p-4 transition-all duration-300 hover:border-[#FCAF20]/60"
														href={item.href}
														key={item.name}
														onClick={() => setServicesDropdownOpen(false)}
													>
														<Image
															alt={item.name}
															className="object-cover transition-transform duration-500 group-hover:scale-105"
															fill
															quality={95}
															src={item.bgImage}
														/>

														<div className="relative z-10 flex items-center gap-1 font-bold text-base text-white transition-colors group-hover:text-[#FCAF20]">
															<span>{item.name}</span>
															<ChevronRight className="-translate-x-1 h-4 w-4 text-[#FCAF20] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
														</div>
													</Link>
												);
											}

											const Icon = item.icon;
											return (
												<Link
													className="group flex flex-col justify-between rounded-lg border border-slate-800/80 bg-slate-900/90 p-4 transition-all duration-200 hover:border-[#FCAF20]/50 hover:bg-slate-900"
													href={item.href}
													key={item.name}
													onClick={() => setServicesDropdownOpen(false)}
												>
													<div>
														{Icon && (
															<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-[#FCAF20] transition-colors group-hover:border-[#FCAF20]/40 group-hover:bg-[#FCAF20]/15">
																<Icon className="h-5 w-5" />
															</div>
														)}

														<div className="mt-3 flex items-center gap-1 font-semibold text-slate-100 text-sm transition-colors group-hover:text-[#FCAF20]">
															<span>{item.name}</span>
															<ChevronRight className="-translate-x-1 h-3.5 w-3.5 text-[#FCAF20] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
														</div>

														{item.description && (
															<p className="mt-1.5 line-clamp-3 text-slate-400 text-xs leading-relaxed">
																{item.description}
															</p>
														)}
													</div>
												</Link>
											);
										})}
									</div>
								</div>
							</div>
						)}
					</div>
					<Link
						className="font-sans font-semibold text-slate-950 text-sm transition-colors hover:text-white"
						href={"/contact" as Route}
					>
						Contact
					</Link>
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
						<Link
							className="font-sans font-semibold text-base text-slate-950 transition-colors hover:text-white"
							href={"/" as Route}
							onClick={() => setMobileMenuOpen(false)}
						>
							Home
						</Link>
						{/* Mobile Products Dropdown Accordion */}
						<div>
							<button
								className="flex w-full cursor-pointer items-center justify-between font-sans font-semibold text-base text-slate-950 transition-colors hover:text-white"
								onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
								type="button"
							>
								<span>Products</span>
								<ChevronDownSvg
									className={cn(
										"h-3 w-3 transition-transform duration-200",
										mobileProductsOpen && "rotate-180"
									)}
								/>
							</button>
							{mobileProductsOpen && (
								<div className="mt-2 space-y-2 border-slate-950/30 border-l-2 pl-3">
									{productsNavItems.map((item) => (
										<Link
											className="block py-1 font-medium font-sans text-slate-950 text-sm transition-colors hover:text-white"
											href={item.href}
											key={item.name}
											onClick={() => setMobileMenuOpen(false)}
										>
											{item.name}
										</Link>
									))}
								</div>
							)}
						</div>

						{/* Mobile Company Dropdown Accordion */}
						<div>
							<button
								className="flex w-full cursor-pointer items-center justify-between font-sans font-semibold text-base text-slate-950 transition-colors hover:text-white"
								onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
								type="button"
							>
								<span>Company</span>
								<ChevronDownSvg
									className={cn(
										"h-3 w-3 transition-transform duration-200",
										mobileCompanyOpen && "rotate-180"
									)}
								/>
							</button>
							{mobileCompanyOpen && (
								<div className="mt-2 space-y-2 border-slate-950/30 border-l-2 pl-3">
									{companyNavItems.map((item) => (
										<Link
											className="block py-1 font-medium font-sans text-slate-950 text-sm transition-colors hover:text-white"
											href={item.href}
											key={item.name}
											onClick={() => setMobileMenuOpen(false)}
										>
											{item.name}
										</Link>
									))}
								</div>
							)}
						</div>

						{/* Mobile Services & Support Dropdown Accordion */}
						<div>
							<button
								className="flex w-full cursor-pointer items-center justify-between font-sans font-semibold text-base text-slate-950 transition-colors hover:text-white"
								onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
								type="button"
							>
								<span>Services & Support</span>
								<ChevronDownSvg
									className={cn(
										"h-3 w-3 transition-transform duration-200",
										mobileServicesOpen && "rotate-180"
									)}
								/>
							</button>
							{mobileServicesOpen && (
								<div className="mt-2 space-y-2 border-slate-950/30 border-l-2 pl-3">
									{servicesNavItems.map((item) => (
										<Link
											className="block py-1 font-medium font-sans text-slate-950 text-sm transition-colors hover:text-white"
											href={item.href}
											key={item.name}
											onClick={() => setMobileMenuOpen(false)}
										>
											{item.name}
										</Link>
									))}
								</div>
							)}
						</div>
						<Link
							className="font-sans font-semibold text-base text-slate-950 transition-colors hover:text-white"
							href={"/contact" as Route}
							onClick={() => setMobileMenuOpen(false)}
						>
							Contact
						</Link>

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
