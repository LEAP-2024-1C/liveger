"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword: React.FC = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

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
        router.push(
          response.data.role === "host" ? "/host/hostlogin" : "/login"
        );
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
        <h2 className="text-2xl font-bold mb-2">Нууц үг сэргээх</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Шинэ нууц үг
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Нууц үг давтах
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) =>
                setPasswords({ ...passwords, confirmPassword: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
            disabled={isLoading}
          >
            {isLoading ? "Түр хүлээнэ үү..." : "Шинэчлэх"}
          </button>
        </form>
      </div>
    </div>
  );
};

// Wrap the component in Suspense
const ResetPasswordPage: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ResetPassword />
  </Suspense>
);

export default ResetPasswordPage;
