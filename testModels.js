import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Team from "./models/Team.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function test() {
  try {
    const team = await Team.create({ name: "FC Test", country: "RO" });
    console.log("✅ Team created:", team);

    const user = await User.create({ username: "adrian", email: "a@test.com", password: "123456" });
    console.log("✅ User created:", user);

    console.log("All models work correctly!");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

test();
