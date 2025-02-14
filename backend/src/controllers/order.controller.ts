import { Request, Response } from "express";
import { Order } from "../models/order.model";
import { Places } from "../models/places.model";
import { ObjectId } from "mongodb";

export const createOrder = async (req: Request, res: Response) => {
  const { place, numberOfPeople, startDate, endDate } = req.body;
  const userId = req.user._id;
  const sDate = new Date(startDate);
  const eDate = new Date(endDate);

  try {
    const findPlace = await Places.findOne({ _id: place });
    if (!findPlace) {
      return res
        .status(400)
        .json({ message: "tani songoson place oldohgui bna" });
    }
    const placesPrice = findPlace?.price;
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

    // ehnii arga
    // const createPlace = await Places.findOneAndUpdate(
    //   { _id: place },
    //   {
    //     $push: {
    //       "calendar.userOrderDates": {
    //         orderId: addOrder._id,
    //         startDate: sDate,
    //         endDate: eDate,
    //       },
    //     },
    //   },
    //   { new: true } //update lasan huvilbariig uzuuldeg
    // );
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
    //minii buteegui code
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
    // ("createPlace", createPlace);
    await findPlace.save();
    return res.status(200).json({
      message: "zahialga amjilttai uusgesen",
      addOrder,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "zahailga uusgehed yamar negen aldaa garlaa" });
  }
};

export const getOrder = async (req: Request, res: Response) => {
  const uId = req.user._id;
  const { orderId } = req.params;
  try {
    const findOnlyOrder = await Order.findOne({
      _id: orderId,
      userId: uId,
      isConfirmed: false,
    })
      .sort({ createdAt: 1 })
      .limit(1)
      .populate("place")
      .populate("userId");
    return res
      .status(200)
      .json({ message: "orderiig haij oloh amjilttai", findOnlyOrder });
  } catch (error) {
    res.status(400).json({ message: "orderiig harah amjiltgui" });
  }
};

export const confirmOrder = async (req: Request, res: Response) => {
  const { _id } = req.params;
  _id;
  try {
    const findOrderById = await Order.findById(_id);
    findOrderById;
    const changeOrderConfirm = await Order.findByIdAndUpdate(
      _id,
      {
        isConfirmed: true,
      },
      { upsert: true, new: true }
    );
    if (!findOrderById) {
      return res.status(400).json("message:Захиалгын дугаар олдсонгүй");
    }
    const placeiinId = findOrderById.place;
    const ordersStartDate = findOrderById.startDate;
    const ordersEndDate = findOrderById.endDate;
    const addConfirmedOrdersCalendarToCalendar = await Places.findOneAndUpdate(
      { _id: placeiinId },
      {
        $push: {
          "calendar.userOrderDates": {
            orderId: _id,
            startDate: ordersStartDate,
            endDate: ordersEndDate,
          },
        },
      },
      { new: true } //update lasan huvilbariig uzuuldeg
    );
    return res.status(200).json({
      message: "ehnii eeljind amjilttai",
      changeOrderConfirm,
      addConfirmedOrdersCalendarToCalendar,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "orderiig confirm hiihed aldaa garlaa" });
  }
};
