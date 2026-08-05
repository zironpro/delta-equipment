"use client";

import { useState } from "react";

import {
	ArrowUpRight,
	CheckCircle2,
	Mail,
	MapPin,
	Phone,
	Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
		</svg>
	);
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
		</svg>
	);
}

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2zm5.8 14.16c-.24.68-1.2 1.25-1.95 1.41-.51.11-1.18.2-3.43-.73-2.87-1.19-4.71-4.11-4.85-4.3-.14-.19-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.41.24-.26.63-.38.85-.38.1 0 .2.01.28.01.24.01.36.03.52.41.2.48.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.62 1.02 1.34 1.66.92.82 1.7 1.08 1.94 1.2.24.12.38.1.52-.06.14-.16.6-0.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.18 1.26z" />
		</svg>
	);
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
		</svg>
	);
}

const officialLocation = {
	city: "Atbara",
	address:
		"Airport Street, Block 4, Plot No. 388, Atbari City, River Nile State, Sudan",
	phone: "+249912370248",
	email: "info@deltaequip.net",
};

const socialChannels = [
	{
		name: "LinkedIn",
		handle: "Delta Equipment Sudan",
		url: "https://linkedin.com",
		icon: LinkedinIcon,
		desc: "Corporate announcements & industry news",
	},
	{
		name: "Facebook",
		handle: "@DeltaEquipmentSudan",
		url: "https://facebook.com",
		icon: FacebookIcon,
		desc: "Machinery delivery & project highlights",
	},
	{
		name: "WhatsApp Inquiry",
		handle: "+249912370248",
		url: "https://wa.me/249912370248",
		icon: WhatsappIcon,
		desc: "Direct instant sales & parts chat",
	},
	{
		name: "Instagram",
		handle: "@deltaequip_sd",
		url: "https://instagram.com",
		icon: InstagramIcon,
		desc: "On-site JCB fleet photo gallery",
	},
];

export function ContactFormSection() {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		fullName: "",
		companyName: "",
		phone: "",
		email: "",
		interest: "Backhoe Loaders",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setFormSubmitted(true);
	};

	return (
		<section className="bg-[#FAF6F0] py-16 font-sans text-slate-900 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
					{/* Left Column: Interactive Contact Form */}
					<div className="lg:col-span-7">
						<div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
							<span className="font-extrabold text-[#EAA800] text-xs uppercase tracking-wider">
								Official Inquiry Form
							</span>
							<h2 className="mt-2 font-extrabold text-2xl text-slate-950 sm:text-3xl">
								Send Us a Message
							</h2>
							<p className="mt-2 text-slate-600 text-sm">
								Fill out the form below and our JCB equipment specialists will
								get back to you within 24 business hours.
							</p>

							{formSubmitted ? (
								<div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600" />
										<div>
											<h4 className="font-extrabold text-sm">
												Inquiry Received Successfully!
											</h4>
											<p className="mt-1 text-emerald-700 text-xs">
												Thank you for contacting Delta Equipment. Our team in
												Atbara will review your request and reach out shortly.
											</p>
										</div>
									</div>
									<Button
										className="mt-4 h-9 cursor-pointer bg-emerald-800 px-4 text-white text-xs hover:bg-emerald-900"
										onClick={() => setFormSubmitted(false)}
									>
										Send Another Inquiry
									</Button>
								</div>
							) : (
								<form className="mt-8 space-y-5" onSubmit={handleSubmit}>
									<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
										<div>
											<label className="mb-1.5 block font-bold text-slate-950 text-xs">
												Full Name *
											</label>
											<input
												className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 text-xs focus:border-[#EAA800] focus:outline-none"
												onChange={(e) =>
													setFormData({ ...formData, fullName: e.target.value })
												}
												placeholder="e.g., Mohamed Ahmed"
												required
												type="text"
												value={formData.fullName}
											/>
										</div>

										<div>
											<label className="mb-1.5 block font-bold text-slate-950 text-xs">
												Company / Organization
											</label>
											<input
												className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 text-xs focus:border-[#EAA800] focus:outline-none"
												onChange={(e) =>
													setFormData({
														...formData,
														companyName: e.target.value,
													})
												}
												placeholder="e.g., Sudan Mining Co."
												type="text"
												value={formData.companyName}
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
										<div>
											<label className="mb-1.5 block font-bold text-slate-950 text-xs">
												Phone Number *
											</label>
											<input
												className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 text-xs focus:border-[#EAA800] focus:outline-none"
												onChange={(e) =>
													setFormData({ ...formData, phone: e.target.value })
												}
												placeholder="+249 912 370 248"
												required
												type="tel"
												value={formData.phone}
											/>
										</div>

										<div>
											<label className="mb-1.5 block font-bold text-slate-950 text-xs">
												Email Address *
											</label>
											<input
												className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 text-xs focus:border-[#EAA800] focus:outline-none"
												onChange={(e) =>
													setFormData({ ...formData, email: e.target.value })
												}
												placeholder="info@deltaequip.net"
												required
												type="email"
												value={formData.email}
											/>
										</div>
									</div>

									<div>
										<label className="mb-1.5 block font-bold text-slate-950 text-xs">
											Equipment or Service Line of Interest
										</label>
										<select
											className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 text-xs focus:border-[#EAA800] focus:outline-none"
											onChange={(e) =>
												setFormData({ ...formData, interest: e.target.value })
											}
											value={formData.interest}
										>
											<option value="Backhoe Loaders">
												JCB Backhoe Loaders (3CX / 4CX)
											</option>
											<option value="Tracked Excavators">
												Heavy Tracked Excavators
											</option>
											<option value="Wheel Loaders">
												Wheel Loaders & Telehandlers
											</option>
											<option value="Diesel Generators">
												JCB Diesel Generators (Power Solutions)
											</option>
											<option value="Genuine Spare Parts">
												Genuine OEM Spare Parts
											</option>
											<option value="Annual Service Contract">
												Annual Service Contract
											</option>
											<option value="Field Support">
												On-Site Field Technical Support
											</option>
										</select>
									</div>

									<div>
										<label className="mb-1.5 block font-bold text-slate-950 text-xs">
											Your Message or Inquiry Details *
										</label>
										<textarea
											className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 text-xs focus:border-[#EAA800] focus:outline-none"
											onChange={(e) =>
												setFormData({ ...formData, message: e.target.value })
											}
											placeholder="Please specify machinery model, quantity, project location, or specific spare parts requirements..."
											required
											rows={4}
											value={formData.message}
										/>
									</div>

									<Button
										className="h-11 w-full cursor-pointer justify-center bg-slate-950 font-bold font-sans text-white text-xs hover:bg-slate-800"
										type="submit"
									>
										<span>Submit Inquiry to Delta Equipment</span>
										<Send className="ml-2 h-4 w-4 text-[#FCAF20]" />
									</Button>

									{/* Call Booking Prompt */}
									<div className="mt-5 flex items-center justify-between gap-4 border-slate-100 border-t pt-4">
										<span className="font-medium text-slate-600 text-xs">
											Prefer to hop on a call?
										</span>
										<a
											className="inline-flex items-center gap-1.5 font-bold text-[#EAA800] text-xs hover:underline"
											href="tel:+249912370248"
										>
											<span>Book a call instead</span>
											<ArrowUpRight className="h-3.5 w-3.5" />
										</a>
									</div>
								</form>
							)}
						</div>
					</div>

					{/* Right Column: Official Contact & Social Cards */}
					<div className="space-y-6 lg:col-span-5">
						{/* Official Location Info Card */}
						<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
							<span className="font-extrabold text-[#EAA800] text-xs uppercase tracking-wider">
								Official Head Office & Support
							</span>
							<h3 className="mt-2 font-extrabold text-slate-950 text-xl">
								{officialLocation.city} Office
							</h3>

							<div className="mt-6 space-y-4 text-slate-700 text-xs">
								<div className="flex items-start gap-3">
									<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#EAA800]" />
									<div>
										<span className="font-bold text-slate-950">Address:</span>
										<p className="mt-0.5 text-slate-600 leading-relaxed">
											{officialLocation.address}
										</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#EAA800]" />
									<div>
										<span className="font-bold text-slate-950">Phone:</span>
										<p className="mt-0.5 font-bold text-slate-900">
											{officialLocation.phone}
										</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#EAA800]" />
									<div>
										<span className="font-bold text-slate-950">Email:</span>
										<p className="mt-0.5 font-bold text-slate-900">
											{officialLocation.email}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Official Social Media Channels Card */}
						<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
							<span className="font-extrabold text-[#EAA800] text-xs uppercase tracking-wider">
								Follow & Connect
							</span>
							<h3 className="mt-1.5 font-extrabold text-slate-950 text-xl">
								Official Social Channels
							</h3>
							<p className="mt-1 text-slate-600 text-xs">
								Stay connected with Delta Equipment across our official
								platforms.
							</p>

							<div className="mt-5 space-y-2.5">
								{socialChannels.map((item) => {
									const Icon = item.icon;
									return (
										<a
											className="group flex items-center justify-between rounded-lg border border-slate-200 bg-[#FAF6F0] p-3 shadow-2xs transition-all hover:border-[#FCAF20] hover:bg-white"
											href={item.url}
											key={item.name}
											rel="noopener noreferrer"
											target="_blank"
										>
											<div className="flex items-center gap-3">
												<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-[#FCAF20] transition-colors group-hover:bg-[#EAA800] group-hover:text-slate-950">
													<Icon className="h-4.5 w-4.5" />
												</div>
												<div>
													<h4 className="font-bold text-slate-950 text-xs transition-colors group-hover:text-[#EAA800]">
														{item.name}
													</h4>
													<p className="text-[11px] text-slate-500">
														{item.desc}
													</p>
												</div>
											</div>
											<ArrowUpRight className="group-hover:-translate-y-0.5 h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#EAA800]" />
										</a>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
