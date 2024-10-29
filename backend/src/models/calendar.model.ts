import { model, Schema } from "mongoose";

interface Calendar {
  id: Schema.Types.ObjectId;
  startDay: Date;
  howManyDays: number;
}

const calendarSchema = new Schema<Calendar>(
  {
    startDay: { type: Date, required: true },
    howManyDays: { type: Number, required: true },
  },
  { timestamps: true }
);
export const Calendar = model<Calendar>("Calendar", calendarSchema);
