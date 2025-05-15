import type React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  gap: 10px;
  border: none;
  cursor: pointer;
`;

export type ButtonProps = {
  variant: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  disabled,
  onClick,
  children,
}) => {
  return <StyledButton>{children}</StyledButton>;
};
