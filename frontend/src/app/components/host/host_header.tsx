import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Link from "next/link";
//drop down menu
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
//left corner icons
import { TbWorld } from "react-icons/tb";
import { FiAlignJustify } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

function Host_header() {
	return (
		<div className="h-12 flex flex-row justify-between items-center px-8">
			<Image src="/ger.jpg" alt="zurag1" width={30} height={30} className="" />
			<div className="relative flex flex-row items-center gap-4">
				<Button className="">
					<Link href="/host" >Таны жагсаалт</Link>
				</Button>
				<Button>
					<Link href="/host/calendar">Хуанли</Link>
				</Button>
				<Button className="">
					<Link href="/host/dashboard">Хяналтын самбар</Link>
				</Button>
				<Button>
					<Link href="/host/reservation">Захиалга</Link>
				</Button>
			</div>
			<div className="flex flex-row items-center space-x-4">
				<div className="flex flex-row items-center space-x-8">
					<p>Live Ger</p>
					<p className="flex flex-row items-center">
						Mongolia
						<TbWorld />
					</p>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" className=" rounded-3xl p-2 text-xl ">
							<FiAlignJustify className="text-gray-600" />
							<FaRegUser className="text-gray-600" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						<DropdownMenuLabel>Миний эрх</DropdownMenuLabel>
						<DropdownMenuSeparator className="" />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<span>Профил</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<span>Төлбөр</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<span>Захиалга</span>
							</DropdownMenuItem>
							
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<span>Хэрэглэгчидтэй харилцах</span>
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent>
										<DropdownMenuItem>
											<span>Имэйл</span>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<span>Мессеж</span>
										</DropdownMenuItem>
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<span>Тохиргоо</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<span>Тусламж</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<span>Гарах</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}

export default Host_header;
