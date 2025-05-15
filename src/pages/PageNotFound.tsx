import styled from "styled-components";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  background-color: #fff;
  border: 1px solid #111;
  border-radius: 1rem;

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

export const PageNotFound: React.FC = () => {
  return (
    <StyledPageNotFound>
      <Box>
        <h1>The page you are looking for could not be found 😢</h1>
      </Box>
    </StyledPageNotFound>
  );
};
