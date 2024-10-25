"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Rate } from "antd";
export default function Place() {
  const [rating, setRating] = useState(5);
  return (
    <div className="flex flex-row justify-center px-40">
      <div className="w-full">
        <div className="flex flex-row justify-between">
          <h1>placeiin title</h1>
          <div className="flex flex-row">
            <p>Share</p>
            <p>Save</p>
          </div>
        </div>
        <div className="bg-stone-300 w-full rounded-2xl grid grid-cols-4">
          {/* {images.map((image)=>())} */}
          <Image
            src="/zursan-Zurag.png"
            alt="zurag1"
            width={800}
            height={800}
            className="col-span-2 row-span-2 rounded-l-2xl"
          />
          <Image
            src="/zursan-Zurag.png"
            alt="zurag1"
            width={400}
            height={400}
          />
          <Image
            src="/zursan-Zurag.png"
            alt="zurag1"
            width={400}
            height={400}
            className="rounded-tr-2xl"
          />
          <Image
            src="/zursan-Zurag.png"
            alt="zurag1"
            width={400}
            height={400}
          />
          <Image
            src="/zursan-Zurag.png"
            alt="zurag1"
            width={400}
            height={400}
            className="rounded-br-2xl"
          />
        </div>
        <div className="flex flex-row justify-between">
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
              <Rate value={5} className="md:flex md:flex-row" />
            </div>
          </div>
          <div>
            <Card className="w-1/3 shadow-xl">
              <CardHeader>Захиалгатай</CardHeader>
              <CardContent>
                <Button>Захиалгийн хүсэлт илгээх</Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="border-b border-t border-gray-500">
          <section>зураг байна</section>
          <div>
            <h1>Ганболдын Эрдэнийн гэр бүл</h1>
            <p>Эзэн айл</p>
          </div>
        </div>
      </div>
    </div>
  );
}
