import styled, { css } from "styled-components";

const variants = {
  default: css`
    background-color: var(--color-green-50);
    color: var(--color-green-500);
  `,
  danger: css`
    background-color: var(--color-red-50);
    color: var(--color-red-500);
  `,
};

export type LabelProps = {
  variant?: "default" | "danger";
};

export const Label = styled.span<LabelProps>`
  padding: 2px 6px;
  font-weight: 600;
  font-size: var(--font-size-sm);
  border-radius: 1rem;
  letter-spacing: 0.5px;
  ${(props) => variants[props.variant ?? "default"]}
`;
