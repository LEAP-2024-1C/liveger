import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../utils/jsonwebtoken";
import User from "../models/user.model";

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "зөвхөн нэвтэрсэн хэрэглэгч дараах үйлдлийг хийж болно",
    });
  }
  const token = req.headers.authorization.split(" ")[1];
  const user: any = decodeToken(token);
  const findUser = await User.findById(user.id);
  console.log("finduseriig harah", findUser);
  req.user = findUser;
  next();
};
