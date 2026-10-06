"use server";

import { Resend } from "resend";

import type { ContactFormData, ContactResponse } from "@/types/contact";

const resend = new Resend(process.env.RESEND_API);

export async function sendContactEmail(
  payload: ContactFormData,
): Promise<ContactResponse> {
  const { name, email, subject, message } = payload;
  const plainText = message.replace(/<[^>]*>/g, "").trim();

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "dimaabagas73@gmail.com",
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${plainText}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #18181b; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 8px;">
          <h2 style="color: #e11d48; margin-bottom: 16px;">New Message from Portfolio Contact Form</h2>
          <div style="margin-bottom: 16px; padding: 12px; background-color: #f4f4f5; border-radius: 6px;">
            <p style="margin: 4px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 4px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 4px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 20px 0;" />
          <h3 style="font-size: 16px; margin-bottom: 8px;">Message:</h3>
          <div style="padding: 12px; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 6px;">
            ${message}
          </div>
        </div>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, message: "Pesan berhasil dikirim" };
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Gagal kirim pesan";
    return { success: false, error: errorMessage };
  }
}
