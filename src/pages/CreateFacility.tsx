import type React from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";

const Heading = styled.h1`
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

export type CreateFacilityProps = {};

export const CreateFacility: React.FC<CreateFacilityProps> = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <Heading>Create a New Facility</Heading>
      <Form />
    </div>
  );
};
