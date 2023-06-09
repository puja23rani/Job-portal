import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL).then(() => {
      console.log("connected to db");
    });
  } catch (err) {
    console.log(`not connected ${err}`);
  }
};

export default connectDB;
