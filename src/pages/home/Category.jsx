import React from 'react'
import { Link } from 'react-router-dom'
const companyLogo=[
    {
        id:5,
        img:"./05.png"
    },
    {
        id:1,
        img:"./01.png"
    },
    {
        id:2,
        img:"./02.png"
    },
    {
        id:3,
        img:"./03.png"
    },
    {
        id:4,
        img:"./04.png"
    }
    
]
const Category = () => {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto flex gap-8 container xl:px-28 px-4 py-28'>
    <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
    { 
        companyLogo.map(({id,img})=>{
            return(<div key={id}><img src={img} alt="" /></div>)
           })
       
    }
    
    </div>
    </div>

    <div>
    <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
            <p className='font-semibold uppercase md:rotate-90 text-center bg-black text-white md:p-1.5 p-2 
            rounded-sm inline-flex'>Explore new and popular styles</p>
            
            <div>
                <Link to="/"><img src="/card.png" alt="" className='w-full hover:scale-105 transition-all duration-200'></img></Link>
            </div>
            <div className='md:w1-/2'>
            <div className='grid grid-cols-2 gap-2'>
            <Link to="/"><img src="/card (1).png" alt=""className='w-full hover:scale-105 transition-all duration-200'></img></Link>
            <Link to="/"><img src="/card (2).png" alt=""className='w-full hover:scale-105 transition-all duration-200'></img></Link>
            <Link to="/"><img src="/card (3).png" alt=""className='w-full hover:scale-105 transition-all duration-200'></img></Link>
            <Link to="/"><img src="/card (4).png" alt=""className='w-full hover:scale-105 transition-all duration-200'></img></Link>
            </div>

            </div>
        </div>
    </div>
    

    </>
)
}

export default Category