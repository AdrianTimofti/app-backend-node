import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Backend running!"));

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));