"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32 bg-black">
      <div className="relative max-w-[90rem] mx-auto sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Small Heading */}
          <span className="text-white text-3xl md:text-4xl font-bold uppercase tracking-widest">
            Let&apos;s Collaborate
          </span>

          {/* Main Text */}
          <div className="relative inline-flex flex-col items-center">
            <h2 className="text-5xl lg:text-[180px] font-bold text-white leading-loose tracking-tight">
              LET&apos;S WORK
            </h2>

            {/* Button */}
            <div className="absolute -top-14 lg:top-52 my-6 md:my-8 z-10 group">
              <Link
                href="/contact"
                className="flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 md:w-40 md:h-40 
  bg-red-500 rounded-full transition-all duration-300 
  shadow-[0_0_45px_rgba(239,68,68,1)] 
  hover:shadow-[0_0_35px_rgba(239,68,68,1)]"
              >
                <div className="flex flex-col items-center text-sm lg:text-lg font-semibold text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                  Get In Touch
                </div>
              </Link>
            </div>

            <h2 className="text-5xl lg:text-[180px] font-bold text-white leading-[0.95] tracking-tight">
              TOGETHER
            </h2>
          </div>
        </div>
      </div>

      {/* Background Rotating Image (smaller size) */}
      <div className="absolute bottom-0 -left-16 sm:-left-28 z-0 overflow-hidden">
        <Image
          src="/media/CTA.61aa7579.png"
          alt="Astrivix Sphere Image"
          width={600}
          height={600}
          className="w-[24rem] h-[24rem] animate-spin-grow"
        />
      </div>
    </section>
  );
}
