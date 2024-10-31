import { Request, Response } from "express";
import User from "../models/user.model";

export const currentUser = async (req: Request, res: Response) => {
	try {
		const { _id } = req.user;
		const findUser = await User.findById({ _id });
		res
			.status(200)
			.json({ message: "current useriig harah amjilttai", user: findUser });
	} catch (error) {
		console.log("yamar negen aldaa garlaa", error);
		res.status(400).json({ message: "yamar negen aldaa garlaa" });
	}
};
