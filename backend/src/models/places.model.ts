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
  review: [number];
  availableDateRange: object;
  calendar: {
    userOrderDates: [
      { orderId: Schema.Types.ObjectId; startDate: Date; endDate: Date }
    ];
    blockedDate: [{ sDate: Date; eDate: Date }];
  };

  services: [Schema.Types.ObjectId];
  possibleGuestNumber: number;
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
    guestFav: { type: Boolean, required: true, default: false },
    review: [{ type: Number }],
    availableDateRange: { type: Object, default: formatDuration({ years: 1 }) },
    calendar: {
      userOrderDates: [
        {
          orderId: {
            type: Schema.Types.ObjectId,
            ref: "Order",
          },
          startDate: { type: Date },
          endDate: { type: Date },
        },
      ],
      blockedDate: [
        {
          sDate: { type: Date, required: false },
          eDate: { type: Date, required: false },
        },
      ],
    },

    services: [
      { type: Schema.Types.ObjectId, required: true, ref: "UServices" },
    ],

    possibleGuestNumber: { type: Number, required: true },
  },
  { timestamps: true }
);
export const Places = model<Places>("Places", placeSchema);
