import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import filtereditem from "../../assets/Products";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";


const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Initialize as null, not an array

  useEffect(() => {
    const foundProduct = filtereditem.find((item) => item.id == id); // Find the product by id
    setProduct(foundProduct); // Set the found product
    window.scrollTo({top:0,behavior:"smooth"})
  }, [id]);

 
  if (!product) {
    return <div>Loading...</div>; // You can also handle "Product not found" if needed
  }

  const { title, category, price, image, status } = product; // Destructure product

  return (
    <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
      <div className='p-3 max-w-7xl m-auto'>
        <div className='mt-5'>
          <Link to="/" className='text-gray-600'>Home</Link>
          <Link to="/shop" className='font-bold text-black'>/Shop</Link>
        </div>
        <div className='mt-2 sm:mt-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
            {/* Product Image */}
            <div>
              <img src={image} alt={title} className='w-full' />
            </div>
            {/* Product Details */}
            <div> 
               <h1 className='title text-left'>{title}</h1>
               <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4'>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deleniti assumenda est quas perferendis expedita placeat! Excepturi, dolor animi possimus nemo laboriosam laudantium nam. Placeat, iure. Soluta velit odit dicta?
                 Distinctio ea, nulla ut fuga libero officiis? Quas earum magnam quod a necessitatibus non quisquam aliquid, dolorem voluptas quia vero soluta cum laborum iusto obcaecati dolorum ipsam cupiditate quaerat optio.
               </p>
               <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
               </span>
               <p className='text-xl text-red-500 font-semibold sm:text-2xl'>${price}</p>
               <div className='mt-4'>
              <div className='text-left flex flex-col gap-2 w-full'>
                <label className='font-semibold'>Quantity</label>
                <input type="number" name='price' id='price' defaultValue={1} className='border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 focus:border-red-500'/>
              <div className='w-full text-left my-4'>
                <button className='flex justify-center items-center  gap-2 w-full py-3 px-3 bg-red-500 text-white font-bold border-red-500 rounded-md ease-in-out
                duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6'><span>Confrim order</span><FaArrowAltCircleRight/></button>
              </div>
                </div>
            </div>
            </div>
            
          </div>
        </div> 
        <div className='text-Black/75 mt-12'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos maiores quas ipsum temporibus. Nulla maiores nesciunt, velit quo, hic nam voluptate sit, totam ut incidunt dolores eius minus rem labore!
          Porro doloremque minus quibusdam earum omnis, esse quo eius cum aperiam atque fuga amet molestias architecto nam. Officia, aliquid cum quaerat aliquam est et, voluptate fugiat officiis inventore porro assumenda?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos maiores quas ipsum temporibus. Nulla maiores nesciunt, velit quo, hic nam voluptate sit, totam ut incidunt dolores eius minus rem labore!
          Porro doloremque minus quibusdam earum omnis, esse quo eius cum aperiam atque fuga amet molestias architecto nam. Officia, aliquid cum quaerat aliquam est et, voluptate fugiat officiis inventore porro assumenda?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos maiores quas ipsum temporibus. Nulla maiores nesciunt, velit quo, hic nam voluptate sit, totam ut incidunt dolores eius minus rem labore!
          Porro doloremque minus quibusdam earum omnis, esse quo eius cum aperiam atque fuga amet molestias architecto nam. Officia, aliquid cum quaerat aliquam est et, voluptate fugiat officiis inventore porro assumenda?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos maiores quas ipsum temporibus. Nulla maiores nesciunt, velit quo, hic nam voluptate sit, totam ut incidunt dolores eius minus rem labore!
          Porro doloremque minus quibusdam earum omnis, esse quo eius cum aperiam atque fuga amet molestias architecto nam. Officia, aliquid cum quaerat aliquam est et, voluptate fugiat officiis inventore porro assumenda?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos maiores quas ipsum temporibus. Nulla maiores nesciunt, velit quo, hic nam voluptate sit, totam ut incidunt dolores eius minus rem labore!
          Porro doloremque minus quibusdam earum omnis, esse quo eius cum aperiam atque fuga amet molestias architecto nam. Officia, aliquid cum quaerat aliquam est et, voluptate fugiat officiis inventore porro assumenda?</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
