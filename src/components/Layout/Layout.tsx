import styled from "styled-components";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
  min-height: 100vh;
`;

const Layout = (): JSX.Element => {
  return (
    <StyledContainer>
      <Header />
      <Counter styles={{ flex: 1 }} />
    </StyledContainer>
  );
};

export default Layout;
