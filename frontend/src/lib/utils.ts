import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import dotenv from "dotenv";

// console.log("----------------", process.env.API_URL);
// console.log("----------------", process.env.API_URL);
// console.log("----------------", process.env.API_URL);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// dotenv.config();
// console.log("-5467897654321", process.env.API_URL);
// export const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
// export const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
// export const secretApi = process.env.CLOUDINARY_API_SECRET;
// export const apiUrl = process.env.API_URL;
