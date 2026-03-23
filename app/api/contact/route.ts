import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { name?: string; email?: string; message?: string }
    | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please provide name, email, and message." },
      { status: 400 }
    );
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // No database is configured in this template; we simply acknowledge receipt.
  // Hook up your email/CRM provider here if needed.
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}

