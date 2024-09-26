import React, { useState } from 'react';
import { FaSearch,FaTimes, FaUser,FaBars, FaShoppingBag } from "react-icons/fa";
import logo from "/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const tooglemenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    const NavItems = [
        { title: "Jewelry & Accessories", path: "/" },
        { title: "Clothing & Shoes", path: "/" },
        { title: "Home & Living", path: "/" },
        { title: "Wedding & Party", path: "/" },
        { title: "Toys & Entertainment", path: "/" },
        { title: "Art & Collectibles", path: "/" },
        { title: "Craft Supplies & Tools", path: "/" }
    ];

    return (
        <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
            <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
                <FaSearch className='text-Black w-5 cursor-pointer hidden md:block' />
                {/*logo*/}
                <a href="/"><img src={logo} alt="Logo" /></a>

                <div className="text-lg text-black sm:flex items-center gap-4 hidden">
                    <a href="/" className='flex items-center gap-2'><FaUser />Account</a>
                    <a href="/" className='flex items-center gap-2'><FaShoppingBag />Shopping</a>
                </div>
                {/*navbar for small devices*/}
                <div className='sm:hidden'>
                    <button onClick={()=>tooglemenu()}>
                     {
                     isMenuOpen?<FaTimes className='w-5 h-5 text-Black'/>:  <FaBars className=' w-5 h-5 text-Black '/>
                    }
                    </button>
                   
                </div>

            </nav>
            <hr />
            {/* categatory items*/}
            <div className="menu pt-4 ">
                <ul className='lg:flex justify-between text-Black hidden '>
                    {NavItems.map(({ title, path }) => (
                        <li key={title} className='hover:text-500'>
                            <Link to={path}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* only mobile items*/}
            <div>
             
               <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen?"":"hidden"}`}>
                   {NavItems.map(({ title, path }) => (
                       <li key={title} className='hover:text-500 my-3 cursor-pointer'>
                           <Link to={path}>{title}</Link>
                       </li>
                   ))}
               </ul>
     </div>
        </header>
    );
}

export default Navbar;
