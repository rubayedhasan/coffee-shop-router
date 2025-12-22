import { useLoaderData, useParams } from "react-router";
import NutritionImg from "../assets/images/nutrition.png";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getTheFavorite, addFavorite } from "../utils/FavoriteServer";

const CoffeeDetails = () => {
  const allCoffees = useLoaderData();
  const { coffeeId } = useParams();
  const [favorite, setFavorite] = useState(false);

  const singleCoffee = allCoffees.find(
    (coffee) => coffee?.id === parseInt(coffeeId)
  );

  useEffect(() => {
    const handleMakeFavorite = () => {
      setFavorite(true);
    };

    const favorites = getTheFavorite() || [];
    const exist = favorites.find((c) => c?.id === singleCoffee?.id);
    exist && handleMakeFavorite();
  }, [singleCoffee]);

  const {
    name,
    image,
    category,
    origin,
    rating,
    popularity,
    ingredients,
    nutrition_info,
    making_process,
    description,
  } = singleCoffee || {};

  const handleFavorite = () => {
    setFavorite(true);
    addFavorite(singleCoffee);
  };
  return (
    <div>
      <p className="text-base md:text-lg lg:text-xl font-light">
        {description}
      </p>

      <figure className="mt-5 h-40 md:h-60 xl:h-100 ">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center rounded-md"
        />
      </figure>
      <div className="flex justify-between mt-8">
        <h4 className="text-xl lg:text-3xl font-bold">{name}</h4>
        <div>
          <button
            disabled={favorite}
            onClick={handleFavorite}
            className="btn bg-[#FF6D1F] text-[#F5E7C6] disabled:bg-[#FF6D1F]/50 disabled:text-gray-400 disabled:cursor-not-allowed"
            type="button"
          >
            <span>{favorite ? <FaHeart /> : <FaRegHeart />}</span>
            <span>Favorite</span>
          </button>
        </div>
      </div>

      <div className="mt-3.5 pl-5">
        <p className="text-base lg:text-lg font-light">{category}</p>
        <p className="text-base lg:text-lg font-light">Origin: {origin}</p>
        <p className="text-base lg:text-lg font-light">
          Popularity: {popularity}
        </p>
        <p className="text-base lg:text-lg font-light">Rating: {rating}</p>
      </div>

      <div className="mt-5">
        <h5 className="text-lg font-medium cf-text-primary">Making Process:</h5>
        <p className="font-light mt-2 text-justify">{making_process}</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-10">
        <div className="space-y-5">
          <div>
            <h5 className="text-lg font-medium cf-text-primary">
              Ingredients:
            </h5>
            <ul className="list-disc list-inside pl-5 font-light">
              {ingredients.map((gradient, idx) => (
                <li key={idx}>{gradient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-medium cf-text-primary">Nutrition</h5>
            <ul className="list-disc list-inside pl-5 font-light">
              <li>Calories: {nutrition_info.calories}</li>
              <li>Fat: {nutrition_info.fat}</li>
              <li>Carbohydrates: {nutrition_info.carbohydrates}</li>
              <li>Protein: {nutrition_info.protein}</li>
            </ul>
          </div>
        </div>
        <figure className="h-40 lg:h-80 md:w-80">
          <img
            src={NutritionImg}
            alt="Nutrition"
            className="h-full w-full object-cover object-center"
          />
        </figure>
      </div>
    </div>
  );
};

export default CoffeeDetails;
