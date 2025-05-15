import type React from "react";
import styled from "styled-components";

const StyledLabel = styled.span<{ $isOpen: boolean }>`
  padding: 2px 6px;
  font-weight: 600;
  font-size: 14px;
  border-radius: 1rem;
  letter-spacing: 0.5px;

  background-color: ${({ $isOpen }) => ($isOpen ? "#ebffee" : "#FEE9E7")};
  color: ${({ $isOpen }) => ($isOpen ? "#14ae5c" : "#EC221F")};
`;

export type LabelProps = {
  isOpen: boolean;
};

export const Label: React.FC<LabelProps> = ({ isOpen }) => {
  return (
    <StyledLabel $isOpen={isOpen}>{isOpen ? "Open" : "Closed"}</StyledLabel>
  );
};
