import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FaCheckCircle } from "react-icons/fa";
import { BsMagic } from "react-icons/bs";
import { RiHandbagLine } from "react-icons/ri";
import { WiTime5 } from "react-icons/wi";
import { IoMdHeartEmpty } from "react-icons/io";

export function HostCard() {
  // {
  //     name,
  //     image,
  //     start,
  //     id,
  //   }: {
  //     name: string;
  //     image: string;
  //     start: string;
  //     id: number;
  // }
  return (
    <div>
      <Card className="relative w-[450px] h-[250px] border-green-500 flex flex-col justify-center items-center max-sm:w-[410px]">
        <div className="h-36 w-36 relative mt-1">
          <Image
            className="rounded-full object-cover"
            src="/profile1.png"
            layout="fill"
            alt="Picture of the author "
          />
          <FaCheckCircle className="text-green-600 text-3xl absolute right-2 bottom-2 z-30 border-white bg-white border-1 rounded-full" />
        </div>
        <h1 className="font-bold text-3xl mt-2">Bold Nyamlkham</h1>
        <h2 className="font-bold text-l">Started hosting in 2024</h2>
      </Card>

      <div className="flex flex-row mt-2">
        <RiHandbagLine />
        <h5>My work: Musician / Composer</h5>
      </div>

      <div className="flex flex-row ">
        <BsMagic />
        <h5>Most useless skill: Juggling, Snapping my fingers</h5>
      </div>

      <div className="flex flex-row">
        <WiTime5 />
        <h5>I spend too much time: Listening to lectures, Gaming </h5>
      </div>

      <div className="flex flex-row">
        <IoMdHeartEmpty />
        <h5>I'm obsessed with: Music, art and animals, Baseball </h5>
      </div>

      <h1 className="w-[450px] text-xl text-wrap max-sm:w-[410px]">
        Hey—it’s Wendy and Lisa. We’re an award-winning music duo, childhood
        friends, and proud members of the legendary rock band The Revolution.
        Back in the ’80s, we teamed up with our close friend and Revolution
        frontman, Prince, to bring the iconic “Purple Rain” song and film to
        life. We’re psyched to go back in time at the scene of the crime and
        share even more incredible memories with u!
      </h1>
    </div>
  );
}
