import styled from "styled-components";
import SearchIcon from "../assets/search-icon-sm.png";

export const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #696d75;
  border-radius: ${(props) => props.theme.borderRadius ?? 0};
  box-shadow: ${(props) => props.theme.boxShadow};

  &:focus {
    outline: none;
    border: 1px solid black;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const SearchInput = styled(Input)`
  padding: 5px 10px 5px 40px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 10px 6px;
  background-size: 20px;
  margin-right: 10px;
`;
