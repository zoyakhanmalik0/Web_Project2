"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import ContactSidebar from "./ContactSidebar";

export default function Navigation() {
  const [showContact, setShowContact] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  
  const handleContactClick = () => {
    console.log('Contact button clicked!');
    setShowContact(true);
    console.log('showContact set to:', true);
  };
  
  const handleCloseContact = () => {
    console.log('Close button clicked!');
    setShowContact(false);
    console.log('showContact set to:', false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const buttonStyle = {
    backgroundColor: '#BFF747',
    color: 'black',
    borderRadius: '50%',
    cursor: 'pointer',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    outline: 'none',
    boxShadow: '0 0 0 2px #BFF747',
  };
  
  return (
    <>
      {/* Fixed Toggle Button for Contact Sidebar */}
      <button
        onClick={() => setShowContact((prev) => !prev)}
        aria-label="Open Contact Sidebar"
        className="hidden lg:block fixed z-[10001] bg-transparent border-none p-0 cursor-pointer"
        style={{
          top: 16,
          right: 32,
          // left and transform will be overridden on small screens
        }}
      >
        {/* Professional red circle with 9 black dots (centered, even spacing) */}
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="26" fill="#EF4444" />
          {/* 9 dots, centered in a 20x20 grid, 4px radius, 6px gap */}
          {Array.from({ length: 3 }).map((_, row) => (
            Array.from({ length: 3 }).map((_, col) => (
              <circle
                key={`dot-${row}-${col}`}
                cx={18 + col * 10}
                cy={18 + row * 10}
                r="3.2"
                fill="#111"
              />
            ))
          ))}
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
      <nav className="w-full max-w-full h-20 xl:h-28 text-white mx-auto flex justify-between items-center fixed top-0 z-50 transition-colors duration-500 transition-timing-function-ease-in-out bg-blackfade2 bg-opacity-40 backdrop-blur-md">
        <div className="w-full wrapper flex justify-between items-center mx-auto px-4 lg:px-6">
          <div className="logo">
            <Link href="/">
              <Image src="/media/log.jpg" alt="Techouar Logo" width={220} height={80} className="w-56 h-20 sm:w-72 sm:h-24 xl:w-96 xl:h-32 object-contain drop-shadow-lg" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block w-full mx-auto px-6 text-13 font-semibold">
            <ul className="flex justify-center flex-row items-center gap-4 xl:gap-8">
              <div>
                <li className="relative group">
                  <Link className="flex gap-2 hover:text-default transition-colors" href="/">HOME</Link>
                </li>
              </div>
              <div>
                <li className="relative group">
                  <Link className="flex gap-2 hover:text-default transition-colors" href="/projects">PROJECTS</Link>
                </li>
              </div>
              <div>
                <li className="relative group">
                  <Link className="flex gap-2 hover:text-default transition-colors" href="/pricing-plan">PRICING PLAN</Link>
                </li>
              </div>
              <div>
                <li className="relative group">
                  <Link className="flex gap-2 hover:text-default transition-colors" href="/blogs">BLOGS</Link>
                </li>
              </div>
              <div>
                <li className="relative group flex items-center gap-2">
                  SERVICES
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </span>
                  <div className="absolute top-10 border-0 min-w-[15rem] group-hover:border text-black bg-default w-full my-2 rounded max-h-0 overflow-hidden group-hover:max-h-[45rem] duration-300">
                    <ul className="py-1">
                      <Link href="/services/website-development"><li className="hover:bg-blackfade2 hover:text-white p-2.5 mx-2 rounded-md">WEBSITE DEVELOPMENT</li></Link>
                      <Link href="/services/app-development"><li className="hover:bg-blackfade2 hover:text-white p-2.5 mx-2 rounded-md">ANDROID & IOS DEVELOPMENT</li></Link>
                      <Link href="/services/digital-marketing"><li className="hover:bg-blackfade2 hover:text-white p-2.5 mx-2 rounded-md">DIGITAL MARKETING</li></Link>
                      <Link href="/services/graphic-designing"><li className="hover:bg-blackfade2 hover:text-white p-2.5 mx-2 rounded-md">GRAPHIC DESIGNING</li></Link>
                      <Link href="/services/social-media-marketing"><li className="hover:bg-blackfade2 hover:text-white p-2.5 mx-2 rounded-md">SOCIAL MEDIA MARKETING</li></Link>
                      <Link href="/services/content-writing"><li className="hover:bg-blackfade2 hover:text-white p-2.5 mx-2 rounded-md">CONTENT WRITING</li></Link>
                      <Link href="/services/search-engine-optimization"><li className="hover:bg-blackfade2 hover:text-white p-2.5 mx-2 rounded-md">SEARCH ENGINE OPTIMIZATION</li></Link>
                      <Link href="/services/software-development"><li className="hover:bg-blackfade2 hover:text-white p-2.5 mx-2 rounded-md">SOFTWARE DEVELOPMENT</li></Link>
                      <Link href="/services/cyber-security"><li className="hover:bg-blackfade2 hover:text-white p-2.5 mx-2 rounded-md">CYBER SECURITY</li></Link>
                      <Link href="/services/e-commerce"><li className="hover:bg-blackfade2 hover:text-white p-2.5 mx-2 rounded-md">E-COMMERCE</li></Link>
                      <Link href="/services/illustrations"><li className="hover:bg-blackfade2 hover:text-white p-2.5 mx-2 rounded-md">ILLUSTRATIONS</li></Link>
                      <Link href="/services/video-animation"><li className="hover:bg-blackfade2 hover:text-white p-2.5 mx-2 rounded-md">VIDEO ANIMATION</li></Link>
                      <Link href="/services/point-of-sale"><li className="hover:bg-blackfade2 hover:text-white p-2.5 mx-2 rounded-md">POINT OF SALE (POS)</li></Link>
                    </ul>
                  </div>
                </li>
              </div>
              <div>
                <li className="relative group">
                  <Link className="flex gap-2 hover:text-default transition-colors" href="/about">ABOUT US</Link>
                </li>
              </div>
              <div className="w-fit group jellyEffect overflow-hidden flex justify-center items-center gap-4 text-[16px] font-semibold text-blackfade2 px-6 py-3 bg-default ease-in rounded-full relative">
                <div className="absolute -left-96 top-0 w-96 h-12 rounded-full opacity-35 bg-gray-700 group-hover:translate-x-60  transition-transform group-hover:duration-1000 duration-500"></div>
                <div className="absolute -left-96 top-0 w-96 h-12 rounded-full opacity-25 bg-gray-800 group-hover:translate-x-60  transition-transform group-hover:duration-700 duration-700"></div>
                <div className="absolute -left-96 top-0 w-96 h-12 rounded-full opacity-15 bg-gray-900 group-hover:translate-x-60  transition-transform group-hover:duration-500 duration-1000"></div>
                <Link href="/contact">
                  <div className="group-hover:text-white relative z-10 flex items-center justify-center gap-4">Contact Us</div>
                </Link>
              </div>
            </ul>
          </div>
          
          {/* Contact Button - Visible on all screen sizes */}
          {/* Removed 9 dots button as requested */}
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex lg:hidden w-12 h-12 items-center justify-center rounded-lg cursor-pointer bg-[#ef4444] text-black transition-colors"
            style={{ background: '#ef4444' }}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mx-auto my-auto">
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
          <div className="lg:hidden absolute top-full left-0 w-full bg-blackfade2 bg-opacity-95 backdrop-blur-md border-t border-gray-700 overflow-y-auto max-h-screen">
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-white hover:text-default transition-colors py-2" onClick={() => setShowMobileMenu(false)}>
                HOME
              </Link>
              <Link href="/projects" className="block text-white hover:text-default transition-colors py-2" onClick={() => setShowMobileMenu(false)}>
                PROJECTS
              </Link>
              <Link href="/pricing-plan" className="block text-white hover:text-default transition-colors py-2" onClick={() => setShowMobileMenu(false)}>
                PRICING PLAN
              </Link>
              <Link href="/blogs" className="block text-white hover:text-default transition-colors py-2" onClick={() => setShowMobileMenu(false)}>
                BLOGS
              </Link>
              <Link href="/about" className="block text-white hover:text-default transition-colors py-2" onClick={() => setShowMobileMenu(false)}>
                ABOUT US
              </Link>
              <Link href="/contact" className="block text-white hover:text-default transition-colors py-2" onClick={() => setShowMobileMenu(false)}>
                CONTACT US
              </Link>
              {/* Mobile Services Dropdown */}
              <div className="space-y-2">
                <button
                  className={`w-full text-left font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${showMobileServices ? 'text-[#BFF747]' : 'text-white'}`}
                  style={{background: 'transparent'}}
                  onClick={() => setShowMobileServices((s) => !s)}
                  aria-expanded={showMobileServices}
                  aria-controls="mobile-services-list"
                >
                  SERVICES
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`ml-2 transition-transform ${showMobileServices ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"></path></svg>
                </button>
                {showMobileServices && (
                  <div id="mobile-services-list" className="pl-4 space-y-2">
                    <Link href="/services/website-development" className="block transition-colors py-1 rounded-md" style={{background:'#EF4444', color:'#222'}} onMouseOver={e => e.currentTarget.style.background='#f87171'} onMouseOut={e => e.currentTarget.style.background='#EF4444'} onClick={() => setShowMobileMenu(false)}>
                    Website Development
                  </Link>
                    <Link href="/services/app-development" className="block transition-colors py-1 rounded-md" style={{background:'#EF4444', color:'#222'}} onMouseOver={e => e.currentTarget.style.background='#f87171'} onMouseOut={e => e.currentTarget.style.background='#EF4444'} onClick={() => setShowMobileMenu(false)}>
                    Android & iOS Development
                  </Link>
                    <Link href="/services/digital-marketing" className="block transition-colors py-1 rounded-md" style={{background:'#EF4444', color:'#222'}} onMouseOver={e => e.currentTarget.style.background='#f87171'} onMouseOut={e => e.currentTarget.style.background='#EF4444'} onClick={() => setShowMobileMenu(false)}>
                    Digital Marketing
                  </Link>
                    <Link href="/services/graphic-designing" className="block transition-colors py-1 rounded-md" style={{background:'#EF4444', color:'#222'}} onMouseOver={e => e.currentTarget.style.background='#f87171'} onMouseOut={e => e.currentTarget.style.background='#EF4444'} onClick={() => setShowMobileMenu(false)}>
                    Graphic Designing
                  </Link>
                    <Link href="/services/social-media-marketing" className="block transition-colors py-1 rounded-md" style={{background:'#EF4444', color:'#222'}} onMouseOver={e => e.currentTarget.style.background='#f87171'} onMouseOut={e => e.currentTarget.style.background='#EF4444'} onClick={() => setShowMobileMenu(false)}>
                    Social Media Marketing
                  </Link>
                    <Link href="/services/content-writing" className="block transition-colors py-1 rounded-md" style={{background:'#EF4444', color:'#222'}} onMouseOver={e => e.currentTarget.style.background='#f87171'} onMouseOut={e => e.currentTarget.style.background='#EF4444'} onClick={() => setShowMobileMenu(false)}>
                    Content Writing
                  </Link>
                    <Link href="/services/search-engine-optimization" className="block transition-colors py-1 rounded-md" style={{background:'#EF4444', color:'#222'}} onMouseOver={e => e.currentTarget.style.background='#f87171'} onMouseOut={e => e.currentTarget.style.background='#EF4444'} onClick={() => setShowMobileMenu(false)}>
                    Search Engine Optimization
                  </Link>
                    <Link href="/services/software-development" className="block transition-colors py-1 rounded-md" style={{background:'#EF4444', color:'#222'}} onMouseOver={e => e.currentTarget.style.background='#f87171'} onMouseOut={e => e.currentTarget.style.background='#EF4444'} onClick={() => setShowMobileMenu(false)}>
                    Software Development
                  </Link>
                    <Link href="/services/cyber-security" className="block transition-colors py-1 rounded-md" style={{background:'#EF4444', color:'#222'}} onMouseOver={e => e.currentTarget.style.background='#f87171'} onMouseOut={e => e.currentTarget.style.background='#EF4444'} onClick={() => setShowMobileMenu(false)}>
                    Cyber Security
                  </Link>
                    <Link href="/services/e-commerce" className="block transition-colors py-1 rounded-md" style={{background:'#EF4444', color:'#222'}} onMouseOver={e => e.currentTarget.style.background='#f87171'} onMouseOut={e => e.currentTarget.style.background='#EF4444'} onClick={() => setShowMobileMenu(false)}>
                    E-Commerce
                  </Link>
                    <Link href="/services/illustrations" className="block transition-colors py-1 rounded-md" style={{background:'#EF4444', color:'#222'}} onMouseOver={e => e.currentTarget.style.background='#f87171'} onMouseOut={e => e.currentTarget.style.background='#EF4444'} onClick={() => setShowMobileMenu(false)}>
                    Illustrations
                  </Link>
                    <Link href="/services/video-animation" className="block transition-colors py-1 rounded-md" style={{background:'#EF4444', color:'#222'}} onMouseOver={e => e.currentTarget.style.background='#f87171'} onMouseOut={e => e.currentTarget.style.background='#EF4444'} onClick={() => setShowMobileMenu(false)}>
                    Video Animation
                  </Link>
                    <Link href="/services/point-of-sale" className="block transition-colors py-1 rounded-md" style={{background:'#EF4444', color:'#222'}} onMouseOver={e => e.currentTarget.style.background='#f87171'} onMouseOut={e => e.currentTarget.style.background='#EF4444'} onClick={() => setShowMobileMenu(false)}>
                    Point of Sale (POS)
                  </Link>
                </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
      <ContactSidebar open={showContact} onClose={() => setShowContact(false)} />
    </>
  );
} 