require("dotenv").config(); // Load environment variables at the very top
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const propertyRoute = require("./routes/propertyRoute");

// dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

// connect database here

connectDatabase();
async function connectDatabase() {
  try {
    await mongoose.connect(process.env.DB_URI);

    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
}


// user route here
app.use('/api/auth',authRoute);

// property route here 

app.use('/api/properties',propertyRoute);

app.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`);
});
