import { publicDecrypt } from "crypto";
import Image from "next/image";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";

export function UserCard() {
  return (
    <div className="w-[240px]">
      <div>
        <div className="flex gap-8">
          <button>Guest favorite</button>
          <BsHeart
            size={22}
            strokeWidth={1}
            className="absolute top-4 right-4"
          />
        </div>
        ``
        <Image
          src="/image1.avif"
          alt="1"
          width={220}
          height={220}
          className="rounded-lg -z-10"
        />
      </div>
    </div>
  );
}
