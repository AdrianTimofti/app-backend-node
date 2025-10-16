import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /matches (endpoint privat)
router.get("/", authMiddleware, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});

export default router;
