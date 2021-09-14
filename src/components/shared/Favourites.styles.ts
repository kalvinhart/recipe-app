import styled from "styled-components";

export const FavouritesWrapper = styled.div`
  position: relative;
`;

export const StarImage = styled.img`
  width: 40px;
`;

export const FavouritesButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

interface Favourites {
  show: boolean;
}

export const FavouritesListWrapper = styled.div<Favourites>`
  display: ${(props) => (props.show ? "block" : "none")};
  width: 300px;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${(props) => props.theme.backgrounds.header};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const FavouritesList = styled.ul`
  width: 100%;
  list-style: none;
`;

export const FavouritesItem = styled.li`
  width: 100%;
`;

export const NoFavourites = styled.div`
  width: 100%;
  height: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
