import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FaCheckCircle } from "react-icons/fa";
import { BsMagic } from "react-icons/bs";
import { RiHandbagLine } from "react-icons/ri";
import { WiTime5 } from "react-icons/wi";
import { IoMdHeartEmpty } from "react-icons/io";
import { ReactNode } from "react";

export function HostCard({
  image,
  firstName,
  lastName,
  startHostDate,
  myWork,
  skills,
  timeToSpend,
  obsessedWith,
  detailDescription,
}: {
  image: string;
  firstName: string;
  lastName: string;
  startHostDate: ReactNode;
  myWork: string;
  skills: string;
  timeToSpend: string;
  obsessedWith: string;
  detailDescription: string;
}) {
  return (
    <div>
      <Card className="relative w-[450px] h-[250px] border-green-500 flex flex-col justify-center items-center max-sm:w-[410px]">
        <div className="h-36 w-36 relative mt-1">
          <Image
            className="rounded-full object-cover"
            src={image}
            layout="fill"
            alt="Picture of the author "
          />
          <FaCheckCircle className="text-green-600 text-3xl absolute right-2 bottom-2 z-30 border-white bg-white border-1 rounded-full" />
        </div>
        <h1 className="font-bold text-3xl mt-2">
          {firstName} {lastName}
        </h1>
        <h2 className="font-bold text-l">Started hosting in {startHostDate}</h2>
      </Card>

      <div className="flex flex-row mt-2">
        <RiHandbagLine />
        <h5>My work: {myWork}</h5>
      </div>

      <div className="flex flex-row ">
        <BsMagic />
        <h5>Most useless skill: {skills}</h5>
      </div>

      <div className="flex flex-row">
        <WiTime5 />
        <h5>I spend too much time: {timeToSpend} </h5>
      </div>

      <div className="flex flex-row">
        <IoMdHeartEmpty />
        <h5>I'm obsessed with: {obsessedWith} </h5>
      </div>

      <h1 className="w-[450px] text-xl text-wrap">{detailDescription}</h1>
    </div>
  );
}
