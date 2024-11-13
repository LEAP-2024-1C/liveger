import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2Icon, PlusIcon } from "lucide-react";
import Image from "next/image";
// import { CldUploadWidget } from "next-cloudinary";
// import { Result } from "postcss";
import { CldUploadWidget } from "next-cloudinary";

//delete image api
//add image api
//get all image api
interface ImageProps {
  images: string[];
  imageData: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function AddPhoto({ images, setImages }: ImageProps) {
  const [imageData, setImageData] = useState<string[]>([]);
  const addToImageData = (newData: string) => {
    setImageData((prevData) => [...prevData, newData]);
  };
  console.log("images iig hevleh", imageData);

  return (
    <div className="container mx-auto border border-green-400 rounded-xl p-6 col-span-2">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Зургийн цомог</h1>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              setImages(imageData);
            }}
          >
            Зураг оруулах
          </Button>
        </div>
      </div>

      <p className="text-muted-foreground mb-8">
        Зургуудаа удирдаж, дэлгэрэнгүй мэдээлэл нэмнэ үү. Зочид таны гэрийг
        зураг байгаа тохиолдолд харах боломжтой.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {imageData.map((image, index) => (
          <div
            key={index}
            className={
              "card mx-auto flex flex-col justify-between w-full max-w-sm h-48 sm:h-64 border-4 shadow-lg rounded-xl"
            }
          >
            <div className="list-item-image relative h-48 sm:h-64 border  p-4 border-green-400 rounded-xl">
              <Image
                src={image}
                alt="image"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <Button className="absolute top-2 right-2 z-10 hover:bg-red-400 bg-slate-400 rounded-full p-2">
                <Trash2Icon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
        <div className="h-48 sm:h-64 bg-slate-200  rounded-xl flex justify-center items-center">
          {/* <CldUploadWidget
						uploadPreset="liveger_public"
						onSuccess={(results) => {
							console.log("URL :", results);
						}}
					>
						{({ open }) => {
							return <button onClick={() => open()}>Upload an Image</button>;
						}}
					</CldUploadWidget> */}
          <CldUploadWidget
            uploadPreset="liveger"
            onSuccess={(result) => {
              addToImageData(result?.info?.secure_url);
            }}
            onError={(error) => {
              console.log("erroriig harah", error);
            }}
          >
            {({ open }) => {
              return (
                <button
                  onClick={() => open()}
                  className="flex flex-row items-center"
                >
                  <PlusIcon className="w-10 h-10" />
                  <p>Upload an Image</p>
                </button>
              );
            }}
          </CldUploadWidget>
        </div>
      </div>
    </div>
  );
}
