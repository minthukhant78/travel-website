'use client';
import Footer from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import React, { useState } from "react";


interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);
    // Add logic to send formData to the backend API
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
     <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default ContactForm;
