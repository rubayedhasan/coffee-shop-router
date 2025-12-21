import { Outlet } from "react-router";
import Banner from "../components/Banner";
import CategoryTab from "../components/CategoryTab";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <>
      {/* banner section component:: Banner  */}
      <Banner />

      {/* heading section component:: Heading */}
      <Heading
        title="Browse Coffee By Categories"
        subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste"
      />

      {/* dynamic category tab component:: CategoryTab */}
      <CategoryTab />

      {/* dynamic cards base on the selection tab  */}
      <Outlet />
    </>
  );
};

export default Home;
