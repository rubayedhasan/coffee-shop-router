import toast from "react-hot-toast";

// get the stored data from local server
const getTheFavorite = () => {
  const favoriteList = window.localStorage.getItem("favoriteList");

  //   validation
  if (favoriteList) {
    return JSON.parse(favoriteList);
  }

  return [];
};

// add the new data to the local server
const addFavorite = (coffee) => {
  const favorites = getTheFavorite();

  //   validation:: avoid duplicate
  const exist = favorites.find((f) => f?.id === coffee?.id);
  if (exist) {
    return toast.error("Already Exist in Favorite List");
  }

  favorites.push(coffee);

  storeTheFavorite(favorites);
  toast.success("Add to Favorite List");
};

// store the added the to local server
const storeTheFavorite = (listArr) => {
  const stringifyList = JSON.stringify(listArr);
  window.localStorage.setItem("favoriteList", stringifyList);
};

// remove the favorite from local
const removeTheFavorite = (coffeeId) => {
  console.log(coffeeId);
  const favorites = getTheFavorite();

  const remainingFavorites = favorites.filter((c) => c?.id !== coffeeId);
  storeTheFavorite(remainingFavorites);
};
export { getTheFavorite, addFavorite, removeTheFavorite };
