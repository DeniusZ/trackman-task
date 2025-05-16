import type React from "react";
import { FacilityCard } from "../components/FacilityCard";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { useFacilities } from "../contexts/FacilitiesContext";

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

export const Facilities: React.FC = () => {
  const { facilities } = useFacilities();

  return (
    <Container>
      <StyledLink to="new">
        <Button size="medium" variant="primary">
          Create Facility
        </Button>
      </StyledLink>

      <StyledFacilities>
        {facilities.map((facility) => {
          return <FacilityCard key={facility.id} {...facility} />;
        })}
      </StyledFacilities>
    </Container>
  );
};
