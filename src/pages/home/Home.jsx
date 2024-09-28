import React, { useEffect } from 'react';
import Banner from './Banner';
import Category from './Category';
import Products from './Products';
import Collections from './Collections';
import BestSellers from './BestSellers';
import SingleProduct from './SingleProduct';
import NewLetters from './NewLetters';
import Footer from './Footer';



const Home = () => {
   
    const [count,setCount]=(0);
  useEffect(() => {
   
    setCount((prev) => prev + 1);
    localStorage.setItem('user', JSON.stringify(count));
    let val = JSON.parse(localStorage.getItem('user'));
    console.log('count', val);
  }, [ ]);
  return (
    <>
    <Banner/>
    <Category/>
    <Products/>
    <Collections/>
    <BestSellers/>
    <SingleProduct/>
    <NewLetters/>
    <Footer/>
    </>
  );
}

export default Home;
