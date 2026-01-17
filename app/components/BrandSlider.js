"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="w-full py-16 bg-gray-50 overflow-hidden relative">
      {/* Gradient Overlays for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

      <div className="flex">
        <motion.div
          className="flex flex-none gap-16 md:gap-24 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {/* Double the array for a seamless loop */}
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="relative flex-none w-32 h-12 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={`https://cdn.simpleicons.org/${brand.slug}`}
                alt={`${brand.name} logo`}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandSlider;