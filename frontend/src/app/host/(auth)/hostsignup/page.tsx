"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const HostSignup = () => {
  const router = useRouter();
  const [HostData, setHostData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "host",
  });

  const hostSignup = async () => {
    const { firstName, lastName, phoneNumber, email, password } = HostData;
    try {
      const res = await axios.post(`http://localhost:9002/api/v1/auth/signup`, {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        role: "host",
      });
      if (res.status === 201) {
        toast.success("Host амжилттай бүртгэгдлээ", { autoClose: 1000 });
        router.push("/host/hostlogin");
      }
    } catch (error) {
      console.error("Бүртгэл үүсгэхэд алдаа гарлаа:", error);
      toast.error("Бүртгэл үүсгэж чадсангүй. Дахин оролдоно уу.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHostData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!HostData.firstName || !HostData.email) {
      toast.error("Шаардлагатай бүх талбарыг бөглөнө үү.");
      return;
    }
    await hostSignup();
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:block lg:w-2/3 relative">
        <Image
          src="/image.webp"
          alt="Mongolian landscape"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-12 text-white">
          <h1 className="text-5xl font-bold mb-4">Хөдөөг өвлүүлэн үлдээе</h1>
          <p className="text-xl mb-8">
            Малчин айлын дэргэдэх гэр түрээслийн үйлчилгээ нь гэр бүлд чиглэж
            монгол ахуйг дэргэдээс нь мэдрэх, өөрийн биеэр оролцох, энгийн
            сайхан хөдөөд өөрийгөө амраах, хөдөө амьдрах боломж олгосоор байна.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex items-center justify-center px-6 bg-white">
        <div className="max-w-md w-full">
          <Link href="/">
            <div className="flex flex-row p-18  justify-center space-x-3">
              <Image
                src="/ger.png"
                alt="zurag1"
                width={40}
                height={40}
                className=""
              />
              <p
                className={`max-sm:hidden text-emerald-800 text-2xl font-bold ${dancingScript.className}`}
              >
                Live Ger
              </p>
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-center mb-8">Бүртгүүлэх</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Нэр
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                placeholder="Нэрээ оруулна уу"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Овог
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                placeholder="Овогоо оруулна уу"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Утасны дугаар
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                placeholder="Утасны дугаараа оруулна уу"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                И-мэйл
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                placeholder="И-мэйл хаягаа оруулна уу"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Нууц үг
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                placeholder="Нууц үгээ оруулна уу"
                required
              />
            </div>
            <div>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300"
                type="submit"
              >
                Бүртгүүлэх
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <Link href="/host/hostlogin">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2 transition duration-300"
                type="button"
              >
                Нэвтрэх
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostSignup;
