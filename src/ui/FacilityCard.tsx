import type React from "react";
import styled from "styled-components";
import { isFacilityOpen } from "../utils/helpers";
import { Label } from "./Label";
import { Button } from "./Button";

const StyledFacilityCard = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.75rem;
  gap: 0.75rem;

  width: 348px;
  min-width: 348px;

  background: #ffffff;
  border-radius: 8px;

  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 16px 16px -8px rgba(12, 12, 13, 0.1),
      0px 4px 4px -4px rgba(12, 12, 13, 0.05);
  }
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledName = styled.p`
  font-size: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledAddress = styled.p`
  font-size: 0.875rem;
  color: #757575;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
`;

export type FacilityCardProps = {
  name: string;
  address: string;
  openingTime: string;
  closingTime: string;
  imageUrl: string;
  isDefault?: boolean;
};

export const FacilityCard: React.FC<FacilityCardProps> = ({
  name,
  address,
  openingTime,
  closingTime,
  imageUrl,
  isDefault,
}) => {
  return (
    <StyledFacilityCard>
      <img src={imageUrl} />
      <span>{isDefault ? "⭐️" : ""}</span>
      <StyledHeading>
        <StyledName>{name}</StyledName>
        <Label isOpen={isFacilityOpen(openingTime, closingTime)} />
      </StyledHeading>
      <BottomContainer>
        <StyledAddress>{address}</StyledAddress>
        <Button>delete</Button>
        <Button>Edit</Button>
      </BottomContainer>
    </StyledFacilityCard>
  );
};
