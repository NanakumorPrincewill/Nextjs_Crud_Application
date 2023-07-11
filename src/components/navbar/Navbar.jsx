import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex container items-center mx-auto py-4 justify-between ">
      <Link href="/">
        {" "}
        <div>
          <h1 className="font-bold text-3xl text-violet-800">KURA</h1>
        </div>
      </Link>
      <div>
        <Link
          href="/create_profile"
          className="px-5 p-2 text-center bg-gray-800 rounded-full text-white "
        >
          {" "}
          Create Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
