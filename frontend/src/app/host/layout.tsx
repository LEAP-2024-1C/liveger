"use client";

//host font
import { usePathname } from "next/navigation";

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
		<div>
			{!isAuthPage && <Host_header />}
			{!isAuthPage && <div className="h-12"></div>}
			{children}
		</div>
	);
}
