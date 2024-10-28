import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName, phoneNumber, password, role } =
      req.body;
    if (!firstName || !email || !password) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй." });
    }
    const createdUser = await User.create({
      email,
      firstName,
      lastName,
      phoneNumber,
      password,
      role,
    });
    res.status(201).json({ message: "sucsess", user: createdUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Нэр эсвэл нууц үг хоосон байж болохгүй." });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "burtgel uusgegui bnaa" });
    }
    const isCheck = bcrypt.compareSync(password, user.password);
    if (!isCheck) {
      return res.status(400).json({
        message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
      });
    }
    const token = generateToken({ id: user._id });
    res.status(200).json({ message: "success", token });
  } catch (error) {
    res.status(500).json({ message: "Серверийн алдаа", error });
  }
};
