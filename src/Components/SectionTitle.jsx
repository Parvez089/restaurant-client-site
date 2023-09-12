/** @format */

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className='lg:md:w-3/12 mx-auto text-center my-8'>
      <p className='text-yellow-500 font-bold mb-2'>---{subHeading}---</p>
      <h3 className='text-3xl uppercase  border-y-2 py-4'>{heading}</h3>
    </div>
  );
};

export default SectionTitle;
