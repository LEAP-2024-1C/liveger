"use client";
import Image, { StaticImageData } from "next/image";
import { CarouselItem } from "@/components/ui/carousel";
import { UserCard } from "@/app/components/user-home-card";
import image1 from "../../../public/image1.jpg";
import image2 from "../../../public/image2.jpeg";
import image3 from "../../../public/image3.jpg";
import image14 from "../../../public/image.webp";
import image15 from "../../../public/image15.jpg";
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

export const maplakhData: MapLakhDataType[] = [
  {
    id: 0,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 4.5,
    guestFav: true,
    images: [image1, image2, image3, image14, image15],
    description: "Description of Terelj, Mongolia",
  },
  {
    id: 1,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 4.5,
    guestFav: false,
    images: [image1, image2, image3, image14, image15],
    description: "Description of Terelj, Mongolia",
  },
  {
    id: 2,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 2.5,
    guestFav: true,
    images: [image1, image2, image3, image14, image15],
    description: "Description of Terelj, Mongolia",
  },
  {
    id: 3,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 5,
    guestFav: false,
    images: [image1, image2, image3, image14, image15],
    description: "Description of Terelj, Mongolia",
  },
  {
    id: 4,
    placeName: "Khun galuut, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 3.5,
    guestFav: true,
    images: [image1, image2, image3, image14, image15],
    description: "Description of Khun galuut, Mongolia",
  },
  {
    id: 5,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 5,
    guestFav: true,
    images: [image1, image2, image3, image14, image15],
    description: "Description of Terelj, Mongolia",
  },
  {
    id: 6,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 4,
    guestFav: false,
    images: [image1, image2, image3, image14, image15],
    description: "Description of Terelj, Mongolia",
  },
  {
    id: 7,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 4.3,
    guestFav: true,
    images: [image1, image2, image3, image14, image15],
    description: "Description of Terelj, Mongolia",
  },
];

export default function UserHome() {
  const [getPlaces, setGetPlaces] = useState<MapLakhDataType[]>([]);
  const getPlacesFunc = async () => {
    try {
      const response = await axios.get("http://localhost:9002/api/v1/places");
      setGetPlaces(response.data.getPlaces);
      console.log("all places", response.data.getPlaces);
    } catch (error) {
      console.error("fetch products data error", error);
    }
  };
  useEffect(() => {
    getPlacesFunc();
  }, []);
  return (
    <div className="container h-full mx-auto flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16">
        {getPlaces.map((place) => (
          <UserCard
            key={place._id}
            carouselItems={place.images.map((image, index) => (
              <CarouselItem className="min-h-full rounded-xl" key={index}>
                <Image
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
  );
}
