"use client";
import React, { useState } from "react";
import { Image } from "antd";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";
import { apiUrl } from "@/lib/utils";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/auth/forget-password`,
        { email }
      );

      if (response.status === 200) {
        toast.success("Нууц үг сэргээх линк илгээгдлээ", { autoClose: 3000 });
        setEmail("");
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

        <h2 className="text-2xl font-bold mb-2">Нууц үг сэргээх</h2>
        <p className="text-gray-600 mb-6">
          Бүртгэлтэй имэйл хаягаа оруулна уу. Бид таны имэйл хаяг руу нууц үг
          сэргээх линк илгээх болно.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Имэйл хаяг"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-green-400 rounded-lg p-2 text-xl focus:outline-none"
            required
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-400 rounded-lg text-xl p-2 border-none 
                     focus:outline-none hover:bg-green-500 text-white font-bold 
                     transition duration-300 disabled:bg-green-200"
          >
            {isLoading ? "Илгээж байна..." : "Илгээх"}
          </button>

          <Link
            href="/login"
            className="text-center text-green-500 hover:text-green-600"
          >
            Нэвтрэх хуудас руу буцах
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
