import styled, { css } from "styled-components";

const sizes = {
  icon: css`
    padding: 0.5rem;
    height: 2rem;
  `,
  small: css`
    font-size: var(--font-size-sm);
    font-weight: 600;
    padding: 0.4rem 1.5rem;
    height: 2rem;
  `,
  medium: css`
    font-size: var(--font-size-sm);
    font-weight: 600;
    padding: 0.5rem 1.5rem;
    height: 2.25rem;
  `,
};

const variants = {
  primary: css`
    color: var(--color-gray-100);
    background-color: var(--color-orange-300);

    &:hover {
      background-color: var(--color-orange-400);
    }
  `,
  secondary: css`
    color: var(--color-gray-700);
    background: var(--color-gray-100);

    &:hover {
      background-color: var(--color-gray-200);
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
