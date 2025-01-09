'use client';

import React from "react";
interface CardProps {
  name: string;
  image: string;
  description: string;
  onClick?: () => void;
}
const Card: React.FC<CardProps> = ({ name, image, description, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <button
          onClick={onClick}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
