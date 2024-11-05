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
export const updateHost = async (req: Request, res: Response) => {
  const { _id } = req.user;
  console.log("idiig harah ======", _id);
  const {
    startedHostingDate,
    myWork,
    skill,
    timeToSpend,
    obsessedWith,
    detailDefination,
  } = req.body;
  try {
    const findHost = await User.findById(_id);
    if (!findHost) {
      return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
    }
    const checkHostInfo = findHost.hostInfo;
    if (!checkHostInfo) {
      const findHostAndPushInfo = await User.findOneAndUpdate(
        { _id: _id },
        {
          $push: {
            hostInfo: {
              startedHostingDate,
              myWork,
              skill,
              timeToSpend,
              obsessedWith,
              detailDefination,
            },
          },
        },
        { new: true }
      );
      res.status(201).json({
        message: "update host information is successful",
        findHostAndPushInfo,
      });
    }
    const findHostAndUpdateHost = await User.findOneAndUpdate(
      { _id: _id },
      {
        startedHostingDate,
        myWork,
        skill,
        timeToSpend,
        obsessedWith,
        detailDefination,
      },
      { new: true }
    );
    res.status(201).json({
      message: "update host information is successful",
      findHostAndUpdateHost,
    });
  } catch (error) {
    console.log("hostiin medeeleld medeelel nemehed aldaa garlaa", error);
    res
      .status(400)
      .json({ message: "hostiin medeeleld medeelel nemehed aldaa garlaa" });
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const getAllUser = await User.find({});
    res.status(200).json({ message: "amjilttai", getAllUser });
  } catch (error) {
    console.log("buh useriig harahad amjiltgui", error);
    res.status(400).json({ message: "buh useriig harahad amjiltgui" });
  }
};
