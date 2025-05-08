import express, { json } from "express";
import { connectDb } from "./utils/db.js";
import { authRoutes } from "./router/auth.routes.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";
import { contactRoutes } from "./router/contact.routes.js";

const app = express();

app.use(json());
app.use("/api/auth", authRoutes);
app.use("/api/form", contactRoutes);
app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(process.env.port, () =>
    console.log(`Server running on port ${process.env.port} 🔥`)
  );
});
