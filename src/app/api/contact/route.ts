import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const { name, email = "", phone = "", message } = await req.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return new Response(
      JSON.stringify({
        error: "Name, email, and message are required.",
      }),
      { status: 400 }
    );
  }

  /* ----- Admin email ----- */
  const adminHtml = /* html */ `
    <style>*{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}</style>
    <h2 style="margin:0 0 12px;color:#1572ff">Royal Aqua – New Enquiry</h2>
    <table cellpadding="0" cellspacing="0" style="font-size:15px">
      <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
      <tr><td><strong>Phone:</strong></td><td>${phone || "—"}</td></tr>
      <tr><td style="vertical-align:top"><strong>Message:</strong></td>
          <td>${message.replace(/\n/g, "<br/>")}</td></tr>
    </table>
    <p style="margin-top:24px;font-size:12px;color:#999">
      Sent from royal­aqua.in contact form
    </p>`;

  const { error: adminError } = await resend.emails.send({
    from: `Royal Aqua <${process.env.RESEND_FROM_EMAIL}>`,
    to: process.env.RESEND_TO_EMAIL!,
    subject: `🔔 New enquiry from ${name}`,
    html: adminHtml,
  });

  /* ----- User confirmation (always, because email required) ----- */
  const userHtml = /* html */ `
    <style>*{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}</style>
    <div style="max-width:560px;margin:auto;padding:32px;border:1px solid #eee;border-radius:8px">
      <h1 style="margin:0 0 16px;color:#1572ff">Thanks for contacting Royal Aqua!</h1>
      <p style="font-size:15px;line-height:1.6">
        Hi ${name.split(" ")[0]},<br/>
        We’ve received your enquiry and will get back to you soon.<br/><br/>
        <strong>Your message:</strong><br/>
        <em>${message.replace(/\n/g, "<br/>")}</em>
      </p>
      <p style="font-size:13px;color:#888;margin-top:40px">
        — Team Royal Aqua • Gurgaon
      </p>
    </div>`;
  const { error: userError } = await resend.emails.send({
    from: `Royal Aqua <${process.env.RESEND_FROM_EMAIL}>`,
    to: email,
    subject: "We’ve received your enquiry",
    html: userHtml,
  });

  if (adminError || userError) {
    console.error("Email send error(s):", { adminError, userError });
    return new Response(JSON.stringify({ error: adminError || userError }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
