import Image from 'next/image'
import React from 'react'

const Ceramics = () => {
  return (
    
      <section className="container px-5 mx-auto">
        <div className="px-4 md:px-8 py-12 text-indigo-950 mt-12">
          {/* Title */}
          <h1 className="text-2xl font-semibold  font-['Clash Display'] ">New Ceramics</h1>

          {/* Product Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {/* Product 1 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/chair.png'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-indigo-950">
                <p className="py-2  font-['Clash Display'] ">The Dendy Chair</p>
                <p className='font-[Satoshi]'>$250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/vase.png'}
                height={700}
                width={700}
                alt="vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-indigo-950">
                <p className="py-2  font-['Clash Display'] ">Rustic VaseSet</p>
                <p className='font-[Satoshi]'>$155</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/silky.png'}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-indigo-950">
                <p className="py-2  font-['Clash Display'] ">The Silky Vase</p>
                <p className='font-[Satoshi]'>$125</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/lamp.png'}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-indigo-950">
                <p className="py-2  font-['Clash Display'] ">The Lucky Lamp</p>
                <p className='font-[Satoshi]'>$399</p>
              </div>
            </div>
          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center items-center">
            <button className="bg-stone-50 border py-4 px-6 rounded-[5px] text-indigo-950  font-['Satoshi']">
              View collection
            </button>
          </div>
        </div>
      </section>
    
  )
}

export default Ceramics;
