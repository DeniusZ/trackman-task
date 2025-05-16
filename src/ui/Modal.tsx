import type React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Backdrop = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10000;
`;

const StyledModal = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem 0.75rem;
  width: 26rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  pointer-events: auto;
`;

export type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  // close the modal when click Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent closing when clicking inside the modal
  };

  return ReactDOM.createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <StyledModal onClick={stopPropagation}>{children}</StyledModal>
    </Backdrop>,
    document.body
  );
};
