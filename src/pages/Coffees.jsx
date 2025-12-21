import { useLoaderData } from "react-router";
import Coffee from "../components/Coffee";
import { useState } from "react";

const Coffees = () => {
  const allCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(allCoffees);

  const handleSortByPopularity = () => {
    const sortByPopularity = [...allCoffees].sort(
      (a, b) => b?.popularity - a?.popularity
    );
    setCoffees(sortByPopularity);
  };

  const handleSortByRating = () => {
    const sortByRating = [...allCoffees].sort((a, b) => b?.rating - a?.rating);
    setCoffees(sortByRating);
  };

  return (
    <>
      {/* section heading  */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-3 lg:gap-0">
        {/* title  */}
        <h3 className="text-center lg:text-left text-base md:text-lg lg:text-xl font-medium uppercase">
          sort coffee's by popularity & rating
        </h3>

        {/* sort buttons container   */}
        <div className="flex justify-between md:gap-5">
          <button
            onClick={handleSortByPopularity}
            className="btn bg-[#FF6D1F] text-sm text-[#F5E7C6]"
            type="button"
          >
            Sort by Popularity
          </button>

          <button
            onClick={handleSortByRating}
            className="btn bg-[#FF6D1F] text-sm md:text-base text-[#F5E7C6]"
            type="button"
          >
            Sort by Rating
          </button>
        </div>
      </div>

      {/* dynamic cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center mt-10">
        {coffees.map((coffee) => (
          <Coffee key={coffee.id} coffee={coffee}></Coffee>
        ))}
      </div>
    </>
  );
};

export default Coffees;
