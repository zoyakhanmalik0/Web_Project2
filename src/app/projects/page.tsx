'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from "../components/Footer";

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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.label === activeCategory);

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div className="!w-full bg-cover bg-center bg-black" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
        <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
          <div className="flex flex-col justify-center items-center gap-8 font-semibold text-white">
            <span className="text-5xl xl:text-7xl">Our <span className="text-default">Projects</span></span>
            <nav aria-label="breadcrumb">
              <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
                <li><Link className="hover:underline" href="/">Home</Link></li>
                <li className="flex items-center"><span className="mx-2">*</span><span className="text-default">Projects</span></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Projects Grid Section */}
      <section>
        <div className="container mx-auto">
          {/* Tabs (functional) */}
          <div className="py-12">
            <div role="tablist" aria-orientation="horizontal" className="h-9 items-center justify-center rounded-lg text-muted-foreground bg-transparent border-0 p-0 my-10 gap-4 flex flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center justify-center whitespace-nowrap text-lg font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-8 py-3 rounded-full border-0 transition-colors duration-200 ${activeCategory === cat ? 'bg-[#C6FF3D] text-black' : 'bg-[#222] text-white hover:bg-[#C6FF3D] hover:text-black'}`}
                  style={{ minWidth: 120 }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {/* Projects Grid */}
          <div className="relative overflow-hidden min-h-[55rem] w-full flex">
            <div className="h-full w-full rounded-[inherit] overflow-x-hidden overflow-y-hidden">
              <div style={{ minWidth: '100%', display: 'table' }}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-40 lg:mt-12">
                  {filteredProjects.map((project, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="relative rounded-3xl overflow-hidden mb-6 bg-white">
                        <Image src={project.src} alt="Project image" width={600} height={400} className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute top-6 right-6 ">
                          <span className="px-4 py-2 bg-white/40 backdrop-blur-3xl rounded-full text-white text-sm">{project.label}</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-20 h-20 border border-white hover:bg-default rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 group/hover-circle">
                            <div className="group-hover/hover-circle:rotate-45  transition-transform duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-8 h-8 text-white group-hover/hover-circle:!text-black"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                            </div>
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
      <Footer />
    </div>
  );
} 