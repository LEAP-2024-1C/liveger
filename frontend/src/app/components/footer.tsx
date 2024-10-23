"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const footerExampleData = [
  {
    title: "Popular",
    subTitles: [
      "Архангай",
      "Архангай",
      "Архангай",
      "Архангай",
      "Архангай",
      "Архангай",
    ],
    description: [
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
    ],
  },
  {
    title: "Онцлох",
    subTitles: ["Архангай", "Архангай", "Архангай", "Архангай", "Архангай"],
    description: [
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
    ],
  },
  {
    title: "Үзэсгэлэнт газрууд",
    subTitles: ["Архангай", "Архангай", "Архангай", "Архангай", "Архангай"],
    description: [
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
    ],
  },
  {
    title: "Сонирхолтой хэв маяг",
    subTitles: ["Архангай", "Архангай", "Архангай", "Архангай", "Архангай"],
    description: [
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
    ],
  },
  {
    title: "Адал явдалт",
    subTitles: ["Архангай", "Архангай", "Архангай", "Архангай", "Архангай"],
    description: [
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
      "Сумууд",
    ],
  },
];
export default function Footer() {
  return (
    <div className="bg-slate-200">
      <div className="border-b border-green-400">
        <h1>Монголын тал нутагт тавтай морил</h1>
        <div className="px-8">
          <div className="flex flex-row justify-evenly border-b border-green-400">
            {footerExampleData.map((oneItem, index) => (
              <Button
                key={index}
                className="px-0 rounded-none text-black bg-transparent shadow-none hover:bg-transparent hover:border-b-2 hover:border-green-400 hover:font-bold"
                onClick={() => {
                  console.log(oneItem.title);
                }}
              >
                {oneItem.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="px-8 grid grid-cols-6 my-6">
          {footerExampleData[0].subTitles.map((oneItem, index) => (
            <p key={index}>{oneItem}</p>
          ))}
        </div>
      </div>
      <div className="my-6 px-8">
        <div>
          <h1>Тусламж</h1>
        </div>
        <div>
          <h1>Үйлчилгээ</h1>
        </div>
        <div>
          <h1>Бидний тухай</h1>
        </div>
      </div>
    </div>
  );
}
