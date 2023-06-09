const errorMiddleware = (err, req, res) => {
  res.status(400).send({
    sucess: true,
    msg: "Error",
    err,
  });
};
