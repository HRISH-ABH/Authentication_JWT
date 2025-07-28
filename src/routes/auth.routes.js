const express = require("express");
const { route } = require("../app");
const userModel = require("../models/user.model");
const jwt=require('jsonwebtoken');
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
    const token=jwt.sign({id:user._id},process.env.JWT_SECRETE)
    console.log(user);
    return res.status(201).json({
      message: "User created successfully!!",
      user,
      token
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
      username:username,
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
  }
  else{
    res.status(401).json({mssg:"Create a user first!!!"})
  }
});

// get/user
router.get("/user",(req,res)=>{

})

// get/logout

module.exports = router;
