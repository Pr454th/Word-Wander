import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Post from "@/models/post";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connectDB();
    console.log("connected to db");
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("error", { status: 500 });
  }
  return new NextResponse("it works", { status: 200 });
};

export const POST = async (request) => {
  const { username, title, img, content, desc } = await request.json();
  try {
    await connectDB();
    console.log("connected to db");
    const newPost = new Post({ username, img, title, content, desc });
    await newPost.save();
    return new NextResponse(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new NextResponse("error", { status: 500 });
  }
};
