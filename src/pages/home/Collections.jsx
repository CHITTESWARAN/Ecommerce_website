import React from 'react'
import collections from "/background.png"
import alogo from "/1024px-Zara_Logo 2.png"
const Collections = () => {
  return (
    <div className='bg-[url("/background.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-24 my-20'>
   <div className='h-[500px] flex justify-between  md:flex-row items-center'>
    <div className='md:w-1/2'></div>
    <div className='md:w-1/2'>
    <img src="/1024px-Zara_Logo 2.png" alt="" />
    <p className='text-lg text-white capitalize  my-8 md:w-2/3 leading-[32px]'>Lustrous yet understated. The new evening
     wear collection exclusively offered at the
    nreopened Giorgio Armani boutique in Los
    Angeles.</p>
    <button className='px-6 py-2 bg-white text-black rounded-sm font-semibold'>see Collection</button>
    </div>
   </div>

    </div>
  )
}

export default Collections