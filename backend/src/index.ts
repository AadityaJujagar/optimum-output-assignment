// phase 1.1: setup app, db connection

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// CORS must come above routes and MWs
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local dev
      "https://optimum-output-assignment.vercel.app", // prod frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);
app.use(express.json());
app.use("/api", routes); // phase 2.4.3: add routes to index

app.get("/", (_req, res) => {
  res.send("APP RUNNING...");
});

app.listen(PORT, () => {
  console.log(`App is live on port: ${PORT}`);
});
