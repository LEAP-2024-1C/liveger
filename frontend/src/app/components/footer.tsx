"use client";
import { Button } from "@/components/ui/button";
// import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const footerExampleData = [
  {
    title: "Popular",
    subTitles: [
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
    ],
    description: ["Sum", "Sum", "Sum", "Sum", "Sum", "Sum", "Sum"],
  },
  {
    title: "Highlight",
    subTitles: [
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
    ],
    description: ["Sum", "Sum", "Sum", "Sum", "Sum", "Sum", "Sum"],
  },
  {
    title: "Charming places",
    subTitles: [
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
    ],
    description: ["Sum", "Sum", "Sum", "Sum", "Sum", "Sum", "Sum"],
  },
  {
    title: "Unique lifestyle",
    subTitles: [
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
    ],
    description: ["Sum", "Sum", "Sum", "Sum", "Sum", "Sum", "Sum"],
  },
  {
    title: "Adventure",
    subTitles: [
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
      "Arkhangai provinence",
    ],
    description: ["Sum", "Sum", "Sum", "Sum", "Sum", "Sum", "Sum"],
  },
];
export default function Footer() {
  return (
    <div className="bg-slate-200 max-sm:p-3">
      <div className="border-b border-green-400 md:px-8 lg:px-28 py-10">
        <h1 className="text-3xl font-semibold">Welcome to Mongolia</h1>
        <div className="py-2"></div>
      </div>
      <div className="flex justify-between max-sm:flex max-sm:flex-row">
        <h1>Тусламж</h1>
        <h1>Үйлчилгээ</h1>
        <h1>Бидний тухай</h1>
      </div>
      <div className="md:px-8 lg:px-28 ">
        <div className=" flex flex-row justify-between border-t  border-green-400">
          <div className=" py-6">
            <div className="flex flex-row space-x-3">
              <h1>©2024 Live Ger</h1>
              <h1>·</h1>
              <h1>Сайтын бүтэц</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3 ">
            <h1 className="flex flex-row items-center max-sm:hidden">
              <TbWorld />
              <p>Монгол (МН)</p>
            </h1>
            <h1 className="max-sm:hidden">₮ MNT</h1>
            <div className="flex flex-row space-x-1">
              <FaFacebookSquare />
              <FaTwitterSquare />
              <FaInstagramSquare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
