import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-800 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      ></div>
      <div className="relative bg-opacity-50 bg-black py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Discover Your Next Adventure
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Explore the world with our tailored travel packages and unforgettable destinations.
          </p>
          <Link
            href="#destinations"
            className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
