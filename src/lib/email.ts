import nodemailer from "nodemailer";

export interface ContactInquiryPayload {
	fullName: string;
	companyName?: string;
	phone: string;
	email: string;
	interest?: string;
	message: string;
}

/**
 * Creates and returns the Nodemailer transporter configured for Microsoft 365.
 * Microsoft 365 SMTP standard settings:
 * - Host: smtp.office365.com
 * - Port: 587
 * - STARTTLS encryption (secure: false, requireTLS: true)
 */
export function getM365Transporter() {
	const host = process.env.SMTP_HOST || "smtp.office365.com";
	const port = Number(process.env.SMTP_PORT) || 465;
	const user = process.env.SMTP_USER?.trim();
	// Strip spaces in case the user pasted a 16-character Google App Password with spaces
	const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");

	if (!user || !pass) {
		console.warn(
			"[SMTP Warning] SMTP_USER or SMTP_PASS is missing in environment variables. Email sending may fail."
		);
	}

	const isGmail = host.toLowerCase().includes("gmail.com");

	if (isGmail) {
		return nodemailer.createTransport({
			service: "gmail",
			auth: {
				user,
				pass,
			},
		});
	}

	return nodemailer.createTransport({
		host,
		port,
		secure: port === 465, // true for 465, false for 587
		auth: {
			user,
			pass,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});
}

function escapeHtml(text: string): string {
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

/**
 * Generates an executive, responsive HTML email template for Delta Equipment inquiries.
 */
export function renderInquiryEmailHtml(payload: ContactInquiryPayload): string {
	const safeName = escapeHtml(payload.fullName || "Valued Client");
	const safeCompany = escapeHtml(payload.companyName || "Not specified");
	const safePhone = escapeHtml(payload.phone || "Not specified");
	const safeEmail = escapeHtml(payload.email || "Not specified");
	const safeInterest = escapeHtml(payload.interest || "General Inquiry");
	const safeMessage = escapeHtml(payload.message || "").replace(/\n/g, "<br/>");
	const submittedAt = new Date().toUTCString();

	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Inquiry - Delta Equipment</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F1F4F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1E293B;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F1F4F9; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #E2E8F0;">
          
          <!-- Top Accent Gold Bar -->
          <tr>
            <td style="background: linear-gradient(90deg, #FCAF20, #FFC72C, #FCAF20); height: 6px;"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="background-color: #0F172A; padding: 28px 32px; text-align: left;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="color: #FCAF20; font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;">
                      Delta Equipment Sudan
                    </div>
                    <h1 style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">
                      New Customer Inquiry
                    </h1>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; background-color: #1E293B; border: 1px solid #334155; color: #FCAF20; font-size: 11px; font-weight: 700; padding: 6px 12px; border-radius: 9999px;">
                      Official Dealer
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Interest Banner -->
          <tr>
            <td style="background-color: #FFF9ED; border-bottom: 1px solid #FDE68A; padding: 14px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="font-size: 12px; color: #78350F; font-weight: 600;">
                    <strong style="color: #92400E; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">Equipment Line:</strong> 
                    <span style="display: inline-block; background-color: #FCAF20; color: #0F172A; padding: 3px 10px; border-radius: 6px; font-weight: 800; margin-left: 6px;">
                      ${safeInterest}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              
              <!-- Client Details Table -->
              <h2 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 700; color: #0F172A; text-transform: uppercase; letter-spacing: 0.8px;">
                Client Information
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; margin-bottom: 24px;">
                <tr style="background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;">
                  <td width="35%" style="padding: 12px 16px; font-size: 12px; font-weight: 700; color: #64748B;">Full Name</td>
                  <td width="65%" style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #0F172A;">${safeName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #E2E8F0;">
                  <td style="padding: 12px 16px; font-size: 12px; font-weight: 700; color: #64748B;">Company / Org</td>
                  <td style="padding: 12px 16px; font-size: 14px; color: #1E293B;">${safeCompany}</td>
                </tr>
                <tr style="background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;">
                  <td style="padding: 12px 16px; font-size: 12px; font-weight: 700; color: #64748B;">Email Address</td>
                  <td style="padding: 12px 16px; font-size: 14px; color: #0284C7; font-weight: 600;">
                    <a href="mailto:${safeEmail}" style="color: #0284C7; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 12px; font-weight: 700; color: #64748B;">Phone / Mobile</td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #0F172A;">
                    <a href="tel:${safePhone.replace(/\s/g, "")}" style="color: #0F172A; text-decoration: none;">${safePhone}</a>
                  </td>
                </tr>
              </table>

              <!-- Message Details -->
              <h2 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 700; color: #0F172A; text-transform: uppercase; letter-spacing: 0.8px;">
                Inquiry / Request Details
              </h2>
              <div style="background-color: #F8FAFC; border-left: 4px solid #FCAF20; border-radius: 4px; padding: 18px; margin-bottom: 28px;">
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155;">
                  ${safeMessage}
                </p>
              </div>

              <!-- Action Bar -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}?subject=Re: Delta Equipment Inquiry - ${safeInterest}" 
                       style="display: inline-block; background-color: #0F172A; color: #FCAF20; font-size: 13px; font-weight: 700; padding: 12px 28px; border-radius: 6px; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px;">
                      Reply to Client (${safeEmail})
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 20px 32px; text-align: center;">
              <p style="margin: 0 0 4px 0; font-size: 11px; color: #64748B;">
                Received on: <span style="font-weight: 600; color: #334155;">${submittedAt}</span>
              </p>
              <p style="margin: 0; font-size: 11px; color: #94A3B8;">
                Delta Equipment Sudan &bull; Airport St, Block 4, Plot 388, Atbara, Sudan &bull; Hotline: 1024
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Generates plain text version for email clients that do not render HTML.
 */
export function renderInquiryEmailText(payload: ContactInquiryPayload): string {
	return `NEW INQUIRY - DELTA EQUIPMENT SUDAN
=========================================

Client Name:    ${payload.fullName}
Company:        ${payload.companyName || "Not specified"}
Email:          ${payload.email}
Phone:          ${payload.phone}
Line/Interest:  ${payload.interest || "General Inquiry"}
Timestamp:      ${new Date().toUTCString()}

INQUIRY DETAILS:
-----------------------------------------
${payload.message}

-----------------------------------------
Submitted via the Delta Equipment official website contact form.
Reply directly to this email to contact ${payload.email}.
`;
}

/**
 * Sends the contact inquiry email via Microsoft 365 SMTP.
 */
export async function sendContactInquiry(payload: ContactInquiryPayload) {
	const transporter = getM365Transporter();

	const senderEmail = process.env.SMTP_USER || "info@deltaequip.net";
	const fromAddress =
		process.env.SMTP_FROM || `Delta Equipment Inquiries <${senderEmail}>`;
	const receiverEmail =
		process.env.CONTACT_RECEIVER_EMAIL || senderEmail || "info@deltaequip.net";

	const subject = `[Website Inquiry] ${payload.fullName} - ${payload.interest || "Equipment Request"}`;

	const mailOptions = {
		from: fromAddress,
		to: receiverEmail,
		replyTo: payload.email,
		subject,
		html: renderInquiryEmailHtml(payload),
		text: renderInquiryEmailText(payload),
	};

	return await transporter.sendMail(mailOptions);
}
