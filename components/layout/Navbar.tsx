import Link from "next/link";
import React from "react";

// This is not being used for now
const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6-md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className=" text-white">
                Home
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">

                <Link href="project" className="text-white hover:bg-white hover:text-black rounded-md px-6 py-2">Projects</Link>

                <Link href="/users" className="text-white hover:bg-white hover:text-black rounded-md px-6 py-2">Qualification</Link>
                <Link href="/users" className="text-white hover:bg-white hover:text-black rounded-md px-6 py-2">Contact</Link>
                <Link href="/users" className="text-white hover:bg-white hover:text-black rounded-md px-6 py-2">About</Link>
            </div>
        </div>
        </div>    
      </div>
    </nav>
  );
};

export default Navbar;