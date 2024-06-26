const bcrypt = require("bcrypt");
const UserModel = require("../models/userModel");

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username already exists
    let user = await UserModel.findOne({ username });
    if (user) {
        return res.status(400).json({ msg: "Username already exists" });
      }
    // Create new user instance

    // Hash password
    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = new UserModel({
      username,
      password: hashedPassword,
    });

    // save the user into the database

    const savedUser = await newUser.save();
    console.log("admin user saved", savedUser);

    res.status(201).json({ msg: "Admin user created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = register;
