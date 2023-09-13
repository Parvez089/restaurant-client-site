/** @format */

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
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
          <button className='btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
