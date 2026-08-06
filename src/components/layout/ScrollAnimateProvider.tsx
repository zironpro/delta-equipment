"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";

export function ScrollAnimateProvider({
	children,
}: {
	children: React.ReactNode;
}) {
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
					rootMargin: "50px 0px 50px 0px",
					threshold: 0.01,
				}
			);

			elements.forEach((el) => {
				const rect = el.getBoundingClientRect();
				// Immediately make elements in or near the active viewport visible without artificial delays
				if (rect.top <= window.innerHeight + 100 && rect.bottom > 0) {
					el.classList.add("is-visible");
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
