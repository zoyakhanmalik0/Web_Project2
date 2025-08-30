'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from "../components/Footer";
import DonutBackground from "../components/DonutBackground";

const categories = [
  'All',
  'App Development',
  'Website Development',
  'Branding',
  'Illustration',
  'Logo',
];

const projects = [
  { src: '/media/app1.f22ab53c.jpg', label: 'App Development' },
  { src: '/media/app2.dc5f3f98.jpg', label: 'App Development' },
  { src: '/media/app3.b71cfec0.jpg', label: 'App Development' },
  { src: '/media/app4.26566439.jpg', label: 'App Development' },
  { src: '/media/app5.9e9bbbf9.jpg', label: 'App Development' },
  { src: '/media/app6.496624cd.jpg', label: 'App Development' },
  { src: '/media/app7.96df06d3.png', label: 'App Development' },
  { src: '/media/app8.487642bb.png', label: 'App Development' },
  { src: '/media/app9.8254715f.png', label: 'App Development' },
  { src: '/media/app10.18305315.png', label: 'App Development' },
  { src: '/media/web1.e0bad25d.png', label: 'Website Development' },
  { src: '/media/web2.bd177f2f.png', label: 'Website Development' },
  { src: '/media/web3.ba0f4c79.png', label: 'Website Development' },
  { src: '/media/web4.cfb4692c.png', label: 'Website Development' },
  { src: '/media/web5.c392f488.png', label: 'Website Development' },
  { src: '/media/brand1.dfa651cc.jpg', label: 'Branding' },
  { src: '/media/brand2.d1f71700.jpg', label: 'Branding' },
  { src: '/media/brand3.28211a2a.jpg', label: 'Branding' },
  { src: '/media/brand4.10af7f83.jpg', label: 'Branding' },
  { src: '/media/brand5.c55a7981.jpg', label: 'Branding' },
  { src: '/media/brand6.cdca95b7.jpg', label: 'Branding' },
  { src: '/media/illust1.24e81448.jpg', label: 'Illustration' },
  { src: '/media/illust2.cfe4514d.jpg', label: 'Illustration' },
  { src: '/media/illust3.6d6e87e6.jpg', label: 'Illustration' },
  { src: '/media/illust4.6ade4e8c.jpg', label: 'Illustration' },
  { src: '/media/illust5.fe244939.jpg', label: 'Illustration' },
  { src: '/media/illust6.c6cddd0b.jpg', label: 'Illustration' },
  { src: '/media/logo1.ef6ba7a1.jpg', label: 'Logo' },
  { src: '/media/logo2.32f2f645.jpg', label: 'Logo' },
  { src: '/media/logo3.dc9a9ac4.jpg', label: 'Logo' },
  { src: '/media/logo4.6efb44d2.jpg', label: 'Logo' },
  { src: '/media/logo5.4d3b74a4.jpg', label: 'Logo' },
  { src: '/media/logo6.a59cfe2a.jpg', label: 'Logo' },
];

/* ✅ Cursor Following Dot Component */
function CursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-[9999] transition-opacity duration-200 transform-gpu ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: position.x - 8,
        top: position.y - 8,
        transition: "left 0.15s ease-out, top 0.15s ease-out",
      }}
    />
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.label === activeCategory);

  return (
<<<<<<< HEAD
    <div className="!w-full bg-cover bg-center bg-black text-white pb-10" 
    >
      {/* Cursor Following Dot */}
      <CursorDot />
      
      {/* Hero Section */}
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
        <div className="flex flex-col justify-center items-center gap-8 font-semibold text-white">
          <h1 className="text-5xl xl:text-7xl">
            Our <span className="text-red-500">Projects</span>
          </h1>
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-lg font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><span className="text-red-500">Our Projects</span></li>
            </ul>
          </nav>
=======
    <DonutBackground density="low">
      <div className="!w-full bg-cover bg-center bg-black text-white pb-10 relative overflow-hidden" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
        {/* Blurred Rings for Projects Page */}
        <div className="absolute top-0 left-[-220px] z-[-10]" style={{width:'520px',height:'520px'}}>
          <div style={{
            borderRadius: '50%',
            border: '40px solid #ef4444',
            filter: 'blur(48px) brightness(0.7)',
            boxShadow: '0 0 64px 16px #ef4444, 0 0 128px 32px #ef4444',
            boxSizing: 'border-box',
            position: 'absolute',
            top: '-180px', // move ring higher
            left: '-320px', // move ring more left
            width: '700px', // increase size
            height: '700px',
          }} />
        </div>
        <div className="absolute bottom-[-120px] right-[-220px] z-[-10]" style={{width:'540px',height:'540px'}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '44px solid #ef4444',
            filter: 'blur(48px) brightness(0.7)',
            boxShadow: '0 0 64px 16px #ef4444, 0 0 128px 32px #ef4444',
            boxSizing: 'border-box',
          }} />
        </div>
        {/* Cursor Following Dot */}
        <CursorDot />
        
        {/* Hero Section */}
        <div className="relative flex items-center justify-center w-full h-full py-32 bg-center bg-no-repeat bg-cover sm:py-40 lg:py-48" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
          <div className="flex flex-col items-center justify-center gap-6 px-4 font-semibold text-white sm:gap-8 sm:px-6">
            <h1 className="text-4xl text-center sm:text-5xl xl:text-7xl">
              Our <span className="text-red-500">Projects</span>
            </h1>
            {/* Breadcrumb Navigation */}
            <nav aria-label="breadcrumb">
              <ul className="container flex items-center space-x-2 text-base sm:text-lg font-semibold text-white py-1.5 px-2">
                <li><Link className="hover:underline" href="/">Home</Link></li>
                <li className="flex items-center"><span className="mx-2">*</span><span className="text-red-500">Our Projects</span></li>
              </ul>
            </nav>
          </div>
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
        </div>

      {/* Projects Grid Section */}
      <section className="pb-20">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="py-12">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
<<<<<<< HEAD
                  style={{
                    minWidth: 120,
                    padding: "12px 32px",
                    borderRadius: "9999px",
                    fontSize: "18px",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "none",
                    transition: "all 0.3s ease",
                    backgroundColor: activeCategory === cat ? "red" : "#222",
                    color: "white",
                  }}
=======
                  className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-300 ${
                    activeCategory === cat
                      ? 'bg-red-600 text-white'
                      : 'bg-[#222] text-white hover:bg-red-600'
                  }`}
                  style={{ minWidth: '100px' }}
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="relative w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-6 lg:gap-8">
              {filteredProjects.map((project, idx) => (
<<<<<<< HEAD
                <div key={idx} className="group cursor-pointer relative">
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
=======
                <div key={idx} className="relative cursor-pointer group">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white aspect-[4/3] w-full">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
                    <Image
                      src={project.src}
                      alt={`Project ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
<<<<<<< HEAD
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 bg-black/40 backdrop-blur-3xl rounded-full text-white text-sm">
=======
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                      <span className="px-3 py-1 text-xs font-medium text-white rounded-full sm:px-4 sm:py-2 bg-white/40 backdrop-blur-3xl sm:text-sm">
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
                        {project.label}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-black/30">
                      {/* Circle with arrow */}
<<<<<<< HEAD
                      <div className="relative w-20 h-20">
                        {/* Outer circle */}
                        <div className="absolute inset-0 border-2 border-white rounded-full transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110"></div>
=======
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                        {/* Outer circle that becomes red on hover */}
                        <div className="absolute inset-0 transition-all duration-300 border-2 border-white rounded-full group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110"></div>
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
                        
                        {/* Arrow */}
                        <div className="absolute inset-0 flex items-center justify-center">
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
                            className="w-6 h-6 text-white transition-all duration-300 transform translate-x-0 translate-y-0 lucide lucide-arrow-up-right sm:w-8 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"
                          >
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {filteredProjects.length === 0 && (
                <div className="py-16 text-lg text-center text-gray-400 col-span-full sm:text-xl sm:py-20">
                  No projects found in this category.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      </div>
    </DonutBackground>
  );
}
