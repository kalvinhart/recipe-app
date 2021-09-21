import { Favourites } from "../interfaces";

export const getFavourites = (): Favourites[] => {
  if (localStorage.getItem("favourites")) {
    return JSON.parse(localStorage.getItem("favourites") || "[]");
  } else {
    return [];
  }
};
