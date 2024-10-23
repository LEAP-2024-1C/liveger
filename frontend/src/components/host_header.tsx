import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
function Host_header() {
	return (
		<header className="host_header flex justify-between items-center h-12 border box-border">
			<Image src="" alt="logo" />
			<div className="flex gap-3 justify-center items-center">
				<Button className="rounded-full bg-green-400 p-2">
					<Link className="" href="/host">
						миний гэрүүд
					</Link>
				</Button>
				{/* <div>календарь</div> */}
				<Button className="rounded-full bg-green-400 p-2">
					<Link href="">календарь</Link>
				</Button>
				{/* <div>мэссеж</div> */}
				<Button className="rounded-full bg-green-400 p-2">
					<Link href="">мэссеж</Link>
				</Button>
			</div>
			<div className="flex">
				<Button
					className=" border-green-40 rounded-full p-2"
					variant="outline"
				></Button>
			</div>
		</header>
	);
}

export default Host_header;
