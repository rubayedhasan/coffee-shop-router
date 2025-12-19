import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div>
      {/* banner section component:: Banner  */}
      <Banner />

      {/* heading section component:: Heading */}
      <Heading
        title="Browse Coffee By Categories"
        subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste"
      />

      {/* dynamic selection tab  */}
      {/* dynamic cards base on the selection tab  */}
    </div>
  );
};

export default Home;
