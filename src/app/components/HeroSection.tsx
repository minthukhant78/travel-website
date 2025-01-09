'use client'

import React, { useState } from "react";

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    date: "2025-01-15", // Default date
    location: "ရန်ကုန်", // Default location
    hotel: "ဟိုတယ် Luxe", // Default hotel
    price: "၅၀၀", // Default price
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Data Submitted:", formData);
    // Add form submission logic (e.g., send to API)
  };

  return (
    <div className="relative bg-gray-800 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-myanmar.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="relative bg-opacity-60 bg-black py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
            သင့်ရဲ့ နောက်တစ်ကြိမ်ခရီးစဉ်ကို ရှာဖွေပါ။
          </h1>
          <p className="mt-4 text-sm sm:text-lg">
            ကျွန်ုပ်တို့၏ အထူးခရီးစဉ်များနှင့် မမေ့နိုင်သောနေရာများကို ရှာဖွေပါ။
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto mt-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white bg-opacity-95 p-8 rounded-lg shadow-lg"
          >
            {/* Date Field */}
            <div className="flex flex-col">
              <label htmlFor="date" className="text-gray-700 font-medium">
                ရက်စွဲ
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border rounded-lg text-sm bg-blue-50 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Location Field */}
            <div className="flex flex-col">
              <label htmlFor="location" className="text-gray-700 font-medium">
                နေရာ
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                placeholder="နေရာထည့်ပါ"
                onChange={handleChange}
                className="mt-2 px-4 py-2 border rounded-lg text-sm bg-yellow-50 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Hotel Field */}
            <div className="flex flex-col">
              <label htmlFor="hotel" className="text-gray-700 font-medium">
                ဟိုတယ်
              </label>
              <input
                type="text"
                id="hotel"
                name="hotel"
                value={formData.hotel}
                placeholder="ဟိုတယ်အမည်ထည့်ပါ"
                onChange={handleChange}
                className="mt-2 px-4 py-2 border rounded-lg text-sm bg-pink-50 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Price Field */}
            <div className="flex flex-col">
              <label htmlFor="price" className="text-gray-700 font-medium">
                အများဆုံးစျေးနှုန်း
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                placeholder="စျေးနှုန်းထည့်ပါ"
                onChange={handleChange}
                className="mt-2 px-4 py-2 border rounded-lg text-sm bg-green-50 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all"
              >
                ရှာဖွေပါ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
