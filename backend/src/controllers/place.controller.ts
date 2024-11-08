import { Request, Response } from "express";
import { Places } from "../models/places.model";

export const createPlace = async (req: Request, res: Response) => {
  const { _id } = req.user;
  const {
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
    luxLevel,
    possibleGuestNumber,
    totalGerNumber,
    totalBedOfPerGer,
  } = req.body;
  try {
    console.log(
      req.user._id,
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
      luxLevel,

      possibleGuestNumber,
      totalGerNumber,
      totalBedOfPerGer
    );
    const placeUusgekh = await Places.create({
      hostId: _id,
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
      luxLevel,
      possibleGuestNumber,
      totalGerNumber,
      totalBedOfPerGer,
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

export const getPlace = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const place = await Places.findById(id)
      .populate("services")
      .populate("hostId");
    res.status(201).json({
      message: "zuvhun ali neg place iig harah amjilttai",
      place,
    });
  } catch (error) {
    console.error("placeiig harahad yamar negen aldaa garlaa", error);
    res
      .status(400)
      .json({ message: "placeiig harahad aldaa garlaa aldaaaaaaaaaa" });
  }
};

export const getPlacesbyHostId = async (req: Request, res: Response) => {
  try {
  } catch {}
};
