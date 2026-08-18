"use client";

import type { ComponentType } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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

import { cn, getLocalizedHref } from "@/lib/utils";

import { DeltaLogo } from "./DeltaLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";

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

export function Navbar({ data }: { data?: any }) {
	const pathname = usePathname();
	const router = useRouter();
	const isArabic = pathname?.startsWith("/ar");
	const currentLocale = isArabic ? "ar" : "en";

	const toggleUrl = isArabic
		? pathname?.replace(/^\/ar/, "/en")
		: pathname?.replace(/^\/en/, "/ar");

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isMenuMounted, setIsMenuMounted] = useState(false);
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [dragOffset, setDragOffset] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const touchStartY = useRef(0);
	const [mounted, setMounted] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
	const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
	const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
	const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
	const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartY.current = e.touches[0].clientY;
		setIsDragging(true);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		const currentY = e.touches[0].clientY;
		const deltaY = currentY - touchStartY.current;
		if (deltaY > 0) {
			setDragOffset(deltaY);
		} else {
			setDragOffset(0);
		}
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
		if (dragOffset > 70) {
			setMobileMenuOpen(false);
		}
		setDragOffset(0);
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (mobileMenuOpen) {
			setIsMenuMounted(true);
			setDragOffset(0);
			setIsDragging(false);
			document.body.style.overflow = "hidden";
			const raf = requestAnimationFrame(() => {
				setTimeout(() => setIsMenuVisible(true), 20);
			});
			return () => cancelAnimationFrame(raf);
		} else {
			setIsMenuVisible(false);
			setDragOffset(0);
			setIsDragging(false);
			document.body.style.overflow = "";
			const timer = setTimeout(() => {
				setIsMenuMounted(false);
			}, 500);
			return () => clearTimeout(timer);
		}
	}, [mobileMenuOpen]);

	useEffect(() => {
		setMobileMenuOpen(false);
	}, [pathname]);

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

	const navHoverClass = "hover:text-white";
	const navActiveClass = "text-white";

	return (
		<header
			className={cn(
				"fixed top-0 right-0 left-0 z-50 w-full transform transition-all duration-300 border-[#E59D18] border-b bg-[#FCAF20] shadow-md",
				isVisible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
			)}
		>
			<div className="container flex h-20 items-center justify-between">
				{/* Left Logo: JCB & Delta (mobile only) */}
				<Link className="group flex items-center gap-2.5 sm:gap-3.5" href={`/${currentLocale}` as Route}>
					<Image
						alt="JCB Official Logo"
						className="h-9 w-auto rounded-lg object-contain sm:h-11"
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
						className={cn(
							"font-sans font-semibold text-slate-950 text-sm transition-colors",
							navHoverClass
						)}
						href={getLocalizedHref(currentLocale, "/")}
					>
						{data?.home || "Home"}
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
								"flex cursor-pointer items-center gap-1.5 font-sans font-semibold text-slate-950 text-sm transition-colors focus:outline-none",
								navHoverClass,
								productsDropdownOpen && navActiveClass
							)}
							onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
							type="button"
						>
							<span>{data?.products || "Products"}</span>
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
											{data?.jcbEquipmentTitle || "JCB Equipment & Tools"}
										</span>
									</div>

									<div className="grid grid-cols-2 gap-3">
										{(data?.productsMenu || productsNavItems).map((item: any) => {
											if (item.bgImage) {
												return (
													<Link
														className="group relative flex min-h-[140px] flex-col justify-end overflow-hidden rounded-lg border border-slate-800 p-4 transition-all duration-300 hover:border-[#FCAF20]/60"
														href={getLocalizedHref(currentLocale, item.href)}
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
													href={getLocalizedHref(currentLocale, item.href)}
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
								"flex cursor-pointer items-center gap-1.5 font-sans font-semibold text-slate-950 text-sm transition-colors focus:outline-none",
								navHoverClass,
								companyDropdownOpen && navActiveClass
							)}
							onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
							type="button"
						>
							<span>{data?.company || "Company"}</span>
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
													{data?.deltaGroupTitle || "Delta Machinery Group"}
												</span>
											</div>

											{(data?.companyMenu || companyNavItems).map((item: any) => {
												let Icon = item.icon;
												if (item.iconName === "Building2") Icon = Building2;
												if (item.iconName === "FileText") Icon = FileText;
												if (item.iconName === "Target") Icon = Target;
												if (item.iconName === "Newspaper") Icon = Newspaper;
												if (!Icon) Icon = Building2; // fallback

												return (
													<Link
														className="group flex items-start gap-3 rounded-lg p-2.5 transition-all duration-200 hover:bg-slate-900/90"
														href={getLocalizedHref(currentLocale, item.href)}
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
												href={getLocalizedHref(currentLocale, "/fleet")}
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
														{data?.companyCardSubtitle || "Official JCB Partner"}
													</span>
													<h4 className="mt-0.5 font-bold text-sm text-white">
														{data?.companyCardTitle || "Sole Authorized Dealer in Sudan"}
													</h4>
													<p className="mt-1 flex items-center gap-1 font-semibold text-[11px] text-slate-300">
														<span>{data?.companyCardLink || "Explore Equipment Fleet"}</span>
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
								"flex cursor-pointer items-center gap-1.5 font-sans font-semibold text-slate-950 text-sm transition-colors focus:outline-none",
								navHoverClass,
								servicesDropdownOpen && navActiveClass
							)}
							onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
							type="button"
						>
							<span>{data?.services || "Services & Support"}</span>
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
											{data?.jcbTechnicalTitle || "JCB Technical Solutions"}
										</span>
									</div>

									<div className="grid grid-cols-2 gap-3">
										{(data?.servicesMenu || servicesNavItems).map((item: any) => {
											if (item.bgImage) {
												return (
													<Link
														className="group relative flex min-h-[140px] flex-col justify-end overflow-hidden rounded-lg border border-slate-800 p-4 transition-all duration-300 hover:border-[#FCAF20]/60"
														href={getLocalizedHref(currentLocale, item.href)}
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
													href={getLocalizedHref(currentLocale, item.href)}
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
						className={cn(
							"font-sans font-semibold text-slate-950 text-sm transition-colors",
							navHoverClass
						)}
						href={getLocalizedHref(currentLocale, "/contact")}
					>
						{data?.contact || "Contact"}
					</Link>
				</nav>

				{/* Right Side Actions & Desktop Delta Logo */}
				<div className="flex items-center gap-4">
					<div className="hidden items-center gap-4 sm:flex">
						<LanguageSwitcher />
						<Button
							asChild
							className="group font-medium font-sans"
							size="sm"
							variant="dark"
						>
							<Link href={getLocalizedHref(currentLocale, "/contact")}>
								<span>{data?.getInstantQuote || "Get Instant Quote"}</span>
							</Link>
						</Button>
					</div>

					{/* Desktop Vertical Divider */}
					<div className="hidden h-7 w-[1px] bg-slate-950/25 md:block" />

					{/* Desktop Delta Logo */}
					<Link className="group hidden items-center md:inline-flex" href={getLocalizedHref(currentLocale, "/")}>
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

			{/* Mobile Bottom Sheet Drawer Portal */}
			{mounted && isMenuMounted && createPortal(
				<>
					{/* Backdrop with fade in/out transition */}
					<div
						aria-hidden="true"
						className={cn(
							"fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs transition-opacity duration-500 ease-in-out md:hidden",
							isMenuVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
						)}
						onClick={() => setMobileMenuOpen(false)}
					/>

					{/* Bottom Sheet Drawer with slow slide in/out transition and touch drag */}
					<div
						className={cn(
							"fixed inset-x-0 bottom-0 z-[100] flex max-h-[85vh] flex-col rounded-t-[28px] bg-white text-slate-900 shadow-2xl md:hidden",
							!isDragging && "transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
							isMenuVisible ? "translate-y-0" : "translate-y-full"
						)}
						style={{
							transform: isDragging || dragOffset > 0
								? `translateY(${dragOffset}px)`
								: undefined,
						}}
					>
						{/* Top Drag Handle Bar */}
						<div
							className="cursor-grab active:cursor-grabbing touch-none select-none px-6 pt-3 pb-3 border-b border-slate-100"
							onTouchEnd={handleTouchEnd}
							onTouchMove={handleTouchMove}
							onTouchStart={handleTouchStart}
						>
							{/* Drag Pill Handle */}
							<div className="mx-auto mb-3 h-1.5 w-12 shrink-0 rounded-full bg-slate-300 transition-colors hover:bg-slate-400" />

							{/* Sheet Header with Logo */}
							<div className="flex items-center justify-between">
								<Link
									className="flex items-center gap-2"
									href={getLocalizedHref(currentLocale, "/")}
									onClick={() => setMobileMenuOpen(false)}
								>
									<DeltaLogo className="h-6 w-auto text-slate-950" />
								</Link>
								<div className="h-1.5 w-6 rounded-full bg-transparent" />
							</div>
						</div>

						{/* Scrollable Menu Content */}
						<div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
							{/* Home Link */}
							<div>
								<Link
									className="block font-bold text-lg text-slate-950 transition-colors hover:text-[#D49800]"
									href={getLocalizedHref(currentLocale, "/")}
									onClick={() => setMobileMenuOpen(false)}
								>
									{data?.home || "Home"}
								</Link>
							</div>

							{/* Company Section & Sub-items */}
							<div className="space-y-2.5 border-slate-100 border-t pt-4">
								<span className="block font-bold text-slate-400 text-xs tracking-wider uppercase">
									{data?.company || "Company"}
								</span>
								<div className="space-y-2 pl-1">
									{(data?.companyMenu || companyNavItems).map((item: any) => (
										<Link
											className="block font-semibold text-base text-slate-900 transition-colors hover:text-[#D49800]"
											href={getLocalizedHref(currentLocale, item.href)}
											key={item.name}
											onClick={() => setMobileMenuOpen(false)}
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>

							{/* Products Section & Sub-items */}
							<div className="space-y-2.5 border-slate-100 border-t pt-4">
								<span className="block font-bold text-slate-400 text-xs tracking-wider uppercase">
									{data?.products || "Products"}
								</span>
								<div className="space-y-2 pl-1">
									{(data?.productsMenu || productsNavItems).map((item: any) => (
										<Link
											className="block font-semibold text-base text-slate-900 transition-colors hover:text-[#D49800]"
											href={getLocalizedHref(currentLocale, item.href)}
											key={item.name}
											onClick={() => setMobileMenuOpen(false)}
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>

							{/* Services & Support Section & Sub-items */}
							<div className="space-y-2.5 border-slate-100 border-t pt-4">
								<span className="block font-bold text-slate-400 text-xs tracking-wider uppercase">
									{data?.services || "Services & Support"}
								</span>
								<div className="space-y-2 pl-1">
									{(data?.servicesMenu || servicesNavItems).map((item: any) => (
										<Link
											className="block font-semibold text-base text-slate-900 transition-colors hover:text-[#D49800]"
											href={getLocalizedHref(currentLocale, item.href)}
											key={item.name}
											onClick={() => setMobileMenuOpen(false)}
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>

							{/* Contact Link */}
							<div className="border-slate-100 border-t pt-4 pb-2">
								<Link
									className="block font-bold text-lg text-slate-950 transition-colors hover:text-[#D49800]"
									href={getLocalizedHref(currentLocale, "/contact")}
									onClick={() => setMobileMenuOpen(false)}
								>
									{data?.contact || "Contact"}
								</Link>
							</div>
						</div>

						{/* Bottom Sticky Action Bar */}
						<div className="border-slate-100 border-t bg-white/95 p-4 backdrop-blur-sm">
							<div className="flex items-center gap-3">
								<Link
									className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#FCAF20] px-4 font-bold font-sans text-slate-950 text-sm shadow-sm transition-colors hover:bg-[#E59D18] whitespace-nowrap"
									href={getLocalizedHref(currentLocale, "/contact")}
									onClick={() => setMobileMenuOpen(false)}
								>
									<span>{data?.getInstantQuote || "Get Instant Quote"}</span>
									<ArrowUpRight className="h-4 w-4 shrink-0" />
								</Link>
								<Link
									className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 font-bold text-slate-800 text-sm shadow-sm transition-colors hover:bg-slate-100 whitespace-nowrap"
									href={(toggleUrl || "/") as Route}
									onClick={() => setMobileMenuOpen(false)}
								>
									<img
										alt={isArabic ? "English" : "العربية"}
										className="h-3.5 w-5 rounded-xs object-cover shrink-0"
										src={isArabic ? "https://flagcdn.com/w40/us.png" : "https://flagcdn.com/w40/ae.png"}
									/>
									<span>{isArabic ? "English" : "العربية"}</span>
								</Link>
							</div>
						</div>
					</div>
				</>,
				document.body
			)}
		</header>
	);
}
