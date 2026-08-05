"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimateProvider({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	useEffect(() => {
		let observer: IntersectionObserver | null = null;

		const initObserver = () => {
			const elements = document.querySelectorAll(
				"section, main > div, [data-animate], .reveal-on-scroll"
			);

			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("is-visible");
							if (observer) {
								observer.unobserve(entry.target);
							}
						}
					});
				},
				{
					root: null,
					rootMargin: "0px 0px -80px 0px",
					threshold: 0.08,
				}
			);

			elements.forEach((el) => {
				const rect = el.getBoundingClientRect();
				// For elements at the top of the page, trigger after 200ms so the user clearly sees the slow entrance animation
				if (rect.top <= 150 && rect.bottom > 0) {
					setTimeout(() => {
						el.classList.add("is-visible");
					}, 200);
				} else {
					observer?.observe(el);
				}
			});
		};

		// Run after DOM has updated for the current route
		const timer = setTimeout(() => {
			initObserver();
		}, 80);

		return () => {
			clearTimeout(timer);
			if (observer) {
				observer.disconnect();
			}
		};
	}, [pathname]);

	return <>{children}</>;
}
