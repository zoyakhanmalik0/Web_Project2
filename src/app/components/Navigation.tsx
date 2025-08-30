'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import ContactSidebar from "./ContactSidebar";

export default function Navigation() {
  const [showContact, setShowContact] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      {/* Contact Sidebar Button - Fixed for both desktop and mobile */}
      <button
        onClick={() => setShowContact((prev) => !prev)}
        aria-label="Open Contact Sidebar"
        className="fixed z-[10001] bg-transparent border-none p-0 cursor-pointer"
        style={{
          top: 16,
          right: 32,
        }}
      >
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="26" fill="red" />
          {Array.from({ length: 3 }).map((_, row) =>
            Array.from({ length: 3 }).map((_, col) => (
              <circle
                key={`dot-${row}-${col}`}
                cx={18 + col * 10}
                cy={18 + row * 10}
                r="3.2"
                fill="black"
              />
            ))
          )}
        </svg>
        <style jsx>{`
          @media (max-width: 1023px) {
            button[aria-label='Open Contact Sidebar'] {
              right: auto !important;
              left: 50% !important;
              transform: translateX(-50%) !important;
              top: 16px !important;
            }
          }
        `}</style>
      </button>

      {/* Navigation Bar - Changed to solid black */}
      <nav className="w-full h-20 xl:h-28 text-white mx-auto flex justify-between items-center fixed top-0 z-50 bg-black">
        <div className="w-full wrapper flex justify-between items-center mx-auto px-4 lg:px-6">
          <div className="logo">
            <Link href="/">
              <Image src="/media/log.jpg" alt="Techouar Logo" width={220} height={80} className="w-56 h-20 sm:w-72 sm:h-24 xl:w-96 xl:h-32 object-contain drop-shadow-lg" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block w-full mx-auto px-6 font-medium">
            <ul className="flex justify-center flex-row items-center gap-8">
              <li className="relative group">
                <Link className="flex gap-2 hover:text-default transition-colors text-sm" href="/">HOME</Link>
              </li>
              <li className="relative group">
                <Link className="flex gap-2 hover:text-default transition-colors text-sm" href="/projects">PROJECTS</Link>
              </li>
              <li className="relative group">
                <Link className="flex gap-2 hover:text-default transition-colors text-sm" href="/pricing-plan">PRICING</Link>
              </li>
              <li className="relative group">
                <Link className="flex gap-2 hover:text-default transition-colors text-sm" href="/blogs">BLOGS</Link>
              </li>

              {/* SERVICES Dropdown - Changed to black */}
              <li className="relative group flex items-center gap-1 cursor-pointer text-white font-medium">
                <span className="text-sm">SERVICES</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
                <div className="absolute top-10 border-0 min-w-[15rem] bg-black text-white w-full my-2 rounded max-h-0 overflow-hidden group-hover:max-h-[45rem] duration-300 shadow-lg">
                  <ul className="py-1">
                    {[
                      "WEBSITE DEVELOPMENT",
                      "ANDROID & IOS DEVELOPMENT",
                      "DIGITAL MARKETING",
                      "GRAPHIC DESIGNING",
                      "SOCIAL MEDIA MARKETING",
                      "CONTENT WRITING",
                      "SEO",
                      "SOFTWARE DEVELOPMENT",
                      "CYBER SECURITY",
                      "E-COMMERCE",
                      "ILLUSTRATIONS",
                      "VIDEO ANIMATION",
                      "POINT OF SALE (POS)",
                    ].map((service) => (
                      <Link key={service} href={`/services/${service.toLowerCase().replace(/ & | /g, "-")}`}>
                        <li className="hover:bg-gray-800 p-2.5 mx-2 rounded-md transition-colors text-xs">{service}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="relative group">
                <Link className="flex gap-2 hover:text-default transition-colors text-sm" href="/about">ABOUT US</Link>
              </li>

              {/* Contact Button */}
              <div className="w-fit group overflow-hidden flex justify-center items-center gap-2 text-sm font-medium text-blackfade2 px-4 py-2 bg-default ease-in rounded-full relative">
                <Link href="/contact">
                  <div className="group-hover:text-white relative z-10 flex items-center justify-center gap-2">Contact</div>
                </Link>
              </div>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex lg:hidden w-12 h-12 items-center justify-center rounded-lg cursor-pointer bg-reds text-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {showMobileMenu ? (
                <>
                  <line x1="18" x2="6" y1="6" y2="18"></line>
                  <line x1="6" x2="18" y1="6" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-gray-700 overflow-y-auto max-h-screen">
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-white hover:text-default transition-colors py-2 text-sm" onClick={() => setShowMobileMenu(false)}>HOME</Link>
              <Link href="/projects" className="block text-white hover:text-default transition-colors py-2 text-sm" onClick={() => setShowMobileMenu(false)}>PROJECTS</Link>
              <Link href="/pricing-plan" className="block text-white hover:text-default transition-colors py-2 text-sm" onClick={() => setShowMobileMenu(false)}>PRICING</Link>
              <Link href="/blogs" className="block text-white hover:text-default transition-colors py-2 text-sm" onClick={() => setShowMobileMenu(false)}>BLOGS</Link>
              <Link href="/about" className="block text-white hover:text-default transition-colors py-2 text-sm" onClick={() => setShowMobileMenu(false)}>ABOUT US</Link>

              {/* Mobile SERVICES Dropdown - Changed to black */}
              <div className="space-y-2">
                <button
                  className={`w-full text-left font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${showMobileServices ? 'text-[#BFF747]' : 'text-white'}`}
                  style={{background: 'transparent'}}
                  onClick={() => setShowMobileServices((s) => !s)}
                  aria-expanded={showMobileServices}
                  aria-controls="mobile-services-list"
                >
                  <span className="text-sm">SERVICES</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`ml-2 transition-transform ${showMobileServices ? 'rotate-180' : ''}`}>
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                {showMobileServices && (
                  <div id="mobile-services-list" className="pl-4 space-y-2">
                    {[
                      "Website Development",
                      "Android & iOS Development",
                      "Digital Marketing",
                      "Graphic Designing",
                      "Social Media Marketing",
                      "Content Writing",
                      "SEO",
                      "Software Development",
                      "Cyber Security",
                      "E-Commerce",
                      "Illustrations",
                      "Video Animation",
                      "Point of Sale (POS)",
                    ].map((service) => (
                      <Link
                        key={service}
                        href={`/services/${service.toLowerCase().replace(/ & | /g, "-")}`}
                        className="block transition-colors py-1 rounded-md text-xs"
                        style={{background:'#000', color:'#fff', border: '1px solid #e41212ff'}}
                        onMouseOver={e => e.currentTarget.style.background='#1a1a1a'}
                        onMouseOut={e => e.currentTarget.style.background='#000'}
                        onClick={() => setShowMobileMenu(false)}
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Sidebar */}
      <ContactSidebar open={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}