"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfileForm({
  id,
  first_name,
  last_name,
  email,
  phone_number,
  country,
  address,
  state,
  city,
  zipcode,
}) {
  const [newFirst_name, setNewFirst_name] = useState(first_name);
  const [newLast_name, setNewLast_name] = useState(last_name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone_number, setNewPhone_number] = useState(phone_number);
  const [newCountry, setNewCountry] = useState(country);
  const [newAddress, setNewAddress] = useState(address);
  const [newState, setNewState] = useState(state);
  const [newCity, setNewCity] = useState(city);
  const [newZipcode, setNewZipcode] = useState(zipcode);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/profiles/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newFirst_name,
          newLast_name,
          newEmail,
          newPhone_number,
          newCountry,
          newAddress,
          newState,
          newCity,
          newZipcode,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Profile");
      }
      toast.success("Profile Updated successfully");
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1 className="p-3 text-4xl text-center">
          Profile Detail of {first_name} {last_name}
        </h1>
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
                onChange={(e) => setNewFirst_name(e.target.value)}
                value={newFirst_name}
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
                onChange={(e) => setNewLast_name(e.target.value)}
                value={newLast_name}
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
                onChange={(e) => setNewEmail(e.target.value)}
                value={newEmail}
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
                onChange={(e) => setNewPhone_number(e.target.value)}
                value={newPhone_number}
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
                onChange={(e) => setNewCountry(e.target.value)}
                value={newCountry}
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
                onChange={(e) => setNewAddress(e.target.value)}
                value={newAddress}
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
                onChange={(e) => setNewState(e.target.value)}
                value={newState}
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
                onChange={(e) => setNewCity(e.target.value)}
                value={newCity}
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
                onChange={(e) => setNewZipcode(e.target.value)}
                value={newZipcode}
              />
            </div>
          </div>
          <div className="flex justify-center md:m-5">
            <button type="submit" className="px-6 py-3 bg-green-600 rounded ">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
