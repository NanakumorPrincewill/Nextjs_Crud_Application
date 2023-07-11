"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CreateProfile = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !first_name ||
      !last_name ||
      !email ||
      !phone_number ||
      !country ||
      !address ||
      !city ||
      !state ||
      !zipcode
    ) {
      alert("All fields are required");
      return;
    }
    try {
      const res = await fetch("/api/profiles", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          phone_number,
          country,
          address,
          state,
          city,
          zipcode,
        }),
      });

      if (res.ok) {
        router.refresh();
        toast.success("Profile created successfully");
        router.push("/");
      } else {
        throw new Error("Failed to create a Profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div>
        <h1 className="p-3 text-4xl text-center">Create Profile</h1>
      </div>
      <div className="container flex justify-center p-2 mx-auto mt-5">
        <form
          onSubmit={handleSubmit}
          className="w-full p-4 border border-gray-700 rounded max-w-7xl"
        >
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                First Name
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="John"
                onChange={(e) => setFirst_name(e.target.value)}
                value={first_name}
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                Last Name
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                onChange={(e) => setLast_name(e.target.value)}
                value={last_name}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                Email
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="Johndoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                Phone no
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-phoneNo"
                type="number"
                placeholder="+44042455454"
                onChange={(e) => setPhone_number(e.target.value)}
                value={phone_number}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                Country
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="country"
                placeholder="Canada"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                Address
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-address"
                type="address"
                placeholder="No 12 columns ave"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-2 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                State
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Ontario"
                onChange={(e) => setState(e.target.value)}
                value={state}
              />
            </div>
            <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                City
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Toronto"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>
            <div className="w-full px-3 mb-4 md:w-1/3 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                Zip Code
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="90210"
                onChange={(e) => setZipcode(e.target.value)}
                value={zipcode}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="px-6 py-3 bg-green-600 rounded ">
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateProfile;
