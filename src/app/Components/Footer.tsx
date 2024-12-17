/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white bg-indigo-950 body-font mt-9">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap justify-between md:text-left text-center cursor-pointer">
          {/* Menu Section */}
          <div className="w-full md:w-1/4 sm:w-1/2 mb-6">
            <h2 className="font-medium text-white tracking-widest text-lg mb-4">Menu</h2>
            <ul className="list-none space-y-2">
              <li><a className="text-white hover:underline">New arrivals</a></li>
              <li><a className="text-white hover:underline">Best sellers</a></li>
              <li><a className="text-white hover:underline">Recently viewed</a></li>
              <li><a className="text-white hover:underline">Popular this week</a></li>
              <li><a className="text-white hover:underline">All products</a></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="w-full md:w-1/4 sm:w-1/2 mb-6">
            <h2 className="font-medium text-white tracking-widest text-lg mb-4">Categories</h2>
            <ul className="list-none space-y-2">
              <li><a className="text-white hover:underline">Crockery</a></li>
              <li><a className="text-white hover:underline">Furniture</a></li>
              <li><a className="text-white hover:underline">Homeware</a></li>
              <li><a className="text-white hover:underline">Plant pots</a></li>
              <li><a className="text-white hover:underline">Chairs</a></li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div className="w-full md:w-1/4 sm:w-1/2 mb-6">
            <h2 className="font-medium text-white tracking-widest text-lg mb-4">Our Company</h2>
            <ul className="list-none space-y-2">
              <li><a className="text-white hover:underline">About us</a></li>
              <li><a className="text-white hover:underline">Vacancies</a></li>
              <li><a className="text-white hover:underline">Contact us</a></li>
              <li><a className="text-white hover:underline">Privacy</a></li>
              <li><a className="text-white hover:underline">Returns policy</a></li>
            </ul>
          </div>

          {/* Join Our Mailing List Section */}
          <div className="w-full md:w-1/4 sm:w-1/2 mb-6">
            <h2 className="font-medium text-white tracking-widest text-lg mb-4">Join our mailing list</h2>
            <div className="flex flex-col items-center sm:items-start">
              <input
                type="text"
                placeholder="Send your email"
                className="w-full bg-white/20 font-[satoshi] rounded border border-gray-300 text-indigo-950 py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="w-full sm:w-auto bg-white hover:bg-indigo-600 text-indigo-950 hover:text-white font-[satoshi] py-2 px-6 rounded">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-6 border-indigo-700" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>Copyright 2022 Avion LTD</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <FaLinkedin className="w-5 h-5" />
            <FaFacebookSquare className="w-5 h-5" />
            <FaSkype className="w-5 h-5" />
            <FaTwitter className="w-5 h-5" />
            <FaPinterest className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
