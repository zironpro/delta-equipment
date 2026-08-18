"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDownSvg } from "@/assets/svg/ChevronIcon";

export function LanguageSwitcher() {
	const pathname = usePathname();
	const isArabic = pathname?.startsWith("/ar");
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const currentFlag = isArabic ? "https://flagcdn.com/w40/ae.png" : "https://flagcdn.com/w40/us.png";
	const currentLang = isArabic ? "العربية" : "English";

	// Generate safe toggle paths
	const enPath = pathname ? pathname.replace(/^\/(en|ar)/, "/en") : "/en";
	const arPath = pathname ? pathname.replace(/^\/(en|ar)/, "/ar") : "/ar";

	return (
		<div className="relative py-4" ref={dropdownRef}>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className={cn(
					"flex cursor-pointer items-center gap-1.5 font-sans font-semibold text-slate-950 text-sm transition-colors focus:outline-none hover:text-white",
					isOpen && "text-white"
				)}
			>
				<img src={currentFlag} alt={currentLang} className="h-3.5 w-5 rounded-sm object-cover shadow-xs" />
				<span>{currentLang}</span>
				<ChevronDownSvg
					className={cn(
						"h-2.5 w-2.5 transition-transform duration-200",
						isOpen && "rotate-180"
					)}
				/>
			</button>

			{isOpen && (
				<div className="absolute right-0 top-full z-50 w-36 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
					<div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-1.5 shadow-2xl ring-1 ring-black/20">
					<Link
						href={enPath as any}
						onClick={() => setIsOpen(false)}
						className={cn(
							"flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold transition-all",
							!isArabic 
								? "bg-[#FCAF20]/15 text-[#FCAF20]" 
								: "text-slate-100 hover:bg-slate-900 hover:text-[#FCAF20]"
						)}
					>
						<img src="https://flagcdn.com/w40/us.png" alt="English" className="h-3.5 w-5 rounded-sm object-cover" />
						English
					</Link>
					<Link
						href={arPath as any}
						onClick={() => setIsOpen(false)}
						className={cn(
							"flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold transition-all mt-1",
							isArabic 
								? "bg-[#FCAF20]/15 text-[#FCAF20]" 
								: "text-slate-100 hover:bg-slate-900 hover:text-[#FCAF20]"
						)}
					>
						<img src="https://flagcdn.com/w40/ae.png" alt="العربية" className="h-3.5 w-5 rounded-sm object-cover" />
						العربية
					</Link>
					</div>
				</div>
			)}
		</div>
	);
}
