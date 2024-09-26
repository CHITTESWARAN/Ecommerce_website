import React from 'react'
import logo from "/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className='flex gap-4 justify-evenly mx-14 my-28; md:gap-2 mx-8 my-24'>
            <div className='flex flex-col w-1/4'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <p className='flex my-8 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci deleniti praesentium eum voluptates quam ullam nostrum eius, dolore nisi atque! Iure fugiat dolores commodi fugit ab eum animi nulla!</p>
                </div>
                <div className='flex gap-9 cursor-pointer'>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedin />
                <FaInstagram />

                </div>

            </div>
            <div>
                <div>
                    <h1 className='text-Black font-semibold mb-4'>Catlog</h1>
                </div>
               
                <div className='text-sm flex flex-col mb-4 gap-2 cursor-pointer'>
                   <p>Necklaces</p>
                   <p>hoodies</p>
                   <p>Jewelry Box</p>
                   <p>t-shirt</p>
                   <p>jacket</p>
                   
                </div>
            </div>
            <div>
            <div>
                    <h1 className='text-Black font-semibold mb-4'> ABOUT US</h1>
                </div>
               
                <div className='text-sm mb-4 flex flex-col my-2 gap-2 cursor-pointer'>
                   <p>Our Producers</p>
                   <p>Sitemap</p>
                   <p>FAQ</p>
                   <p>About Us</p>
                   <p>Terms & Conditions</p>
            </div>
            </div>
           
            
            <div>
            <div>
                    <h1 className='text-Black font-semibold flex flex-col mb-4'>CUSTOMER SERVICES</h1>
                </div>
               
                <div className='text-sm mb-4 flex flex-col my-2 gap-2 cursor-pointer'>
                   <p>Contact Us</p>
                   <p>Track Your Order</p>
                   <p>Product Care & Repair</p>
                   <p>Book an Appointment</p>
                   <p>Shipping & Returns</p>
            </div>
            </div>
            
        </div>
    </div>
  
  )
}

export default Footer