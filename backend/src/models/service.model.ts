import { model, Schema } from "mongoose";

interface UService {
  name: string;
  description: string;
  isChecked: boolean;
  updated_at: Date;
  created_at: Date;
}

const UserServiceSchema = new Schema<UService>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    isChecked: { type: Boolean, required: true },
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
export const UServices = model<UService>("UServices", UserServiceSchema);
