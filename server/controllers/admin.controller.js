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
    next(error);
  }
};

export const deleteUserById = async (req, resp) => {
  try {
    const userId = req.params.id;
    const deleteUser = await User.deleteOne({ _id: userId });
    if (!deleteUser) {
      return resp.status(404).json({ message: "No user found" });
    }
    return resp.status(200).json({ message: "Users Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, resp) => {
  try {
    const userId = req.params.id;
    const findUser = await User.findOne({ _id: userId }, { password: 0 });
    if (!findUser) {
      return resp.status(404).json({ message: "No user found" });
    }
    return resp.status(200).json(findUser);
  } catch (error) {
    next(error);
  }
};

export const updateUserById = async (req, resp) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    const updateUser = await User.updateOne({ _id: userId }, { $set: data });
    return resp.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};

export const deleteContactsById = async (req, resp) => {
  try {
    const id = req.params.id;

    const contactDeleted = await Contact.deleteOne({ _id: id });
    return resp.status(200).json(contactDeleted);
  } catch (error) {
    next(error);
  }
};
