import React from "react";

interface Destination {
  id: number;
  name: string;
  image: string;
}

const destinations: Destination[] = [
  { id: 1, name: "Paris", image: "/destinations/paris.jpg" },
  { id: 2, name: "Bali", image: "/destinations/bali.jpg" },
  { id: 3, name: "New York", image: "/destinations/new-york.jpg" },
  { id: 4, name: "Tokyo", image: "/destinations/tokyo.jpg" },
];

const PopularDestinations: React.FC = () => {
  return (
    <section id="destinations" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
