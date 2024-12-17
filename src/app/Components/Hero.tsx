/* eslint-disable react/jsx-no-undef */
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-8">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Left Section */}
        <div className="md:w-1/2 bg-[#2A254B] text-white p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              The furniture brand for the future, <br /> with timeless designs
            </h1>
            <button className="mt-6 px-6 py-3 bg-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-black transition rounded-md">
              View Collection
            </button>
          </div>
          <p className="mt-8 text-sm md:text-base text-gray-400">
            A new era in eco-friendly furniture with Avalab, the French luxury
            retail brand with fine tones, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-[#84abab] justify-center items-center hidden md:flex">
          <Image
            src="/images/Hero.png" 
            alt="Chair"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
