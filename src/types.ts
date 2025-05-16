export type Facility = {
  id: number;
  name: string;
  address: string;
  description?: string;
  imageUrl: string;
  isDefault: boolean;
  openingTime: string;
  closingTime: string;
};
