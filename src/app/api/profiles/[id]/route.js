import connectMongoDB from "@/db/mongodb";
import Profile from "@/models/profiles";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newFirst_name: first_name,
    newLast_name: last_name,
    newEmail: email,
    newPhone_number: phone_number,
    newCountry: country,
    newAddress: address,
    newState: state,
    newCity: city,
    newZipcode: zipcode,
  } = await request.json();
  await connectMongoDB();
  await Profile.findByIdAndUpdate(id, {
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
  return NextResponse.json(
    { message: "Profile Updated successfully" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const profile = await Profile.findOne({ _id: id });
  return NextResponse.json({ profile }, { status: 200 });
}
