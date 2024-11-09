"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

//get titel api
//put titel api

// Add props interface
interface AddTitleProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddTitle({ title, setTitle }: AddTitleProps) {
  const [garchig, setGarchig] = useState(title);
  return (
    <div className="container mx-auto border border-green-400 rounded-xl p-6">
      <h1 className="font-bold text-2xl">Гарчиг:{garchig}</h1>
      <p className="text-muted-foreground mb-8">
        Гэрийнхээ гарчгийг оруулна уу. Гарчиг нь таны гэрийг тодорхойлох чухал
        мэдээлэл юм.
      </p>
      <div className="flex flex-col gap-2">
        <label htmlFor="garchig">Гарчиг</label>
        <Input
          type="text"
          id="garchig"
          placeholder="Гарчиг"
          value={garchig}
          onChange={(e) => setGarchig(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <Button
          className="min-m-4 my-auto"
          onClick={() => {
            setTitle(garchig);
          }}
        >
          Хадгалах
        </Button>
      </div>
    </div>
  );
}
