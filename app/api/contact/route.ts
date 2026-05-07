import { NextResponse } from "next/server"

function asText(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : ""
}

function redirectWithStatus(request: Request, status: string) {
  return NextResponse.redirect(new URL(`/contact?status=${status}`, request.url), 303)
}

export async function POST(request: Request) {
  const formData = await request.formData()

  // Basic honeypot spam guard.
  if (asText(formData.get("bot-field"))) {
    return redirectWithStatus(request, "sent")
  }

  const firstName = asText(formData.get("firstName"))
  const lastName = asText(formData.get("lastName"))
  const email = asText(formData.get("email"))
  const message = asText(formData.get("message"))

  if (!firstName || !lastName || !email || !message) {
    return redirectWithStatus(request, "invalid")
  }

  // Submission is captured in Vercel function logs.
  console.log("[contact-submission]", {
    firstName,
    lastName,
    email,
    message,
    createdAt: new Date().toISOString(),
  })

  return redirectWithStatus(request, "sent")
}
