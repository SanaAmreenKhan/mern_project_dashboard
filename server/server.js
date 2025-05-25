import express, { json } from "express";
import cors from "cors";
import { connectDb } from "./utils/db.js";
import { authRoutes } from "./router/auth.routes.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";
import { contactRoutes } from "./router/contact.routes.js";
import { serviceRoutes } from "./router/service.routes.js";
import { adminRoutes } from "./router/admin.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://mern-project-dashboard.onrender.com",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
  credentials: true, // <-- lowercase
};

app.use(cors(corsOptions));
app.use(json());
app.use("/api/auth", authRoutes);
app.use("/api/form", contactRoutes);
app.use("/api/data", serviceRoutes);
app.use("/api/admin", adminRoutes);
app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(process.env.port, () =>
    console.log(`Server running on port ${process.env.port} 🔥`)
  );
});
