/* eslint-disable @typescript-eslint/no-empty-object-type */
import type React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.nav`
  background-color: #2c2c2c;
  padding: 1rem 4.8rem;
  display: flex;
  align-items: center;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 2.75rem;
  gap: 2rem;
`;

const Link = styled.li`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;

  > a {
    transition: color 0.2s ease-in-out;
    color: #767676;
    text-decoration: none;
    &.active {
      color: #f3f3f3;
    }
    &:hover {
      color: #f3f3f3;
    }
  }
`;

export type HeaderProps = {
  /* TODO */
};

export const Header: React.FC<HeaderProps> = () => {
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
