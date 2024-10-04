import React, { useEffect, useState,createContext } from 'react'
import {FaFilter} from "react-icons/fa"
import Cards from '../../components/Cards';
import filtereditem from "../../assets/Products"


export const Theallitems=createContext()
const Products = () => {
   const [product,setproduct]=useState([]);
   const [filteredItem,setfilteredItem]=useState([]);
   const [selectCategory,setselectCategory]=useState("all");
   const [sortOption,setsortOption]=useState("default");
   useEffect(()=>{
      setfilteredItem(filtereditem)
      setproduct(filtereditem)
   },[])
   
   //filtering items
   const filteredItems=(category)=>{
      const filtered=category=="all"?(product):product.filter((items)=>(items.category===category));
      setfilteredItem(filtered);
      setselectCategory(category);

   }
   const showAll=()=>{
      setfilteredItem(product);
      setselectCategory("all")
   }
   //sorting
   const handleSortChange=(option)=>{
      setsortOption(option); ;
      //logic for sorting
      let sortedItems=[...filteredItem];
      switch(option)
      {
         case "A-Z":
            sortedItems.sort((a,b)=>a.title.localeCompare(b.title));
            break;
         case "Z-A":
            sortedItems.sort((a,b)=>b.title.localeCompare(a.title));
            break;
         case "low-to-high":
            sortedItems.sort((a,b)=> a.price-b.price)
            break;
         case "high-to-low":
               sortedItems.sort((a,b)=> b.price-a.price)
               break;
         default:
                break;

      }

      setfilteredItem(sortedItems)
   }

  
  return (
    <div className='max-w-screen-2xl mx-auto xl:px-28 px-4 md=12'>
     <h2 className='title'>Or suscribe To the Newsletter</h2>
     {/* product cards*/}
     <div>
     <div className='flex flex-col md:flex-row flex-wrap md: justify-between items-center space-y-3 mb-3'>
        {/* all btn*/}
     <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
        <button onClick={showAll}>All Products</button>
        <button onClick={()=>filteredItems("Dresses")}>Clothing</button>
        <button onClick={()=>filteredItems("Hoodies")}>Hoodies</button>
        <button onClick={()=>filteredItems("Bag")}>Bag</button>
     </div> 
     {/* sorting options*/}
     <div className='flex justify-end mb-4  rounded-sm'>
        <div className='bg-black p-2'> 
        <FaFilter className='text-white h-4 w-4'/>
        </div>
        <select id="sort" onChange={(e)=>handleSortChange(e.target.value) } value={sortOption} className='bg-black text-white px-2 py-1 rounded'>
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
        </select>
     </div>
    </div> 
    <Cards filtereditem={filteredItem}/>

    </div>
    

    </div>
  )
}

export default Products;