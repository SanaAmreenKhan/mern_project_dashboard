export const errorMiddleware = (err, req, resp, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend Error";
  const extraDetails = err.extraDetails || "Error from backend";

  return resp.status(status).json({ message, extraDetails });
};
