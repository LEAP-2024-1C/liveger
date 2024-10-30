"use client";

//host font
import localFont from "next/font/local";
import { usePathname } from "next/navigation";

const geistSans = localFont({
	src: "../fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "../fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

import Host_header from "@/app/components/host/host_header";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const isAuthPage =
		pathname?.includes("/host/hostlogin") ||
		pathname?.includes("/host/hostsignup");

	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100vh]`}
			>
				{!isAuthPage && <Host_header />}
				{!isAuthPage && <div className="h-12"></div>}
				{children}
			</body>
		</html>
	);
}
