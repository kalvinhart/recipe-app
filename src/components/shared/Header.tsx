import React from "react";
import { StyledHeader, LogoWrapper, LogoImage, FavouritesWrapper } from "./Header.styles";
import { HeaderContainer } from "../../styles/containerStyles";
import { LogoText } from "../../styles/fontStyles";
import Logo from "../../assets/finocchio.png";
import Search from "./Search";

const Header: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <HeaderContainer>
          <LogoWrapper>
            <LogoImage src={Logo} />
            <LogoText>Food Recipes</LogoText>
          </LogoWrapper>
          <Search />
          <FavouritesWrapper></FavouritesWrapper>
        </HeaderContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
