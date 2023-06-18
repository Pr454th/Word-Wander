import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
