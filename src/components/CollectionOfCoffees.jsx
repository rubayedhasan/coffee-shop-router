import { useLoaderData } from "react-router";
import Coffee from "../components/Coffee";

const CollectionOfCoffees = () => {
  const allCoffees = useLoaderData();
  console.log(allCoffees);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center mt-10">
        {allCoffees.map((coffee) => (
          <Coffee key={coffee.id} coffee={coffee}></Coffee>
        ))}
      </div>
    </>
  );
};

export default CollectionOfCoffees;
