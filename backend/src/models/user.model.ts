import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser {
  _id: Schema.Types.ObjectId;
  email: string;
  firstName: string;
  lastName: string;
  profileImg: string;
  phoneNumber: string;
  password: string;
  role: string;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    profileImg: {
      type: String,
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    phoneNumber: String,
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["user", "host"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    const hashedPassword = bcrypt.hashSync(this.password.toString(), 10);
    this.password = hashedPassword;
    next();
  }
});

const User = model<IUser>("User", userSchema);

export default User;
