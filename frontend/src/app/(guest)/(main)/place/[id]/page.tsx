"use client";
// import { useState } from "react";
import { Rate } from "antd";
import { useParams } from "next/navigation";
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import GuestDetailGridZurag from "@/app/components/guest_detail_grid_zurag";
import BookingCard from "@/app/components/booking-card";
import HostProfile from "@/app/components/host-profile";
import AvailableActivities from "@/app/components/available-activities";
import PlaceDescription from "@/app/components/place-description";
import { useRouter } from "next/navigation";
import { HostCard } from "@/app/components/detail-host-card";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { toast } from "react-toastify";

export default function Place() {
	// const [rating, setRating] = useState(5);
	const router = useRouter();
	const params = useParams();
	console.log("paramiig harah", params.id);
	const [onePlace, setOnePlace] = useState({
		_id: "",
		title: "",
		images: [""],
		info: "",
		review: [],
		hostId: {
			firstName: "",
			lastName: "",
			profileImg: "",
			hostInfo: {
				startedHostingDate: new Date(),
				myWork: "",
				skill: "",
				timeToSpend: "",
				obsessedWith: "",
				detailDefination: "",
			},
		},
		services: [{ id: "", name: "", description: "" }],
		location: "",
		distance: "",
		possibleGuestNumber: "",
		totalBedOfPerGer: "",
		totalGerNumber: "",
		luxLevel: "",
	});
	const getOnePlace = async () => {
		try {
			const response = await axios.get(
				`http://localhost:9002/api/v1/places/${params.id}`
			);
			if (response.status === 201) {
				setOnePlace(response.data.place);
				console.log("one placeiig harah", response.data.place);
			}
		} catch (error) {
			console.error("darsan one place iin datag harahad aldaa garsan", error);
		}
	};
	const handleBookingRequest = async (
		startDate: string | null,
		endDate: string | null,
		numberOfGuests: number | null,
		thisParamid: string | null
	) => {
		const token = localStorage.getItem("token");
		if (token) {
			console.log("token bna", token);
			console.log(
				"startDate: ",
				startDate,
				"endDate: ",
				endDate,
				"numberOfGuests: ",
				numberOfGuests,
				"thisParamid ",
				thisParamid
			);
			fetch("http://localhost:9002/api/v1/order", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					place: params.id,
					startDate: startDate,
					endDate: endDate,
					numberOfPeople: numberOfGuests,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log("Booking request successful:", data);
					router.push(`/order/${data.addOrder._id}`);
					toast.success(
						"Таны захиалгыг амжилттай хадгаллаа, төлбөрөө төлж захиалгаа баталгаажуулна уу."
					);
				})
				.catch((error) => {
					console.error("Error sending booking request:", error);
				});
		} else {
			router.push("/login");
		}
	};
	useEffect(() => {
		getOnePlace();
	}, []);
	const formatedStartDate = format(
		new Date(onePlace.hostId.hostInfo.startedHostingDate),
		"yyyy 'оны' MM 'сар'"
	);
	console.log("one placeiig harah", onePlace);
	return (
		<div className="mt-12 flex flex-row justify-center my-4  md:px-8 lg:px-28 max-sm:p-5">
			<div className="w-full space-y-5">
				<div className="flex flex-row justify-between items-center">
					<h1 className="font-bold text-4xl">{onePlace.title}</h1>
					<div className="flex flex-row items-center space-x-3">
						<section className="flex text-2xl flex-row items-center space-x-1">
							<FaShareAlt />
							<p className="max-sm:hidden">Share</p>
						</section>
						<section className="flex text-2xl flex-row items-center space-x-1">
							<FaHeart className="text-red-400" />
							<p className="max-sm:hidden">Save</p>
						</section>
					</div>
				</div>
				<GuestDetailGridZurag images={onePlace.images} />
				<div className="flex justify-between items-start space-y-4">
					<div className="w-full p-4">
						<h1 className="text-4xl font-bold">{onePlace.title}</h1>
						<div className="flex flex-row gap-2 text-xl">
							<p className="md:text-base py-1 flex flex-row items-center ">
								хүлээн авах боломжтой хамгийн их зочны тоо{" "}
								{onePlace.possibleGuestNumber}
								<GoDotFill className="text-green-400" /> нийт{" "}
								{onePlace.totalGerNumber} гэртэй
								<GoDotFill className="text-green-400" /> 1 гэрт{" "}
								{onePlace.totalBedOfPerGer} ортой{" "}
								<GoDotFill className="text-green-400" /> {onePlace.luxLevel}
							</p>
						</div>
						<div>
							<Rate
								allowHalf
								// value={onePlace.review}
								className="md:flex md:flex-row text-2xl font-bold"
							/>
						</div>
						<HostProfile name={`${onePlace.hostId.firstName}'s family`} />
						<AvailableActivities activities={onePlace.services} />
						<PlaceDescription
							description={onePlace.info || "No description available"}
						/>
					</div>
					<BookingCard
						thisplaceId={onePlace._id}
						onBookingRequest={handleBookingRequest}
					/>
				</div>
				<HostCard
					image={onePlace.hostId.profileImg}
					firstName={onePlace.hostId.firstName}
					lastName={onePlace.hostId.lastName}
					startHostDate={formatedStartDate}
					myWork={onePlace.hostId.hostInfo.myWork}
					skills={onePlace.hostId.hostInfo.skill}
					timeToSpend={onePlace.hostId.hostInfo.timeToSpend}
					obsessedWith={onePlace.hostId.hostInfo.obsessedWith}
					detailDescription={onePlace.hostId.hostInfo.detailDefination}
				/>
			</div>
		</div>
	);
}
