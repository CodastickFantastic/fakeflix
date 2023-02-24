import { createContext, useState } from "react";

const FavouriteContext = createContext();

export function FavouriteProvider(props) {
  const [favourites, setFavourites] = useState([]);

  function addToFav(id, mediaType) {
    if (checkIsFav(id) === false) {
      setFavourites((prevFav) => {
        return [...prevFav, { id: id, mediaType: mediaType }];
      });
    }
  }

  function checkIsFav(id) {
    if (favourites.find((e) => e.id === id)) {
      return true;
    } else {
      return false;
    }
  }

  function removeFav(id, mediaType) {
    setFavourites((prevFav) => {
      let newArr = [];
      for (let i = 0; i < prevFav.length; i++) {
        if (id != prevFav[i].id) {
          newArr.push(prevFav[i]);
        }
      }
      return newArr;
    });
  }

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFav, checkIsFav, removeFav }}
    >
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
