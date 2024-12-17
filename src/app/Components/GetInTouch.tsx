import Image from 'next/image'
import React from 'react'

const GetInTouch = () => {
  return (
    <>
      <section className="container px-5 mx-auto">
        <div className="py-12 text-[#2A254B] mt-12">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[720px] h-auto px-4 md:px-12 py-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-2xl text-indigo-950 font-[clash-display]">
                  From a studio in London to a global brand with <br /> over 400 outlets
                </h2>
                <p className="py-6 text-lg md:text-xl text-slate-600 font-[satoshi]">
                  When we started Avion, the idea was simple. Make high-quality furniture <br />
                  affordable and available for the mass market.
                </p>
                <h1 className="text-base md:text-lg">
                  Handmade and lovingly crafted furniture and homeware is what we live, <br />
                  breathe, and design, so our Chelsea boutique became the hotbed for the <br />
                  London interior design community.
                </h1>
              </div>
              <div className="my-10">
                <button className="bg-stone-50 border hover:bg-stone-400 py-4 px-4 rounded-[5px] text-indigo-950 font-[satoshi]">
                  Get in touch
                </button>
              </div>
            </div>

            <div className="w-full md:w-[890px] h-auto">
              <Image
                src={'/images/blend.png'}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GetInTouch;
