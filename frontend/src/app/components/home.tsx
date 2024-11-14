"use client";
import Image, { StaticImageData } from "next/image";
import { CarouselItem } from "@/components/ui/carousel";
import { UserCard } from "@/app/components/user-home-card";
import { useEffect, useState } from "react";
import axios from "axios";

interface MapLakhDataType {
  _id: string;
  title: string;
  info: string;
  location: string;
  distance: string;
  date: string;
  price: number;
  review: number;
  guestFav: boolean;
  images: StaticImageData[] | string[];
  description: string;
}

export default function UserHome() {
  const [getPlaces, setGetPlaces] = useState<MapLakhDataType[]>([]);
  const getPlacesFunc = async () => {
    try {
      const response = await axios.get("http://localhost:9002/api/v1/places");
      setGetPlaces(response.data.getPlaces);
      console.log("all places", response.data.getPlaces);
    } catch (error) {
      console.error("fetch places data error", error);
    }
  };

  useEffect(() => {
    getPlacesFunc();
  }, []);
  console.log("placeuudiig harah", getPlaces);
  return (
    <div className="bg-slate-100 py-14 rounded-xl pb-32">
      <div className="container md:px-8 h-full mx-auto flex flex-col space-y-4">
        <h1 className="text-center font-extrabold text-3xl text-emerald-700 mb-8">
          BASIC SERVICES
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16">
          {getPlaces.map((place) => (
            <UserCard
              key={place._id}
              carouselItems={place.images.map((image, index) => (
                <CarouselItem className="min-h-full rounded-xl" key={index}>
                  <Image
                    key={index}
                    src={image}
                    alt="carouselnii zurag"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </CarouselItem>
              ))}
              placeName={place.title}
              price={place.price}
              distance={place.distance}
              review={place.review}
              date={place.date}
              guestFav={place.guestFav}
              id={place._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
