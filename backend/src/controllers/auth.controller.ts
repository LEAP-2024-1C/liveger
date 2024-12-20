import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import crypto from "crypto";

import { generateToken } from "../utils/jsonwebtoken";
import { sendPasswordResetEmail } from "../utils/sendmail";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName, phoneNumber, password, role } =
      req.body;
    if (!firstName || !email || !password) {
      return res.status(400).json({ message: "Value cannot be empty." });
    }
    const createdUser = await User.create({
      email,
      firstName,
      lastName,
      phoneNumber,
      password,
      role,
    });
    return res.status(201).json({ message: "sucsess", user: createdUser });
  } catch (error) {
    error;
    return res.status(500).json({ message: "Server Error", error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password, type_login } = req.body;

    if (!email || !password) {
      return res
        .status(404)
        .json({ message: "Email or password cannot be empty." });
    }
    const user = await User.findOne({ email, role: type_login });
    user;
    if (!user) {
      return res.status(400).json({ message: "Account not registered." });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Email or password does not match.",
      });
    }
    const token = generateToken({ id: user._id });
    return res.status(200).json({ message: "success", token });
  } catch (error) {
    return res.status(500).json({
      message: "Network error or unable to connect to server.",
      error,
    });
  }
};
export const updateHost = async (req: Request, res: Response) => {
  const { _id } = req.user;

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
    // if (!checkHostInfo) {
    //   const findHostAndPushInfo = await User.findOneAndUpdate(
    //     { _id: _id },
    //     {
    //       $push: {
    //         hostInfo: {
    //           startedHostingDate,
    //           myWork,
    //           skill,
    //           timeToSpend,
    //           obsessedWith,
    //           detailDefination,
    //         },
    //       },
    //     },
    //     { new: true }
    //   );
    //   res.status(201).json({
    //     message: "update host information is successful",
    //     findHostAndPushInfo,
    //   });
    // }
    const findHostAndUpdateHost = await User.findOneAndUpdate(
      { _id: _id },
      {
        hostInfo: {
          startedHostingDate,
          myWork,
          skill,
          timeToSpend,
          obsessedWith,
          detailDefination,
        },
      },
      { new: true }
    );
    return res.status(201).json({
      message: "update host information is successful",
      findHostAndUpdateHost,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "hostiin medeeleld medeelel nemehed aldaa garlaa" });
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const getAllUser = await User.find({});
    return res.status(200).json({ message: "amjilttai", getAllUser });
  } catch (error) {
    return res.status(400).json({ message: "buh useriig harahad amjiltgui" });
  }
};

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(404).json({
        success: false,
        message: "Бүртгэлтэй хэрэглэгч олдсонгүй",
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    findUser.resetPasswordToken = hashedToken;
    findUser.resetPasswordExpires = new Date(Date.now() + 10 * 60 * 1000);
    await findUser.save();

    await sendPasswordResetEmail(email, resetToken);

    return res.status(200).json({
      success: true,
      message: "Нууц үг сэргээх линк илгээгдлээ",
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    return res.status(500).json({
      success: false,
      message: "Серверийн алдаа гарлаа",
    });
  }
};
export const verifyPassword = async (req: Request, res: Response) => {
  try {
    const { password, resetToken } = req.body;

    const hashedResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    const findUser = await User.findOne({
      resetPasswordToken: hashedResetToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!findUser) {
      return res.status(400).json({
        success: false,
        message: "Таны нууц үг сэргээх хугацаа дууссан байна",
      });
    }
    findUser.password = password;

    await findUser.save();

    return res.status(200).json({
      role: findUser.role,
      success: true,
      message: "Нууц үг амжилттай сэргээгдлээ",
    });
  } catch (error) {
    console.error("Password verification error:", error);
    return res.status(500).json({
      success: false,
      message: "Серверийн алдаа гарлаа",
    });
  }
};
