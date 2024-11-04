import { Request, Response } from "express";
import { Places } from "../models/places.model";

export const createPlace = async (req: Request, res: Response) => {
  const {
    hostId,
    title,
    info,
    images,
    status,
    location,
    distance,
    price,
    guestFav,
    services,
    calendar,
  } = req.body;
  try {
    const placeUusgekh = await Places.create({
      hostId,
      title,
      info,
      images,
      status,
      location,
      distance,
      price,
      guestFav,
      services,
      calendar,
    });
    res.status(201).json({ message: "place uusgekh amjilttai", placeUusgekh });
  } catch (error) {
    console.error("placeuudiig uusgehed yamar negen aldaa garlaa", error);
    res
      .status(400)
      .json({ message: "placeuudiig uusgehed aldaa garlaa tottotototo" });
  }
};
export const getPlaces = async (req: Request, res: Response) => {
  try {
    const getPlaces = await Places.find({})
      .populate("services")
      .populate("hostId");
    res.status(201).json({ message: "placeuudiig harah amjilttai", getPlaces });
  } catch (error) {
    console.error("placeuudiig harahad yamar negen aldaa garlaa", error);
    res
      .status(400)
      .json({ message: "placeuudiig harahad aldaa garlaa tottotototo" });
  }
};
