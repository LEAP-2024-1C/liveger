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
  price: number;
  availableDateRange: object;
  calendar: [
    {
      userOrderDates: [
        { orderId: Schema.Types.ObjectId; startDate: Date; endDate: Date }
      ];
    },
    { blockedDate: [{ sDate: Date; eDate: Date }] }
  ];
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
    price: { type: Number, required: true },
    availableDateRange: { type: Object, default: formatDuration({ years: 1 }) },
    calendar: [
      {
        userOrderDates: [
          {
            orderId: {
              type: Schema.Types.ObjectId,
              required: true,
              ref: "Order",
            },
            startDate: { type: Date, required: true },
            endDate: { type: Date, required: true },
          },
        ],
      },
      {
        blockedDate: [
          {
            sDate: { type: Date, default: Date.now },
            eDate: { type: Date, default: Date.now },
          },
        ],
      },
    ],
    services: { type: Schema.Types.ObjectId, required: true, ref: "UServices" },
  },
  { timestamps: true }
);
export const Places = model<Places>("Places", placeSchema);
