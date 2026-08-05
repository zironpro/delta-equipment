import type { SVGProps } from "react";

export function ChevronDownSvg(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="currentColor"
			height="6"
			viewBox="0 0 8 6"
			width="8"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M0 1L4 5L8 1H0Z" />
		</svg>
	);
}

export function ChevronUpSvg(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="currentColor"
			height="6"
			viewBox="0 0 8 6"
			width="8"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M0 5L4 1L8 5H0Z" />
		</svg>
	);
}
