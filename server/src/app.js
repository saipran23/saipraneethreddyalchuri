import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://saipraneethreddyalchuri.vercel.app"
  }),
);

app.use("/api", contactRoutes);

export default app;
