// phase 1.1: setup app, db connection

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api", routes); // phase 2.4.3: add routes to index

app.use(cors({
  origin: "*"
}));

app.get("/", (_req, res) => {
  res.send("APP RUNNING...");
});

app.listen(PORT, () => {
  console.log(`App is live on port: ${PORT}`);
});
