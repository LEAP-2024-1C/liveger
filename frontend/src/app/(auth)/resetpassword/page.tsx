"use client";
import React, { useState } from "react";
import { Image } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";

const ResetPassword: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      toast.error("Буруу холбоос байна");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("Нууц үгнүүд таарахгүй байна");
      return;
    }

    if (passwords.newPassword.length < 6) {
      toast.error("Нууц үг хамгийн багадаа 6 тэмдэгттэй байх ёстой");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:9002/api/v1/auth/reset-password`,
        {
          resetToken: token,
          password: passwords.newPassword,
        }
      );

      if (response.status === 200) {
        toast.success("Нууц үг амжилттай шинэчлэгдлээ");
        router.push("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <div className="w-96 p-6">
        <div className="justify-center mb-6 flex flex-row items-center gap-1">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/5333/5333676.png"
            alt="logo"
            width={30}
            height={30}
          />
          <h3 className="font-bold text-3xl">
            Mongolian <span className="text-green-400">Live Ger</span>
          </h3>
        </div>

        <h2 className="text-2xl font-bold mb-2">Шинэ нууц үг тохируулах</h2>
        <p className="text-gray-600 mb-6">Шинэ нууц үгээ оруулна уу</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Шинэ нууц үг"
            value={passwords.newPassword}
            onChange={(e) =>
              setPasswords({
                ...passwords,
                newPassword: e.target.value,
              })
            }
            className="border-2 border-green-400 rounded-lg p-2 text-xl focus:outline-none"
            required
            minLength={6}
          />

          <input
            type="password"
            placeholder="Нууц үг давтах"
            value={passwords.confirmPassword}
            onChange={(e) =>
              setPasswords({
                ...passwords,
                confirmPassword: e.target.value,
              })
            }
            className="border-2 border-green-400 rounded-lg p-2 text-xl focus:outline-none"
            required
            minLength={6}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-400 rounded-lg text-xl p-2 border-none 
                     focus:outline-none hover:bg-green-500 text-white font-bold 
                     transition duration-300 disabled:bg-green-200"
          >
            {isLoading ? "Хадгалж байна..." : "Хадгалах"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
