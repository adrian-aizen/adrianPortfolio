import nodemailer from "nodemailer";

export const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.GMAIL_USER}>`,
    to: "aidss24adora@gmail.com",
    replyTo: email,
    subject: `New Portfolio Message from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0e0e0e; color: #fff; padding: 40px; border-radius: 8px;">
        <h2 style="color: #d4af6e; font-size: 22px; margin-bottom: 8px;">New Message</h2>
        <p style="color: #555; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 32px;">From your portfolio contact form</p>

        <div style="border-top: 1px solid #222; padding-top: 24px; margin-bottom: 20px;">
          <p style="color: #888; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 6px;">From</p>
          <p style="color: #fff; font-size: 16px; margin: 0;">${name}</p>
          <p style="color: #d4af6e; font-size: 13px; margin: 4px 0 0;">${email}</p>
        </div>

        <div style="border-top: 1px solid #222; padding-top: 24px;">
          <p style="color: #888; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 12px;">Message</p>
          <p style="color: #ccc; font-size: 15px; line-height: 1.7; margin: 0;">${message.replace(/\n/g, "<br/>")}</p>
        </div>

        <div style="border-top: 1px solid #222; margin-top: 32px; padding-top: 20px;">
          <p style="color: #333; font-size: 11px; margin: 0;">Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
};