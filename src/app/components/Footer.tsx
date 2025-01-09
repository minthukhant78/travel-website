'use client'
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Min Travel. All Rights Reserved.</p>
        <p className="mt-2">Built with ❤️ using Next.js and Tailwind CSS</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-blue-400 hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
