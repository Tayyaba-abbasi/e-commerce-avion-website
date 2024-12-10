import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import { FaSearch, FaRegUserCircle, } from 'react-icons/fa';
import {  FaCartShopping } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className="hidden md:flex flex-col bg-white container px-5 mx-auto ">
      {/* Top Section */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left - Search Icon */}
        <div className="flex items-center">
          <FaSearch className="text-xl text-zinc-800" />
        </div>
        <div className="text-zinc-800 text-2xl font-normal font-['Clash Display']">
          Avion
        </div>
        <div className="flex items-center gap-4">
          <FaRegUserCircle className="text-xl text-zinc-800" />
          <FaCartShopping className="text-xl text-zinc-800" />
        </div>
      </div>
      <div className="w-full h-px border border-black/10"></div>

      {/* Bottom Section - Navbar Links */}
      <ul className="flex justify-center items-center gap-6 mt-2">
        {/* Navigation Links */}
        <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/plant-pots">Plant pots</Link>
            </li>
            <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/ceramics">Ceramics</Link>
            </li>
            <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/tables">Tables</Link>
            </li>
            <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/chairs">Chairs</Link>
            </li>
            <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/crockery">Crockery</Link>
            </li>
            <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/table-ware">Table ware</Link>
            </li>
            <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/cutlery">Cutlery</Link>
            </li>
      </ul>
    </header>
  );
};

export default Header;
