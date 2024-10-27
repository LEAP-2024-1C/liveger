"use client";
import Image from "next/image";
import { CarouselItem } from "@/components/ui/carousel";
import { UserCard } from "@/app/components/user-home-card";
import Link from "next/link";
export const maplakhData = [
  {
    id: 0,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 4.5,
    guestFav: true,
    images: [
      "/image1.jpg",
      "/image2.jpeg",
      "/image3.jpg",
      "/image14.jpg",
      "/image15.jpg",
    ],
  },
  {
    id: 1,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 4.5,
    guestFav: false,
    images: [
      "/image1.jpg",
      "/image2.jpeg",
      "/image3.jpg",
      "/image14.jpg",
      "/image15.jpg",
    ],
  },
  {
    id: 2,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 2.5,
    guestFav: true,
    images: [
      "/image1.jpg",
      "/image2.jpeg",
      "/image3.jpg",
      "/image14.jpg",
      "/image15.jpg",
    ],
  },
  {
    id: 3,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 5,
    guestFav: false,
    images: [
      "/image1.jpg",
      "/image2.jpeg",
      "/image3.jpg",
      "/image14.jpg",
      "/image15.jpg",
    ],
  },
  {
    id: 4,
    placeName: "Khun galuut, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 3.5,
    guestFav: true,
    images: [
      "/image1.jpg",
      "/image2.jpeg",
      "/image3.jpg",
      "/image14.jpg",
      "/image15.jpg",
    ],
  },
  {
    id: 5,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 5,
    guestFav: true,
    images: [
      "/image1.jpg",
      "/image2.jpeg",
      "/image3.jpg",
      "/image14.jpg",
      "/image15.jpg",
    ],
  },
  {
    id: 6,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 4,
    guestFav: false,
    images: [
      "/image1.jpg",
      "/image2.jpeg",
      "/image3.jpg",
      "/image14.jpg",
      "/image15.jpg",
    ],
  },
  {
    id: 7,
    placeName: "Terelj, Mongolia",
    distance: "40 kilometer",
    date: "Feb 11-16",
    price: "$92 night",
    review: 4.3,
    guestFav: true,
    images: [
      "/image1.jpg",
      "/image2.jpeg",
      "/image3.jpg",
      "/image14.jpg",
      "/image15.jpg",
    ],
  },
];
export default function UserHome() {
  return (
    <div className="grid max-sm:grid-cols-1 md:px-8 lg:px-28 grid-cols-4 gap-x-4 gap-y-16 my-12">
      {maplakhData.map((oneItem, index) => (
        <Link href={`/place/${oneItem.id}`}>
          <UserCard
            key={index}
            carouselItems={oneItem.images.map((image, index) => (
              <CarouselItem className="min-h-full" key={index}>
                <Image
                  src={image}
                  alt="carouselnii zurag"
                  width="100"
                  height="100"
                  style={{
                    width: "100%",
                    minHeight: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-xl"
                />
              </CarouselItem>
            ))}
            placeName={oneItem.placeName}
            price={oneItem.price}
            distance={oneItem.distance}
            review={oneItem.review}
            date={oneItem.date}
            guestFav={oneItem.guestFav}
          />
        </Link>
      ))}
    </div>
  );
}
