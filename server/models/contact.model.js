import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

export const Contact = new model("Contact", contactSchema);
