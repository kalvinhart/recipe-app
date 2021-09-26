import styled from "styled-components";

export const DeleteButton = styled.button`
  position: absolute;
  top: 45px;
  left: -40px;
  transform: translateY(-50%);
  display: none;
  width: 70px;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: white;
  cursor: pointer;
  transition: opacity 0.2s ease-out;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const FavouriteWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90px;
  padding: 10px;

  &:hover ${DeleteButton} {
    display: block;
  }
`;

export const FavouriteLinkContentWrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    background-color: #e4ebf1;
  }
`;

export const RecipeImage = styled.img`
  width: 100px;
  margin-right: 10px;
`;
