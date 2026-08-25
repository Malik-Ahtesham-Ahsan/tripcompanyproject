import { NextResponse } from "next/server";

type EnquiryPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  destination?: unknown;
  message?: unknown;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: EnquiryPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = asString(payload.name);
  const email = asString(payload.email);
  const phone = asString(payload.phone);
  const service = asString(payload.service);
  const destination = asString(payload.destination);
  const message = asString(payload.message);

  if (!name || !email || !phone || !service) {
    return NextResponse.json(
      { error: "Name, email, phone and service are required." },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error(
      "GOOGLE_SHEETS_WEBHOOK_URL is not set — see scripts/google-sheets-apps-script.js for setup."
    );
    return NextResponse.json(
      { error: "The enquiry sheet isn't connected yet. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const sheetResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name,
        email,
        phone,
        service,
        destination,
        message,
      }),
    });

    if (!sheetResponse.ok) {
      throw new Error(`Sheet webhook responded with status ${sheetResponse.status}`);
    }
  } catch (error) {
    console.error("Failed to log enquiry to Google Sheet:", error);
    return NextResponse.json(
      { error: "Couldn't save your enquiry right now. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
