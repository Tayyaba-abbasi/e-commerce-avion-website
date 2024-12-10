'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

const PopularProducts = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/productlisting'); // Navigates to the "/about" page
  };

  return (

      <section className="container px-5 mx-auto">
        <div className='px-8 py-12 text-indigo-950 mt-12'>
          <h1 className='text-2xl font-[Clash Display]'>Our popular products</h1>

          {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
          <div className='flex flex-col md:flex-row gap-8 mt-8'>
            
            {/* Product 1 */}
            <div className='w-full md:w-[700px] h-auto group'>
              <Image
                src={'/images/Large.png'}
                height={800}
                width={800}
                alt='sofa'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              />
              <div className='mt-4 text-indigo-950'>
                <p className='font-[Clash Display] py-2'>The popular suede sofa</p>
                <p className='font-[satoshi]'>$980</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className='w-full md:w-[350px] h-auto group'>
              <Image
                src={'/images/chair.png'}
                height={800}
                width={800}
                alt='chair'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              />
              <div className='mt-4 text-indigo-950'>
                <p className='font-[Clash Display] py-2'>The Dandy chair</p>
                <p className='font-[satoshi]'>$250</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className='w-full md:w-[350px] h-auto group'>
              <Image
                src={'/images/chair1.png'}
                height={900}
                width={900}
                alt='chair'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              />
              <div className='mt-4 text-indigo-950'>
                <p className='font-[Clash Display] py-2'>The Dandy chair</p>
                <p className='font-[Satoshi]'>$250</p>
              </div>
            </div>

          </div>

          {/* View Collection Button */}
          <div className='my-10 flex justify-center items-center'>
            <button className='bg-[#F9F9F9] font-[Satoshi] py-4 px-6 rounded-[5px] text-indigo-950' onClick={handleNavigation}>
              View collection
            </button>
          </div>
        </div>
      </section>
    
  )
}

export default PopularProducts;
