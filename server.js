import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import User from './models/User.js';
import Ticket from './models/Ticket.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// TEST ROUTE
app.get('/', (req, res) => {
  res.send('API is running...');
});

// ➕ Adăugăm un user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ➕ Adăugăm un ticket
app.post('/tickets', async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔍 Get toate biletele
app.get('/tickets', async (req, res) => {
  const tickets = await Ticket.find().populate('user');
  res.json(tickets);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
