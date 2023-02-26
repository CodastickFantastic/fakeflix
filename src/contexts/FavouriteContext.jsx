import { createContext, useState } from "react";

const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const isFav = (id) => favourites.find((fav) => fav.id === id);

  const addToFav = (id, mediaType) =>
    !isFav(id) && setFavourites((prevFav) => [...prevFav, { id, mediaType }]);

  const removeFav = (id) => {
    const newFav = favourites.filter((fav) => fav.id !== id);
    setFavourites(newFav);
  };

  return (
    <FavouriteContext.Provider value={{ favourites, addToFav, isFav, removeFav }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;
