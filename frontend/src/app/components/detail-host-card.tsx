import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FaCheckCircle } from "react-icons/fa";

export function HostCard({
  name,
  image,
  start,
  id,
}: {
  name: string;
  image: string;
  start: string;
  id: number;
}) {
  return (
    <div>
      <Card className="relative w-[450px] h-[250px] border-green-500 flex flex-row justify-center">
        <div className="h-36 w-36 relative mt-4">
          <Image
            className="rounded-full object-cover"
            src="/profile1.png"
            layout="fill"
            alt="Picture of the author "
          />
          <FaCheckCircle className="text-green-600 text-3xl absolute right-2 bottom-2 z-30 border-white bg-white border-1 rounded-full" />
        </div>
      </Card>
    </div>
  );
}
