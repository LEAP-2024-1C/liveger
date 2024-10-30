import { Request, Response } from "express";
import { Calendar } from "../models/calendar.model";

export const createCalendar = async (req: Request, res: Response) => {
  const { startDate, endDate, dateRange } = req.body;
  try {
    const addCalendar = await Calendar.create({
      startDate,
      endDate,
      dateRange,
    });
    res.status(200).json({ message: "calendar uusgeh amjilttai", addCalendar });
  } catch (error) {
    console.error("calendar uusgehed yamar negen aldaa garlaa", error);
    res
      .status(400)
      .json({ message: "calendar uusgehed aldaa garlaa tottotototo" });
  }
};
