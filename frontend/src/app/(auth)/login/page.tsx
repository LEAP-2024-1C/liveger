"use client";
import React, { useContext, useEffect, useState } from "react";
import { Carousel, Image } from "antd";
import Link from "next/link";
import { carouselListImage } from "@/assets/carouselListImage/carousel";
import { UserContext } from "@/app/context/user.context";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "@/utils/util";

const Login: React.FC = () => {
  const { setToken } = useContext(UserContext);
  const router = useRouter();
  const [UserData, setUserData] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    const { email, password } = UserData;
    try {
      const res = await axios.post(`${apiUrl}/api/v1/auth/login`, {
        email,
        password,
        type_login: "user",
      });

      if (res.status === 200) {
        toast.success("Login successful", { autoClose: 1000 });
        const { token } = res.data;
        localStorage.setItem("token", token);
        setToken(token);
        router.push("/");
      }
    } catch (error) {
      console.error("Error occurred", error);

      // Specify the type of error
      if (axios.isAxiosError(error)) {
        // Axios specific error handling
        if (error.response) {
          // Check the status code from the server response
          if (error.response.status === 400) {
            toast.error("Account not registered.");
          } else if (error.response.status === 401) {
            toast.error("Email or password does not match.");
          } else if (error.response.status === 404) {
            toast.error("Email or password cannot be empty.");
          } else {
            toast.error(
              "Error: " + (error.response.data.message || "Server error")
            );
          }
        } else {
          toast.error("Network error or unable to connect to server.");
        }
      } else {
        // Handle non-Axios errors
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 766);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen flex justify-center items-center gap-8 bg-white">
      <div className="h-screen flex flex-col md:flex-row md:justify-center md:items-center gap-8 bg-white">
        <div className="max-w-lg min-w-80 mt-auto  md:mt-0 md:mb-0 container">
          <Carousel autoplay>
            {carouselListImage.map((imageLink: string) => (
              <Image
                key={imageLink}
                width={isMobile ? 250 : 500}
                height={isMobile ? 300 : 600}
                preview={false}
                className="rounded-lg"
                src={imageLink}
                alt=""
              />
            ))}
          </Carousel>
        </div>
        <div className="w-96 m-auto">
          <Link href="/">
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
          </Link>

          <h2 className="text-2xl font-bold text-start">Login</h2>
          <p className="text-start">Welcome back to Mongolian Live Ger</p>
          <form onSubmit={login} className="my-2 flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-2 border-green-400 rounded-lg p-2 text-xl focus:outline-none"
              value={UserData.email}
              onChange={(e) =>
                setUserData({ ...UserData, email: e.target.value })
              }
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-2 border-green-400 rounded-lg p-2 text-xl focus:outline-none"
              value={UserData.password}
              onChange={(e) =>
                setUserData({ ...UserData, password: e.target.value })
              }
            />
            <div className="flex flex-row justify-between">
              <Link
                href="/host/hostlogin"
                className="text-right text-sm text-green-500 hover:text-green-600"
              >
                Малчинаар нэвтрэх
              </Link>
              <Link
                href="/forgotpassword"
                className="text-right text-sm text-green-500 hover:text-green-600"
              >
                Forget password
              </Link>
            </div>
          </form>
          <button
            className="w-full rounded-lg text-xl p-2 border-2 border-green-500 bg-green-500 focus:outline-none hover:bg-green-600 text-white font-bold transition duration-300"
            onClick={login}
          >
            Login
          </button>
          <Link href="/signup">
            <button className="w-full border-2 border-green-500 bg-white rounded-lg text-xl p-2 focus:outline-none hover:bg-green-50 text-green-500 font-bold transition duration-300 mt-4">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
