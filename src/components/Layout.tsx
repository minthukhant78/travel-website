'use client'
import React, { useState, useEffect } from "react";
import Loading from "./Loading";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="min-h-screen flex flex-col">
          {/* Add Navbar here if it should be part of the layout */}
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
