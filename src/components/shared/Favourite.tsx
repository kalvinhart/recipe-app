import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Favourites } from "../../interfaces";
import { FavouritesContext } from "../../store/FavouritesContext";
import { SpanBold } from "../../styles/fontStyles";
import {
  DeleteButton,
  FavouriteLinkContentWrapper,
  FavouriteWrapper,
  RecipeImage,
} from "./Favourite.styles";

const Favourite: React.FC<Favourites> = ({ id, title, image }) => {
  const { deleteFavourites } = useContext(FavouritesContext);

  return (
    <FavouriteWrapper>
      <Link to={`/recipe/${id}`}>
        <FavouriteLinkContentWrapper>
          <RecipeImage src={image} alt={title} />
          <SpanBold>{title}</SpanBold>
        </FavouriteLinkContentWrapper>
      </Link>
      <DeleteButton
        onClick={() => deleteFavourites(id)}
        aria-label="Delete from Favourites"
      >
        Delete
      </DeleteButton>
    </FavouriteWrapper>
  );
};

export default Favourite;
