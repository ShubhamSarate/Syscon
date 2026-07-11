import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { service, name, email, mobile } = await request.json();

    if (!service || !name || !email || !mobile) {
      return NextResponse.json(
        { error: "All fields (service, name, email, mobile) are required." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = process.env.SMTP_PORT || "587";
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPassword = process.env.SMTP_PASSWORD || process.env.EMAIL_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const smtpTo = process.env.SMTP_TO || smtpUser;

    const isSmtpConfigured = !!(smtpHost && smtpPort && smtpUser && smtpPassword && smtpTo);

    if (!isSmtpConfigured) {
      console.log("=================== CONTACT FORM SUBMISSION (DEV MOCK MODE) ===================");
      console.log(`Service Requested: ${service}`);
      console.log(`Client Name:       ${name}`);
      console.log(`Client Email:      ${email}`);
      console.log(`Mobile Number:     ${mobile}`);
      console.log("===============================================================================");

      return NextResponse.json({
        success: true,
        mock: true,
        message: "Submission received successfully (Mock Mode: SMTP credentials not set).",
        data: { service, name, email, mobile }
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || "587"),
      secure: smtpPort === "465", // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #ffffff;">
        <h2 style="color: #001f3f; border-bottom: 2px solid #001f3f; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
        <p style="font-size: 16px; color: #374151;">You have received a new inquiry from the SYSCON website:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #4b5563; border-bottom: 1px solid #f3f4f6; width: 35%;">Service Needed:</td>
            <td style="padding: 10px; color: #1f2937; border-bottom: 1px solid #f3f4f6; font-size: 16px; font-weight: 600;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #4b5563; border-bottom: 1px solid #f3f4f6;">Client Name:</td>
            <td style="padding: 10px; color: #1f2937; border-bottom: 1px solid #f3f4f6;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #4b5563; border-bottom: 1px solid #f3f4f6;">Client Email:</td>
            <td style="padding: 10px; color: #1f2937; border-bottom: 1px solid #f3f4f6;">
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #4b5563; border-bottom: 1px solid #f3f4f6;">Mobile Number:</td>
            <td style="padding: 10px; color: #1f2937; border-bottom: 1px solid #f3f4f6;">
              <a href="tel:${mobile}" style="color: #2563eb; text-decoration: none;">${mobile}</a>
            </td>
          </tr>
        </table>
        
        <div style="margin-top: 30px; font-size: 12px; color: #9ca3af; text-align: center; border-top: 1px solid #f3f4f6; padding-top: 15px;">
          This email was generated automatically by the SYSCON Website contact form.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name}" <${smtpFrom}>`,
      to: smtpTo,
      subject: `New Lead: ${service} - ${name}`,
      text: `New Contact Form Submission:\n\nService: ${service}\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      mock: false,
      message: "Email sent successfully."
    });
  } catch (error: any) {
    console.error("Error in contact route handler:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process contact form submission." },
      { status: 500 }
    );
  }
}
