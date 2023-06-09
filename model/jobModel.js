import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "company is required"],
    },
    position: {
      type: String,
      required: true,
    },
    workLocation: {
      type: String,
      default: "Delhi",
    },
    phone: {
      type: String,
    },
    workType: {
      type: String,
      default: "Remote",
    },
    jobType: {
      type: String,
      default: "Developer",
      required: true,
    },
  },
  { timestamp: true }
);

export default mongoose.model("jobs", jobSchema);
