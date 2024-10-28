import Image from "next/image";
import UserHome from "../components/home";

export default function Home() {
  return (
    <div className="container min-w-full mx-auto flex flex-col space-y-5 mb-10">
      <div className="min-w-[100%] min-h-[30%] relative">
        <Image
          src="/sarlag.jpg"
          alt="sarlag"
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
          className="min-w-full"
        />
        <div className="absolute text-white z-10 top-4">
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
