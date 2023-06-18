import connectDB from "@/utils/db";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, message } = await request.json();
  try {
    await connectDB();
    console.log("connected to db");
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    return new NextResponse(JSON.stringify(newContact), { status: 201 });
  } catch (error) {
    return new NextResponse("error", { status: 500 });
  }
};
