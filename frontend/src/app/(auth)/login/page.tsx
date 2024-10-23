"use client";
import React, { useEffect, useState } from "react";
import { Carousel, Image } from "antd";
// import { Link } from "react-router-dom";
import { carouselListImage } from "@/assets/carouselListImage/carousel";

const login: React.FC = () => {
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
        <div className="max-w-lg min-w-80 mt-auto  md:mt-0 md:mb-0">
          <Carousel autoplay>
            {carouselListImage.map((imageLink: string) => (
              <Image
                key={imageLink}
                width={isMobile ? 250 : 500}
                height={isMobile ? 300 : 600}
                preview={false}
                className="rounded-lg"
                src={imageLink}
              />
            ))}
          </Carousel>
        </div>
        <div className="w-96 m-auto">
          <div className="justify-center mb-6 flex flex-row items-center gap-1">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/5333/5333676.png"
              width={30}
              height={30}
            />
            <h3 className="font-bold text-3xl">
              Mongolian <span className="text-green-400">Country</span>
            </h3>
          </div>
          <h2 className="text-2xl font-bold text-start">Login</h2>
          <p className="text-start">Let's sign up and Mongolian Country</p>
          <div className="my-2 flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-2 border-green-400 rounded-lg p-2 text-xl focus:outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-2 border-green-400 rounded-lg p-2 text-xl focus:outline-none"
            />
            <button className="bg-green-400 rounded-lg text-xl p-2 border-none focus:outline-none hover:border-none text-white font-bold">
              Create Account
            </button>
            <div className="text-black">
              Already have an account ?{" "}
              {/* <Link
                to={"/login"}
                className="text-green-400 hover:text-green-600 font-semibold"
              >
                Login
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
