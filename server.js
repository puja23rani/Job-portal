import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./database/conn.js";

import cors from "cors";
import route from "./route/authRoute.js";
import jobRoute from "./route/jobRoute.js";
dotenv.config();
const app = express();

// middleware
app.use(express.json());

app.use(route);
app.use(jobRoute);
app.use(cors);
// connect to database
connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Ayo gurls${port}`);
});
