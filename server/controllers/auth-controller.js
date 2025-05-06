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
    resp.status(200).send("Hi register");
  } catch (error) {
    resp.status(400).send("Page Not Found");
    console.error(error);
  }
};
