const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    console.log('no token provided')
    return res.status(401).json({ error: "access denied. No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.userId;
   
    next();
  } catch (err) { 
    console.log("token verification error");
    return res.status(400).json({ error: "Invalid token" });
  }
};



module.exports = verifyToken;