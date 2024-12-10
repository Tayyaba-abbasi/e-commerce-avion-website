/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="container px-5 mx-auto">
      <div className="px-4 py-8 md:px-8 md:py-12">
        <div className="flex flex-col md:flex-row">
          {/* Text Section */}
          <div className="w-full md:w-[60%] h-auto border border-black bg-[#2A254B] text-white px-6 md:px-12 py-8 md:py-12 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold md:text-4xl mb-6">
                The furniture brand for the future with <br className="hidden md:block" />
                timeless designs
              </h1>
              <div className="flex justify-center md:justify-start">
                <button className="w-[170px] h-[56px] text-white border bg-stone-50/20 font-medium mt-8">
                  View Collection
                </button>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-sm md:text-base">
                A new era in eco-friendly furniture with Avion, the French luxury retail brand
                <br className="hidden md:block" /> with sleek fonts, full colors, and a beautiful way to display things
                <br className="hidden md:block" /> using modern web technologies.
              </p>
            </div>
          </div>

          
          <div className="hidden md:flex w-full md:w-[40%] h-auto md:h-[580px] bg-white justify-center items-end">
          <Image
  src="/images/Hero.png"
  width={700}
  height={500}
  alt="Hero Section"
/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
