// import Image from "next/image";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function UserCard({
  placeName,
  date,
  price,
  review,
  distance,
  carouselItems,
  guestFav,
  id,
}: {
  placeName: string;
  date: string;
  price: number;
  review: number;
  distance: string;
  carouselItems: React.ReactNode[];
  guestFav: boolean;
  id: string;
}) {
  return (
    <div className="">
      <Card className="relative w-full min-h-fit border-green-500 shadow-xl">
        <Carousel className="min-h-[80%] rounded-xl p-2">
          <CarouselContent className="min-w-full h-48 sm:h-64 rounded-xl">
            {carouselItems}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4" />
          <CarouselNext className="absolute right-4" />
        </Carousel>
        {guestFav === true && (
          <p className="bg-white rounded-xl text-center text-base px-3 absolute top-4 left-4">
            Guest favorite
          </p>
        )}
        {guestFav === false && null}

        {/* <BsHeart
          size={15}
          strokeWidth={1}
          className="text-red-500  absolute top-3 right-3"
        /> */}
        <div className="p-2">
          <div className="flex flex-row justify-between border-b border-green-400 pb-3 mb-3">
            <h1 className="font-semibold">{placeName}</h1>
            <div className="flex flex-row items-center gap-1 ml-4">
              <AiFillStar size={15} className="text-yellow-400" />
              <h6 className="text">{review}</h6>
            </div>
          </div>
          <h6 className="text-sm text-gray-600">
            {distance} kilometers from Ulaanbaatar
          </h6>
          <h6 className="text-sm text-gray-600">{date}</h6>
          <h6 className="text-sm">per day {price}$</h6>
          <div className="text-center pt-3 pb-1 border-t border-green-400 mt-3">
            <Link href={`/place/${id}`}>
              <Button className="text-white rounded-xl">
                More Information
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
