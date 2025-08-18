'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-[9999] transition-opacity duration-200 transform-gpu ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: position.x - 8,
        top: position.y - 8,
        transition: 'left 0.15s ease-out, top 0.15s ease-out', // smooth follow effect
      }}
    />
  );
}

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
  { src: '/media/web1.e0bad25d.png', label: 'Website Development' },
  { src: '/media/brand1.dfa651cc.jpg', label: 'Branding' },
  { src: '/media/illust1.24e81448.jpg', label: 'Illustration' },
  { src: '/media/logo1.ef6ba7a1.jpg', label: 'Logo' },
  // add remaining project objects...
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.label === activeCategory);

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      {/* Render cursor dot */}
      <CursorDot />

      {/* Hero Section */}
      <div
        className="!w-full bg-cover bg-center bg-black"
        style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}
      >
        <div
          className="w-full h-full flex items-center justify-center py-32 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}
        >
          <div className="flex flex-col justify-center items-center gap-6 font-semibold text-white">
            <span className="text-5xl xl:text-7xl">
              Our <span className="text-red-500">Projects</span>
            </span>
          </div>
        </div>
      </div>

      {/* Projects Grid Section */}
      <section>
        <div className="container mx-auto">
          {/* Tabs */}
          <div className="py-12 flex justify-center flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center justify-center whitespace-nowrap text-lg font-semibold px-8 py-3 rounded-full border-0 transition-colors duration-300 ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white'
                    : 'bg-[#222] text-white hover:bg-red-600 hover:text-white'
                }`}
                style={{ minWidth: 120 }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="relative overflow-hidden min-h-[55rem] w-full flex">
            <div className="h-full w-full rounded-[inherit] overflow-x-hidden overflow-y-hidden">
              <div style={{ minWidth: '100%', display: 'table' }}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                  {filteredProjects.map((project, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="relative rounded-3xl overflow-hidden mb-6 bg-white">
                        <Image
                          src={project.src}
                          alt="Project image"
                          width={600}
                          height={400}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-6 right-6 ">
                          <span className="px-4 py-2 bg-white/40 backdrop-blur-3xl rounded-full text-white text-sm">
                            {project.label}
                          </span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-20 h-20 border border-white hover:bg-default rounded-full flex items-center justify-center transition-transform duration-300">
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
                              className="lucide lucide-arrow-up-right w-8 h-8 text-white group-hover:text-black"
                            >
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filteredProjects.length === 0 && (
                    <div className="col-span-full text-center text-gray-400 text-xl py-20">
                      No projects found in this category.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
