import connectMongoDB from "@/db/mongodb";
import Profile from "@/models/profiles";
import { NextResponse } from "next/server";

// POST METHOD

export async function POST(request) {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    country,
    address,
    state,
    city,
    zipcode,
  } = await request.json();
  await connectMongoDB();
  await Profile.create({
    first_name,
    last_name,
    email,
    phone_number,
    country,
    address,
    state,
    city,
    zipcode,
  });
  return NextResponse.json({ message: "Profile Created" }, { status: 201 });
}

// GET METHOD
export async function GET() {
  await connectMongoDB();
  const profile = await Profile.find();
  return NextResponse.json({ profile });
}

// DELETE METHOD

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Profile.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Profile deleted successfully" },
    { status: 200 }
  );
}
