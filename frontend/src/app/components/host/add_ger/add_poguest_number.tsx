"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//get guest number api
//put guest number api

// Add props interface
interface EditGuestNumberProps {
  guest_number: number;
  setGuestNumber: React.Dispatch<React.SetStateAction<number>>;
}

function EditGuestNumber({
  guest_number,
  setGuestNumber,
}: EditGuestNumberProps) {
  const [guestNumber, setGuestNumberState] = useState(guest_number);
  return (
    <div className="container mx-auto border border-green-400 rounded-xl p-6">
      <h1 className="font-bold text-2xl">Зочдын дээд тоо: {guestNumber}</h1>
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
            setGuestNumber(guestNumber);
          }}
        >
          Хадгалах
        </Button>
      </div>
    </div>
  );
}

export default EditGuestNumber;
