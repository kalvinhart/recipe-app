import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, LogoWrapper, LogoImage } from "./Header.styles";
import { HeaderContainer } from "../../styles/containerStyles";
import { LogoText } from "../../styles/fontStyles";
import Logo from "../../assets/finocchio.png";
import Search from "./Search";
import Favourites from "./Favourites";

const Header: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <HeaderContainer>
          <Link to="/">
            <LogoWrapper>
              <LogoImage src={Logo} alt="Food Recipes" />
              <LogoText>Food Recipes</LogoText>
            </LogoWrapper>
          </Link>
          <Search />
          <Favourites />
        </HeaderContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
