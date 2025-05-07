import express, { json } from "express";
import { authRoutes } from "./router/auth-router.js";
import { connectDb } from "./utils/db.js";

connectDb().then(() => {
  const port = 5000;
  app.listen(port, () => `Server running on port ${port} 🔥`);
});

const app = express();

app.use(json());
app.use("/api/auth", authRoutes);
