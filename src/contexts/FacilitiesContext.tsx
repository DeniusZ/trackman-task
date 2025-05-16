import React, { createContext, useReducer, useContext, useEffect } from "react";
import type { Facility } from "../types";

import type { ReactNode } from "react";

// Type definitions

type State = {
  facilities: Facility[];
  isLoading: boolean;
  error: string | null;
};

type Action =
  | { type: "loading" }
  | { type: "facilities/loaded"; payload: Facility[] }
  | { type: "facility/loaded"; payload: Facility }
  | { type: "facility/created"; payload: Facility }
  | { type: "facility/updated"; payload: Facility }
  | { type: "facility/deleted"; payload: number } // id
  | { type: "error"; payload: string };

type FacilitiesContextType = {
  facilities: Facility[];
  isLoading: boolean;

  getFacilities: () => Promise<void>;
  createFacility: (facility: Facility) => Promise<void>;
  editFacility: (facility: Facility) => Promise<void>;
  deleteFacility: (id: number) => Promise<void>;
};

// const dummyData: Facility[] = [
//   {
//     name: "Green Valley Golf Club",
//     address: "123 Fairway Drive, Copenhagen, Denmark",
//     openingTime: "9:00",
//     closingTime: "14:00",
//     imageUrl: "/",
//     id: 1000,
//     isDefault: true,
//   },
//   {
//     name: "Green Valley Golf Club 2",
//     address: "123 Fairway Drive, Copenhagen, Denmark",
//     openingTime: "8:00",
//     closingTime: "18:00",
//     imageUrl: "/",
//     id: 1,
//     isDefault: false,
//   },
//   {
//     name: "Green Valley Golf Club 3",
//     address: "123 Fairway Drive, Copenhagen, Denmark",
//     openingTime: "8:00",
//     closingTime: "18:00",
//     imageUrl: "/",
//     id: 2,
//     isDefault: false,
//   },
//   {
//     name: "Green Valley Golf Club 4",
//     address: "123 Fairway Drive, Copenhagen, Denmark",
//     openingTime: "8:00",
//     closingTime: "18:00",
//     imageUrl: "/",
//     id: 3,
//     isDefault: false,
//   },
//   {
//     name: "Green Valley Golf Club 5",
//     address: "123 Fairway Drive, Copenhagen, Denmark",
//     openingTime: "14:00",
//     closingTime: "22:00",
//     imageUrl: "/",
//     id: 4,
//     isDefault: false,
//   },
//   {
//     name: "Green Valley Golf Club 6",
//     address: "123 Fairway Drive, Copenhagen, Denmark",
//     openingTime: "14:00",
//     closingTime: "22:00",
//     imageUrl: "/",
//     id: 5,
//     isDefault: false,
//   },
// ];

// Initial state
const initialState: State = {
  facilities: [],
  isLoading: false,
  error: null,
};

// Create context with default value
const FacilitiesContext = createContext<FacilitiesContextType | undefined>(
  undefined
);

// Reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "facilities/loaded":
      return { ...state, isLoading: false, facilities: action.payload };
    case "facility/created":
      return {
        ...state,
        isLoading: false,
        facilities: [...state.facilities, action.payload],
      };
    case "facility/updated":
      return {
        ...state,
        isLoading: false,
        facilities: state.facilities.map((facility) =>
          facility.id === action.payload.id ? action.payload : facility
        ),
      };
    case "facility/deleted":
      return {
        ...state,
        isLoading: false,
        facilities: state.facilities.filter(
          (facility) => facility.id !== action.payload
        ),
      };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

// Provider
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
      const parsed = data ? JSON.parse(data) : [];
      dispatch({ type: "facilities/loaded", payload: parsed });
    } catch {
      dispatch({ type: "error", payload: "Failed to load facilities." });
    }
  };

  const createFacility = async (facility: Facility) => {
    dispatch({ type: "loading" });
    try {
      const updatedFacilities = [...facilities, facility];
      localStorage.setItem("facilities", JSON.stringify(updatedFacilities));
      dispatch({ type: "facility/created", payload: facility });
    } catch {
      dispatch({ type: "error", payload: "Failed to create facility." });
    }
  };

  const editFacility = async (updated: Facility) => {
    dispatch({ type: "loading" });
    try {
      const updatedFacilities = facilities.map((f) =>
        f.id === updated.id ? updated : f
      );
      localStorage.setItem("facilities", JSON.stringify(updatedFacilities));
      dispatch({ type: "facility/updated", payload: updated });
    } catch {
      dispatch({ type: "error", payload: "Failed to update facility." });
    }
  };

  const deleteFacility = async (id: number) => {
    dispatch({ type: "loading" });
    try {
      const filtered = facilities.filter((f) => f.id !== id);
      localStorage.setItem("facilities", JSON.stringify(filtered));
      dispatch({ type: "facility/deleted", payload: id });
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

// Custom hook to use context
export const useFacilities = (): FacilitiesContextType => {
  const context = useContext(FacilitiesContext);
  if (!context) {
    throw new Error("useFacilities must be used within a FacilitiesProvider");
  }
  return context;
};
