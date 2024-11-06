"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AddPhoto from "@/app/components/host/edit_ger/edit_photo";
import EditTitel from "@/app/components/host/edit_ger/edit_titel";
import EditPrice from "@/app/components/host/edit_ger/edit_price";
import EditGuestNumber from "@/app/components/host/edit_ger/edit_guest_number";
import EditAvailableTodo from "@/app/components/host/edit_ger/edit_available_todo";
import EditDescription from "@/app/components/host/edit_ger/edit_description";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Todo } from "@/path/to/todo/type"; // Adjust the path as necessary

function EditListingPage() {
	const params = useParams();
	const homeId = params.id;

	// State variables for each editable field
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [guestNumber, setGuestNumber] = useState(0);
	const [availableTodo, setAvailableTodo] = useState<Todo[]>([]);
	const [images, setImages] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const token = localStorage.getItem("token");
				const response = await axios.get(
					`http://localhost:9002/api/v1/places/${homeId}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				const placeData = response.data.getOnePlace;
				// Set initial state with fetched data
				setTitle(placeData.title);
				setPrice(placeData.price);
				setDescription(placeData.info);
				setGuestNumber(placeData.possibleGuestNumber);
				setAvailableTodo(placeData.services); // Assuming services are the available todos
				setImages(placeData.images);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [homeId]);

	const handleSubmit = async () => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.post(
				"http://localhost:9002/api/v1/places/add",
				{
					hostId: localStorage.getItem("token"),
					title,
					info: description,
					images,
					status: true,
					location: "isdgb", // Add location if needed
					distance: "dfv", // Add distance if needed
					price,
					guestFav: false, // Set as needed
					services: availableTodo, // Send available todos
					possibleGuestNumber: guestNumber,
					totalGerNumber: 0, // Set as needed
					totalBedOfPerGer: 0, // Set as needed
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			console.log("Place created successfully:", response.data);
		} catch (error) {
			console.error("Error creating place:", error);
		}
	};

	return (
		<div
			className={`py-4 flex flex-col gap-4 sm:py-8 min-h-[100vh] card-${homeId}`}
		>
			<div className="grid grid-cols-1 container mx-auto md:grid-cols-2 gap-4">
				<AddPhoto image_data={images} />
				<EditTitel title={title} setTitle={setTitle} />
				<EditDescription
					description={description}
					setDescription={setDescription}
				/>
				<EditPrice price={price} setPrice={setPrice} />
				<EditGuestNumber
					guest_number={guestNumber}
					setGuestNumber={setGuestNumber}
				/>
				<EditAvailableTodo
					available_todo={availableTodo}
					setAvailableTodo={setAvailableTodo}
				/>
			</div>
			<Button onClick={handleSubmit}>Create Place</Button>
		</div>
	);
}

export default EditListingPage;
