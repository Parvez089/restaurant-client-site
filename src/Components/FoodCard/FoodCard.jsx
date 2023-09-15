/** @format */

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      fetch("http://localhost:5000/carts")
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Added to the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className='card  lg:md:w-96 w-80 bg-base-100 shadow-xl'>
      <figure>
        <img src={image} alt='Shoes' />
      </figure>
      <p className='absolute right-0 mr-4 mt-4 px-4 rounded font-bold bg-slate-900 text-white'>
        ${price}
      </p>
      <div className='card-body flex flex-col items-center'>
        <h2 className='card-title'>{name}</h2>
        <p>{recipe}</p>
        <div className='card-actions justify-end'>
          <button
            onClick={() => handleAddToCart(item)}
            className='btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
