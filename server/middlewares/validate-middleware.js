export const validate = (schema) => async (req, resp, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const error = {
      status: status,
      message: "Input is not filled properly",
      extraDetails: err.errors[0].message,
    };
    next(error);
  }
};
