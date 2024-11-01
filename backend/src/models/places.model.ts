import { formatDuration } from "date-fns";
import { model, Schema } from "mongoose";

interface Places {
  _id: Schema.Types.ObjectId;
  hostId: Schema.Types.ObjectId;
  title: string; //title
  info: string;
  images: [string];
  status: boolean;
  location: string;
  distance: string;
  price: number;
  guestFav: boolean;
  availableDateRange: object;
  calendar: [Schema.Types.ObjectId];
  services: Schema.Types.ObjectId;
}

const placeSchema = new Schema<Places>(
  {
    hostId: { type: String, required: true, ref: "User" },
    title: { type: String, required: true },
    info: { type: String, required: true },
    images: { type: [String], default: ["zurag"] },
    status: { type: Boolean, default: true },
    location: { type: String, required: true },
    distance: { type: String, required: true },
    price: { type: Number, required: true },
    guestFav: { type: Boolean, default: true },
    availableDateRange: { type: Object, default: formatDuration({ years: 1 }) },
    calendar: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: "Calendar",
    },
    services: { type: Schema.Types.ObjectId, required: true, ref: "UServices" },
  },
  { timestamps: true }
);
export const Places = model<Places>("Places", placeSchema);
