import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Route } from "next";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getLocalizedHref(locale: string, path: string): Route {
	if (path === "/") {
		return `/${locale}` as Route;
	}
	return `/${locale}${path}` as Route;
}
