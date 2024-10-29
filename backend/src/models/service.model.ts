import { model, Schema } from "mongoose";

interface UService {
  name: string;
  description: string;
  isChecked: boolean;
}

const UserServiceSchema = new Schema<UService>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    isChecked: { type: Boolean, required: true },
  },
  { timestamps: true }
);
export const UServices = model<UService>("UServices", UserServiceSchema);
