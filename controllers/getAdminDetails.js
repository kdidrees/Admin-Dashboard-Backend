const UserModel = require("../models/userModel");

exports.getAdminDetails = async (req, res) => {
  try {
    // Fetch user details from the database
    const user = await UserModel.findOne({ _id: req.userId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return success response with user details
    return res.json({ user, success: true });
  } catch (err) {
    console.error("Error fetching user details:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
