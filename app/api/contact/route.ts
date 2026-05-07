import { NextResponse } from "next/server"

const fallbackTo = "robin.bruyninckx@hotmail.com"
const fallbackFrom = "Portfolio Contact <onboarding@resend.dev>"

function asText(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: Request) {
  const formData = await request.formData()

  // Basic honeypot spam guard.
  if (asText(formData.get("bot-field"))) {
    return NextResponse.redirect(new URL("/contact?status=sent", request.url))
  }

  const firstName = asText(formData.get("firstName"))
  const lastName = asText(formData.get("lastName"))
  const email = asText(formData.get("email"))
  const message = asText(formData.get("message"))

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.redirect(new URL("/contact?status=invalid", request.url))
  }

  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    return NextResponse.redirect(new URL("/contact?status=config", request.url))
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || fallbackTo
  const fromEmail = process.env.CONTACT_FROM_EMAIL || fallbackFrom

  const subject = `New portfolio contact from ${firstName} ${lastName}`
  const text = [
    "New contact form submission",
    "",
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n")

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject,
      text,
      reply_to: email,
    }),
  })

  if (!response.ok) {
    return NextResponse.redirect(new URL("/contact?status=error", request.url))
  }

  return NextResponse.redirect(new URL("/contact?status=sent", request.url))
}
