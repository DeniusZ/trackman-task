import type React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 72rem;
  margin: 1rem auto;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const SubHeading = styled.h2`
  font-weight: 600;
  font-size: 1.125rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 0.875rem;

  span {
    display: block;
    font-weight: 400;
    font-size: 0.75rem;
    color: #666;
    margin-top: 0.25rem;
  }
`;

const Input = styled.input`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  min-width: 12rem;

  &:focus {
    outline: none;
    border-color: #ec691a;
    box-shadow: 0 0 0 2px rgba(236, 105, 26, 0.3);
  }
`;

const TextArea = styled.textarea`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #ec691a;
    box-shadow: 0 0 0 2px rgba(236, 105, 26, 0.3);
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  input[type="checkbox"] {
    width: 1.25rem;
    height: 1.25rem;
    accent-color: #ec691a;
    cursor: pointer;
    &:focus {
      outline-color: #ec691a;
    }
  }
`;

const CheckboxField = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-end;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const HoursRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export type FormProps = {};

export const Form: React.FC<FormProps> = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <StyledForm>
      <SubHeading>Facility Information</SubHeading>

      <Field>
        <StyledLabel htmlFor="name">Facility Name *</StyledLabel>
        <Input type="text" id="name" name="name" required />
      </Field>

      <Field>
        <StyledLabel htmlFor="address">Address *</StyledLabel>
        <Input type="text" id="address" name="address" required />
      </Field>

      <Field>
        <StyledLabel htmlFor="description">Description *</StyledLabel>
        <TextArea id="description" name="description" rows={4} required />
      </Field>

      <Field>
        <StyledLabel htmlFor="imageUrl">Cover Image URL *</StyledLabel>
        <Input type="url" id="imageUrl" name="imageUrl" required />
      </Field>

      <CheckboxField>
        <StyledLabel htmlFor="isDefault">
          Default Facility
          <span>
            Setting this facility as default will override the currently marked
            default facility.
          </span>
        </StyledLabel>
        <CheckboxWrapper>
          <input type="checkbox" id="isDefault" name="isDefault" />
        </CheckboxWrapper>
      </CheckboxField>

      <SubHeading>Working Hours</SubHeading>
      <HoursRow>
        <Field>
          <StyledLabel htmlFor="openingTime">Opening Time *</StyledLabel>
          <Input type="time" id="openingTime" name="openingTime" required />
        </Field>

        <Field>
          <StyledLabel htmlFor="closingTime">Closing Time *</StyledLabel>
          <Input type="time" id="closingTime" name="closingTime" required />
        </Field>
      </HoursRow>
      <ButtonRow>
        <Button
          variant="secondary"
          size="medium"
          onClick={handleCancel}
          type="reset"
        >
          Cancel
        </Button>
        <Button variant="primary" size="medium" type="submit">
          Create Facility
        </Button>
      </ButtonRow>
    </StyledForm>
  );
};
