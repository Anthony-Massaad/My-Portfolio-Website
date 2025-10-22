import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL ?? "";

const escapeHtml = (str: string): string => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

type BodyStructure = {
  email: string;
  subject: string;
  message: string;
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body: BodyStructure = (await req.json()) as BodyStructure;
  const { email, subject, message } = body;

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject,
      html: `
        <p>${escapeHtml(message)}</p>
        <br />
        <p>From email: <a href="mailto:${escapeHtml(email)}">${escapeHtml(
        email
      )}</a></p>
      `,
    });

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
