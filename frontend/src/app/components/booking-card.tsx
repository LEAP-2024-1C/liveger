"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { stringifyError } from "next/dist/shared/lib/utils";
import { useState } from "react";

const registered = false;
interface BookingCardProps {
	onBookingRequest: (
		startDate: string | null,
		endDate: string | null,
		numberOfGuests: number | null,
		placeId: string | null
	) => void;
	thisplaceId: string | null; // Merge the placeId prop into BookingCardProps
}
export default function BookingCard({
	onBookingRequest,
	thisplaceId,
}: BookingCardProps) {
	const [startDate, setStartDate] = useState<string | null>(null);
	const [endDate, setEndDate] = useState<string | null>(null); // Keeping date as string to match input values
	const [numberOfGuests, setNumberOfGuests] = useState<number | null>(null);

	return (
		<Card className="shadow-xl border-4 border-green-600 rounded-xl p-4">
			<CardHeader className="text-2xl font-bold">Захиалгатай</CardHeader>
			<CardContent className="flex flex-col space-y-4">
				<input
					type="date"
					name="startdate"
					onChange={(e) => {
						const date = new Date(e.target.value);
						setStartDate(date.toISOString().split("T")[0].replace(/-/g, "/"));
					}}
				/>
				<input
					type="date"
					name="enddate"
					onChange={(e) => {
						const date = new Date(e.target.value);
						setEndDate(date.toISOString().split("T")[0].replace(/-/g, "/"));
					}}
				/>
				<input
					type="number"
					name="numberofguests"
					placeholder="Хоногтой хүмүүс"
					onChange={(e) => {
						const value = e.target.value;
						setNumberOfGuests(value ? parseInt(value) : null); // Allow clearing input
					}}
				/>
				<Button
					className="text-xl font-bold"
					onClick={() => {
						onBookingRequest(startDate, endDate, numberOfGuests, thisplaceId);
					}}
				>
					Захиалгийн хүсэлт илгээх
				</Button>
			</CardContent>
		</Card>
	);
}
