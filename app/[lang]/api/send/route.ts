import { EmailTemplate } from "@/components/email-template";
import { ContactFormSchema } from "@/lib/validators";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = ContactFormSchema.parse(body);

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rchuzheng@gmail.com",
      subject: "New message from ricardochu.com",
      react: EmailTemplate({ name, email, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
