import Image from "next/image";
import UserHome from "../components/home";

export default function Home() {
  return (
    <div className="container min-w-full mx-auto flex flex-col space-y-5 mb-10 max-sm:p-3">
      <div className="relative">
        <Image
          src="/sarlag.jpg"
          alt="sarlag"
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
          className="rounded-xl"
        />
        <div className="absolute text-white z-10 left-[50%] top-[50%] translate-x-[-50%] md:text-3xl text-5xl font-bold max-sm:text-2xl">
          Come to Mongolia feel the nomadic life
        </div>
      </div>
      <h1></h1>
      <div className="">
        <UserHome />
      </div>
    </div>
  );
}
