"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HostSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempted with:", formData);
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
          <h2 className="text-3xl font-bold text-center mb-8">Бүртгүүлэх</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                value={formData.firstName}
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
                value={formData.lastName}
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
                value={formData.phoneNumber}
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
                value={formData.email}
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
                value={formData.password}
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
            <p className="text-gray-600">Бүртгэлтэй юу?</p>
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
