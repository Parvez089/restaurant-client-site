/** @format */

import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <section className='mb-12 '>
      <SectionTitle
        subHeading={"Popular Items"}
        heading='From Our Menu'></SectionTitle>

      <div className='lg:md:grid lg:md:grid-cols-2 gap-5  lg:md:gap-10'>
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button
        className='btn btn-outline border-0 text-center
      border-b-4 mt-4'>
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
