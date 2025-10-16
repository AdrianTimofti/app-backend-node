import mongoose from "mongoose";

const PreferencesSchema = new mongoose.Schema({
  favoriteTeams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
  notifications: { type: Boolean, default: true },
  language: { type: String, default: "ro" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Preferences", PreferencesSchema);
