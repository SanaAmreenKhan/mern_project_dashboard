export const adminMiddleware = async (req, resp, next) => {
  try {
    const isAdmin = req.user.isAdmin;
    if (!isAdmin) {
      return resp
        .status(403)
        .json({ message: "Access denied.User is not an admin.." });
    }
    next();
  } catch (error) {
    next(error);
  }
};
