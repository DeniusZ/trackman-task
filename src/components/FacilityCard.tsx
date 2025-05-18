import type React from "react";
import styled from "styled-components";
import { isFacilityOpen } from "../utils/helpers";
import { Label } from "./Label";
import { Button } from "./Button";
import { iconAddressPin, iconStar, iconTrashCan } from "../assets/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DeleteModal } from "./DeleteModal";
import { useFacilities } from "../contexts/FacilitiesContext";

const StyledImage = styled.img`
  height: 12rem;
  width: 100%;

  object-fit: cover;
  display: block;

  transition-duration: 0.3s;
  transition-property: transform, filter;
`;

const StyledFacilityCard = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.75rem;
  gap: 0.75rem;

  background: var(--color-white);
  border-radius: 0.5rem;

  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 16px 16px -8px rgba(12, 12, 13, 0.1),
      0px 4px 4px -4px rgba(12, 12, 13, 0.05);
  }

  &:hover ${StyledImage}, &:focus-within ${StyledImage} {
    filter: brightness(0.7);
    transform: scale(1.1);
  }
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledName = styled.p`
  font-size: var(--font-size-base);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledAddress = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  > img {
    margin-bottom: 3px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.25rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
`;

const DefaultIcon = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 2rem;
  height: 2rem;
  background-color: var(--color-brown-400);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export type FacilityCardProps = {
  name: string;
  address: string;
  openingTime: string;
  closingTime: string;
  imageUrl: string;
  isDefault?: boolean;
  id: number;
};

export const FacilityCard: React.FC<FacilityCardProps> = ({
  name,
  address,
  openingTime,
  closingTime,
  imageUrl,
  isDefault,
  id,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const isOpen = isFacilityOpen(openingTime, closingTime);
  const { deleteFacility } = useFacilities();

  const handleDelete = () => {
    deleteFacility(id);
    setShowDeleteModal(false);
  };

  return (
    <StyledFacilityCard>
      <ImageContainer>
        <StyledImage src={imageUrl} />
        {isDefault && (
          <DefaultIcon>
            <img src={iconStar} />
          </DefaultIcon>
        )}
      </ImageContainer>
      <StyledHeading>
        <StyledName>{name}</StyledName>
        <Label variant={isOpen ? "default" : "danger"}>
          {isOpen ? "Open" : "Closed"}
        </Label>
      </StyledHeading>
      <BottomContainer>
        <img src={iconAddressPin} />
        <StyledAddress>{address}</StyledAddress>
        <ButtonContainer>
          <Button
            size="icon"
            variant="secondary"
            onClick={() => setShowDeleteModal(true)}
          >
            <img src={iconTrashCan} />
          </Button>
          <StyledLink to={`${id}`}>
            <Button size="small" variant="secondary">
              Edit
            </Button>
          </StyledLink>
        </ButtonContainer>
      </BottomContainer>
      {showDeleteModal && (
        <DeleteModal
          facilityName={name}
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDelete}
        />
      )}
    </StyledFacilityCard>
  );
};
