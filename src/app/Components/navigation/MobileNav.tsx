"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaSearch, FaRegUserCircle, FaBars } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Type the menuRef as a reference to a <ul> element
  const menuRef = useRef<HTMLUListElement | null>(null);

  // Function to handle clicks outside the dropdown
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="flex md:hidden items-center justify-between bg-white px-4 py-3 sticky top-0 z-10 shadow-md">
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
          onClick={() => setMenuOpen(!menuOpen)} // Toggle menu
        />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <ul
          ref={menuRef}
          className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4"
        >
          <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/">Plant pots</Link>
          </li>
          <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="#Ceramics">Ceramics</Link>
          </li>
          <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/">Tables</Link>
          </li>
          <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/">Chairs</Link>
          </li>
          <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/">Crockery</Link>
          </li>
          <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/">Table ware</Link>
          </li>
          <li className="text-slate-500 text-base font-normal font-['Satoshi'] hover:underline">
            <Link href="/">Cutlery</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default MobileNav;
