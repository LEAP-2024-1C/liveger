"use client";
import React, { useEffect, useState } from "react";
import { Carousel, Image } from "antd";
import Link from "next/link";
import { carouselListImage } from "@/assets/carouselListImage/carousel";

const SignUp: React.FC = () => {
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
				<div className="max-w-lg min-w-80 mt-auto  md:mt-0 md:mb-0 ">
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
					<h2 className="text-2xl font-bold text-start">Sign Up</h2>
					<p className="text-start">Register and live in a Mongolian Ger</p>
					<div className="my-2 flex flex-col gap-4">
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="border-2 border-green-400 rounded-lg p-2 text-xl focus:outline-none"
						/>
						<input
							type="text"
							name="firstName"
							placeholder="First Name"
							className="border-2 border-green-400 rounded-lg p-2 text-xl focus:outline-none"
						/>
						<input
							type="text"
							name="lastName"
							placeholder="Last Name"
							className="border-2 border-green-400 rounded-lg p-2 text-xl focus:outline-none"
						/>
						<input
							type="nubmer"
							name="phoneNumber"
							placeholder="Phone Number"
							className="border-2 border-green-400 rounded-lg p-2 text-xl focus:outline-none"
						/>
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="border-2 border-green-400 rounded-lg p-2 text-xl focus:outline-none"
						/>
						<div className="flex flex-col gap-2">
							<button className="w-full bg-green-400 rounded-lg text-xl p-2 border-none focus:outline-none hover:bg-green-500 text-white font-bold transition duration-300">
								Create Account
							</button>

							<Link href="/login" className="w-full">
								<button className="w-full bg-white rounded-lg text-xl p-2 border-2 border-green-400 focus:outline-none hover:bg-green-50 text-green-400 font-bold transition duration-300">
									Login
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
