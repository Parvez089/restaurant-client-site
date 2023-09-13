/** @format */

const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <section className='mt-8 '>
      <div className='flex  space-x-2'>
        <img
          style={{ borderRadius: " 0 200px 200px 200px" }}
          className='w-[100px]'
          src={image}
          alt=''
        />
        <div>
          <h3 className='uppercase font-bold'>{name}</h3>
          <p>{recipe}</p>
        </div>
        <p className='text-[#CD9003] font-bold'>${price}</p>
      </div>
    </section>
  );
};

export default MenuItem;
