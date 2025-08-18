"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 lg:py-20 text-base relative z-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Border Line - Full width */}
        <div className="border-t border-gray-700 w-full mb-10"></div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Company Info */}
          <div className="space-y-4 text-center lg:text-left">
            <Image
              src="/media/log.jpg"
              alt="Sociobyte Logo"
              width={120}
              height={80}
              className="mx-auto lg:mx-0"
            />
            <p className="text-gray-400 font-medium">
              123 Creative Lane London, SW1A 1AA United Kingdom
            </p>
            <p className="text-gray-400 font-medium">(309) 8855–314</p>
            <p className="text-gray-400 font-medium">contact@sociobyte.com</p>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Popular Services</h4>
            <ul className="space-y-4 text-gray-400">
              {[
                "Website Development",
                "Android & iOS Development",
                "Digital Marketing",
                "Graphic Designing",
                "Social Media Marketing",
                "Content Writing",
                "Search Engine Optimization",
                "Software Development",
                "Cyber Security",
                "E-Commerce",
                "Illustrations",
                "Video Admission",
                "Point of Sale (POS)",
              ].map((service, idx) => (
                <li
                  key={idx}
                  className="hover:text-red-500 transition-colors duration-300 cursor-pointer font-medium"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Useful Links</h4>
            <ul className="space-y-4 text-gray-400">
              {[
                "Home",
                "Project",
                "Services",
                "About Us",
                "Contact Us",
                "Privacy Policy",
                "Terms of Services",
              ].map((link, idx) => (
                <li key={idx} className="font-medium">
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-red-500 transition-colors duration-300 cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-5">
              Subscribe Our Newsletter
            </h4>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="your_email@example.com"
                className="px-4 py-3 rounded-md text-black bg-white focus:outline-none text-base border border-gray-300 focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-bold shadow-lg transition-colors duration-300 text-base cursor-pointer w-full transform hover:scale-105 transition-transform"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20">
          {/* Middle Border Line - Full width */}
          <div className="border-t border-gray-700 w-full mb-10"></div>

          {/* Copyright Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white font-bold text-sm mb-4 md:mb-0">
              © 2025 — Tech Guru All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}