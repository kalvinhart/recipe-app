import React from "react";
import { Link } from "react-router-dom";
import { H4 } from "../../styles/fontStyles";
import { FavouriteWrapper, RecipeImage } from "./Favourite.styles";

interface FavouriteProps {
  data: {
    id: string;
    title: string;
    image: string;
  };
}

const Favourite: React.FC<FavouriteProps> = ({ data }) => {
  return (
    <FavouriteWrapper>
      <Link to={`/search/${data.id}`}>
        <RecipeImage src={data.image} />
        <H4>{data.title}</H4>
      </Link>
    </FavouriteWrapper>
  );
};

export default Favourite;
