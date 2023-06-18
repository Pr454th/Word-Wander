import User from "@/models/user";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await connectDB();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await user.save();
    return new NextResponse(JSON.stringify({ message: "User created" }), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
};
