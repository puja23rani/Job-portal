import express from "express";
import {
  authController,
  loginController,
} from "../controller/authController.js";

const route = express.Router();
route.post("/register", authController);
route.post("/login", loginController);
export default route;
