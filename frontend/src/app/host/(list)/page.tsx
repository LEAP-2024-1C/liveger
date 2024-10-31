"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
interface CardProps {
	id: string;
	title: string;
	image: string[];
	info: string;
	status: string;
	action: string;
}
const getList = async (): Promise<object[]> => {
	try {
		const response = await axios.get("http://localhost:9002/api/v1/places", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return []; // Return an empty array in case of an error
	}
};

function Page() {
	const [cards, setCards] = useState(getList());
	console.log(cards);

	return (
		<div className="container  mx-auto p-4">
			<div className="list-header flex flex-col sm:flex-row justify-between items-center mt-8">
				<h1 className="text-3xl sm:text-4xl font-bold mb-4">Таны жагсаалт</h1>
				<Button className="w-full sm:w-auto mb-4 sm:mb-0">
					Жагсаалт нэмэх
				</Button>
			</div>
			<div className="list-container">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{/* {cards.map((card) => (
						<div
							key={card.id}
							className="card mx-auto flex flex-col justify-between w-full max-w-sm h-[28rem] border-4 rounded-xl shadow-lg"
						>
							<div className="list-item-image relative h-48 sm:h-64">
								<Image
									src={card.image[0]}
									alt={card.title}
									layout="fill"
									objectFit="cover"
									className="rounded-t-xl"
								/>
								<div className="list-item-status absolute top-2 right-2 z-10 bg-slate-400 rounded-full p-2">
									{card.status === "published" ? (
										<p className="text-green-500 font-bold text-xs sm:text-sm">
											Идвэхтэй
										</p>
									) : (
										<p className="text-red-500 font-bold text-xs sm:text-sm">
											Идвэхгүй
										</p>
									)}
								</div>
							</div>
							<div className="list-item-info flex-grow p-4">
								<h2 className="text-xl sm:text-2xl font-bold mb-2">
									{card.title}
								</h2>
								<p className="text-xs sm:text-sm text-gray-500 mb-4">
									{card.info}
								</p>
								<div className="list-item-actions flex flex-wrap justify-between gap-2">
									<Button className="flex-grow">
										<Link href={`/host/calendar/${card.id}`}>Хуанли засах</Link>
									</Button>
									<Button className="flex-grow">
										<Link href={`/host/edit/${card.id}`}>Гэр засах</Link>
									</Button>
								</div>
							</div>
						</div>
					))} */}
				</div>
			</div>
		</div>
	);
}

export default Page;
