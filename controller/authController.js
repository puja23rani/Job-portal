import bcrypt from "bcrypt";
import userModel from "../model/userModel.js";

export const authController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    if (!name) {
      next("provide name");
    }
    if (!email) {
      next("provide email");
    }
    if (!password) {
      next("provide password");
    }
    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ sucess: true, msg: "email is already there" });
    }
    const newUser = {
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 12),
    };
    const user = await userModel.create(newUser);
    res.status(200).send({
      sucess: true,
      msg: "user is cerated",
      user,
    });
  } catch (err) {
    next(err);
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({
        success: false,
        message: "provide all fields",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(400).send({
        success: false,
        message: "Invalid email",
      });
    }
    const isPassword = bcrypt.compareSync(password, user.password);
    if (!isPassword) {
      res.status(400).send({
        success: false,
        message: "Invalid password",
      });
    }
    res.status(200).send({
      sucess: true,
      message: "logged in",
    });
  } catch (err) {
    res.status(400).send({
      success: true,
      message: "error occured",
      err,
    });
    console.log(err);
  }
};
