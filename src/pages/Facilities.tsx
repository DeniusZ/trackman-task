import type React from "react";
import { FacilityCard } from "../components/FacilityCard";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

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

const StyledLink = styled(Link)`
  text-decoration: none;
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
      <StyledLink to="new">
        <Button size="medium" variant="primary">
          Create Facility
        </Button>
      </StyledLink>

      <StyledFacilities>
        {facilities.map((facility) => {
          return <FacilityCard key={facility.index} {...facility} />;
        })}
      </StyledFacilities>
    </Container>
  );
};
