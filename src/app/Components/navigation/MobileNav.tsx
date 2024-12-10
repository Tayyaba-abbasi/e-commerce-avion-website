"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaRegUserCircle, FaBars } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex md:hidden items-center justify-between bg-white px-4 py-3 shadow-md">
      {/* Left - Search Icon */}
      <div>
        <FaSearch className="text-xl text-zinc-800" />
      </div>

      {/* Center - Website Name */}
      <div className="text-zinc-800 text-xl font-normal font-['Clash Display']">
        Avion
      </div>

      {/* Right - Hamburger Menu */}
      <div className="flex items-center gap-4">
        <FaCartShopping className="text-xl text-zinc-800" />
        <FaRegUserCircle className="text-xl text-zinc-800" />
        <FaBars
          className="text-xl text-zinc-800 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4">
            <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/plant-pots">Plant pots</Link>
            </li>
            <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/ceramics">Ceramics</Link>
            </li>
            <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline ">
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
      )}
    </header>
  );
};

export default MobileNav;
