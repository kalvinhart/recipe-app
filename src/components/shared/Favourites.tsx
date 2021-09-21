import React, { useContext, useState } from "react";

import {
  FavouritesButton,
  FavouritesList,
  FavouritesListWrapper,
  FavouritesWrapper,
  NoFavourites,
  StarImage,
} from "./Favourites.styles";
import Star from "../../assets/star.png";
import Favourite from "./Favourite";
import { H3 } from "../../styles/fontStyles";
import { FavouritesContext } from "../../store/FavouritesContext";

const Favourites: React.FC = () => {
  const [showFavourties, setShowFavourites] = useState<boolean>(false);
  const { favourites } = useContext(FavouritesContext);

  const handleClick = () => {
    setShowFavourites((prev) => !prev);
  };

  return (
    <FavouritesWrapper>
      <FavouritesButton onClick={handleClick}>
        <StarImage src={Star} />
      </FavouritesButton>
      <FavouritesListWrapper show={showFavourties}>
        {favourites.length > 0 ? (
          <FavouritesList>
            {favourites.map((item) => (
              <Favourite key={item.id} {...item} />
            ))}
          </FavouritesList>
        ) : (
          <NoFavourites>
            <H3>You have no favourites.</H3>
          </NoFavourites>
        )}
      </FavouritesListWrapper>
    </FavouritesWrapper>
  );
};

export default Favourites;
