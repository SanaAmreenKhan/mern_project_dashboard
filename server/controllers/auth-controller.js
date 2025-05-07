import { User } from "../models/user-model.js";
import bcrypt from "bcrypt";

export const homePage = async (req, res) => {
  try {
    res.status(200).send("Hi");
  } catch (error) {
    res.status(400).send("Page Not Found");
    console.error(error);
  }
};

export const registerPage = async (req, resp) => {
  try {
    const { username, email, phone, password } = req.body;

    const isEmailExist = await User.findOne({ email: email });
    if (isEmailExist) {
      return resp.status(400).json({ msg: "Email already exist" });
    }

    const userCreated = await User.create({ username, email, phone, password });
    resp.status(201).json({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    resp.status(500).json("Internal Server Error");
    console.error(error);
  }
};
