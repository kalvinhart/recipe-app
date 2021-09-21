import React from "react";
import { Link } from "react-router-dom";
import { Favourites } from "../../interfaces";
import { SpanBold } from "../../styles/fontStyles";
import {
  FavouriteLinkContentWrapper,
  FavouriteWrapper,
  RecipeImage,
} from "./Favourite.styles";

const Favourite: React.FC<Favourites> = ({ id, title, image }) => {
  return (
    <FavouriteWrapper>
      <Link to={`/recipe/${id}`}>
        <FavouriteLinkContentWrapper>
          <RecipeImage src={image} />
          <SpanBold>{title}</SpanBold>
        </FavouriteLinkContentWrapper>
      </Link>
    </FavouriteWrapper>
  );
};

export default Favourite;
