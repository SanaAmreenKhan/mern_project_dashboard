import { Service } from "../models/service.model.js";

export const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).send({ msg: "No service found." });
      return;
    }
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};
