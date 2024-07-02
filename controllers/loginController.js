const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Password did not match" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });

    // Set token as a cookie with additional options
    res.cookie("token", token, {
      httpOnly: true, // This helps prevent XSS attacks
      secure: process.env.NODE_ENV === "production", // Ensures the cookie is only sent over HTTPS in production
      sameSite: "Lax", // Helps prevent CSRF attacks
    });

    // Send response with status 200 and JSON object
    return res
      .status(200)
      .json({ message: "Admin logged in successfully", token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
