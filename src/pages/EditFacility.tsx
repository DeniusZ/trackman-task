import type React from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Form } from "../ui/Form";

const Heading = styled.h1`
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

export type EditFacilityProps = {};

export const EditFacility: React.FC<EditFacilityProps> = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <Heading>Edit Facility</Heading>
      <Form />
    </div>
  );
};
