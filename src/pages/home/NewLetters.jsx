import React from 'react'
import {Link} from "react-router-dom"

const NewLetters = () => {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16'>
    <h2 className='title mb-8'>Follow products and discounts on instagram</h2>
    {/*insta grid*/}
    <div className='flex flex-wrap gap-4 items-center justify-center mb-20'>
        <Link to="/">
        <img src="/card (6).png" alt="" />
        </Link>
        <Link to="/">
        <img src="/card (7).png" alt="" />
        </Link>
        <Link to="/">
        <img src="/card (8).png" alt="" />
        </Link>
        <Link to="/">
        <img src="/06.png" alt="" />
        </Link>
        <Link to="/">
        <img src="/card (9).png" alt="" />
        </Link>
        <Link to="/">
        <img src="/card (10).png" alt="" />
        </Link>
    </div>
    {/*newsletters*/}
    <div>
        <h2 className='title-mb-8'>Or suscribe to the newsLetter</h2>
        <form className='md:w-1/2 mx-auto text-center'>
            <input type="email" name="email" id="email" placeholder='Email address...' className='h-8 bg-transparent
             outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4'/>
             <input type="submit" value={"submit"} className='bg-black text-white px-6 py-1 rounded-sm' />
        </form>
    </div>
    </div>
  )
}

export default NewLetters