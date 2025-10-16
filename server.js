import express from "express";
import mongoose from 'mongoose';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // citește .env

const app = express();
const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => res.send('Backend running!'));

app.listen(port, () => console.log(`Server running on port ${port}`));

