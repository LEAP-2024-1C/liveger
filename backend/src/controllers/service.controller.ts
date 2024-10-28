import { Request, Response } from "express";
import { UServices } from "../models/service.model";

export const createService = async (req: Request, res: Response) => {
  const { name, description, isChecked } = req.body;
  try {
    const createService = await UServices.create({
      name,
      description,
      isChecked,
    });
    res
      .status(200)
      .json({ message: "service amjilttai uuslee", createService });
  } catch (error) {
    console.error("service uusgehed yamar negen aldaa garlaa", error);
    res
      .status(400)
      .json({ message: "service uusehed aldaa garlaa tottotototo" });
  }
};
export const getServices = async (req: Request, res: Response) => {
  try {
    const getServices = await UServices.find({});
    res.status(201).json({ message: "amjilttai", getServices });
  } catch (error) {
    console.error("serviceuudiig harahad yamar negen aldaa garlaa", error);
    res
      .status(400)
      .json({ message: "serviceuudiig harahad aldaa garlaa tottotototo" });
  }
};
