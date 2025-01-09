import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";

const Home: React.FC = () => {
  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      image: "/images/bali.jpg",
      description: "A tropical paradise known for beaches, temples, and culture.",
    },
    {
      id: 2,
      name: "Paris, France",
      image: "/images/paris.jpg",
      description: "The City of Light, famous for the Eiffel Tower and fine dining.",
    },
    {
      id: 3,
      name: "Tokyo, Japan",
      image: "/images/tokyo.jpg",
      description: "A vibrant city blending tradition and technology.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection/>
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Explore Destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} {...destination} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
