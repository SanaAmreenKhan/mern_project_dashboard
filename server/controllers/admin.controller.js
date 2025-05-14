import { User } from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({}, { password: 0 });
    if (!allUsers || allUsers.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
  }
};
