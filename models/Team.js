import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  logo: { type: String },
  country: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Team", TeamSchema);
