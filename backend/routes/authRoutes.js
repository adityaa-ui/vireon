const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/login", async (req, res) => {

  const { username, password, role } = req.body;

  try {

    const user = await User.findOne({
      username,
      password,
      role
    });

    setTimeout(() => {

      if (user) {

        res.json({
          success: true,
          message: "Login Successful",
          user
        });

      } else {

        res.status(401).json({
          success: false,
          message: "Invalid Credentials"
        });

      }

    }, 2000);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

});
router.post('/register', async (req, res) => {

  try {

    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if(existingUser){

      return res.status(400).json({
        message: "User already exists"
      });

    }

    const newUser = new User({

      username,
      password,
      role: "General User"

    });

    await newUser.save();

    res.status(201).json({
      message: "User Registered Successfully"
    });

  } catch(err){

    res.status(500).json(err);

  }

});

module.exports = router;