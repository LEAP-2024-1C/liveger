"use client";

import React from "react";
import { useParams } from "next/navigation";
import AddPhoto from "@/app/components/host/edit_ger/edit_photo";
import EditTitel from "@/app/components/host/edit_ger/edit_titel";
import EditPrice from "@/app/components/host/edit_ger/edit_price";
import baigal1 from "@/app/media/images_mock_data/baigal 1.jpg";
import baigal2 from "@/app/media/images_mock_data/baigal 2.jpg";
import EditGuestNumber from "@/app/components/host/edit_ger/edit_guest_number";
import EditDescription from "@/app/components/host/edit_ger/edit_description";
//fetch data from backend useing homeId
const mockData = [
	{
		id: 1,
		image: baigal1.src,
	},
	{
		id: 2,
		image: baigal2.src,
	},
];

function EditListingPage() {
	const params = useParams();
	const homeId = params.id;
	return (
		<div
			className={`py-4 flex flex-col gap-4 sm:py-8 min-h-[100vh] card-${homeId}`}
		>
			<div className="grid grid-cols-1 container mx-auto md:grid-cols-2 gap-4">
				<AddPhoto image_data={mockData} />
				<EditTitel />
				<EditDescription />
				<EditPrice />
				<EditGuestNumber />
			</div>
		</div>
	);
}

export default EditListingPage;
