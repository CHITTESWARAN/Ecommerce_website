import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Products from './Products';
import Collections from './Collections';
import BestSellers from './BestSellers';
import SingleProduct from './SingleProduct';
import NewLetters from './NewLetters';
import Footer from './Footer';



const Home = () => {
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
