import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    location: {
      type: String,
      default: "Delhi",
    },
  },
  { timestamp: true }
);

export default mongoose.model("users", userSchema);
