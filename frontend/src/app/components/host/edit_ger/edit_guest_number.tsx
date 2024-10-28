"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//get guest number api
//put guest number api

function EditGuestNumber() {
	const [guestNumber, setGuestNumber] = useState(0);
	return (
		<div className="container mx-auto border border-green-400 rounded-xl p-6">
			<h1 className="font-bold text-2xl">Зочдын дээд тоо: {guestNumber}</h1>
			<p className="text-muted-foreground mb-8">
				Гэрт хүлээн авах зочдын дээд тоог оруулна уу. Зочдын тоо нь чухал
				мэдээлэл юм.
			</p>
			<Input
				type="number"
				onChange={(e) => setGuestNumber(Number(e.target.value))}
				min={1}
				placeholder="Зочдын дээд тоо"
			/>
			<div className="flex justify-end">
				<Button className="min-m-4 my-auto">Хадгалах</Button>
			</div>
		</div>
	);
}

export default EditGuestNumber;
