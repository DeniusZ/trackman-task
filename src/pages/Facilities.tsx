import type React from "react";
import { FacilityCard } from "../ui/FacilityCard";
import styled from "styled-components";

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
    <StyledFacilities>
      {facilities.map((facility) => {
        return <FacilityCard key={facility.index} {...facility} />;
      })}
    </StyledFacilities>
  );
};
