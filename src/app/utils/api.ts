import { Destination } from "../interfaces/Destination";

const destinations: Destination[] = [
  {
    id: "1",
    name: "Bali, Indonesia",
    description: "A tropical paradise known for beaches and temples.",
    image: "/images/bali.jpg",
    location: "Indonesia",
  },
  {
    id: "2",
    name: "Paris, France",
    description: "The City of Light, known for the Eiffel Tower.",
    image: "/images/paris.jpg",
    location: "France",
  },
];

// Simulated API functions
export const getDestinations = async (): Promise<Destination[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(destinations), 500));
};

export const getDestinationById = async (id: string): Promise<Destination | null> => {
  return destinations.find((d) => d.id === id) || null;
};

export const createDestination = async (destination: Destination): Promise<void> => {
  destinations.push({ ...destination, id: (destinations.length + 1).toString() });
};

export const updateDestination = async (id: string, updatedData: Partial<Destination>): Promise<void> => {
  const index = destinations.findIndex((d) => d.id === id);
  if (index !== -1) destinations[index] = { ...destinations[index], ...updatedData };
};

export const deleteDestination = async (id: string): Promise<void> => {
  const index = destinations.findIndex((d) => d.id === id);
  if (index !== -1) destinations.splice(index, 1);
};
