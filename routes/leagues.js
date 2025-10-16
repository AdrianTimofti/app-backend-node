import express from "express";
import League from "../models/League.js"; // model MongoDB
import authMiddleware from "../middleware/authMiddleware.js"; // optional, dacă vrei să protejezi

const router = express.Router();

// GET /leagues (public)
router.get("/", async (req, res) => {
  try {
    const leagues = await League.find(); // returnează toate ligile
    res.status(200).json(leagues);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
