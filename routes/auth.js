import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// POST /auth/signup
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // 1. Verificare dacă email sau username există
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // 2. Criptare parolă
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Creare user
    const user = await User.create({
      username,
      email,
      password: hashedPassword
    });

    // 4. Generare token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // 5. Răspuns client
    res.status(201).json({ user: { id: user._id, username, email }, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
