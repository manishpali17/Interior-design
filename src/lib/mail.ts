"use server";
import nodemailer from "nodemailer";

const sendingEmail = process.env.EMAIL;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

export const sendEmail = async (
  email: string,
  description: string,
  fullName: string,
  additionalDetails?: string
) => {
  try {
    await transporter.sendMail({
      from: sendingEmail,
      to: email,
      subject: `Thanks for contacting me`,
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 30px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                <h2 style="color: #333; text-align: center;">Thanks <span style="font-weight: bold; color:black">${fullName}</span> for reaching out!</h2>
                <hr style="border-top: 1px solid #ddd;">
                <p style="color: #555; margin-top: 20px;">I appreciate your message and will get back to you as soon as possible regarding your query:</p>
                <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-top: 20px;">
                <p style="color: #555; margin: 0;">${description}</p>
                <br/>
                <p style="color: #555; margin: 0;">${additionalDetails}</p>
                </div>
                <hr style="border-top: 1px solid #ddd;">
                <p style="color: #888; margin-top: 20px; text-align: center;">Best regards,<br><span style="font-weight: bold; color:black">Manish Pali</span></p>
            </div>`,
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return { error: error.message };
  }
};
