
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import filtereditem from "../../assets/Products"
import { Link } from 'react-router-dom';

const BestSellers = () => {
    const [products ,setproducts]=useState([]);
    useEffect(()=>{
        
        setproducts(filtereditem);

    },[])
    const bestSeller=products.filter((item)=>item.status==="Best Sellers")
    
   
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28px-4'>
        <div>
            <h2 className='title'>Best Seller</h2>
            <p className='text-Black/75 capitilize md:w-2/3 mx-auto mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cupiditate hic sint nesciunt eaque impedit ut recusandae! Quo dicta consectetur ipsam qui molestiae! Distinctio, est enim cupiditate tempora vel dignissimos?
            Dolorem reiciendis nulla repellendus nostrum, ea, recusandae laborum consequuntur ipsum deleniti nesciunt dolor accusantium ab ex officiis distinctio neque sapiente quaerat et magni harum autem totam necessitatibus ullam. Eius, sit.</p>
        </div>
         {/*best seller products*/}
         <div className='mb-16'>
         <Swiper
         slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            bestSeller.map((item)=>( 
                <SwiperSlide key={item.id} >
                     <Link to={`/shop/${item.id}`}>
            <img src={item.image} alt="" className='mx-auto w-full hover:scale-105 transition-all duration-300 ' />
            </Link>
            <div className='mt-4 px-4'>
                <h4 className='text-base font-semibold mb-2'>{item.title}</h4>
             <div className='flex justify-between'>
                <p className='text-black/50'>{item.category}</p>
                <p className='font-semibold'>${item.price}</p>
             </div>
            </div>
                </SwiperSlide>

            ))
        }
        
        
      </Swiper>
         </div>

    </div>
  )
}

export default BestSellers