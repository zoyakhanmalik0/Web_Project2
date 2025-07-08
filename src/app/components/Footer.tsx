"use client";
import React from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blackfade2 text-white py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center lg:text-left">
          {/* Company Info */}
          <div className="space-y-4 lg:space-y-6 flex flex-col items-center lg:items-start">
            <div className="flex flex-col items-center lg:flex-row lg:items-center gap-3">
              <Image src="/media/log.jpg" alt="Techouar Logo" width={120} height={40} className="w-40 h-auto sm:w-48 xl:w-60 object-contain drop-shadow-lg" />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-xs lg:max-w-none mx-auto lg:mx-0">
              We are a creative digital agency specializing in web development, mobile apps, graphic design, and digital marketing solutions.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link href="https://www.facebook.com/share/1B7PYddHGv/?mibextid=qi2Omg" className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black sm:w-5 sm:h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/astrivix/" className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black sm:w-5 sm:h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/acciobyte?igsh=MnA0eWo0NzkzbHE5" className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black sm:w-5 sm:h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 lg:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold text-red-500 mb-2">Services</h4>
            <ul className="space-y-2 lg:space-y-3">
              <li><Link href="/services/website-development" className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base">Website Development</Link></li>
              <li><Link href="/services/app-development" className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base">App Development</Link></li>
              <li><Link href="/services/digital-marketing" className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base">Digital Marketing</Link></li>
              <li><Link href="/services/graphic-designing" className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base">Graphic Design</Link></li>
              <li><Link href="/services/content-writing" className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base">Content Writing</Link></li>
              <li><Link href="/services/cyber-security" className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base">Cyber Security</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold text-red-500 mb-2">Quick Links</h4>
            <ul className="space-y-2 lg:space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base">About Us</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base">Projects</Link></li>
              <li><Link href="/blogs" className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base">Blog</Link></li>
              <li><Link href="/pricing-plan" className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base">Contact</Link></li>
              <li><Link href="/terms-and-condition" className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 lg:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold text-red-500 mb-2">Contact Info</h4>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-1 flex-shrink-0 sm:w-5 sm:h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <p className="text-gray-400 text-sm sm:text-base">Phone</p>
                  <p className="text-white text-sm sm:text-base">(20) 8855-314</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-1 flex-shrink-0 sm:w-5 sm:h-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <p className="text-gray-400 text-sm sm:text-base">Email</p>
                  <p className="text-white text-sm sm:text-base break-all">info@acciobyte.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-1 flex-shrink-0 sm:w-5 sm:h-5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p className="text-gray-400 text-sm sm:text-base">Address</p>
                  <p className="text-white text-sm sm:text-base">123 Business Street<br />Digital City, DC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">© 2024 TECHGUAR. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link href="/privacy-and-policy" className="text-gray-400 hover:text-red-500 text-xs sm:text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-condition" className="text-gray-400 hover:text-red-500 text-xs sm:text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 