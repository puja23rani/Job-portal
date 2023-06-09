import jobModel from "../model/jobModel.js";

export const jobController = async (req, res, next) => {
  try {
    const { company, position, jobType } = req.body;
    if (!company || !position) {
      next("please provide required info");
    }
    if (jobType === "Teacher") {
      next("teacher is not allowed");
    }
    const newJob = { company: company, position: position, jobType: jobType };
    const job = await jobModel.create(newJob);
    res.status(200).json({
      sucess: true,
      msg: "job is added",
    });
  } catch (err) {
    res.status(400).json({
      sucess: false,
      msg: "error occured",
      err,
    });
  }
};

export const getAlljobs = async (req, res, next) => {
  const jobs = await jobModel.find();
  res.status(200).json({
    sucee: true,
    jobs,
    totaljobLength: jobs.length,
  });
};

export const updateJobController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { workLocation, position } = req.body;

    if (!workLocation || !position) {
      next("Please provide all the fields");
    }
    const job = await jobModel.findOne({ _id: id });
    if (!job) {
      next(`no job found with id ${id}`);
    }
    const updateJob = await jobModel.findOneAndUpdate(
      { _id: id },
      { workLocation: workLocation, position: position }
    );
    res.status(200).json({
      updateJob,
    });
  } catch (e) {
    next(e);
  }
};

export const deleteJobController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await jobModel.findOne({ _id: id });
    if (!job) {
      next("No job found");
    }
    await job.deleteOne({ _id: id });
    res.status(200).json({
      message: "sucessfully deleted",
    });
  } catch (e) {
    next(e);
  }
};
