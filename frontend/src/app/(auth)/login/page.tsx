"use client";

import React, { useState } from "react";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:block lg:w-2/3 relative">
        <Image
          src="/image/image.webp"
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
          <div className="flex space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300">
              Хөдөө явах
            </button>
            <button className="border border-white text-white px-6 py-2 rounded-full flex items-center hover:bg-white hover:text-gray-800 transition duration-300">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
              Үйлчилгээ хархан үзүүлдэг вэ?
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex items-center justify-center px-6 bg-white">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-center mb-8">Нэвтрэх</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                И-мэйл
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Нууц үг
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                type="submit"
              >
                Нэвтрэх
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Нууц үгээ мартсан?
              </a>
            </div>
            <div className="text-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300"
                type="button"
              >
                Бүртгүүлэх
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
