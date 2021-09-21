import { createContext, useEffect, useState } from "react";
import { Favourites } from "../interfaces";
import { getFavourites } from "../utils/getFavourites";

type FavouritesContextType = {
  favourites: Favourites[];
  updateFavourites: (newFavourite: Favourites) => boolean;
  deleteFavourites: (id: number) => void;
};

export const FavouritesContext = createContext<FavouritesContextType>({
  favourites: [],
  updateFavourites: (newFavourite: Favourites) => true,
  deleteFavourites: (id: number) => {},
});

export const FavouritesProvider: React.FC = ({ children }) => {
  const [favourites, setFavourites] = useState<Favourites[] | []>([]);

  useEffect(() => {
    const favouritesData = getFavourites();
    setFavourites(favouritesData);
  }, []);

  const updateFavourites = (newFavourite: Favourites) => {
    const exists = favourites.filter((item) => item.id === newFavourite.id);
    if (exists.length > 0) return false;
    const newFavourites = [...favourites, newFavourite];
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
    setFavourites(newFavourites);
    return true;
  };

  const deleteFavourites = (id: number) => {
    const newFavourites = favourites.filter((item) => item.id !== id);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, updateFavourites, deleteFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
