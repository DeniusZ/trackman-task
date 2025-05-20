import styled from "styled-components";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-gray-200);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-xl);

  padding: 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-bottom: 3.2rem;
  }
`;

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const moveBack = () => navigate(-1);
  return (
    <StyledPageNotFound>
      <Box>
        <h1>The page you are looking for could not be found 😢</h1>
        <Button onClick={moveBack}>Go back</Button>
      </Box>
    </StyledPageNotFound>
  );
};
