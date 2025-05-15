import type React from "react";
import { FacilityCard } from "../ui/FacilityCard";
import styled from "styled-components";
import { Button } from "../ui/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
`;

const StyledFacilities = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export type FacilitiesProps = {
  facilities: {
    name: string;
    address: string;
    openingTime: string;
    closingTime: string;
    imageUrl: string;
    index: number;
    isDefault: boolean;
  }[];
};

export const Facilities: React.FC<FacilitiesProps> = ({ facilities }) => {
  return (
    <Container>
      <Button size="medium" variant="primary">
        Create Facility
      </Button>
      <StyledFacilities>
        {facilities.map((facility) => {
          return <FacilityCard key={facility.index} {...facility} />;
        })}
      </StyledFacilities>
    </Container>
  );
};
