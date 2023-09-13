/** @format */

import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className='mySwiper flex mt-16'>
      <SwiperSlide>
        <div className='grid md:grid-cols-3 justify-center items-center  gap-10'>
          {items.map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderTab;
