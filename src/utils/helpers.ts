import { img1, img2, img3, img4, img5 } from "../assets/illustrations";
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

export const dummyData: Facility[] = [
  {
    name: "Green Valley Golf Club",
    address: "123 Fairway Drive, Copenhagen, Denmark",
    description:
      "Nestled in the heart of Copenhagen, Green Valley Golf Club offers an 18-hole championship course surrounded by lush greenery and scenic landscapes. With top-tier facilities, a modern clubhouse, and expert coaching programs, it's perfect for both beginners and seasoned golfers. Nestled in the heart of Copenhagen, Green Valley Golf Club offers an 18-hole championship course surrounded by lush greenery and scenic landscapes. With top-tier facilities, a modern clubhouse, and expert coaching programs, it's perfect for both beginners and seasoned golfers. Nestled in the heart of Copenhagen, Green Valley Golf Club offers an 18-hole championship course surrounded by lush greenery and scenic landscapes. With top-tier facilities, a modern clubhouse, and expert coaching programs, it's perfect for both beginners and seasoned golfers.",
    openingTime: "10:00",
    closingTime: "14:00",
    imageUrl: img1,
    id: 1000,
    isDefault: true,
  },
  {
    name: "Green Valley Golf Club 2",
    address: "123 Fairway Drive, Copenhagen, Denmark",
    description:
      "Nestled in the heart of Copenhagen, Green Valley Golf Club offers an 18-hole championship course surrounded by lush greenery and scenic landscapes. With top-tier facilities, a modern clubhouse, and expert coaching programs, it's perfect for both beginners and seasoned golfers.",
    openingTime: "08:00",
    closingTime: "18:00",
    imageUrl: img2,
    id: 1111,
    isDefault: false,
  },
  {
    name: "Green Valley Golf Club 3",
    address: "123 Fairway Drive, Copenhagen, Denmark",
    description:
      "Nestled in the heart of Copenhagen, Green Valley Golf Club offers an 18-hole championship course surrounded by lush greenery and scenic landscapes. With top-tier facilities, a modern clubhouse, and expert coaching programs, it's perfect for both beginners and seasoned golfers.",
    openingTime: "08:00",
    closingTime: "18:00",
    imageUrl: img3,
    id: 2222,
    isDefault: false,
  },
  {
    name: "Green Valley Golf Club 4",
    address: "123 Fairway Drive, Copenhagen, Denmark",
    description:
      "Nestled in the heart of Copenhagen, Green Valley Golf Club offers an 18-hole championship course surrounded by lush greenery and scenic landscapes. With top-tier facilities, a modern clubhouse, and expert coaching programs, it's perfect for both beginners and seasoned golfers.",
    openingTime: "08:00",
    closingTime: "18:00",
    imageUrl: img4,
    id: 3333,
    isDefault: false,
  },
  {
    name: "Green Valley Golf Club 5",
    address: "123 Fairway Drive, Copenhagen, Denmark",
    description:
      "Nestled in the heart of Copenhagen, Green Valley Golf Club offers an 18-hole championship course surrounded by lush greenery and scenic landscapes. With top-tier facilities, a modern clubhouse, and expert coaching programs, it's perfect for both beginners and seasoned golfers.",
    openingTime: "14:00",
    closingTime: "22:00",
    imageUrl: img5,
    id: 4444,
    isDefault: false,
  },
  {
    name: "Green Valley Golf Club 6",
    address: "123 Fairway Drive, Copenhagen, Denmark",
    description:
      "Nestled in the heart of Copenhagen, Green Valley Golf Club offers an 18-hole championship course surrounded by lush greenery and scenic landscapes. With top-tier facilities, a modern clubhouse, and expert coaching programs, it's perfect for both beginners and seasoned golfers.",
    openingTime: "14:00",
    closingTime: "22:00",
    imageUrl: img2,
    id: 5555,
    isDefault: false,
  },
];
