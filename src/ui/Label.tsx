import styled, { css } from "styled-components";

const variants = {
  default: css`
    background-color: #ebffee;
    color: #14ae5c;
  `,
  danger: css`
    background-color: #fee9e7;
    color: #ec221f;
  `,
};

export type LabelProps = {
  variant: "default" | "danger";
};

export const Label = styled.span<LabelProps>`
  padding: 2px 6px;
  font-weight: 600;
  font-size: 14px;
  border-radius: 1rem;
  letter-spacing: 0.5px;
  ${(props) => variants[props.variant]}
`;
