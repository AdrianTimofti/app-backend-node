import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema({
  league: { type: mongoose.Schema.Types.ObjectId, ref: "League", required: true },
  homeTeam: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
  awayTeam: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
  date: { type: Date, required: true },
  scoreHome: { type: Number },
  scoreAway: { type: Number },
  status: { type: String, enum: ["upcoming", "live", "finished"], default: "upcoming" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Match", MatchSchema);
