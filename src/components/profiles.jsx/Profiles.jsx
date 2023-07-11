import React from "react";
import Link from "next/link";
import RemoveBtn from "../removeBtn/RemoveBtn";

const getProfiles = async () => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/profiles`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Profiles");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading Profiles: ", error);
  }
};

const Profiles = async () => {
  const { profile } = await getProfiles();
  return (
    <div>
      <h1 className="p-5 text-5xl font-bold text-center"> Profile List</h1>
      <table className="container items-center w-full mx-auto mt-4 text-center rounded-xl">
        <thead className="bg-green-300 ">
          <tr className="">
            <th className="px-6 py-6 ">Id</th>
            <th className="px-6 py-6 ">Name</th>
            <th className="px-6 py-6 ">Email</th>
            <th className="px-6 py-6 ">Phone no</th>
            <th className="px-6 py-6 ">Operations</th>
          </tr>
        </thead>
        {profile.map((profile) => (
          <tbody className="p-2 bg-slate-300" key={profile.id}>
            <tr className="">
              <th className="px-2 py-2 ">{profile.id}</th>
              <td className="px-2 py-2 ">
                {profile.first_name}
                {""} {profile.last_name}
              </td>
              <td className="px-2 py-2 ">{profile.email}</td>
              <td className="px-2 py-2 ">+{profile.phone_number}</td>
              <th className="px-2 py-2 ">
                <div className="flex items-center justify-center">
                  <Link
                    href={`/update_profile/${profile._id}`}
                    className="px-5 py-2 mx-1 bg-yellow-400 rounded-lg"
                  >
                    {" "}
                    Update
                  </Link>
                  <RemoveBtn id={profile._id} />
                </div>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Profiles;
