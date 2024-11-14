"use client";
import AddAvailableTodo, {
	Todo,
} from "@/app/components/host/add_ger/add_available_todo";
import AddDescription from "@/app/components/host/add_ger/add_description";
import AddDistance from "@/app/components/host/add_ger/add_distance";
import AddLocation from "@/app/components/host/add_ger/add_location";
import AddPhoto from "@/app/components/host/add_ger/add_photo";
import AddPoGuestNumber from "@/app/components/host/add_ger/add_poguest_number";
import AddPrice from "@/app/components/host/add_ger/add_price";
import AddTitle from "@/app/components/host/add_ger/add_title";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

export default function AddPlace() {
	const router = useRouter();
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");
	const [distance, setDistance] = useState(0);
	const [guestNumber, setGuestNumber] = useState(0);
	const [availableTodo, setAvailableTodo] = useState<Todo[]>([]);
	const [images, setImages] = useState<string[]>([]);

	const createPlace = async () => {
		const token = localStorage.getItem("token");
		try {
			const response = await axios.post(
				"http://localhost:9002/api/v1/places/add",
				{
					title,
					info: description,
					images,
					status: false,
					location,
					distance,
					price,
					services: availableTodo,
					possibleGuestNumber: guestNumber,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.status === 201) {
				toast.success(
					"Таны оруулсан газрыг амжилттай бүртгэлээ, нийтэлсэн төлөвтэй болох хүртэл хүлээнэ үү"
				);
				router.push("/host/list");
			}
		} catch {}
	};

	return (
		<div className="py-4 flex flex-col gap-4 sm:py-8 min-h-[100vh]">
			<div className="grid grid-cols-1 container mx-auto md:grid-cols-2 gap-4">
				<AddPhoto images={images} setImages={setImages} />
				<AddTitle title={title} setTitle={setTitle} />
				<AddDescription
					description={description}
					setDescription={setDescription}
				/>
				<AddPrice price={price} setPrice={setPrice} />
				<AddPoGuestNumber
					guest_number={guestNumber}
					setGuestNumber={setGuestNumber}
				/>
				<AddLocation location={location} setLocation={setLocation} />
				<AddDistance distance={distance} setDistance={setDistance} />
				<AddAvailableTodo
					available_todo={availableTodo}
					setAvailableTodo={setAvailableTodo}
				/>
			</div>
			<Button onClick={createPlace}>Шинээр нэмэх</Button>
		</div>
	);
}
