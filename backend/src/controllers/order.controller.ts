import { Request, Response } from "express";
import { Order } from "../models/order.model";
import { Places } from "../models/places.model";

export const createOrder = async (req: Request, res: Response) => {
  const { userId, place, numberOfPeople, startDate, endDate } = req.body;
  const sDate = new Date(startDate);
  const eDate = new Date(endDate);

  try {
    const findPrice = await Places.findOne({ _id: place });
    if (!findPrice) {
      return res
        .status(400)
        .json({ message: "tani songoson place oldohgui bna" });
    }
    console.log("findPrice===========", findPrice);
    const placesPrice = findPrice?.price;
    const dateRangeInMillSec: number = Math.abs(
      eDate.getTime() - sDate.getTime() + 1000 * 60 * 60 * 24
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

    //ehnii arga
    const createPlace = await Places.findOneAndUpdate(
      { _id: place },
      {
        $push: {
          "calendar.userOrderDates": {
            orderId: addOrder._id,
            startDate: sDate,
            endDate: eDate,
          },
        },
      },
      { new: true } //update lasan huvilbariig uzuuldeg
    );
    //2 doh arga
    // const createAndPushPlacesUserOrderDate = await Places.findOneAndUpdate(
    //   { _id: place },
    //   {
    //     $push: {
    //       userOrderDates: {
    //         $each: [
    //           { orderId: addOrder._id, startDate: startDate, endDate: endDate },
    //         ],
    //       },
    //     },
    //   },
    //   { upsert: true, new: true }
    // );

    // const pushOrderId = findPrice.calendar.userOrderDates.push({
    //   orderId: addOrder._id,
    //   startDate: addOrder.startDate,
    //   endDate: addOrder.endDate,
    // });
    // host: open: 10-11 - 10-20, appointed: [10.15 - 10.19, 10.12 - 10.16]
    // gust: 10-15 -10-19
    // gest2: 10.12 - 10.16
    // const pushOrderIdBlocked = findPrice.calendar.blockedDate.push({
    //   sDate: new Date(),
    //   eDate: new Date(),
    // });
    console.log("findPlaces", findPrice);
    console.log("createPlace", createPlace);
    await findPrice.save();
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
