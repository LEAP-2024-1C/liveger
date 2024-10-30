import { Request, Response } from "express";
import { Order } from "../models/order.model";
import { Places } from "../models/places.model";
import { intervalToDuration } from "date-fns";

interface placePriceInterface {}
export const createOrder = async (req: Request, res: Response) => {
  const { userId, place, numberOfPeople, startDate, endDate } = req.body;
  try {
    const findPrice = await Places.findOne({ _id: place });
    const placesPrice: number | undefined = findPrice?.price;
    const dateRange = intervalToDuration({ start: startDate, end: endDate });
    const days = dateRange?.days;
    // const niitHuniiNegUdriinTulbur = Math.ceil(
    //   numberOfPeople * placesPrice * days
    // );
    const addOrder = await Order.create({
      userId,
      place,
      numberOfPeople,
      startDate,
      endDate,
    });
    res.status(200).json({
      message: "zahialga amjilttai uusgesen",
      addOrder,
      placesPrice,
      dateRange,
      days,
    });
  } catch (error) {
    console.log("zahialga uusgehed yamar negen aldaa garlaa", error);
    res
      .status(400)
      .json({ message: "zahailga uusgehed yamar negen aldaa garlaa" });
  }
};
