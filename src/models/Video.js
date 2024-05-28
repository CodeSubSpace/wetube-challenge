import mongoose from "mongoose";

const YOUR_USERNAME = "codeSubSpace";

const VideoSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String },
});