import express, { json } from "express";
import { authRoutes } from "./router/auth-router.js";
import { connectDb } from "./utils/db.js";

connectDb().then(() => {
  app.listen(process.env.port, () =>
    console.log(`Server running on port ${process.env.port} 🔥`)
  );
});

const app = express();

app.use(json());
app.use("/api/auth", authRoutes);
