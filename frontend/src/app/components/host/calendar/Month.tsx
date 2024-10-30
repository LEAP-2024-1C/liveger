import React from "react";
import Day from "./day";

interface GuestData {
	id: number;
	howmany_guests: number;
	startdate: string;
	enddate: string;
	photo: string;
}

interface HostBlockedData {
	startdate: string;
	enddate: string;
}

interface MonthProps {
	year: number;
	monthIndex: number;
	monthName: string;
	guestData: GuestData[];
	hostBlockedData: HostBlockedData[];
}

const Month: React.FC<MonthProps> = ({
	year,
	monthIndex,
	monthName,
	guestData,
	hostBlockedData,
}) => {
	const weekdays = [
		"Даваа",
		"Мягмар",
		"Лхагва",
		"Пүрэв",
		"Баасан",
		"Бямба",
		"Ням",
	];

	const getDaysInMonth = (year: number, month: number) => {
		return new Date(year, month + 1, 0).getDate();
	};

	const getFirstDayOfMonth = (year: number, month: number) => {
		return new Date(year, month, 1).getDay();
	};

	const isDateInRange = (date: Date, startDate: string, endDate: string) => {
		const start = new Date(startDate);
		start.setHours(0, 0, 0, 0);
		const end = new Date(endDate);
		end.setHours(23, 59, 59, 999);
		return date >= start && date <= end;
	};

	const isDateBeforeToday = (date: Date) => {
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		return date < today;
	};

	const isDateHostBlocked = (date: Date) => {
		return hostBlockedData.some((blockedPeriod) =>
			isDateInRange(date, blockedPeriod.startdate, blockedPeriod.enddate)
		);
	};

	const renderMonth = () => {
		const daysInMonth = getDaysInMonth(year, monthIndex);
		const firstDay = getFirstDayOfMonth(year, monthIndex);
		const days = [];

		const startOffset = firstDay === 0 ? 6 : firstDay - 1;

		for (let i = 0; i < startOffset; i++) {
			days.push(
				<div key={`empty-${i}`} className="h-24 sm:h-32 md:h-40"></div>
			);
		}

		for (let day = 1; day <= daysInMonth; day++) {
			const currentDate = new Date(year, monthIndex, day);
			currentDate.setHours(0, 0, 0, 0);

			const guestForDay = guestData.find((guest) =>
				isDateInRange(currentDate, guest.startdate, guest.enddate)
			);

			const isBlocked =
				guestForDay !== undefined ||
				isDateBeforeToday(currentDate) ||
				isDateHostBlocked(currentDate);

			days.push(
				<Day
					key={day}
					blocked={isBlocked}
					date={day}
					guestsPhoto={guestForDay ? guestForDay.photo : ""}
					price={100}
					guestCount={guestForDay ? guestForDay.howmany_guests : 0}
					isHostBlocked={isDateHostBlocked(currentDate)}
				/>
			);
		}

		return days;
	};

	return (
		<div className="mb-8 p-2 border-green-400 border-4 shadow-2xl rounded-2xl">
			<h2 className="text-xl sm:text-2xl font-bold mb-4">
				{monthName} {year}
			</h2>
			<div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
				{weekdays.map((day) => (
					<div
						key={day}
						className="text-center font-semibold text-xs sm:text-sm"
					>
						{day.slice(0, 2)}
					</div>
				))}
			</div>
			<div className="grid grid-cols-7 gap-1 sm:gap-2">{renderMonth()}</div>
		</div>
	);
};

export default Month;
