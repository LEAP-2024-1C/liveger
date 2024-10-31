import { Request, Response } from "express";
import { Order } from "../models/order.model";
import { Places } from "../models/places.model";

export const createOrder = async (req: Request, res: Response) => {
	const { place, numberOfPeople, startDate, endDate } = req.body;
	const userId = req.user._id;
	const sDate = new Date(startDate);
	const eDate = new Date(endDate);

	try {
		const findPrice = await Places.findOne({ _id: place });
		console.log("place", place);
		if (!findPrice) {
			return res
				.status(400)
				.json({ message: "tani songoson place oldohgui bna" });
		}
		const placesPrice = findPrice?.price;
		const dateRangeInMillSec: number = Math.abs(
			eDate.getTime() - sDate.getTime()
		);
		const millsecInDay: number = 1000 * 60 * 60 * 24;
		const dateRange: number = Math.floor(dateRangeInMillSec / millsecInDay);
		const niitHuniiNiitUdriinTulbur = Math.ceil(
			numberOfPeople * placesPrice * dateRange
		);
		const addOrder = await Order.create({
			userId,
			place,
			numberOfPeople,
			startDate,
			endDate,
			totalPrice: niitHuniiNiitUdriinTulbur,
		});
		res.status(200).json({
			message: "zahialga amjilttai uusgesen",
			addOrder,
		});
	} catch (error) {
		console.log("zahialga uusgehed yamar negen aldaa garlaa", error);
		res
			.status(400)
			.json({ message: "zahailga uusgehed yamar negen aldaa garlaa" });
	}
};
