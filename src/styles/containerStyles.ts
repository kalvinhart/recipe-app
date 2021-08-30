import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderContainer = styled(Container)`
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: var(--mq-small)) {
    padding: 0;
  }
`;

export const RecipeContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;

  @media only screen and (min-width: var(--mq-med)) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
`;
