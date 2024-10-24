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
				<Button>
					<Link href="/host/calendar">calendar</Link>
				</Button>
				<Button className="">
					<Link href="/host/dashboard">dashboard</Link>
				</Button>
				<Button>
					<Link href="/host/reservation">reservation</Link>
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
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator className="" />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<span>Profile</span>
								<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<span>Billing</span>
								<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<span>Settings</span>
								<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<span>Keyboard shortcuts</span>
								<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<span>Team</span>
							</DropdownMenuItem>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<span>Invite users</span>
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent>
										<DropdownMenuItem>
											<span>Email</span>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<span>Message</span>
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<span>More...</span>
										</DropdownMenuItem>
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
							<DropdownMenuItem>
								<span>New Team</span>
								<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<span>GitHub</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<span>Support</span>
						</DropdownMenuItem>
						<DropdownMenuItem disabled>
							<span>API</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<span>Log out</span>
							<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}

export default Host_header;
