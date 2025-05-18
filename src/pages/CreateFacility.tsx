import type React from "react";

import styled from "styled-components";
import { Form } from "../components/Form";

const Heading = styled.h1`
  font-weight: 600;
  font-size: var(--font-size-lg);
  margin-bottom: 1rem;
`;

export const CreateFacility: React.FC = () => {
  return (
    <div>
      <Heading>Create a New Facility</Heading>
      <Form />
    </div>
  );
};
