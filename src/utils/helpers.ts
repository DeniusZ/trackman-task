import type { Facility } from "../types";

export const isFacilityOpen = (
  openingHour: string,
  closingHour: string
): boolean => {
  const now = new Date();

  const [openHour, openMinute] = openingHour.split(":").map(Number);
  const [closeHour, closeMinute] = closingHour.split(":").map(Number);

  const openTime = new Date(now);
  openTime.setHours(openHour, openMinute, 0, 0);

  const closeTime = new Date(now);
  closeTime.setHours(closeHour, closeMinute, 0, 0);

  return now >= openTime && now <= closeTime;
};

export const sortFacilitiesByDefaultFirst = (list: Facility[]): Facility[] => {
  return [...list].sort((a, b) =>
    a.isDefault === b.isDefault ? 0 : a.isDefault ? -1 : 1
  );
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
