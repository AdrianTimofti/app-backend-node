import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  sport: String,
  league: String,
  team1: String,
  team2: String,
  ora_start: String,
  tips: String,
  odd: Number,
  result: String,
  win: { type: Number, enum: [0, 1], default: 0 }
}, { _id: false });

const ticketSchema = new mongoose.Schema({
  tip_ticket: { type: String, enum: ['free', 'register', 'premium'], required: true },
  date: { type: Date, default: Date.now },
  matches: [matchSchema],
  total_odd: Number,
  money_bit: Number,
  win_ticket: { type: Boolean, default: false },
  total_money_win: Number,
  bank_money: Number,
  code_ticket: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.model('Ticket', ticketSchema);
