"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
interface CardProps {
  _id: string;
  title: string;
  images: [string];
  info: string;
  status: boolean;
}

function Page() {
  const [places, setPlaces] = useState<CardProps[]>([]);
  const getList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9002/api/v1/places/by-host",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setPlaces(response.data.placesByHost);
      }
    } catch (error) {
      console.error("fetch places by host id data error", error);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  console.log("place by host id iig harah", places);
  return (
    <Dialog>
      <div className="container  mx-auto p-4">
        <div className="list-header flex flex-col sm:flex-row justify-between items-center mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Таны жагсаалт</h1>
          <Link href="/host/add-place">
            <Button className="w-full sm:w-auto mb-4 sm:mb-0">
              Жагсаалт нэмэх
            </Button>
          </Link>
        </div>
        <div className="list-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {places.map((place) => (
              <div
                key={place._id}
                className="card mx-auto flex flex-col justify-between w-full max-w-sm h-[28rem] border-4 rounded-xl shadow-lg"
              >
                <div className="list-item-image relative h-48 sm:h-64">
                  <Image
                    src={place.images[0]}
                    alt={place.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                  <div className="list-item-status absolute top-2 right-2 z-10 bg-slate-400 rounded-full p-2">
                    {place.status === true ? (
                      <p className="text-green-500 font-bold text-xs sm:text-sm">
                        Идвэхтэй
                      </p>
                    ) : (
                      <p className="text-red-500 font-bold text-xs sm:text-sm">
                        Идвэхгүй
                      </p>
                    )}
                  </div>
                </div>
                <div className="list-item-info flex-grow p-4">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">
                    {place.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mb-4">
                    {place.info}
                  </p>
                  <div className="list-item-actions flex flex-wrap justify-between gap-2">
                    <Button className="flex-grow">
                      <Link href={`/host/calendar/${place._id}`}>
                        Хуанли засах
                      </Link>
                    </Button>
                    <Button className="flex-grow">
                      <Link href={`/host/edit/${place._id}`}>Гэр засах</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default Page;
