import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 1rem;
`;

export const Logo: React.FC = () => {
  return (
    <Link to="/">
      <StyledLogo src="/trackman-logo.png" alt="trackman logo" />
    </Link>
  );
};
