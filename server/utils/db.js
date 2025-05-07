import mongoose from "mongoose";
const URI = "mongodb://127.0.0.1:27017/mern_admin";

export const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected to Db.");
  } catch (err) {
    process.exit(0);
  }
};
