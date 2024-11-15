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
    return res
      .status(201)
      .json({ message: "service amjilttai uuslee", createService });
  } catch (error) {
    console.error("service uusgehed yamar negen aldaa garlaa", error);
    return res
      .status(400)
      .json({ message: "service uusehed aldaa garlaa tottotototo" });
  }
};
export const addServiceToPlace = (req: Request, res: Response) => {
  const { name, description, isChecked } = req.body;
  try {
  } catch {}
};
export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await UServices.find({});
    return res.status(201).json({ message: "amjilttai", services });
  } catch (error) {
    console.error("serviceuudiig harahad yamar negen aldaa garlaa", error);
    return res
      .status(400)
      .json({ message: "serviceuudiig harahad aldaa garlaa tottotototo" });
  }
};
