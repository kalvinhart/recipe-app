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
