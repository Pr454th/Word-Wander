import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Post from "@/models/post";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    await connectDB();
    console.log("connected to db");
    const post = await Post.findOne({ _id: id });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("error", { status: 500 });
  }
  return new NextResponse("it works", { status: 200 });
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    await connectDB();
    await Post.findByIdAndDelete(id);
    return new NextResponse(
      JSON.stringify({ message: "Post deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse("error", { status: 500 });
  }
};
