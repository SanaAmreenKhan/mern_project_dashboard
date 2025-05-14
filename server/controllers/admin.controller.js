import { Contact } from "../models/contact.model.js";
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

export const getAllContacts = async (req, res) => {
  try {
    const allContacts = await Contact.find();
    if (!allContacts || allContacts.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json(allContacts);
  } catch (error) {
    console.log(error);
  }
};
