import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import adminRoute from "./routes/admin.route.js";

//App Configuration
const app = express();
dotenv.config();

// DB connection 
mongoose.set("strictQuery", true);
const connect = async () => {
    try {
        // console.log(process.env.MONGO_URL)
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to mongoDB!");
    } catch (error) {
        console.log(error);
    }
};

// Cors Middleware
app.use(
    cors({
        origin:
            [
                "http://localhost:3000",
                "http://localhost:3001",
                "http://localhost:4000",
            ],
        credentials: true
    })
);
// JSON Format
app.use(express.json());

//Cookie Parser For JWT
app.use(cookieParser());

// API Request Response Logger
app.use(morgan("tiny"));

// Image / File Upload Path 
app.use("/uploads", express.static("./uploads"))

//Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);

//Error Handler
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).send(errorMessage);
});


//Port and Connection
app.listen(8800, () => {
    connect();
    console.log("Backend server is running!");
});