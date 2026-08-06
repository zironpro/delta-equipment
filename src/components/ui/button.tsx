import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"btn-curve relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg font-normal text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"btn-curve-jcb bg-jcb font-heading text-slate-950 tracking-wide shadow-amber-500/20 shadow-soft-lg hover:shadow-jcb-glow",
				dark: "btn-curve-dark bg-slate-950 text-white shadow-md",
				destructive: "btn-curve-destructive bg-red-500 text-white shadow-sm",
				outline:
					"btn-curve-outline border border-slate-200 bg-white text-slate-800 shadow-sm",
				secondary:
					"btn-curve-secondary border border-slate-200/60 bg-slate-100 text-slate-900",
				ghost: "hover:bg-slate-100 hover:text-slate-900",
				link: "text-slate-900 underline-offset-4 hover:underline",
				jcbOutline:
					"btn-curve-outline border-2 border-[#FFB800] bg-white font-heading text-slate-950",
			},
			size: {
				default: "h-12 px-6 py-3",
				sm: "h-10 rounded-lg px-4 text-xs",
				lg: "h-14 rounded-lg px-8 font-heading text-base text-lg tracking-wide",
				icon: "h-11 w-11 rounded-lg",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
