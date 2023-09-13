/** @format */

import SectionTitle from "../../../Components/SectionTitle";
import img from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className='featured-item bg-fixed text-white pt-8 my-20'>
      <SectionTitle
        subHeading={"check it out"}
        heading={"Featured Item"}></SectionTitle>

      <div className='flex justify-center items-center'>
        <div className='md:flex  justify-center items-center bg-slate-500 bg-opacity-40 pt-12 pb-20 px-36'>
          <img className='lg:md:w-[550px] ' src={img} alt='' />
          <div className='md:ml-10 w-72 h-60 '>
            <p>Aug 20 , 2024</p>
            <p className='uppercase'>Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              expedita ut repellendus nostrum temporibus! Saepe rerum
              consectetur expedita blanditiis aspernatur accusantium laboriosam,
              unde alias possimus perspiciatis beatae nulla, quod repellendus
              minima quae ea nesciunt rem aut quam quibusdam vero porro
              quisquam! Repellendus veniam dolores vero voluptatibus repellat
              praesentium earum beatae.
            </p>
            <button
              className='btn btn-outline border-0 text-center
      border-b-4 mt-4'>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
