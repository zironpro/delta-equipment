import { NextResponse } from "next/server";
import { type ContactInquiryPayload, sendContactInquiry } from "@/lib/email";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { fullName, companyName, phone, email, interest, message } =
			body || {};

		// Validation
		if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
			return NextResponse.json(
				{ success: false, error: "Full Name is required." },
				{ status: 400 }
			);
		}

		if (!email || typeof email !== "string" || !email.includes("@")) {
			return NextResponse.json(
				{ success: false, error: "A valid email address is required." },
				{ status: 400 }
			);
		}

		if (!phone || typeof phone !== "string" || !phone.trim()) {
			return NextResponse.json(
				{ success: false, error: "Phone number is required." },
				{ status: 400 }
			);
		}

		if (!message || typeof message !== "string" || !message.trim()) {
			return NextResponse.json(
				{ success: false, error: "Message content is required." },
				{ status: 400 }
			);
		}

		const payload: ContactInquiryPayload = {
			fullName: fullName.trim(),
			companyName: typeof companyName === "string" ? companyName.trim() : "",
			phone: phone.trim(),
			email: email.trim(),
			interest: typeof interest === "string" ? interest.trim() : "",
			message: message.trim(),
		};

		const info = await sendContactInquiry(payload);

		return NextResponse.json({
			success: true,
			message: "Inquiry sent successfully.",
			messageId: info.messageId,
		});
	} catch (error: any) {
		console.error("[API /api/contact Error]:", error);

		// Provide a helpful error message if credentials or network failed
		const errorMessage =
			error?.message || "Failed to deliver inquiry through SMTP server.";

		return NextResponse.json(
			{
				success: false,
				error: errorMessage,
			},
			{ status: 500 }
		);
	}
}
