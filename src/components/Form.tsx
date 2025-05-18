import type React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFacilities } from "../contexts/FacilitiesContext";
import type { Facility } from "../types";

import { useForm } from "react-hook-form";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 72rem;
  margin: 1rem auto;
  background-color: var(--color-white);
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const SubHeading = styled.h2`
  font-weight: 600;
  font-size: var(--font-size-md);
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StyledLabel = styled.label`
  font-weight: 500;
  font-size: var(--font-size-sm);

  span {
    display: block;
    font-weight: 400;
    font-size: var(--font-size-xs);
    color: var(--color-gray-500);
    margin-top: 0.25rem;
  }
`;

const Input = styled.input`
  padding: 0.5rem 0.75rem;
  font-size: var(--font-size-sm);
  border: 1px solid var(--color-gray-300);
  border-radius: 0.375rem;
  min-width: 12rem;

  &:focus {
    outline: none;
    border-color: var(--color-orange-300);
    box-shadow: 0 0 0 2px rgba(236, 105, 26, 0.3);
  }
`;

const TextArea = styled.textarea`
  padding: 0.5rem 0.75rem;
  font-size: var(--font-size-sm);
  border: 1px solid var(--color-gray-300);
  border-radius: 0.375rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--color-orange-300);
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
    accent-color: var(--color-orange-300);
    cursor: pointer;
    &:focus {
      outline-color: var(--color-orange-300);
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

const Error = styled.span`
  font-size: var(--font-size-sm);
  color: red;
`;

export type FormProps = { facilityToEdit?: Facility };

export const Form: React.FC<FormProps> = ({ facilityToEdit }) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };
  const { createFacility, editFacility, facilities } = useFacilities();

  const { id: editId, ...editValues } =
    facilityToEdit ?? ({} as Partial<Facility>);

  const isEditSession = Boolean(editId);

  // if the facility is being edited and there is only one facility - it is the first entry
  const isFirstEntry =
    facilities.length === 0 || (isEditSession && facilities.length === 1);

  const { register, handleSubmit, formState } = useForm<Facility>({
    defaultValues: {
      ...(isEditSession ? editValues : {}),
      isDefault: isFirstEntry || (isEditSession && editValues.isDefault),
    },
  });

  const { errors } = formState;

  const onSubmit = (data: Facility) => {
    if (isEditSession) editFacility({ ...data, id: editId || 0 });
    else createFacility({ ...data, id: Date.now() });

    navigate("/facilities");
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <SubHeading>Facility Information</SubHeading>

      <Field>
        <StyledLabel htmlFor="name">Facility Name *</StyledLabel>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
        />
        {errors?.name?.message && (
          <Error>{errors.name.message as string}</Error>
        )}
      </Field>

      <Field>
        <StyledLabel htmlFor="address">Address *</StyledLabel>
        <Input
          type="text"
          id="address"
          {...register("address", { required: "This field is required" })}
        />
        {errors?.address?.message && (
          <Error>{errors.address.message as string}</Error>
        )}
      </Field>

      <Field>
        <StyledLabel htmlFor="description">Description *</StyledLabel>
        <TextArea
          id="description"
          rows={4}
          {...register("description", { required: "This field is required" })}
        />
        {errors?.description?.message && (
          <Error>{errors.description.message as string}</Error>
        )}
      </Field>

      <Field>
        <StyledLabel htmlFor="imageUrl">Cover Image URL *</StyledLabel>
        <Input
          type="url"
          id="imageUrl"
          {...register("imageUrl", { required: "This field is required" })}
        />
        {errors?.imageUrl?.message && (
          <Error>{errors.imageUrl.message as string}</Error>
        )}
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
          <input
            type="checkbox"
            id="isDefault"
            {...register("isDefault")}
            disabled={isFirstEntry}
          />
        </CheckboxWrapper>
      </CheckboxField>

      <SubHeading>Working Hours</SubHeading>
      <HoursRow>
        <Field>
          <StyledLabel htmlFor="openingTime">Opening Time *</StyledLabel>
          <Input
            type="time"
            id="openingTime"
            {...register("openingTime", { required: "This field is required" })}
          />
          {errors?.openingTime?.message && (
            <Error>{errors.openingTime.message as string}</Error>
          )}
        </Field>

        <Field>
          <StyledLabel htmlFor="closingTime">Closing Time *</StyledLabel>
          <Input
            type="time"
            id="closingTime"
            {...register("closingTime", { required: "This field is required" })}
          />
          {errors?.closingTime?.message && (
            <Error>{errors.closingTime.message as string}</Error>
          )}
        </Field>
      </HoursRow>
      <ButtonRow>
        <Button variant="secondary" onClick={handleCancel} type="reset">
          Cancel
        </Button>
        <Button type="submit">
          {isEditSession ? "Update Facility" : "Create Facility"}
        </Button>
      </ButtonRow>
    </StyledForm>
  );
};
