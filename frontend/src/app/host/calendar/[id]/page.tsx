"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import Calendar from "@/app/components/host/calendar/calendar";

interface UserOrderDate {
  orderId: string;
  startDate: string;
  endDate: string;
  _id: string;
}

interface CalendarData {
  userOrderDates: UserOrderDate[];
  blockedDate: string[];
}

interface CardProps {
  _id: string;
  title: string;
  images: string[];
  info: string;
  status: boolean;
  calendar: CalendarData; // Ensure this is included
}

const useGetPlace = (id: string) => {
  const [place, setPlace] = useState<CardProps | null>(null);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await axios.get(`http://localhost:9002/api/v1/places/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPlace(response.data); // Assuming the response is the place object
      } catch (error) {
        console.log(error);
        setPlace(null);
      }
    };

    fetchPlace();
  }, [id]);

  return place;
};

function Page() {
  const params = useParams();
  const cardId = params.id as string; // Ensure cardId is a string
  const place = useGetPlace(cardId); // Fetch the place data

  if (!place) {
    return <div>Loading...</div>; // Show loading state while fetching
  }

  // Check if calendar exists and has the expected structure
  const { calendar } = place;
  const blockedDates = calendar?.blockedDate || []; // Default to an empty array if undefined
  const userOrderDates = calendar?.userOrderDates || []; // Default to an empty array if undefined

  return (
    <div className={`py-4 sm:py-8 flex card-${cardId}`}>
      <div className="w-full container h-full flex justify-between p-8 fixed">
        <div className="relative h-32 w-32 rounded-xl opacity-50">
          <Image
            src={place.images && place.images.length > 0 ? place.images[0] : ''} // Use the first image from the images array if it exists
            alt={place.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <h1 className="text-center text-sm font-bold bg-green-400 rounded-xl p-2 opacity-50 h-fit">
          Хүлээгдэж буй мөнгө: 1,000,000₮
        </h1>
      </div>
      
      <Calendar
        hostBlockedData={blockedDates} // Pass blocked dates
        guestData={userOrderDates} // Pass user order dates
      />
    </div>
  );
}

export default Page;