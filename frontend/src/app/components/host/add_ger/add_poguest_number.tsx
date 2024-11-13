"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
//get guest number api
//put guest number api

// Add props interface
interface AddGuestNumberProps {
  guest_number: number;
  setGuestNumber: React.Dispatch<React.SetStateAction<number>>;
}

export default function AddPoGuestNumber({
  guest_number,
  setGuestNumber,
}: AddGuestNumberProps) {
  const [guestNumberState, setGuestNumberState] = useState(guest_number);
  return (
    <div className="container mx-auto border border-green-400 rounded-xl p-6">
      <h1 className="font-bold text-2xl">
        Зочдын дээд тоо: {guestNumberState}
      </h1>
      <p className="text-muted-foreground mb-8">
        Гэрт хүлээн авах зочдын дээд тоог оруулна уу. Зочдын тоо нь чухал
        мэдээлэл юм.
      </p>
      <Input
        type="number"
        onChange={(e) => setGuestNumberState(Number(e.target.value))}
        min={1}
        placeholder="Зочдын дээд тоо"
      />
      <div className="flex justify-end">
        <Button
          className="min-m-4 my-auto"
          onClick={() => {
            setGuestNumber(guestNumberState);
            toast.success("1 гэрдэх боломжтой зочны тоог амжилттай хадгаллаа.");
          }}
        >
          Хадгалах
        </Button>
      </div>
    </div>
  );
}
