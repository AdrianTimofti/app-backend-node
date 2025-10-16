import mongoose from "mongoose";

const LeagueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String },
  season: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("League", LeagueSchema);
