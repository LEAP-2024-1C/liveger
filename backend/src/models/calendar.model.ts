import { model, Schema } from "mongoose";

interface Calendar {
  startDate: Date;
  endDate: Date;
  dateRange: object;
}

const calendarSchema = new Schema<Calendar>(
  {
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: },
  },
  { timestamps: true }
);
export const Calendar = model<Calendar>("Calendar", calendarSchema);
