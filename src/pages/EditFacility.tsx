import type React from "react";

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Form } from "../components/Form";
import { useFacilities } from "../contexts/FacilitiesContext";

const Heading = styled.h1`
  font-weight: 600;
  font-size: var(--font-size-lg);
  margin-bottom: 1rem;
`;

export const EditFacility: React.FC = () => {
  const { id } = useParams();
  const { facilities } = useFacilities();

  const facilityToEdit = facilities.find(
    (facility) => facility.id === Number(id)
  );

  return (
    <div>
      <Heading>Edit Facility</Heading>
      <Form facilityToEdit={facilityToEdit} />
    </div>
  );
};
