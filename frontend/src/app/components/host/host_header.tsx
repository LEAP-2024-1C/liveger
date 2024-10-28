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
	// DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
//left corner icons
// import { TbWorld } from "react-icons/tb";
import { FiAlignJustify } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

function Host_header() {
	return (
		<div className="h-12 flex flex-row justify-between items-center py-4 sm:py-8 px-4 md:px-8 border-b bg-white border-gray-200 fixed z-50 top-0 w-full shadow-lg">
			<div className="flex items-center">
				<Image
					src="/ger.jpg"
					alt="zurag1"
					width={30}
					height={30}
					className=""
				/>
			</div>
			{/* Desktop navigation */}
			<div className="hidden md:flex items-center space-x-4">
				<Button>
					<Link href="/host">Таны жагсаалт</Link>
				</Button>
				<Button>
					<Link href="/host/calendar">Хуанли</Link>
				</Button>
				<Button>
					<Link href="/host/dashboard">Хяналтын самбар</Link>
				</Button>
				<Button>
					<Link href="/host/reservation">Захиалга</Link>
				</Button>
			</div>
			<div className="flex items-center space-x-4">
				{/* Mobile navigation */}
				<div className="md:hidden">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" className="rounded-full p-2">
								<FiAlignJustify className="text-gray-600" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56">
							<DropdownMenuItem>
								<Link href="/host">Таны жагсаалт</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href="/host/calendar">Хуанли</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href="/host/dashboard">Хяналтын самбар</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href="/host/reservation">Захиалга</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				{/* User menu */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" className="rounded-full p-2">
							<FaRegUser className="text-gray-600" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						<DropdownMenuLabel>Миний эрх</DropdownMenuLabel>
						<DropdownMenuSeparator />
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
