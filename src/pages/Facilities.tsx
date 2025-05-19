import type React from "react";
import { FacilityCard } from "../components/FacilityCard";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { useFacilities } from "../contexts/FacilitiesContext";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: auto;
  grid-column: 1 / -1;
`;

export const Facilities: React.FC = () => {
  const { facilities, getDummyData } = useFacilities();

  return (
    <Container>
      <StyledLink to="new">
        <Button>Create Facility</Button>
      </StyledLink>
      {facilities.length === 0 ? (
        <div style={{ marginTop: "4rem" }}>
          <Button variant="secondary" onClick={getDummyData}>
            Generate Facilities
          </Button>
          <p>For testing and demo purposes only</p>
        </div>
      ) : (
        facilities.map((facility) => {
          return <FacilityCard key={facility.id} {...facility} />;
        })
      )}
    </Container>
  );
};
