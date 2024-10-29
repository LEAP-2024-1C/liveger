import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;

    if (!user || user.role !== "host") {
      return res
        .status(403)
        .json({ message: "энэ үйлдлийн хийхийн тулд заавал хост байх ёстой" });
    }
    next();
  } catch (error) {
    console.error("Error in admin middleware:", error);
    res.status(500).json({ message: "Дотоод серверийн алдаа" });
  }
};
