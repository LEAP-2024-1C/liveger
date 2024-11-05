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
  hostInfo: {
    startedHostingDate: Date;
    myWork: [string];
    skill: [string];
    timeToSpend: [string];
    obsessedWith: [string];
    detailDefination: string;
  };
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
    hostInfo: {
      startedHostingDate: { type: Date, default: Date.now },
      myWork: { type: [String], required: true },
      skill: { type: [String], required: true },
      timeToSpend: { type: [String], required: true },
      obsessedWith: { type: [String], required: true },
      detailDefination: { type: String, required: true },
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
