import { model, Schema } from "mongoose";

interface Order {
  userId: Schema.Types.ObjectId;
  place: Schema.Types.ObjectId;
  numberOfPeople: number;
  startDate: Date;
  endDate: Date;
}

const schemaOrder = new Schema<Order>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    place: { type: Schema.Types.ObjectId, required: true, ref: "Places" },
    numberOfPeople: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true }
);
export const Order = model<Order>("Order", schemaOrder);
