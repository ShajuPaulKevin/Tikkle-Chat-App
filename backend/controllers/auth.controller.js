import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  // extract data from the req body, check for password confirmation, check if the user already exists
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    // create new user
    const newUser = await User.create({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePicture:
        gender === "male" ? boyProfilePicture : girlProfilePicture,
    });

    if (newUser) {
      // generate and set JWT token and cookie for the user
      generateTokenAndSetCookie(newUser._id, res);

      //   save the new user
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        userName: newUser.userName,
        fullName: newUser.fullName,
        profilePicture: newUser.profilePicture,
      });
    } else {
      res
        .status(400)
        .json({ error: "Failed to create user, invalid userdata" });
    }
  } catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    // check if the username and password is correct
    const { userName, password } = req.body;
    const userExists = await User.findOne({ userName });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      userExists?.password || ""
    );
    if (!userExists || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // generate and set JWT token and cookie for the user
    generateTokenAndSetCookie(userExists._id, res);
    res.status(200).json({
      _id: userExists._id,
      userName: userExists.userName,
      fullName: userExists.fullName,
      profilePicture: userExists.profilePicture,
    });
  } catch (error) {
    console.log("Error in login controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
