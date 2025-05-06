import express from "express";
import { authRoutes } from "./router/auth-router.js";

const app = express();

app.use("/api/auth", authRoutes);

const port = 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
