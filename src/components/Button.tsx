import styled, { css } from "styled-components";

const sizes = {
  icon: css`
    padding: 0.5rem;
    height: 2rem;
  `,
  small: css`
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.4rem 1.5rem;
    height: 2rem;
  `,
  medium: css`
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
    height: 2.25rem;
  `,
};

const variants = {
  primary: css`
    color: #f3f3f3;
    background-color: #ec691a;

    &:hover {
      background-color: #cc570f;
    }
  `,
  secondary: css`
    color: #1e1e1e;
    background: #f5f5f5;

    &:hover {
      background-color: #e0e0e0;
    }
  `,
};

export type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "icon" | "small" | "medium";
};

export const Button = styled.button<ButtonProps>`
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  letter-spacing: 0.5px;

  ${(props) => sizes[props.size ?? "medium"]}
  ${(props) => variants[props.variant ?? "primary"]}
`;
