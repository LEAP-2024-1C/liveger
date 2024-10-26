//host font
import localFont from "next/font/local";

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
//host font
import Host_header from "@/app/components/host/host_header";
export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100vh] `}
			>
				<Host_header />
				<div className="h-12"></div>
				{children}
			</body>
		</html>
	);
}
