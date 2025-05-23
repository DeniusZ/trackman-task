import type React from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";
import styled from "styled-components";
import { iconClose } from "../assets/icons";
import { useEffect } from "react";

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
`;

const Separator = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--color-gray-200);
  /* to override the padding of Modal */
  margin-left: -0.75rem;
  margin-right: -0.75rem;
`;

export type DeleteModalProps = {
  facilityName: string;
  onClose: () => void;
  onDelete: () => void;
};

export const DeleteModal: React.FC<DeleteModalProps> = ({
  facilityName,
  onClose,
  onDelete,
}) => {
  // onDelete when "Enter" key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onDelete();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onDelete]);

  return (
    <Modal onClose={onClose}>
      <TopContainer>
        <p>Delete Facility</p>
        <Button variant="secondary" size="icon" onClick={onClose}>
          <img src={iconClose} />
        </Button>
      </TopContainer>
      <Separator />
      <div>
        <p>
          Are you sure you want to delete this facility? This action cannot be
          undone.
        </p>
        <p>
          Facility: <strong>{facilityName}</strong>
        </p>
      </div>
      <Separator />
      <BottomContainer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onDelete}>Yes, Delete</Button>
      </BottomContainer>
    </Modal>
  );
};
