"use client";

import Image from "next/image";
import UserHome from "../components/home";
import { GuestIntro } from "../components/guest_introduction";

export default function Home() {
  return (
    <div className="mt-12 container min-w-full mx-auto flex flex-col mb-10 max-sm:p-3">
      <div className="w-full h-[75vh] relative">
        <Image
          src="/home1.jpg"
          alt="homeiin zurag"
          fill
          className="absolute rounded-xl object-cover object-top"
          // style={{ objectPosition: "0 0 0 5%" }}
        />
        <div className="w-full absolute text-white z-10 text-center top-[30%] md:text-3xl text-6xl font-bold max-sm:text-2xl">
          Visit Mongolia and experience the nomadic life.
        </div>
      </div>
      <GuestIntro />
      <div className="">
        <UserHome />
      </div>
    </div>
  );
}
