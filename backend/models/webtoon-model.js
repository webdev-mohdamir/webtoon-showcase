import mongoose from "mongoose";

const webtoonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String },
    description: { type: String, required: true },
    writer: { type: String },
    art: { type: String },
    reads: { type: String },
    votes: {
      manhwa: { type: Number, default: 0 },
      anime: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

const Webtoon = mongoose.model("Webtoon", webtoonSchema);

export default Webtoon;
