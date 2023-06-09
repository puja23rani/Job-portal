import express from "express";
import {
  jobController,
  getAlljobs,
  updateJobController,
  deleteJobController,
} from "../controller/jobController.js";

const route = express.Router();

route.post("/create-jobs", jobController);

route.get("/get-jobs", getAlljobs);

// update
route.patch("/update-jobs/:id", updateJobController);

// delete
route.delete("/delete-job/:id", deleteJobController);

export default route;
