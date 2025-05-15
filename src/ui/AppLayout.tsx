import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100dvh;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  background-color: #fafafa;
  padding: 2rem 4.8rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const AppLayout: React.FC = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
};
