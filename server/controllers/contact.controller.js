import { Contact } from "../models/contact.model.js";

export const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    res.status(201).json({
      msg: "Message send successfully",
    });
  } catch (error) {
    res.status(500).json({ msg: "Message not delivered." });
    console.error(error);
  }
};
