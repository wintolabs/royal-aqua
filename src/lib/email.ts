import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEnquiryEmail({
  name,
  phone,
  message,
}: {
  name: string;
  phone: string;
  message: string;
}) {
  const html = /* html */ `
    <h2>New RO enquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
  `;

  // 1) Notify Royal Aqua
  await resend.emails.send({
    from: process.env.SITE_EMAIL!,
    to: process.env.ADMIN_EMAIL!,
    subject: "🔔 New Royal Aqua enquiry",
    html,
  });

  // 2) Optional customer confirmation (works if they type an email)
  if (phone.includes("@")) {
    await resend.emails.send({
      from: process.env.SITE_EMAIL!,
      to: phone,
      subject: "Thanks for contacting Royal Aqua",
      html: `<p>Hi ${name.split(" ")[0]},</p><p>Thanks for reaching out! We’ll call you shortly.</p>`,
    });
  }
}
