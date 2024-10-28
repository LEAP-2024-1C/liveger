"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Rate } from "antd";
import { maplakhData } from "@/app/components/home";
import { useParams } from "next/navigation";
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Place() {
  // const [rating, setRating] = useState(5);
  const params = useParams();
  const paramId = +params.id;
  console.log("paramiig harah", paramId);
  return (
    <div className="flex flex-row justify-center my-4  md:px-8 lg:px-28">
      <div className="w-full space-y-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-2xl">
            {maplakhData[paramId].placeName}
          </h1>
          <div className="flex flex-row items-center space-x-3">
            <section className="flex flex-row items-center space-x-1">
              <FaShareAlt />
              <p>Share</p>
            </section>
            <section className="flex flex-row items-center space-x-1">
              <FaHeart className="text-red-400" />
              <p>Save</p>
            </section>
          </div>
        </div>
        <div className=" w-full rounded-2xl grid grid-cols-4 gap-2">
          {maplakhData[paramId].images.map((image, index) => {
            return (
              <>
                {index === 0 ? (
                  <div className="col-span-2 row-span-2">
                    {/* <Image
                      key={index}
                      src={image}
                      alt="zurguud"
                      layout="fill"
                      objectFit="cover"
                      className=" rounded-xl"
                    /> */}
                  </div>
                ) : (
                  <Image
                    key={index}
                    src={image}
                    alt="zurguud"
                    layout="fill"
                    objectFit="cover"
                    className=" rounded-xl"
                  />
                )}
              </>
            );
          })}
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1>Баянхонгор аймгийн Завхан сум</h1>
            <div className="flex flex-row">
              <p>8 зочин хүлээн авах боломжтой </p>
              <p>·</p>
              <p>1 гэрт 4 ортой</p>
              <p>·</p>
              <p>Хагас льюкс</p>
            </div>
            <div>
              <Rate
                allowHalf
                value={maplakhData[paramId].review}
                className="md:flex md:flex-row"
              />
            </div>
          </div>
          <div>
            <Card className="w-full shadow-xl">
              <CardHeader>Захиалгатай</CardHeader>
              <CardContent>
                <Button>Захиалгийн хүсэлт илгээх</Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="border-b border-t border-gray-500 flex flex-row space-x-6">
          <section>
            <Image
              src="/pro1.png"
              alt="prozurag"
              width={30}
              height={30}
              style={{
                minHeight: "100%",
                minWidth: "100%",
                objectFit: "contain",
              }}
            />
          </section>
          <div>
            <h1>Ганболдын Эрдэнийн гэр бүл</h1>
            <p>Эзэн айл</p>
          </div>
        </div>
      </div>
    </div>
  );
}
