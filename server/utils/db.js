import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("connected to Db.");
  } catch (err) {
    console.log("Not connected to Db.");
    process.exit(0);
  }
};
