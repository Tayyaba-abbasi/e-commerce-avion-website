import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import { FaSearch, FaRegUserCircle, } from 'react-icons/fa';
import {  FaCartShopping } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className="hidden md:flex flex-col bg-white container px-5 mx-auto sticky top-0 z-10 ">
      {/* Top Section */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left - Search Icon */}
        <div className="flex items-center">
          <FaSearch className="text-xl text-zinc-800" />
        </div>
        <Link href="/" className="text-zinc-800 text-2xl font-normal font-['Clash Display'] cursor-pointer">
          Avion
        </Link>
        <div className="flex items-center gap-4">
          <FaRegUserCircle className="text-xl text-zinc-800 cursor-pointer" />
          <Link href="/Cart">
            
              <FaCartShopping className="text-xl text-zinc-800 cursor-pointer" />
            
          </Link>
        </div>
      </div>
      <hr className=" border-black/10"/>

      <nav className="flex justify-center items-center mt-2">

      <ul className="text-slate-600 flex gap-6 font-normal font-['Satoshi']">
        {/* Navigation Links */}
        <li className=" hover:underline">
            <Link href="/">Plant pots</Link>
            </li>
            <li className=" hover:underline">
            <Link href={"#Ceramics"}>Ceramics</Link>
            </li>
            <li className=" hover:underline">
            <Link href="/">Tables</Link>
            </li>
            <li className="hover:underline">
            <Link href="/">Chairs</Link>
            </li>
            <li className=" hover:underline">
            <Link href="/">Crockery</Link>
            </li>
            <li className=" hover:underline">
            <Link href="/">Table ware</Link>
            </li>
            <li className=" hover:underline">
            <Link href="/">Cutlery</Link>
            </li>
      </ul>
      </nav>
    </header>
  );
};

export default Header;
