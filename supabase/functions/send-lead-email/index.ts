// Supabase Edge Function — Send lead email via Resend connector gateway.
//
// Setup (when ready):
// 1. Enable Lovable Cloud
// 2. Connect the Resend connector (provides RESEND_API_KEY)
// 3. Deploy this function — it will become available at /api/send-lead-email
//
// Env vars used: LOVABLE_API_KEY, RESEND_API_KEY, LEAD_NOTIFY_EMAIL (optional override)

// @ts-expect-error Deno runtime types not present in the frontend tsconfig
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

interface LeadPayload {
  name: string;
  email: string;
  website?: string;
  message: string;
}

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

const validate = (data: unknown): LeadPayload => {
  if (typeof data !== "object" || data === null) throw new Error("Invalid payload");
  const d = data as Record<string, unknown>;
  const name = String(d.name ?? "").trim();
  const email = String(d.email ?? "").trim();
  const website = String(d.website ?? "").trim();
  const message = String(d.message ?? "").trim();

  if (name.length < 2 || name.length > 80) throw new Error("Invalid name");
  if (!isValidEmail(email) || email.length > 255) throw new Error("Invalid email");
  if (website.length > 255) throw new Error("Invalid website");
  if (message.length < 10 || message.length > 1500) throw new Error("Invalid message");

  return { name, email, website: website || undefined, message };
};

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    // @ts-expect-error Deno global
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // @ts-expect-error Deno global
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

    // @ts-expect-error Deno global
    const NOTIFY_EMAIL = Deno.env.get("LEAD_NOTIFY_EMAIL") ?? "hello@rankly.co";

    const payload = validate(await req.json());

    const html = `
      <h2>New Rankly lead</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      ${payload.website ? `<p><strong>Website:</strong> ${escapeHtml(payload.website)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(payload.message)}</p>
    `;

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "Rankly <onboarding@resend.dev>",
        to: [NOTIFY_EMAIL],
        reply_to: payload.email,
        subject: `New lead: ${payload.name}`,
        html,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Resend API failed [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("send-lead-email error:", message);
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
