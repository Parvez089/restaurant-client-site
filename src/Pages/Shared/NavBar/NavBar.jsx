/** @format */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li className='hover:bg-white'>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/menu' className='text:hover-'>
          Our Menu
        </Link>
      </li>
      <li>
        <Link to='/order/salad' className='hover:bg-white'>
          Order
        </Link>
      </li>
      <li>
        <Link to='/secret' className='hover:bg-white'>
          Secret
        </Link>
      </li>
      <li>
        <Link to='/' className='mt-0'>
          <button className='btn gap-2'>
            <FaShoppingCart></FaShoppingCart>
            <div className='badge badge-secondary'>+99</div>
          </button>
        </Link>
      </li>
      <li>
        {user ? (
          <>
            <button onClick={handleLogOut} className='btn  '>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to='/login' className='hover:bg-white !max-w-full'>
              Login
            </Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <div className='navbar fixed z-10 bg-opacity-40 bg-black  max-w-screen-xl lg:md:text-white sm:text-black'>
      {/* for mobile design */}
      <div className='navbar-start text-white'>
        <div className='dropdown '>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 '>
            {navOptions}
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-xl'>Bistro Boss</a>
      </div>

      {/* for large device design */}
      <div className='navbar-center lg:md:justify-center lg:md:items-center hidden lg:md:flex'>
        <ul className='menu menu-horizontal   px-1'>{navOptions}</ul>
      </div>
      <div className='navbar-end '>{/* <a className='btn '>Button</a> */}</div>
    </div>
  );
};

export default NavBar;
