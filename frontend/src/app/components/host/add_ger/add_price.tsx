"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
//get price api
//put price api

//get mntUsdCompare from internet
async function fetchMntUsdCompare() {
  const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  const data = await res.json();
  return data.rates.MNT;
}

// Add props interface
interface AddPriceProps {
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}

export default function AddPrice({ price, setPrice }: AddPriceProps) {
  const [priceusd, setPriceusd] = useState(price); //default value from backend
  const [mntUsdCompare, setMntUsdCompare] = useState(3400); //default value for compare
  const [pricemn, setPricemn] = useState(price * mntUsdCompare * 0.9);
  useEffect(() => {
    fetchMntUsdCompare().then((data) => setMntUsdCompare(data));
  }, []);

  return (
    <div className="container mx-auto border border-green-400 rounded-xl p-6">
      <h1 className="font-bold text-2xl">Үнэ: {priceusd}$</h1>
      <p className="text-muted-foreground mb-8">
        Таны гэрийн үнийг оруулна уу. Үнэ нь таны гэрийг тодорхойлох чухал
        мэдээлэл юм.
      </p>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">{`Таны авах мөнгө: ${pricemn}₮ `}</h1>

        <Input
          type="number"
          onChange={(e) => {
            setPriceusd(Number(e.target.value));
            setPricemn(Number(e.target.value) * mntUsdCompare * 0.9);
          }}
          min={100}
          placeholder={`100$`}
        />
      </div>
      <div className="flex justify-end">
        <Button
          className="min-m-4 my-auto"
          onClick={() => {
            setPrice(priceusd);
          }}
        >
          Хадгалах
        </Button>
      </div>
    </div>
  );
}
