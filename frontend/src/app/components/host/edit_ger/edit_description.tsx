"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//put description api
//get description api

// Add props interface
interface EditDescriptionProps {
	description: string;
}

function EditDescription({ description }: EditDescriptionProps) {
	const [descriptionState, setDescription] = useState(description);
	return (
		<div className="container mx-auto border border-green-400 rounded-xl p-6">
			<h1 className="font-bold text-2xl">Тайлбар: {descriptionState}</h1>
			<p className="text-muted-foreground mb-8">
				Гэрийн тайлбарыг оруулна уу. Тайлбар нь таны гэрийг тодорхойлох чухал
				мэдээлэл юм.
			</p>
			<Input
				type="text"
				value={descriptionState}
				onChange={(e) => setDescription(e.target.value)}
				placeholder="Тайлбар"
			/>
			<div className="flex justify-end">
				<Button className="min-m-4 my-auto">Хадгалах</Button>
			</div>
		</div>
	);
}
export default EditDescription;
