import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { TbWorld } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <div className="h-12 flex flex-row justify-between items-center">
      <Image src="/ger.jpg" alt="zurag1" width={30} height={30} className="" />
      <label className="relative flex flex-row items-center">
        <Input placeholder="бичнэ үү" />
        <div className="bg-green-400 absolute right-2 p-2 rounded-full">
          <IoSearch className=" text-white "></IoSearch>
        </div>
      </label>
      <div className="flex flex-row">
        <p className="flex flex-row">
          Live Ger
          <p className="flex flex-row">
            Mongolia
            <TbWorld />
          </p>
        </p>
        <Button variant="outline" className=" rounded-3xl p-2 text-xl ">
          <FiAlignJustify className="text-gray-600" />
          <FaRegUser className="text-gray-600" />
        </Button>
      </div>
    </div>
  );
}
