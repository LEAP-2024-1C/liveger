import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: true,
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
export const sendPasswordResetEmail = async (
  email: string,
  resetToken: string
) => {
  const resetUrl = `http://localhost:3000/resetpassword?token=${resetToken}`;
  console.log("emailiig harah======", email);
  await transporter.sendMail({
    from: "liveGer2024@gmail.com",
    to: email,
    subject: "Нууц үг сэргээх хүсэлт - LiveGer",
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Нууц үг сэргээх</h2>
          <p>Сайн байна уу,</p>
          <p>Та LiveGer системд нууц үгээ сэргээх хүсэлт илгээсэн байна.</p>
          <p>Доорх товчийг дарж шинэ нууц үгээ тохируулна уу:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" 
               style="background-color: #4CAF50; 
                      color: white; 
                      padding: 12px 24px; 
                      text-decoration: none; 
                      border-radius: 4px;
                      display: inline-block;">
              Нууц үг сэргээх
            </a>
          </div>
          <p style="color: #666; font-size: 14px;">
            Энэ линк  5 минутын дараа хүчингүй болно.
          </p>
          <p style="color: #666; font-size: 14px;">
            Хэрэв та энэ хүсэлтийг илгээгээгүй бол энэ имэйлийг орхигдуулна уу.
          </p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #888; font-size: 12px;">
            © ${new Date().getFullYear()} LiveGer. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      `,
  });
};

export const sendEmail = async (email: string) => {
  await transporter.sendMail({
    from: "liveger2024@gmail.com",
    to: email,
    subject: "liveGer",
  });
};
