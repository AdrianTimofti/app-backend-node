import mongoose from "mongoose";

const PredictionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  match: { type: mongoose.Schema.Types.ObjectId, ref: "Match", required: true },
  predictedHome: { type: Number, required: true },
  predictedAway: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Prediction", PredictionSchema);
