import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";
import Webtoon from "./models/webtoon-model.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.get("/api/top-5-webtoons", async (req, res) => {
  try {
    const top5Webtoons = await Webtoon.find().limit(5).select("-__v");

    if (!top5Webtoons) {
      return res.status(404).json({ message: "No top 5 webtoons found" });
    }

    res.status(200).json(top5Webtoons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/api/vote/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.body;

    if (!type) {
      return res.status(400).json({ message: "Type is required" });
    }

    const vote = await Webtoon.findByIdAndUpdate(id, {
      $inc: { [`votes.${type}`]: 1 },
    });

    if (!vote) {
      return res.status(404).json({ message: "Vote not found" });
    }

    await vote.save();

    const updatedWebtoon = await Webtoon.find().select("-__v");

    res.status(200).json(updatedWebtoon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on port ${port}`);
});
