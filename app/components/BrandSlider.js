
"use client";
import React from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Samsung", slug: "samsung" },
  { name: "Apple", slug: "apple" },
  { name: "HP", slug: "hp" },
  { name: "LG", slug: "lg" },
  { name: "Dell", slug: "dell" },
  { name: "Microsoft", slug: "microsoft" },
  { name: "Sony", slug: "sony" },
  { name: "Asus", slug: "asus" },
];

const BrandSlider = () => {
  return (
    <div className="w-full py-16 bg-gray-50 overflow-hidden relative group">
      {/* Optional: Gradient Overlays for a smooth fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Trusted Brands</h2>
      </div>
      
      <div className="flex">
        <motion.div
          className="flex flex-none gap-20 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 25, // Adjust speed 
            repeat: Infinity,
          }}
        >
          {/* Loop twice for infinite effect */}
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-none w-32 md:w-40 flex justify-center"
            >
              <img
                src={`https://cdn.simpleicons.org/${brand.slug}`}
                alt={`${brand.name} logo`}
                className="h-10 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer object-contain"
                // Using a fallback color if the CDN is slow
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${brand.name}`;
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandSlider;