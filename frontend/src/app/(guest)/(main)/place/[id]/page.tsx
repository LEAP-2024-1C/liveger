"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
// import { useState } from "react";
import { Rate } from "antd";
import { maplakhData } from "@/app/components/home";
import { useParams } from "next/navigation";
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import GuestDetailGridZurag from "@/app/components/guest_detail_grid_zurag";
import BookingCard from "@/app/components/booking-card";
import HostProfile from "@/app/components/host-profile";
import AvailableActivities from "@/app/components/available-activities";
import PlaceDescription from "@/app/components/place-description";

interface Todo {
	id: number;
	name: string;
	Description: string;
}

const available_todo_mockdata = [
	{
		id: 1,
		name: "ride horse",
		Description: "you can ride horse anywhere anytime in the day",
	},
	{
		id: 2,
		name: "make yoghurt",
		Description: "you can make yoghurt every morning",
	},
	{
		id: 3,
		name: "make tea",
		Description: "you can make tea every morning",
	},
	{
		id: 4,
		name: "make coffee",
		Description: "you can make coffee every morning",
	},
	{
		id: 5,
		name: "make bread",
		Description: "you can make bread every morning",
	},
];

export default function Place() {
	// const [rating, setRating] = useState(5);
	const params = useParams();
	const paramId = +params.id;
	console.log("paramiig harah", paramId);

	const handleBookingRequest = () => {
		// Add booking request logic here
		console.log("Booking requested");
	};

	return (
		<div className="flex flex-row justify-center my-4  md:px-8 lg:px-28">
			<div className="w-full space-y-5">
				<div className="flex flex-row justify-between items-center">
					<h1 className="font-bold text-4xl">
						{maplakhData[paramId].placeName}
					</h1>
					<div className="flex flex-row items-center space-x-3">
						<section className="flex text-2xl flex-row items-center space-x-1">
							<FaShareAlt />
							<p>Share</p>
						</section>
						<section className="flex text-2xl flex-row items-center space-x-1">
							<FaHeart className="text-red-400" />
							<p className="">Save</p>
						</section>
					</div>
				</div>
				<GuestDetailGridZurag images={maplakhData[paramId].images} />
				<div className="flex justify-between items-start space-y-4">
					<div className="w-full p-4">
						<h1 className="text-4xl font-bold">
							{maplakhData[paramId].placeName}
						</h1>
						<div className="flex flex-row gap-2 text-xl">
							<p className="py-1 flex flex-row items-center">
								8 guest <GoDotFill className="text-green-400" /> 1 гэрт 4 ортой{" "}
								<GoDotFill className="text-green-400" /> Хагас льюкс
							</p>
						</div>
						<div>
							<Rate
								allowHalf
								value={maplakhData[paramId].review}
								className="md:flex md:flex-row text-2xl font-bold"
							/>
						</div>
						<HostProfile name="Ганболдын Эрдэнийн гэр бүл" />
						<AvailableActivities activities={available_todo_mockdata} />
						<PlaceDescription
							description={
								maplakhData[paramId].description || "No description available"
							}
						/>
					</div>
					<BookingCard onBookingRequest={handleBookingRequest} />
				</div>
			</div>
		</div>
	);
}
