"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserContext } from "@/app/context/user.context";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Dancing_Script } from "next/font/google";
import { apiUrl } from "@/lib/utils";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface AxiosErrorResponse {
  message?: string;
}

const HostLogin = () => {
  const { setToken } = useContext(UserContext);
  const router = useRouter();
  const [HostData, setHostData] = useState({
    email: "",
    password: "",
  });

  const hostlogin = async () => {
    const { email, password } = HostData;
    try {
      const res = await axios.post(`${apiUrl}/api/v1/auth/login`, {
        email,
        password,
        type_login: "host",
      });
      if (res.status === 200) {
        toast.success("Амжилттай нэвтэрлээ", { autoClose: 1000 });
        const { token } = res.data;
        localStorage.setItem("token", token);
        setToken(token);
        router.push("/host/list");
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      console.error("алдаа гарлаа", axiosError);

      if (axiosError.response) {
        if (axiosError.response.status === 400) {
          toast.error("Бүртгэл үүсгээгүй байна");
        } else if (axiosError.response.status === 401) {
          toast.error("Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.");
        } else if (axiosError.response.status === 404) {
          toast.error("Нэр эсвэл нууц үг хоосон байж болохгүй.");
        } else {
          const errorData = axiosError.response.data as AxiosErrorResponse;
          toast.error("Алдаа: " + (errorData.message || "Серверийн алдаа"));
        }
      } else {
        toast.error("Сүлжээний алдаа эсвэл сервертэй холбогдож чадсангүй");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    hostlogin(); // Call the login function on form submit
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
            сайхан хөдөөд өөрийгөө амраах, хөдөө амьдрах боломж олгож байна.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex items-center justify-center px-6 bg-white">
        <div className="max-w-md w-full">
          <Link href="/">
            <div className="flex flex-row p-18 justify-center space-x-3">
              <Image src="/ger.png" alt="zurag1" width={40} height={40} />
              <p
                className={`max-sm:hidden text-emerald-800 text-2xl font-bold ${dancingScript.className}`}
              >
                Live Ger
              </p>
            </div>
          </Link>
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
                value={HostData.email}
                onChange={(e) =>
                  setHostData({ ...HostData, email: e.target.value })
                }
                placeholder="И-мэйл хаягаа оруулна уу"
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
                value={HostData.password}
                onChange={(e) =>
                  setHostData({ ...HostData, password: e.target.value })
                }
                placeholder="Нууц үгээ оруулна уу"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/forgotpassword"
              >
                Нууц үгээ мартсан?
              </Link>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300"
                type="button"
                onClick={hostlogin}
              >
                Нэвтрэх
              </button>
              <Link href="/host/hostsignup">
                <button
                  className="border border-green-500 hover:bg-green-100 text-green-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300"
                  type="button"
                >
                  Бүртгүүлэх
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HostLogin;
