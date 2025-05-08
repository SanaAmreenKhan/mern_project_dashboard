import { User } from "../models/user.model.js";
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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isEmailExist = await User.findOne({ email: email });
    if (!isEmailExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isPasswordValid = await isEmailExist.comparePassword(password);

    if (isPasswordValid) {
      res.status(200).json({
        msg: "Login successful",
        token: await isEmailExist.generateToken(),
        userId: isEmailExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
    console.error(error);
  }
};
