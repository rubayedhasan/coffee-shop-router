import { useLoaderData, useNavigate, useParams } from "react-router";
import Coffee from "../components/Coffee";

const CollectionOfCoffees = () => {
  const allCoffees = useLoaderData();
  const { categoryName } = useParams();
  const navigate = useNavigate();

  // store the coffees
  let coffees;

  // conditional rendering:: base on category
  if (categoryName) {
    coffees = allCoffees.filter((coffee) => coffee.category === categoryName);
  } else {
    coffees = allCoffees.slice(0, 6);
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center mt-10">
        {coffees.map((coffee) => (
          <Coffee key={coffee.id} coffee={coffee}></Coffee>
        ))}
      </div>

      {/* view all button  */}
      <div className="mt-8 md:mt-10 ">
        <button
          onClick={() => navigate("/coffees")}
          className="btn bg-[#ff6d1f] text-[#F5E7C6]"
          type="button"
        >
          View All
        </button>
      </div>
    </>
  );
};

export default CollectionOfCoffees;
