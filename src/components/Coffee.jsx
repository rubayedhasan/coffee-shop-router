import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const Coffee = ({ coffee }) => {
  const navigate = useNavigate();
  const { id, name, image, category, origin, rating, popularity } =
    coffee || {};
  return (
    <div
      onClick={() => navigate(`/coffee/${id}`)}
      className="p-6 border border-[#1212120f] shadow rounded-md flex flex-col gap-6 w-full cursor-pointer"
    >
      <figure className="h-42 lg:h-56 w-full">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center rounded-lg"
        />
      </figure>
      <div className="flex-1 space-y-1">
        <h2 className="text-lg lg:text-xl font-semibold">Name: {name}</h2>
        <p className="text-base md:text-lg font-medium">Category: {category}</p>
        <p className="text-base md:text-lg">Origin: {origin}</p>
        <p className="text-base md:text-lg">Rating: {rating}</p>
        <p className="text-base md:text-lg">Popularity: {popularity}</p>
      </div>
    </div>
  );
};

// define the propTypes
Coffee.propTypes = {
  coffee: PropTypes.object.isRequired,
};

export default Coffee;
