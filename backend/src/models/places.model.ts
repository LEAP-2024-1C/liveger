import { Request, Response } from "express";
import { Schema } from "mongoose";

interface Places {
  _id: Schema.Types.ObjectId;
  //   hostName: Schema.Types.ObjectId
  title: string; //title
  info: string;
  images: [string];
  status: boolean;
  location: string;
  price: number;
  calendar: Schema.Types.ObjectId;
  services: Schema.Types.ObjectId;
  updated_at: Date;
  created_at: Date;
}

const placeSchema = new Schema<Places>(
  {
    title: { type: String, required: true },
    info: { type: String, required: true },
    images: { type: [String], default: ["zurag"] },
    status: { type: Boolean, default: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },

    updated_at: {
      type: Date,
      default: Date.now,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
