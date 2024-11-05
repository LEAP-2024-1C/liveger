"use client";
import Image from "next/image";
// import { useState } from "react";
import { Rate } from "antd";
import { maplakhData } from "@/app/components/home";
import { useParams } from "next/navigation";
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import GuestDetailGridZurag from "@/app/components/guest_detail_grid_zurag";
import BookingCard from "@/app/components/booking-card";
import HostProfile from "@/app/components/host-profile";
import AvailableActivities from "@/app/components/available-activities";
import PlaceDescription from "@/app/components/place-description";
import { routeModule } from "next/dist/build/templates/app-page";
import { useRouter } from "next/navigation";
import { HostCard } from "@/app/components/detail-host-card";

interface Todo {
  id: string;
  name: string;
  Description: string;
}

const available_todo_mockdata = [
  {
    id: "1",
    name: "ride horse",
    Description: "you can ride horse anywhere anytime in the day",
  },
  {
    id: "2",
    name: "make yoghurt",
    Description: "you can make yoghurt every morning",
  },
  {
    id: "3",
    name: "make tea",
    Description: "you can make tea every morning",
  },
  {
    id: "4",
    name: "make coffee",
    Description: "you can make coffee every morning",
  },
  {
    id: "5",
    name: "make bread",
    Description: "you can make bread every morning",
  },
];

export default function Place() {
  // const [rating, setRating] = useState(5);
  const router = useRouter();
  const params = useParams();
  const paramId = +params.id;
  console.log("paramiig harah", paramId);

  const handleBookingRequest = (
    startDate: string,
    endDate: string,
    numberOfGuests: Number,
    thisParamid: string
  ) => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("token bna", token);
      console.log(
        "startDate: ",
        startDate,
        "endDate: ",
        endDate,
        "numberOfGuests: ",
        numberOfGuests,
        "thisParamid ",
        thisParamid
      );
      fetch("http://localhost:9002/api/v1/order/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          place: "6723059985721dd0bee8cb42",
          startDate: startDate,
          endDate: endDate,
          numberOfPeople: numberOfGuests,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Booking request successful:", data);
        })
        .catch((error) => {
          console.error("Error sending booking request:", error);
        });
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex flex-row justify-center my-4  md:px-8 lg:px-28 max-sm:p-5">
      <div className="w-full space-y-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-4xl">
            {maplakhData[paramId].placeName}
          </h1>
          <div className="flex flex-row items-center space-x-3">
            <section className="flex text-2xl flex-row items-center space-x-1">
              <FaShareAlt />
              <p className="max-sm:hidden">Share</p>
            </section>
            <section className="flex text-2xl flex-row items-center space-x-1">
              <FaHeart className="text-red-400" />
              <p className="max-sm:hidden">Save</p>
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
        </div>
        <BookingCard
          thisplaceId={paramId.toString()}
          onBookingRequest={handleBookingRequest}
        />
        <HostCard />
      </div>
    </div>
  );
}
