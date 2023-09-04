import express from "express";
import {
    testRoute, getTest
} from "../controllers/admin.controller.js";



const router = express.Router();

// -------------- Admin APIs ---------------
// Create
router.post("/test", testRoute)
// get
router.get("/test", getTest)



export default router;