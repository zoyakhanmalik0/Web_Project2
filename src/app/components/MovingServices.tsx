"use client";

import React from "react";

const ScrollingServicesBar = () => {
  return (
    <section className="w-full overflow-hidden min-h-[100px] bg-default flex items-center justify-center py-4">
      <div
        className="whitespace-nowrap flex items-center gap-12 text-black font-bold text-4xl md:text-5xl"
        style={{
          animation: "marquee 60s linear infinite",
        }}
      >
        {/* First Set of Content */}
        <span>Point of Sale (POS)</span>
        <span className="mx-8">*</span>
        <span>Cyber Security</span>
        <span className="mx-8">*</span>
        <span>SEO Content Writing</span>
        <span className="mx-8">*</span>
        <span>IOS/Android App Development</span>
        <span className="mx-8">*</span>
        <span>Website Development</span>
        <span className="mx-8">*</span>
        <span>Digital Marketing</span>
        <span className="mx-8">*</span>
        <span>Graphic Designing</span>
        <span className="mx-8">*</span>
        <span>Content Writing</span>
        <span className="mx-8">*</span>
        <span>Search Engine Optimization (SEO)</span>
        <span className="mx-8">*</span>

        {/* Duplicate for seamless loop */}
        <span>Point of Sale (POS)</span>
        <span className="mx-8">*</span>
        <span>Cyber Security</span>
        <span className="mx-8">*</span>
        <span>SEO Content Writing</span>
        <span className="mx-8">*</span>
        <span>IOS/Android App Development</span>
        <span className="mx-8">*</span>
        <span>Website Development</span>
        <span className="mx-8">*</span>
        <span>Digital Marketing</span>
        <span className="mx-8">*</span>
        <span>Graphic Designing</span>
        <span className="mx-8">*</span>
        <span>Content Writing</span>
        <span className="mx-8">*</span>
        <span>Search Engine Optimization (SEO)</span>
        <span className="mx-8">*</span>
      </div>

      {/* CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ScrollingServicesBar;
