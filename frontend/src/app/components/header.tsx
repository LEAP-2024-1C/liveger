"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { TbWorld } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
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
import Link from "next/link";
import { useContext, useState } from "react";
import { UserContext } from "@/app/context/user.context";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500"],
});
export default function Header() {
  const { user, setToken, setUser } = useContext(UserContext);
  console.log("useriig harah", user);
  const router = useRouter();
  return (
    <div className="h-12 bg-white flex flex-row justify-between items-center px-8 fixed top-0 shadow-lg w-full z-50 rounded-b-xl">
      <Link href="/">
        <div className="flex flex-row items-center space-x-3">
          <Image
            src="/ger.png"
            alt="zurag1"
            width={30}
            height={30}
            className=""
          />
          <p
            className={`max-sm:hidden text-emerald-800 text-2xl font-bold ${dancingScript.className}`}
          >
            Live Ger
          </p>
        </div>
      </Link>
      <label className="relative flex flex-row items-center w-[30%]">
        <Input placeholder="Search" className="rounded-3xl" />
        <div className="bg-green-400 absolute right-2 p-1 rounded-full">
          <IoSearch className=" text-white "></IoSearch>
        </div>
      </label>
      <div className="flex flex-row items-center space-x-4">
        {/* <div className="flex flex-row items-center space-x-8">
          <p className="flex flex-row items-center max-sm:hidden">
            Mongolia
            <TbWorld />
          </p>
        </div> */}
        {!user && (
          <div className="flex flex-row space-x-2">
            <Link href="/login">
              <Button className="max-w-fit">
                <MdOutlineLogin />
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="max-w-fit" variant="outline">
                <IoMdPersonAdd />
              </Button>
            </Link>
          </div>
        )}

        {/* Nevtersen ued haragdah user logo */}
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className=" rounded-3xl p-2 text-xl ">
                <FiAlignJustify className="text-gray-600" />
                <FaRegUser className="text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>
                {user?.firstName} {user?.lastName}
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="" />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <span>Profile</span>
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
                <span
                  onClick={() => {
                    localStorage.removeItem("token");
                    setUser(null);
                    setToken(null);
                    toast.success("Хэрэглэгч та вебээс гарч байна.");
                    router.push("/");
                  }}
                >
                  Log out
                </span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}
