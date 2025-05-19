import type React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "./Logo";

const StyledHeader = styled.nav`
  background-color: var(--color-gray-600);
  padding: 1rem 4.8rem;
  display: flex;
  align-items: center;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  @media (min-width: 768px) {
    margin-left: 2.75rem;
    gap: 2rem;
  }
`;

const Link = styled.li`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.5px;
  white-space: nowrap;

  > a {
    transition: color 0.2s ease-in-out;
    color: var(--color-gray-400);
    text-decoration: none;
    &.active,
    &.hover {
      color: var(--color-gray-100);
    }
  }
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo />
      <Links>
        <Link>
          <NavLink to="/facilities">Facilities</NavLink>
        </Link>
        <Link>
          <NavLink to="/locations">Locations</NavLink>
        </Link>
        <Link>
          <NavLink to="/players">Players</NavLink>
        </Link>
        <Link>
          <NavLink to="/access-management">Access Management</NavLink>
        </Link>
      </Links>
    </StyledHeader>
  );
};
