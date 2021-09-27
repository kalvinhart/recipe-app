import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  background-color: #e4ebf1;

  @media only screen and (min-width: ${(props) => props.theme.media.med}) {
    position: static;
    width: 350px;
    margin-right: auto;
    background-color: transparent;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.med}) {
    width: 500px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
