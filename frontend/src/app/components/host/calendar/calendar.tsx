import React from "react";
import Month from "./Month";

interface HostBlockedData {
	startdate: string;
	enddate: string;
}

interface GuestData {
	id: number;
	howmany_guests: number;
	startdate: string;
	enddate: string;
	photo: string;
}

function Calendar({
	hostBlockedData,
	guestData,
}: {
	hostBlockedData: HostBlockedData[];
	guestData: GuestData[];
}) {
	const today = new Date();
	const currentMonth = today.getMonth();
	const currentYear = today.getFullYear();

	const getNextMonths = (
		startMonth: number,
		startYear: number,
		count: number
	) => {
		const months = [];
		for (let i = 0; i < count; i++) {
			const monthIndex = (startMonth + i) % 12;
			const year = startYear + Math.floor((startMonth + i) / 12);
			months.push({ monthIndex, year });
		}
		return months;
	};

	const nextMonths = getNextMonths(currentMonth, currentYear, 12);

	return (
		<div className="container mx-auto px-2 sm:px-4 box-border w-4/5">
			<div className="space-y-8">
				{nextMonths.map(({ monthIndex, year }) => (
					<Month
						key={`${year}-${monthIndex}`}
						year={year}
						monthIndex={monthIndex}
						monthName={new Date(year, monthIndex).toLocaleString("default", {
							month: "long",
						})}
						guestData={guestData}
						hostBlockedData={hostBlockedData}
					/>
				))}
			</div>
		</div>
	);
}

export default Calendar;
