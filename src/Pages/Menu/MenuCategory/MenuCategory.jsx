/** @format */

import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div className='pt-4  '>
      {title && <Cover img={img} title={title}></Cover>}

      <div className='grid lg:md:grid-cols-2  gap-10 my-16'>
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`} className='flex justify-center items-center'>
        <button
          className='btn btn-outline border-0 text-center
      border-b-4 border-orange-400 bg-slate-100 mt-4'>
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
