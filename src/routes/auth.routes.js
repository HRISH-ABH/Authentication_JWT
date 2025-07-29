const express = require("express");
const { route } = require("../app");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const router = express.Router();

// post/register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const userExists = await userModel.exists({ username });
  let user;
  if (!userExists) {
    user = await userModel.create({
      username,
      password,
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE);
    console.log(user);
    res.cookie("token",token);
    return res.status(201).json({
      message: "User created successfully!!",
      user,
    //   token,
    });
  } else {
    return res.status(409).json({
      message: "User already exists!",
    });
  }
});

// post/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userExists = await userModel.exists({ username });

  if (userExists) {
    const user = await userModel.findOne({
      username: username,
    });
    if (user.password === password) {
      return res.status(201).json({
        message: "Logged in",
        token: "temp token bruh!!1",
      });
    } else {
      return res.status(409).json({
        message: "invalid password!!",
      });
    }
  } else {
    res.status(401).json({ mssg: "Create a user first!!!" });
  }
});

// get/user
router.get("/user", async (req, res) => {
  const { token } = req.cookies;
  console.log(token);
  

  //token blank/null
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized !!! stay back!",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRETE);
    const user=await userModel.findOne({
        _id:decoded.id
    }).select("-password").lean(); //password won't go in response
    res.status(200).json({
        message:"user data fetched successfully!!",
        user
    }); // returns the id that we used earlier
  } catch (e) {
    return res.status(401).json({
      message: "Unauthorized-Invalid Token!!",
    });
  }
});

// get/logout

module.exports = router;
