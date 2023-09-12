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

      <div className='md:flex justify-center bg-slate-500 bg-opacity-40 items-center pt-12 pb-20 px-36'>
        <img className='w-[550px]' src={img} alt='' />
        <div className='md:ml-10'>
          <p>Aug 20 , 2024</p>
          <p className='uppercase'>Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            expedita ut repellendus nostrum temporibus! Saepe rerum consectetur
            expedita blanditiis aspernatur accusantium laboriosam, unde alias
            possimus perspiciatis beatae nulla, quod repellendus minima quae ea
            nesciunt rem aut quam quibusdam vero porro quisquam! Repellendus
            veniam dolores vero voluptatibus repellat praesentium earum beatae.
          </p>
          <button className='btn btn-outline border-0 border-b-4 mt-4'>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
