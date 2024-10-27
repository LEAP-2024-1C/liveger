import Image from "next/image";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

export function UserCard({
	placeName,
	date,
	price,
	review,
	distance,
	carouselItems,
	guestFav,
}: {
	placeName: string;
	date: string;
	price: string;
	review: number;
	distance: string;
	carouselItems: any;
	guestFav: boolean;
}) {
	return (
		<Card className="w-full min-h-fit relative border-green-500">
			<Carousel className="min-h-[80%]">
				<CarouselContent className="min-w-full min-h-full">
					{carouselItems}
				</CarouselContent>
				<CarouselPrevious className="absolute left-4" />
				<CarouselNext className="absolute right-4" />
			</Carousel>
			{guestFav === true && (
				<p className="bg-white rounded-xl text-center text-base px-3 absolute top-2 left-3">
					Guest favorite
				</p>
			)}
			{guestFav === false && null}

			<BsHeart
				size={15}
				strokeWidth={1}
				className="text-red-500  absolute top-3 right-3"
			/>
			<div className="p-2">
				<div className="flex flex-row justify-between">
					<h1>{placeName}</h1>
					<div className="flex flex-row items-center gap-1 ml-4">
						<AiFillStar size={15} className="text-yellow-400" />
						<h6 className="text">{review}</h6>
					</div>
				</div>
				<h6 className="text-sm text-gray-600">{distance}</h6>
				<h6 className="text-sm text-gray-600">{date}</h6>
				<h6 className="text-sm">{price}</h6>
			</div>
		</Card>
	);
}