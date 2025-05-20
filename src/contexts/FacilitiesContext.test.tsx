import { render, waitFor, act } from "@testing-library/react";
import { describe, it, beforeEach, expect } from "vitest";
import { FacilitiesProvider, useFacilities } from "./FacilitiesContext";
import { dummyData } from "../utils/helpers";
import type { Facility } from "../types";

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

const facilityA: Facility = {
  id: 1,
  name: "Facility A",
  isDefault: false,
  description: "test",
  openingTime: "11:00",
  closingTime: "21:00",
  address: "test",
  imageUrl: "www.google.com",
};
const facilityB: Facility = {
  id: 2,
  name: "Facility B",
  isDefault: true,
  description: "test",
  openingTime: "11:00",
  closingTime: "21:00",
  address: "test",
  imageUrl: "www.google.com",
};

const TestComponent = () => {
  const {
    facilities,
    isLoading,
    getFacilities,
    createFacility,
    deleteFacility,
    getDummyData,
  } = useFacilities();

  return (
    <div>
      <button onClick={getFacilities}>Load</button>
      <button
        onClick={() =>
          createFacility({
            id: 3,
            name: "Facility C",
            isDefault: false,
            description: "test",
            openingTime: "11:00",
            closingTime: "21:00",
            address: "test",
            imageUrl: "www.google.com",
          })
        }
      >
        Create
      </button>
      <button onClick={getDummyData}>Dummy</button>
      <button onClick={() => deleteFacility(3)}>Delete</button>
      <div data-testid="loading">{isLoading.toString()}</div>
      <ul data-testid="facility-list">
        {facilities.map((f) => (
          <li key={f.id}>{f.name}</li>
        ))}
      </ul>
    </div>
  );
};

describe("FacilitiesContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("loads facilities from localStorage", async () => {
    localStorage.setItem("facilities", JSON.stringify([facilityA, facilityB]));
    const { getByText, getByTestId } = render(
      <FacilitiesProvider>
        <TestComponent />
      </FacilitiesProvider>
    );
    act(() => getByText("Load").click());

    await waitFor(() => {
      const text = getByTestId("facility-list").textContent || "";
      expect(text).toContain("Facility A");
      expect(text).toContain("Facility B");
    });
  });

  it("adds a new facility", async () => {
    const { getByText, getByTestId } = render(
      <FacilitiesProvider>
        <TestComponent />
      </FacilitiesProvider>
    );
    act(() => getByText("Create").click());

    await waitFor(() => {
      const text = getByTestId("facility-list").textContent || "";
      expect(text).toContain("Facility C");
    });
  });

  it("sets dummy data", async () => {
    const { getByText, getByTestId } = render(
      <FacilitiesProvider>
        <TestComponent />
      </FacilitiesProvider>
    );
    act(() => getByText("Dummy").click());

    await waitFor(() => {
      const text = getByTestId("facility-list").textContent || "";
      dummyData.forEach((f) => {
        expect(text).toContain(f.name);
      });
    });
  });

  it("deletes a facility", async () => {
    localStorage.setItem("facilities", JSON.stringify([facilityA, facilityB]));
    const { getByText, getByTestId } = render(
      <FacilitiesProvider>
        <TestComponent />
      </FacilitiesProvider>
    );

    act(() => getByText("Load").click());
    await waitFor(() => getByTestId("facility-list"));
    act(() => getByText("Create").click());
    await waitFor(() => getByTestId("facility-list"));
    act(() => getByText("Delete").click());

    await waitFor(() => {
      const text = getByTestId("facility-list").textContent || "";
      expect(text).not.toContain("Facility C");
    });
  });
});
