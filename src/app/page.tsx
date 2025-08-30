"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import "../../public/site.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ExpertiseCard from "./components/ExpertiseCard";
import HowItWorksSection from "./components/HowItWorksSection";
import CTA from "./components/CTASection";
import NEWS from "./components/lastedtnews";
import Benifit from "./components/keyBenifit";
import Ratings from "./components/Rating";
import Projects from "./components/Project";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import 'aos/dist/aos.css';
import AOS from 'aos';
import RotatingText from "./components/RotatingText";
import DonutBackground from "./components/DonutBackground";
import { color } from "framer-motion";

// Cursor Following Dot Component
function CursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e : MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-[9999] transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: position.x - 8,
        top: position.y - 8,
        transform: 'translate(0, 0)',
      }}
    />
  );
}

// Generic Icon for services
const DefaultServiceIcon = () => (
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round" 
  className="lucide lucide-activity w-16 h-16 sm:w-20 sm:h-20 text-red-500 stroke-[1.5]"
>
  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>

);

const SERVICES = [
  {
    name: 'Website Development',
    description: "We build responsive, fast, and secure websites tailored to your brand's needs, from eCommerce stores to custom web applications.",
    icon: <DefaultServiceIcon />,
  },
  {
    name: 'Point of Sale (POS)',
    description: "Modern POS solutions to streamline your sales, inventory, and customer management for retail and service businesses.",
    icon: <DefaultServiceIcon />,
  },
  {
    name: 'Cyber Security',
    description: "Protect your digital assets with our comprehensive cybersecurity services, including threat analysis and prevention.",
    icon: <DefaultServiceIcon />,
  },
  {
    name: 'IOS/Android App Development',
    description: "We design and develop high-performance mobile applications for both iOS and Android platforms to engage your users.",
    icon: <DefaultServiceIcon />,
  },
  {
    name: 'Digital Marketing',
    description: "Boost your online presence with our data-driven digital marketing strategies, including social media and PPC campaigns.",
    icon: <DefaultServiceIcon />,
  },
  {
    name: 'SEO Content Writing',
    description: "High-quality, SEO-optimized content that drives organic traffic and establishes your brand as an industry authority.",
    icon: <DefaultServiceIcon />,
  },
];


interface RotatingTextProps {
  texts: string[];          // must be an array of strings
  fontSize?: string | number; // optional: can be CSS string ("1.5rem") or number (16)
}



const ScrollingServicesBar = () => {
  return (
    <div className="w-full overflow-hidden min-h-[100px] bg-default flex items-center justify-center py-4">
      <div
        className="flex items-center gap-12 text-4xl font-bold text-black whitespace-nowrap md:text-5xl"
        style={{
          animation: 'marquee 60s linear infinite',
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

        {/* --- DUPLICATED Set of Content for seamless loop --- */}
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
    </div>
  );
};


export default function Home() {
  // CORRECTED: Explicitly type the ref for better code completion and type safety.
  const addressRef = useRef<HTMLElement>(null);
  const [isBlack, setIsBlack] = useState(false);


  const handleButtonClick = () => {
    setIsBlack(true); // This state isn't used visually but is kept as per original code.
    // The scrollIntoView function will now work because addressRef is attached to a section.
    addressRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TechGuar</title>
        <meta name="description" content="Acciobyte offers expert web and mobile app development, creative graphic design, and professional penetration testing services. Build secure, stunning, and high-performing digital solutions with our skilled team." />
        <meta name="author" content="Acciobyte" />
        <meta name="keywords" content="web development services,mobile app development,graphic design agency,penetration testing company,Next.js developers,TypeScript development,UI/UX design,cybersecurity services,Acciobyte,tailored software solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:title" content="Acciobyte – Web, App, Design &amp; Pen Testing Experts" />
        <meta property="og:description" content="Build stunning websites and apps, get custom graphics, and ensure cybersecurity with Acciobyte's full-service digital solutions." />
        <meta property="og:url" content="https://www.acciobyte.com" />
        <meta property="og:site_name" content="Acciobyte" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Acciobyte – Web, App, Design &amp; Pen Testing Experts" />
        <meta name="twitter:description" content="Build stunning websites and apps, get custom graphics, and ensure cybersecurity with Acciobyte's full-service digital solutions." />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
      </Head>

      {/* Cursor Following Dot */}
      <CursorDot />

      {/* Navigation */}
      <Navigation />

      {/* HERO SECTION */}
      <DonutBackground density="high" className="flex items-center min-h-screen overflow-x-hidden bg-black bg-center bg-contain" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
  <div className="relative w-full h-full pb-0 bg-center bg-no-repeat bg-cover wrapper sm:pb-0 lg:pb-0" style={{ backgroundImage: 'url(/media/hero_bg3.061ff69e.jpg)' }}>
          <div className="absolute inset-0 bg-black/50"></div>
<<<<<<< HEAD
          <div className="relative z-10 container mx-auto px-4 mt-5 lg:px-8">
          <div className="text-5xl md:text-[5.5rem] text-center lg:text-left -mt-8">
=======
          <div className="container relative z-10 px-4 mx-auto mt-5 lg:px-8">
            <div className="text-5xl md:text-[5.5rem] text-center lg:text-left">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
              <h2 className="text-white">Innovative solutions for&nbsp;</h2>
              <div className="relative flex flex-wrap w-full h-24 overflow-hidden text-center break-words whitespace-normal lg:text-left md:h-32">
                <RotatingText
                  texts={[
                    'IOS/Android App Development',
                    'Website Development',
                    'Digital Marketing',
                    'Graphic Designing',
                    'Content Writing',
                  ]}
                  fontSize="4vw"
                />
              </div>
            </div>

<<<<<<< HEAD
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 mt-16">
              <div className="w-fit flex items-center">
=======
            <div className="relative flex flex-col items-center justify-between gap-8 mt-12 lg:flex-row">
              <div className="flex items-center w-fit">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
                <button
                  className="flex items-center justify-center w-24 h-24 text-black transition-colors rounded-full bg-default hover:bg-default/90"
                  aria-label="Play"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 ml-1 lucide lucide-play"
                  >
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                </button>
                {/* CORRECTED: Wrapped the spinning circle in a button and added the onClick handler */}
                <button onClick={handleButtonClick} aria-label="Scroll to about section" className="cursor-pointer">
                    <div className="relative hidden lg:block" style={{ width: "110px", height: "110px" }}>
                        <div className="absolute inset-0 -left-14" style={{ animation: "spin 15s linear infinite" }}>
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                            <defs>
                                <path
                                id="circle"
                                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                ></path>
                            </defs>
                            <text fill="#ffffff" fontSize="9">
                                <textPath href="#circle" className="uppercase tracking-[1px]">
                                Learn More • Learn More • Learn More •
                                </textPath>
                            </text>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-6 h-6 text-white lucide lucide-arrow-down"
                            >
                                <path d="M12 5v14"></path>
                                <path d="m19 12-7 7-7-7"></path>
                            </svg>
                            </div>
                        </div>
                    </div>
                </button>
              </div>
<<<<<<< HEAD
              <div className="flex flex-col gap-12">
                <p className="text-white lg:text-22 text-center lg:text-justify max-w-4xl">
=======
              <div className="flex flex-col gap-5">
                <p className="max-w-4xl text-center text-white lg:text-22 lg:text-justify">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
                  At our Creative Digital Agency, we bring your ideas to life by crafting
                  engaging, impactful digital experiences that captivate audiences and drive
                  results. From innovative web design to compelling content and cutting-edge
                  digital strategies.
                </p>
                <Link
                  className="flex justify-center gap-4 mt-4 lg:justify-start group"
                  href="/contact"
                >
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-gray-600 p-7 rounded-full lg:!text-18 font-bold">
                    Get In Touch
                  </button>
                  <span className="w-14 h-14 rounded-full flex items-center justify-center bg-default transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right text-22 !text-black rounded-full"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
  </DonutBackground>
  <ScrollingServicesBar />
      {/* ABOUT/AGENCY SECTION */}
      {/* CORRECTED: Added ref={addressRef} to this section to make it the scroll target */}
      <DonutBackground density="medium">
        <section ref={addressRef} className="relative min-h-screen py-20 overflow-visible lg:py-40">
          <div className="container relative mx-auto !z-20">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              <div
                className="self-start text-center lg:sticky lg:top-24 h-fit lg:text-start"
                style={{ opacity: 1, transform: "none" }}
              >
                <div data-aos="fade-right" className="flex items-center justify-center w-full gap-4 font-bold text-default text-18 lg:justify-start my-9">
                  <img
                    src="/media/asterisk_default.4355d764.png"
                    alt="Acciobyte Asteric Image"
                    className="h-5  text-red-500w-5 filter-red"
                  />
                  <h4>ABOUT AGENCY</h4>
                </div>
                <h2 data-aos="fade-right" className="mb-4 text-4xl text-white md:text-5xl lg:text-6xl">
                Crafting <span className="font-bold text-default">unique digital</span>
              </h2>
              <p data-aos="fade-right" className="mb-8 text-white md:text-5xl lg:text-6xl">
                experiences that elevate your brand
              </p>
              <div data-aos="fade-right" className="flex justify-center gap-4 mt-4 lg:justify-start group">
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-gray-600 p-7 rounded-full lg:!text-18 font-bold">

                  Contact Us
                </button>
                </Link>
                <span className="w-14 h-14 rounded-full flex items-center justify-center bg-default transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right text-22 !text-black rounded-full"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="relative z-10 space-y-8" style={{ opacity: 1 }}>
              <div className="hidden lg:block absolute -left-[30px] top-0 w-[2px] h-full bg-white/20"></div>

              {/* About Items */}
              {[
                {
                  icon: "/media/mission.25c4c757.svg",
                  title: "Your Success, Our Mission",
                  description: "We measure our success through the achievements of our clients. With a results-driven approach and a commitment to quality, we deliver digital solutions that create meaningful impact."
                },
                {
                  icon: "/media/creators.da5dacdb.svg",
                  title: "Creators Of Digital Excellence",
                  description: "Driven by innovation and excellence, we reimagine digital possibilities. Our team builds solutions that not only fulfill your vision but also elevate your brand to the next level."
                },
                {
                  icon: "/media/innovation.257d9eb9.svg",
                  title: "Innovating the digital landscape",
                  description: "At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also exceed your brand."
                },
                {
                  icon: "/media/brands.6176527f.svg",
                  title: "Helping Brands Thrive Online",
                  description: "Our goal is simple: empower brands to grow and succeed in the digital world. Through strong client partnerships and custom strategies, we deliver results that matter."
                }
              ].map((item, index) => (
                <div key={index} className="relative flex gap-6 cursor-pointer group" style={{ opacity: 1, transform: "none" }}>
                  <div className="hidden lg:block absolute -left-[40px] top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                    <img src="/media/dot.5c102e3c.svg" alt="Acciobyte Dot Service" className="filter-red" />
                  </div>
                  <div className="flex flex-col gap-5">
                    <img
                      src={item.icon}
                      alt="Acciobyte Service Icon"
                      className="w-20 h-20 p-3 rounded-lg bg-default"
                    />
                    <h3 className="mb-2 text-xl font-bold text-white transition-colors lg:text-3xl group-hover:text-default">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-justify text-white lg:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute z-0 bottom-20 -left-32">
          <img
            src="/media/sphere.4b56a70e.png"
            alt="Acciobyte Sphere Image"
            className="w-96 h-96 animate-spin-slow filter-gray"
          />
        </div>
      </section>
      </DonutBackground>

 {/* OUR SERVICES SECTION */}
<section 
<<<<<<< HEAD
  className="relative min-h-screen py-12 sm:py-16 lg:py-20 bg-black overflow-y-scroll no-scrollbar overflow-x-hidden"
>
  {/* 🔴 Top Right Ring */}
  <div
    className="absolute top-10 right-[-150px] z-0 pointer-events-none"
    style={{ width: "380px", height: "380px" }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "30px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 8px 2px #ef4444",
      }}
    />
  </div>
    {/* 🔴 Bottom Left Ring */}
  <div
    className="absolute bottom-[5px] left-[-120px] z-0 pointer-events-none"
    style={{ width: "380px", height: "380px" }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "30px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 8px 2px #ef4444",
      }}
    />
  </div>
  <div 
    className="container relative mx-auto z-20 px-4 lg:px-6" 
    data-aos="fade-up"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div 
        data-aos="fade-right" 
        className="h-fit self-start text-center lg:text-start space-y-4 transition-all duration-700"
      >
        <div className="w-full text-red-500 text-base sm:text-18 font-bold flex items-center justify-center lg:justify-start gap-4 my-6 sm:my-9">
=======
  className="relative min-h-screen py-12 overflow-x-hidden overflow-y-scroll bg-black sm:py-16 lg:py-20 no-scrollbar"
>
  {/* Glowing Red Ring Background */}
  {/* Left blurred ring */}
  <div className="absolute top-1/4 left-[-200px] z-0 pointer-events-none" style={{width:'600px',height:'600px'}}>
    <div style={{
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '40px solid rgba(239,68,68,0.45)',
      filter: 'blur(32px) brightness(0.6)',
      boxShadow: '0 0 3px 0.5px #ef4444, 0 0 6px 1px #ef4444',
      boxSizing: 'border-box',
    }} />
  </div>
  {/* Right blurred ring */}
  <div className="absolute top-1/2 right-[-200px] z-0 pointer-events-none" style={{width:'600px',height:'600px'}}>
    <div style={{
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '40px solid rgba(239,68,68,0.45)',
      filter: 'blur(32px) brightness(0.6)',
      boxShadow: '0 0 3px 0.5px #ef4444, 0 0 6px 1px #ef4444',
      boxSizing: 'border-box',
      position: 'relative',
      top: '-140px', // move ring further upward
      left: '-80px', // move ring slightly left
    }} />
  </div>
  <div 
    className="container relative z-20 px-4 mx-auto lg:px-6" 
    data-aos="fade-up"
  >
    <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div 
        data-aos="fade-right" 
        className="self-start space-y-4 text-center transition-all duration-700 h-fit lg:text-start"
      >
        <div className="flex items-center justify-center w-full gap-4 my-6 text-base font-bold text-red-500 sm:text-18 lg:justify-start sm:my-9">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
          <img 
            src="/media/asterisk_default.4355d764.png" 
            alt="Astrivix Asteric Image" 
            className="w-4 h-4 sm:w-5 sm:h-5 filter-red" 
          />
          <h4>OUR SERVICES</h4>
        </div>
<<<<<<< HEAD
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
          Our <span className="text-red-500 font-bold">digital services</span>
        </h2>
        <p className="text-2xl sm:text-3xl md:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8">
=======
        <h2 className="mb-4 text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Our <span className="font-bold text-red-500">digital services</span>
        </h2>
        <p className="mb-6 text-2xl text-white sm:text-3xl md:text-4xl md:text-5xl lg:text-6xl sm:mb-8">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
          to grow your brand
        </p>
      </div>

      <div 
        className="relative transition-all duration-700" 
        data-aos="fade-up"
      >
<<<<<<< HEAD
        <div className="relative flex flex-col gap-4 sm:gap-6 lg:py-24 group cursor-pointer">
          <div className="flex flex-col gap-4 sm:gap-5">
            <p className="text-white text-center lg:text-justify leading-relaxed text-base sm:text-lg">
=======
        <div className="relative flex flex-col gap-4 cursor-pointer sm:gap-6 lg:py-24 group">
          <div className="flex flex-col gap-4 sm:gap-5">
            <p className="text-base leading-relaxed text-center text-white lg:text-justify sm:text-lg">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
              Join our creative community to collaborate, innovate, and thrive together. We welcome passionate individuals eager to make.
            </p>
          </div>
          <Link className="mt-4 flex !justify-center lg:!justify-start gap-4 group" href="/services">
<<<<<<< HEAD
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-gray-600 p-7 rounded-full lg:!text-18 font-bold">
                  All Services
=======
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-2 border-gray-400 bg-gray-700 text-white rounded-full px-8 py-2 font-semibold min-w-[160px] shadow-md transition-all duration-300">
              All Services
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
            </button>
            <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-default transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className="lucide lucide-arrow-right text-lg sm:text-22 !text-black rounded-full"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>

<<<<<<< HEAD
    <div className="mx-auto py-12 sm:py-16 lg:py-20 transition-all duration-800" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
=======
    <div className="py-12 mx-auto transition-all duration-700 sm:py-16 lg:py-20" data-aos="fade-up">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
        {SERVICES.map((service, idx) => (
          <div 
            key={service.name} 
            className="group relative cursor-pointer bg-[#111] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 hover:bg-[#151515] transition-colors duration-300" 
            data-aos="fade-up"
          >
<<<<<<< HEAD
            <div className="flex justify-between items-start mb-12 sm:mb-20">
=======
            <div className="flex items-start justify-between mb-12 sm:mb-20">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
              {service.icon}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className="lucide lucide-arrow-up-right w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:rotate-[45deg] transition-all duration-300"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </div>
<<<<<<< HEAD
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              {service.name}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
=======
            <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl sm:mb-4">
              {service.name}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
              {service.description}
            </p>
          </div>
        ))}
      </div>

<<<<<<< HEAD
      <div className="text-center mt-12 sm:mt-16 lg:mt-20 transition-all duration-700" data-aos="fade-up">
        <p className="text-white text-lg sm:text-xl">
=======
      <div className="mt-12 text-center transition-all duration-700 sm:mt-16 lg:mt-20" data-aos="fade-up">
        <p className="text-lg text-white sm:text-xl">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
          Let&apos;s make something great work together.{" "}
          <Link
            className="text-red-500 hover:underline underline-offset-4"
            href="/pricing-plan"
            style={{ color: "red" }}
          >
            <b>Get Free Quote</b>
          </Link>
        </p>
      </div>
    </div>
  </div>
</section>


      <ExpertiseCard />

      {/* WHY CHOOSE US/BENEFITS SECTION */}
<<<<<<< HEAD
      <section className="relative min-h-screen overflow-hidden py-12 sm:py-16 lg:py-20 bg-black overflow-x-hidden">
          {/* 🔴 Bottom Left Ring */}
  <div
    className="absolute bottom-[50px] left-[-120px] z-0 pointer-events-none"
    style={{ width: "380px", height: "380px" }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "30px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 8px 2px #ef4444",
      }}
    />
  </div>
        <div className="container relative mx-auto z-20 px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-7 gap-8 lg:gap-0">
            <div data-aos="fade-up" className="space-y-4 sm:space-y-6">
              <div className="w-full text-red-500 text-xl sm:text-2xl font-bold flex items-center justify-center lg:justify-start gap-5 my-8 sm:my-12">
            <img
              src="/media/asterisk_default.4355d764.png"
              alt="Astrivix Asteric Image"
              className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
            />
            <h4>WHY CHOOSE</h4>
          </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl !leading-normal text-white font-light">Expertise for <span className="text-red-500 font-semibold">your digital</span><br />growth journey</h2>
=======
      <section className="relative min-h-screen py-12 overflow-hidden overflow-x-hidden bg-black sm:py-16 lg:py-20">
        {/* Left blurred ring */}
        <div className="absolute top-1/4 left-[-200px] z-0 pointer-events-none" style={{width:'600px',height:'600px'}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '40px solid rgba(239,68,68,0.45)',
            filter: 'blur(32px) brightness(1.3)',
            boxSizing: 'border-box',
          }} />
        </div>
        {/* Right blurred ring */}
        <div className="absolute top-1/2 right-[-200px] z-0 pointer-events-none" style={{width:'600px',height:'600px'}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '40px solid rgba(239,68,68,0.45)',
            filter: 'blur(32px) brightness(1.3)',
            boxSizing: 'border-box',
          }} />
        </div>
        <div className="container relative z-20 px-4 mx-auto lg:px-6">
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 mb-7 lg:gap-0">
            <div data-aos="fade-up" className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2">
                <img src="/media/asterisk_default.4355d764.png" alt="Astrivix Asteric" className="w-4 h-4 sm:w-5 sm:h-5 filter-red" />
                <span className="text-sm font-semibold tracking-wider text-white uppercase sm:text-base">WHY CHOOSE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl !leading-normal text-white font-light">Expertise for <span className="font-semibold text-red-500">your digital</span><br />growth journey</h2>
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
            </div>
            <p data-aos="fade-up" className="max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Our dedicated team is committed to understanding your unique needs, ensuring that we provide innovative strategies that drive results. With a focus on quality and integrity.
            </p>
          </div>
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-6">
                {[
                  {
                    title: "Data-Driven Approach",
                    description: "We leverage data and insights to make informed decisions that lead to more effective and efficient solutions."
                  },
                  {
                    title: "Competitive Pricing",
                    description: "We offer our top-quality services at competitive prices, providing you with great value for your investment."
                  },
                  {
                    title: "Ethical Business Practices",
                    description: "We maintain the highest level of professionalism and ethical standards in all our business dealings."
                  }
                ].map((item, index) => (
                  <div key={index} data-aos="fade-right" className="relative p-6 overflow-hidden bg-transparent border border-gray-800 cursor-pointer sm:p-8 rounded-2xl sm:rounded-3xl group">
                    <div className="absolute inset-0 transition-transform duration-700 ease-in-out translate-x-0 bg-[length:130%_100%] bg-no-repeat" style={{ backgroundImage: 'linear-gradient(to right, #1a1a1a 0%, #1a1a1a 40%, rgba(26,26,26,0.9) 55%, rgba(26,26,26,0.7) 60%, rgba(26,26,26,0.5) 65%, rgba(26,26,26,0.3) 70%, rgba(26,26,26,0.1) 75%, transparent 90%)' }}></div>
                    <div className="relative z-10">
                      <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl lg:text-2xl sm:mb-4">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-400 sm:text-base">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center space-y-8 lg:sticky lg:top-20">
              <div className="relative flex items-center justify-center w-full h-full overflow-hidden bg-black rounded-2xl sm:rounded-3xl" style={{ minHeight: '400px', minWidth: '400px', zIndex: 2 }}>
                <Image
                  src="/1.png"
                  alt="Business Meeting"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full rounded-2xl sm:rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-20 right-[-22%] translate-x-1/2 -z-10 hidden pointer-events-none select-none lg:block">
            <img src="/media/hex.eced7c60.png" alt="Astrivix Sphere Image" className="w-80 h-80 animate-spin-grow filter-gray" />
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA SECTION */}
<<<<<<< HEAD
<section className="relative py-20 overflow-hidden">
    {/* 🔴 Bottom Left Ring */}
  <div
    className="absolute bottom-[5px] left-[-120px] z-0 pointer-events-none"
    style={{ width: "360px", height: "360px" }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "30px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 8px 2px #ef4444",
      }}
    />
  </div>
  <div className="container mx-auto">
    <div className="grid lg:grid-cols-3 gap-3 mb-20">
      <div className="col-span-2">
        <div className="w-full text-red-500 text-xl sm:text-2xl font-bold flex items-center justify-center lg:justify-start gap-5 my-8 sm:my-12">
            <img
              src="/media/asterisk_default.4355d764.png"
              alt="Astrivix Asteric Image"
              className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
            />
            <h4>JOIN AGENCY</h4>
=======
      <section className="relative py-20 overflow-hidden">
        {/* Blurred Rings for JOIN AGENCY Section */}
        <div className="absolute top-[10%] right-[-320px] z-0" style={{width:'600px',height:'600px'}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '40px solid #ef4444',
            filter: 'blur(32px) brightness(0.3)',
            boxShadow: '0 0 20px 5px #ef4444, 0 0 40px 10px #ef4444',
            boxSizing: 'border-box',
            position: 'relative',
            top: '-60px', // move ring upward
            left: '-60px', // move ring slightly left
          }} />
        </div>
        <div className="container mx-auto">
          <div className="grid gap-3 mb-20 lg:grid-cols-3">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6" style={{ opacity: 1, transform: 'none' }}>
                <span className="text-2xl text-default">*</span>
                <span className="text-sm tracking-widest text-red-500">JOIN AGENCY</span>
              </div>
              <h2 data-aos="fade-up" className="text-4xl font-light text-white lg:text-6xl" style={{ opacity: 1, transform: 'none' }}>
                Join our <span className="text-default">agency</span> of creative innovators
              </h2>
            </div>
            <div className="col-span-1 text-gray-400 lg:text-lg lg:pt-16" style={{ opacity: 1, transform: 'none' }}>
              <p>Join our creative community to collaborate, innovate, and thrive together</p>
              <p>We welcome passionate individuals eager to make.</p>
            </div>
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
          </div>
        <h2
          data-aos="fade-up"
          className="text-4xl lg:text-6xl text-white font-light"
        >
          Join our <span className="text-default">agency</span> of creative innovators
        </h2>
      </div>
      <div className="lg:text-lg text-gray-400 lg:pt-20 col-span-1">
        <p>Join our creative community to collaborate, innovate, and thrive together</p>
        <p>We welcome passionate individuals eager to make.</p>
      </div>
    </div>

<<<<<<< HEAD
    <div className="relative">
      {/* Green dashed line */}
      <svg
        className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 hidden lg:block"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50"
          fill="none"
          stroke="#86c232"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="opacity-20"
        ></path>
      </svg>

      {/* Social Media Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 relative z-10">
        {[
          {
            name: "Facebook",
            username: "@acciobyte",
            url: "https://www.facebook.com/share/1B7PYddHGv/?mibextid=qi2Omg",
            icon: "facebook",
          },
          {
            name: "LinkedIn",
            username: "@acciobyte",
            url: "https://www.linkedin.com/company/astrivix/",
            icon: "linkedin",
          },
          {
            name: "Instagram",
            username: "@acciobyte",
            url: "https://www.instagram.com/acciobyte?igsh=MnA0eWo0NzkzbHE5",
            icon: "instagram",
          },
        ].map((social, index) => (
          <div key={index}>
            <a
              data-aos="fade-up"
              className="group flex flex-col gap-3 items-center justify-center text-center"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative flex gap-4 items-center justify-center border border-gray-700 px-10 py-6 rounded-full transition-colors duration-300 group-hover:border-red-500">

                {/* Circle with social icon */}
                <div className="absolute -top-7 -left-5 w-16 h-16 rounded-full bg-default flex items-center justify-center mb-6 overflow-hidden transition-colors duration-500 group-hover:bg-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-${social.icon} w-8 h-8 text-white`}
                  >
                    {social.icon === "facebook" && (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    )}
                    {social.icon === "linkedin" && (
                      <>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </>
                    )}
                    {social.icon === "instagram" && (
                      <>
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </>
                    )}
                  </svg>
=======
          <div className="relative">
            <svg className="absolute left-0 hidden w-full h-20 -translate-y-1/2 top-1/2 lg:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path d="M0,50 Q300,0 600,50 T1200,50" fill="none" stroke="#86c232" strokeWidth="1" strokeDasharray="5,5" className="opacity-20"></path>
            </svg>

            <div className="relative z-10 grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {[
                { name: "Facebook", username: "@acciobyte", url: "https://www.facebook.com/share/1B7PYddHGv/?mibextid=qi2Omg", icon: "facebook" },
                { name: "LinkedIn", username: "@acciobyte", url: "https://www.linkedin.com/company/astrivix/", icon: "linkedin" },
                { name: "Instagram", username: "@acciobyte", url: "https://www.instagram.com/acciobyte?igsh=MnA0eWo0NzkzbHE5", icon: "instagram" }
              ].map((social, index) => (
                <div key={index} style={{ opacity: 1, transform: 'none' }}>
                  <a data-aos="fade-up" className="flex flex-col items-center justify-center gap-3 text-center group" href={social.url} target="_blank" rel="noopener noreferrer">
                    <div className="relative flex gap-4 !items-center justify-center border border-gray-700 px-10 py-6 rounded-full">
                      <div className="absolute flex items-center justify-center w-16 h-16 mb-6 overflow-hidden rounded-full -top-7 -left-5 bg-default">
                        <div className="absolute inset-0 bg-black -scale-100 !border-none origin-bottom-right rounded-full transition-transform duration-500 ease-out group-hover:scale-100"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-${social.icon} relative w-8 h-8 text-black transition-colors duration-700 ease-out text-white group-hover:text-white`}>
                          {social.icon === 'facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>}
                          {social.icon === 'linkedin' && (
                            <>
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect width="4" height="12" x="2" y="9"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </>
                          )}
                          {social.icon === 'instagram' && (
                            <>
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </>
                          )}
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-md xl:text-xl">{social.name}</h3>
                        <p className="text-gray-400">{social.username}</p>
                      </div>
                      <div className="flex items-center justify-center w-10 h-10 transition-colors border rounded-full border-default group-hover:bg-default">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white transition-all duration-300 ease-in-out transform lucide lucide-arrow-up-right text-default group-hover:rotate-45 group-hover:text-black">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </div>
                    </div>
                  </a>
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
                </div>

                {/* Text content */}
                <div>
                  <h3 className="text-white text-md xl:text-xl font-semibold">{social.name}</h3>
                  <p className="text-gray-400">{social.username}</p>
                </div>

                {/* Arrow button (circle turns red, arrow stays white) */}
                <div className="w-10 h-10 rounded-full border border-default flex items-center justify-center bg-transparent transition-colors duration-300 group-hover:bg-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right w-5 h-5 text-white transition-transform duration-300 ease-in-out group-hover:rotate-45"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      <HowItWorksSection />

      {/* FEATURES SECTION */}
<<<<<<< HEAD
<section className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
  {/* 🔴 Top Right Ring */}
  <div
    className="absolute top-10 right-[-150px] z-0 pointer-events-none"
    style={{ width: "380px", height: "380px" }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "30px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 8px 2px #ef4444",
      }}
    />
  </div>

  {/* 🔴 Bottom Left Ring */}
  <div
    className="absolute bottom-[5px] left-[-120px] z-0 pointer-events-none"
    style={{ width: "380px", height: "380px" }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "30px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 8px 2px #ef4444",
      }}
    />
  </div>

  {/* ✅ Content */}
  <div className="container mx-auto px-4 lg:px-6 relative z-20">
    <div className="relative mx-auto z-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left Side */}
        <div data-aos="fade-right" className="h-fit self-start text-center lg:text-start">
          <div className="w-full text-red-500 text-xl sm:text-2xl font-bold flex items-center justify-center lg:justify-start gap-5 my-8 sm:my-12">
            <img
              src="/media/asterisk_default.4355d764.png"
              alt="Astrivix Asteric Image"
              className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
            />
            <h4>FEATURES</h4>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Innovative <span className="text-red-500 font-bold">features</span>
          </h2>
          <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8">
            for your digital success
          </p>
        </div>

        {/* Right Side */}
        <div className="relative">
          <div className="relative flex flex-col gap-4 sm:gap-6 lg:py-24 group cursor-pointer">
            <div className="flex flex-col gap-4 sm:gap-5">
              <p className="text-white text-center lg:text-justify leading-relaxed text-base sm:text-lg">
=======
      <DonutBackground density="low">
        <section className="py-12 overflow-x-hidden bg-black sm:py-16 lg:py-20">
  <div className="container px-4 mx-auto lg:px-6">
    <div className="relative z-20 mx-auto">
      <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div data-aos="fade-right" className="self-start text-center h-fit lg:text-start">
      <div className="relative z-0">
        {/* Left blurred ring - More Extreme Left */}
  <div className="absolute top-1/4 left-[-320px] z-0" style={{width:'600px',height:'600px'}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '40px solid #ef4444',
            filter: 'blur(32px) brightness(0.5)',
            boxShadow: '0 0 12px 4px #ef4444, 0 0 24px 8px #ef4444',
            boxSizing: 'border-box',
          }} />
        </div>
        {/* Right blurred ring - Maximum Extreme Right */}
  <div className="absolute top-[-120px] right-[-800px] z-0" style={{width:'600px',height:'600px'}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '40px solid #ef4444',
            filter: 'blur(32px) brightness(0.6)',
            boxShadow: '0 0 20px 5px #ef4444, 0 0 40px 10px #ef4444',
            boxSizing: 'border-box',
          }} />
        </div>
        {/* Section content below rings */}
          <div className="flex items-center justify-center w-full gap-5 my-8 text-xl font-bold text-red-500 sm:text-2xl lg:justify-start sm:my-12">
            <img
              src="/media/asterisk_default.4355d764.png"
              alt="Astrivix Asteric Image"
              className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
            />
            <h4>FEATURES</h4>
          </div>

          <h2 className="mb-4 text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Innovative <span className="font-bold text-red-500">features</span>
          </h2>
          <p className="mb-6 text-2xl text-white sm:text-3xl md:text-5xl lg:text-6xl sm:mb-8">
            for your digital success
          </p>
        </div> {/* <-- This closes the missing <div> for the left column */}
        </div>

        <div className="relative">
          <div className="relative flex flex-col gap-4 cursor-pointer sm:gap-6 lg:py-24 group">
            <div className="flex flex-col gap-4 sm:gap-5">
              <p className="text-base leading-relaxed text-center text-white lg:text-justify sm:text-lg">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
                Our digital services empower brands with innovative strategies
                and solutions for sustainable growth and engagement.
              </p>
            </div>
            <Link
              className="mt-4 flex !justify-center lg:!justify-start gap-4 group"
              href="/about"
            >
<<<<<<< HEAD
              <button className="inline-flex items-center justify-center px-8 py-2 rounded-full bg-gray-600 text-white font-bold text-lg whitespace-nowrap">
=======
              <button className="inline-flex items-center justify-center px-8 py-2 text-lg font-bold text-white bg-gray-600 rounded-full whitespace-nowrap">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
                Learn More
              </button>
              <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-red-500 transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right text-lg sm:text-22 !text-black rounded-full"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal scroll features */}
<<<<<<< HEAD
      <div className="flex gap-6 mt-8 sm:mt-10 overflow-x-auto scrollbar-hide p-3">
=======
      <div
        className="flex gap-6 p-3 mt-8 overflow-x-auto sm:mt-10 scrollbar-hide"
      >
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
        {/* Feature Card 1 */}
        <div
          data-aos="fade-up"
          className="min-w-[320px] bg-blackfade2/40 backdrop-blur-lg p-10 rounded-[32px] overflow-hidden group hover:bg-[#151515] transition-colors duration-300"
        >
          <div className="relative overflow-hidden rounded-[32px]">
            <Image
              src="/2.png"
              alt="Custom Branding Solutions"
              width={1000}
              height={1000}
<<<<<<< HEAD
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-8">
            <h3 className="text-white text-2xl font-semibold mb-3">
=======
              className="object-cover w-full transition-transform duration-500 h-80 group-hover:scale-105"
            />
          </div>
          <div className="p-8">
            <h3 className="mb-3 text-2xl font-semibold text-white">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
              Custom Branding Solutions
            </h3>
            <p className="text-gray-400">
              Unique brand identity development, including logos, color palettes.
            </p>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div
          data-aos="fade-up"
          className="min-w-[320px] bg-blackfade2/40 backdrop-blur-lg p-10 rounded-[32px] overflow-hidden group hover:bg-[#151515] transition-colors duration-300"
        >
          <div className="relative overflow-hidden rounded-[32px]">
            <Image
              src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752998901/dddm.b39136e5_mhs0oh.jpg"
              alt="Data-Driven Digital Marketing"
              width={1000}
              height={1000}
<<<<<<< HEAD
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-8">
            <h3 className="text-white text-2xl font-semibold mb-3">
=======
              className="object-cover w-full transition-transform duration-500 h-80 group-hover:scale-105"
            />
          </div>
          <div className="p-8">
            <h3 className="mb-3 text-2xl font-semibold text-white">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
              Data-Driven Digital Marketing
            </h3>
            <p className="text-gray-400">
              Strategies combining SEO, PPC, content marketing
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<<<<<<< HEAD

      {/* CONTENT CREATION SECTION */}
      <section data-aos="fade-up" className="py-20">
        
=======
  </DonutBackground>



      {/* CONTENT CREATION SECTION */}
      <section data-aos="fade-up" className="py-20">
        {/* Blurred Rings for Content Creation Section */}
        <div className="absolute top-1/4 left-[-320px] z-0" style={{width:'600px',height:'600px'}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '40px solid #ef4444',
            filter: 'blur(32px) brightness(0.4)',
            boxShadow: '0 0 8px 2px #ef4444, 0 0 16px 4px #ef4444',
            boxSizing: 'border-box',
          }} />
        </div>
        <div className="absolute top-1/4 left-[-320px] z-0" style={{width:'600px',height:'600px'}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '40px solid #ef4444',
            filter: 'blur(32px) brightness(0.6)',
            boxShadow: '0 0 20px 5px #ef4444, 0 0 40px 10px #ef4444',
            boxSizing: 'border-box',
          }} />
        </div>
        <div className="absolute top-1/4 right-[-320px] z-0" style={{width:'600px',height:'600px'}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '40px solid #ef4444',
            filter: 'blur(32px) brightness(0.3)',
            boxShadow: '0 0 6px 1px #ef4444, 0 0 12px 2px #ef4444',
            boxSizing: 'border-box',
            position: 'relative',
            top: '-140px', // move ring further upward
            left: '-80px', // move ring slightly left
          }} />
        </div>
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
        <div className="container mx-auto">
          <div className="relative bg-blackfade2/40 backdrop-blur-lg rounded-[32px] p-12 lg:p-20" style={{ opacity: 1, transform: 'none' }}>
            <div className="flex items-start justify-between mb-20">
              <div className="max-w-2xl">
                <h2 className="mb-4 text-3xl font-semibold text-white lg:text-4xl">Content Creation And Strategy</h2>
                <p className="text-lg text-gray-400">High-quality, engaging content across blogs<span className="inline-block w-2 h-2 bg-default rounded-full mx-2 mb-0.5"></span>videos, and graphics designed to captivate and retain audiences.</p>
              </div>
              <div className="relative hidden lg:block" style={{ width: '150px', height: '150px' }}>
                <div className="absolute inset-0" style={{ animation: 'spin 15s linear infinite' }}>
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"></path>
                    </defs>
                    <text fill="#86c232" fontSize="12">
                      <textPath href="#circle" className="uppercase tracking-[0.9px]">Get free consultation • Get free consultation •</textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lucide lucide-arrow-down text-default">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Swiper
              slidesPerView={2.2}
              spaceBetween={20}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              modules={[Autoplay]}
              className="px-6"
              breakpoints={{
                640: { slidesPerView: 3.2 },
                1024: { slidesPerView: 4.2 },
              }}
            >
              {[
                { src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752999747/behance.3e543e62_nmruw8.png", alt: "Behance" },
                { src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752999747/trello.9ae4fd8e_lukts0.png", alt: "Trello" },
                { src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752999746/slack.dd220c30_kbgl1y.png", alt: "Slack" },
                { src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752999747/asana.f6fb7f2f_d7sgsh.png", alt: "Asana" },
                { src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752999196/upwork.687e3881_tl99is.png", alt: "Upwork" },
                { src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752999971/fiverr.d1b6a16a_qfhq9e.png", alt: "Fiverr" },
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex-shrink-0 bg-[#1a1a1a] rounded-2xl px-8 py-6 flex items-center justify-center min-w-[200px]">
                    <img src={item.src} alt={item.alt} width="100" height="30" className="w-auto h-8 brightness-100" draggable="false" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="bg-black py-16 md:py-24 relative overflow-hidden">
  <div className="container mx-auto px-4 lg:px-8">
    {/* Red Blurred Ring */}
    <div
      className="absolute top-[30px] right-[-260px] z-0 pointer-events-none"
      style={{ width: "500px", height: "500px" }}
    >
      <div
        style={{
          width: "70%",
          height: "70%",
          borderRadius: "50%",
          border: "40px solid rgba(239,68,68,0.45)",
          filter: "blur(32px) brightness(0.6)",
          boxShadow: "0 0 3px 0.5px #ef4444, 0 0 6px 1px #ef4444",
        }}
      />
    </div>
    <div
      className="absolute bottom-[-140px] left-[-90px] z-0 pointer-events-none"
      style={{ width: "500px", height: "500px" }}
    >
      <div
        style={{
          width: "70%",
          height: "70%",
          borderRadius: "50%",
          border: "40px solid rgba(239,68,68,0.45)",
          filter: "blur(32px) brightness(0.6)",
          boxShadow: "0 0 3px 0.5px #ef4444, 0 0 6px 1px #ef4444",
        }}
      />
    </div>

    {/* Grid Layout */}
    <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
      {/* Left Side */}
      <div className="text-center lg:text-left">
        <div className="w-full text-red-500 text-xl sm:text-2xl font-bold flex items-center justify-center lg:justify-start gap-5 my-8 sm:my-12">
          <img
            src="/media/asterisk_default.4355d764.png"
            alt="Astrivix Asteric Image"
            className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
          />
          <h4>HOW IT WORK</h4>
=======
      <section className="py-16 bg-black md:py-24">
        <div className="container px-4 mx-auto lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left Side */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center w-full gap-5 my-8 text-xl font-bold text-red-500 sm:text-2xl lg:justify-start sm:my-12">
  <img
    src="/media/asterisk_default.4355d764.png"
    alt="Astrivix Asteric Image"
    className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
  />
  <h4>HOW IT WORK</h4>
</div>

<h2 className="font-light leading-snug text-white text-7xl md:text-8xl lg:text-9xl">
  Our proven
</h2>
<h2 className="font-light leading-snug text-white text-7xl md:text-8xl lg:text-9xl">
  <span className="font-bold text-default">process</span> for
</h2>
<h2 className="font-light leading-snug text-white text-7xl md:text-8xl lg:text-9xl">
  achieving success
</h2>




            </div>
            {/* Right Side */}

<div className="relative text-center lg:text-left">
  {/* Blurred Ring for Proven Process Section */}
  <div className="absolute top-[-60px] right-[-320px] z-0" style={{width:'600px',height:'600px'}}>
    <div style={{
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '40px solid #ef4444',
      filter: 'blur(32px) brightness(0.3)',
      boxShadow: '0 0 20px 5px #ef4444, 0 0 40px 10px #ef4444',
      boxSizing: 'border-box',
      position: 'relative',
      top: '-60px', // move ring upward
      left: '-60px', // move ring slightly left
    }} />
  </div>
  <p className="max-w-2xl mx-auto text-xl leading-relaxed text-white md:text-2xl lg:mx-0 relative z-10">
    Our proven process combines research, strategy, and creativity to
    deliver tailored solutions that drive measurable results.
  </p>
</div>



          </div>
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
        </div>

        <h2 className="text-7xl md:text-8xl lg:text-9xl text-white font-light leading-snug">
          Our proven
        </h2>
        <h2 className="text-7xl md:text-8xl lg:text-9xl text-white font-light leading-snug">
          <span className="text-default font-bold">process</span> for
        </h2>
        <h2 className="text-7xl md:text-8xl lg:text-9xl text-white font-light leading-snug">
          achieving success
        </h2>
      </div>

      {/* Right Side */}
      <div className="text-center lg:text-left mt-6">
        <p className="text-white text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Our proven process combines research, strategy, and creativity to
          deliver tailored solutions that drive measurable results.
        </p>
      </div>
    </div>
  </div>
</section>

<<<<<<< HEAD
      <Projects />
      <Ratings/>
      <Benifit/>
      <NEWS/>
   {/* NEWS SECTION */}


   {/* CTA Section */}

          <section
      className="relative w-full overflow-hidden py-24 md:py-32 bg-black text-white"
    >
      {/* Overlay Inner Background - made darker */}

      {/* Left blurred ring */}
        <div className="absolute top-1/4 right-[-200px] z-0 pointer-events-none" style={{width:'600px',height:'600px'}}>
          <div style={{
            width: '70%',
            height: '70%',
            borderRadius: '50%',
            border: '40px solid rgba(239,68,68,0.45)',
            filter: 'blur(32px) brightness(0.6)',
            boxShadow: '0 0 3px 0.5px #ef4444, 0 0 6px 1px #ef4444',
            boxSizing: 'border-box',
          }} />
        </div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
      />

      <div className="relative max-w-[90rem] mx-auto sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center">
          <span className="text-white text-32 font-semibold uppercase tracking-wider">
            Let&apos;s Collaborate
          </span>
          <div className="relative inline-flex flex-col items-center">
            <h2 className="text-42 lg:text-[180px] font-bold text-white leading-loose tracking-tight">
              LET&apos;S WORK
            </h2>
            <div className="absolute -top-14 lg:top-52 my-6 md:my-8 z-10 group">
              <Link
                className="flex items-center justify-center w-28 h-28 lg:w-40 lg:h-40 md:w-48 md:h-48 bg-default rounded-full hover:bg-default transition-all duration-300 group shadow-[0_0_45px_rgba(212,255,77,1)] hover:shadow-[0_0_35px_rgba(212,255,77,1)]"
                href="/contact"
              >
                <div className="flex flex-col items-center text-14 lg:text-20 font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right ml-1 w-8 h-8 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                  Get In Touch
                </div>
              </Link>
            </div>
            <h2 className="text-42 lg:text-[180px] font-bold text-white leading-[0.95] tracking-tight">
              TOGETHER
            </h2>
          </div>
        </div>
      </div>

      <div className="absolute bottom-80 -left-32 z-0">
        <Image
          src="/media/CTA.61aa7579.png"
          alt="Astrivix Sphere Image"
          width={320}
          height={320}
          className="w-80 h-80 animate-spin-grow"
        />
      </div>
    </section>
=======
  <NEWS/>
  <Projects />
  <Ratings/>
  <Benifit/>
      <CTA/>
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e

      {/* Footer */}
      <Footer />

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Optional: Add pause on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}