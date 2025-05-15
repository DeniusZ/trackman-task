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
