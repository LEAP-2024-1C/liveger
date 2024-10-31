"use client";
import React, { useContext, useEffect, useState } from "react";
import { Carousel, Image } from "antd";
import Link from "next/link";
import { carouselListImage } from "@/assets/carouselListImage/carousel";
import { UserContext } from "@/app/context/user.context";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

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
			const res = await axios.post(`http://localhost:9002/api/v1/auth/login`, {
				email,
				password,
			});
			console.log("respons", res);
			if (res.status === 200) {
				toast.success("Амжилттай нэвтэрлээ", { autoClose: 1000 });
				const { token } = res.data;
				localStorage.setItem("token", token);
				setToken(token);
				router.push("/");
			}
		} catch (error) {
			console.log("There was an error  in:", error);
			toast.error("Нэвтрэхэд алдаа гарлаа");
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

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		// Implement login logic here
		console.log("Login attempted");
	};

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
					<h2 className="text-2xl font-bold text-start">Login</h2>
					<p className="text-start">Welcome back to Mongolian Live Ger</p>
					<form onSubmit={handleLogin} className="my-2 flex flex-col gap-4">
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
						<div className="flex flex-col gap-2">
							<button
								type="submit"
								className="w-full bg-green-400 rounded-lg text-xl p-2 border-none focus:outline-none hover:bg-green-500 text-white font-bold transition duration-300"
								onClick={login}
							>
								Login
							</button>

							<Link href="/signup" className="w-full">
								<button
									type="button"
									className="w-full bg-white rounded-lg text-xl p-2 border-2 border-green-400 focus:outline-none hover:bg-green-50 text-green-400 font-bold transition duration-300"
								>
									Create Account
								</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
