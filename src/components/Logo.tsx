import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 1rem;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Logo: React.FC = () => {
  return (
    <Link to="/">
      <StyledLogo src="/trackman-logo.png" alt="trackman logo" />
    </Link>
  );
};
