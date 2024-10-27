import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
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
export default function Header() {
  return (
    <div className="h-12 flex flex-row justify-between items-center px-8">
      <Image src="/ger.jpg" alt="zurag1" width={30} height={30} className="" />
      <label className="relative flex flex-row items-center w-[30%]">
        <Input placeholder="Search" className="rounded-3xl" />
        <div className="bg-green-400 absolute right-2 p-1 rounded-full">
          <IoSearch className=" text-white "></IoSearch>
        </div>
      </label>
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
