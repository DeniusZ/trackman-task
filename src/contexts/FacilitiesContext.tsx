import React, { createContext, useReducer, useContext, useEffect } from "react";
import type { Facility } from "../types";
import type { ReactNode } from "react";

// State types
type State = {
  facilities: Facility[];
  isLoading: boolean;
  error: string | null;
};

type Action =
  | { type: "loading" }
  | { type: "facilities/loaded"; payload: Facility[] }
  | { type: "facility/created"; payload: Facility[] }
  | { type: "facility/updated"; payload: Facility[] }
  | { type: "facility/deleted"; payload: Facility[] }
  | { type: "error"; payload: string };

type FacilitiesContextType = {
  facilities: Facility[];
  isLoading: boolean;
  getFacilities: () => Promise<void>;
  createFacility: (facility: Facility) => Promise<void>;
  editFacility: (facility: Facility) => Promise<void>;
  deleteFacility: (id: number) => Promise<void>;
};

const initialState: State = {
  facilities: [],
  isLoading: false,
  error: null,
};

const FacilitiesContext = createContext<FacilitiesContextType | undefined>(
  undefined
);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "facilities/loaded": {
      return {
        ...state,
        isLoading: false,
        facilities: action.payload,
      };
    }
    case "facility/created":
    case "facility/updated":
    case "facility/deleted": {
      return {
        ...state,
        isLoading: false,
        facilities: action.payload,
      };
    }
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const FacilitiesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [{ facilities, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const getFacilities = async () => {
    dispatch({ type: "loading" });
    try {
      const data = localStorage.getItem("facilities");
      const parsed: Facility[] = data ? JSON.parse(data) : [];
      dispatch({ type: "facilities/loaded", payload: parsed });
    } catch {
      dispatch({ type: "error", payload: "Failed to load facilities." });
    }
  };

  const createFacility = async (newFacility: Facility) => {
    dispatch({ type: "loading" });
    try {
      const existing = facilities.map((f) => ({
        ...f,
        isDefault: newFacility.isDefault ? false : f.isDefault,
      }));
      const updated = [...existing, newFacility];
      localStorage.setItem("facilities", JSON.stringify(updated));
      dispatch({ type: "facility/created", payload: updated });
    } catch {
      dispatch({ type: "error", payload: "Failed to create facility." });
    }
  };

  const editFacility = async (updatedFacility: Facility) => {
    dispatch({ type: "loading" });
    try {
      let updated = facilities.map((f) =>
        f.id === updatedFacility.id
          ? updatedFacility
          : { ...f, isDefault: updatedFacility.isDefault ? false : f.isDefault }
      );

      // If the updated one is marked default, remove it from others
      if (updatedFacility.isDefault) {
        updated = updated.map((f) =>
          f.id !== updatedFacility.id ? { ...f, isDefault: false } : f
        );
      }

      localStorage.setItem("facilities", JSON.stringify(updated));
      dispatch({ type: "facility/updated", payload: updated });
    } catch {
      dispatch({ type: "error", payload: "Failed to update facility." });
    }
  };

  const deleteFacility = async (id: number) => {
    dispatch({ type: "loading" });
    try {
      const remaining = facilities.filter((f) => f.id !== id);
      const wasDefault = facilities.find((f) => f.id === id)?.isDefault;

      if (wasDefault && remaining.length > 0) {
        remaining[0] = { ...remaining[0], isDefault: true };
      }

      localStorage.setItem("facilities", JSON.stringify(remaining));
      dispatch({ type: "facility/deleted", payload: remaining });
    } catch {
      dispatch({ type: "error", payload: "Failed to delete facility." });
    }
  };

  useEffect(() => {
    getFacilities();
  }, []);

  return (
    <FacilitiesContext.Provider
      value={{
        facilities,
        isLoading,
        getFacilities,
        createFacility,
        editFacility,
        deleteFacility,
      }}
    >
      {children}
    </FacilitiesContext.Provider>
  );
};

export const useFacilities = (): FacilitiesContextType => {
  const context = useContext(FacilitiesContext);
  if (!context) {
    throw new Error("useFacilities must be used within a FacilitiesProvider");
  }
  return context;
};
