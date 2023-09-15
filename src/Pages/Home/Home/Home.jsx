/** @format */

import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Bistro | Home </title>
      </Helmet>
      <div className='max-w-screen-xl mx-auto'>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
