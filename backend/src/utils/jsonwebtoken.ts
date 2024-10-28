import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const generateToken = (payload: object) => {
  return jsonwebtoken.sign(payload, process.env.JSON_TOKEN_PASSWORD || "", {
    expiresIn: 60 * 60,
  });
};
export const decodeToken = (token: string) => {
  return jsonwebtoken.verify(token, process.env.JSON_TOKEN_PASSWORD || "");
};
