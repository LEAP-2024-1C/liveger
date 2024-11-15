import Image from "next/image";
import { Card } from "@/components/ui/card";
import { FaCheckCircle } from "react-icons/fa";
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
    <div className="pr-8 flex flex-col space-y-3">
      <Card className="relative w-full h-[250px] border-green-500 grid grid-cols-2 justify-center items-center max-sm:w-[410px] ml-4">
        <div className="flex flex-col justify-end items-center">
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
          <h2 className="font-bold text-l">
            Started hosting in {startHostDate}
          </h2>
        </div>
        <div className="flex flex-col items-start justify-start pr-5 space-y-1">
          <div className="flex flex-row mt-2">
            <h5>
              <span className="font-bold">My work:</span> {myWork}
            </h5>
          </div>
          <div className="flex flex-row ">
            <h5>
              <span className="font-bold">Most useless skill:</span> {skills}
            </h5>
          </div>
          <div className="flex flex-row">
            <h5>
              <span className="font-bold">I spend too much time:</span>
              {timeToSpend}
            </h5>
          </div>
          <div className="flex flex-row">
            <h5>
              <span className="font-bold">I&apos;m obsessed with: </span>
              {obsessedWith}{" "}
            </h5>
          </div>
        </div>
      </Card>

      <h1 className="w-full text-xl text-wrap pl-8">{detailDescription}</h1>
    </div>
  );
}
