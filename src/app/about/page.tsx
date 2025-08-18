"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import AboutAgency from "../components/AboutAgencySection";
import Ratings from "../components/Rating";
import Services from "../components/MovingServices";
import FAQS from "../components/FAQ";
import React, { useEffect, useState } from "react";
import { Feather } from "lucide-react";

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
        transition: "left 0.15s ease-out, top 0.15s ease-out", // ✅ smooth slow follow effect
      }}
    />
  );
}

export default function About() {
  // Animated rating state
  const [rating, setRating] = useState(0);
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 0.05;
      if (current >= 5) {
        current = 5;
        clearInterval(interval);
      }
      setRating(Number(current.toFixed(1)));
    }, 30); // Adjust speed as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="!w-full bg-cover bg-center bg-black text-white"
      style={{ backgroundImage: "url(/media/bg.0f5970d1.png)" }}
    >
      <CursorDot />
      
      {/* Hero Section */}
      <div
        className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/media/Inner_bg.23beb686.jpg)" }}
      >
        <div className="flex flex-col justify-center items-center gap-8 font-semibold text-white">
          <span className="text-5xl xl:text-7xl">
            About <span className="text-red-500">us</span>
          </span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
              <li>
                <Link className="hover:underline" href="/">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">*</span>
                <span className="text-red-500">About</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Services/>

      <AboutAgency/>

      {/* Features Section */}
<section className="py-12 lg:py-20 bg-gray-900 text-white">
  <div className="container mx-auto px-4">
    {/* Top Part: Title and Description */}
    <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
      <div className="text-center lg:text-start">
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Innovative <span className="text-lime-400 font-bold">features</span>
          <br />
          for your digital success
        </h2>
      </div>
      <div className="text-center lg:text-start">
        <p className="text-gray-300 leading-relaxed lg:text-lg mb-6">
          Our digital services empower brands with innovative strategies and
          solutions for sustainable growth and engagement.
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-4">
          <Link href="/about">
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gray-800 hover:bg-gray-700 text-white font-semibold whitespace-nowrap transition-colors">
              Learn More
            </button>
          </Link>
          <Link href="/about">
            <button className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime-400 text-black hover:bg-lime-300 transition-colors">
              {/* Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>

    {/* Bottom Part: Feature Cards */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="bg-gray-800 p-6 rounded-2xl border border-white/10 flex flex-col h-full">
        <div className="mb-4 overflow-hidden rounded-xl">
          <Image
            src="https://img.freepik.com/free-photo/close-up-young-colleagues-having-meeting_23-2149060227.jpg?semt=ais_items_boosted&w=360"
            alt="Team discussing branding solutions"
            width={360}
            height={240}
            className="rounded-xl object-cover w-full h-auto transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Custom Branding Solutions
        </h3>
        <p className="text-gray-400">
          Unique brand identity development, including logos, color palettes.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-800 p-6 rounded-2xl border border-white/10 flex flex-col h-full">
        <div className="mb-4 overflow-hidden rounded-xl">
          <Image
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQImrt-KSe_RdvKRlHp16ivR50hXOonkzEpQkaSusrm5Vk55oUM"
            alt="Data-Driven Digital Marketing"
            width={360}
            height={240}
            className="rounded-xl object-cover w-full h-auto transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Data-Driven Digital Marketing
        </h3>
        <p className="text-gray-400">
          Strategies combining SEO, PPC, content marketing.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Content Creation Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="relative bg-blackfade2/40 backdrop-blur-lg rounded-[32px] p-12 lg:p-20">
            <div className="flex justify-between items-start mb-20">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-4xl text-white font-semibold mb-4">
                  Content Creation And Strategy
                </h2>
                <p className="text-gray-400 text-lg">
                  High-quality, engaging content across blogs
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mx-2 mb-0.5"></span>
                  videos, and graphics designed to captivate and retain
                  audiences.
                </p>
              </div>
              <div
                className="hidden lg:block relative"
                style={{ width: 150, height: 150 }}
              >
                {/* Rotating SVG and arrow */}
                <div
                  className="absolute inset-0"
                  style={{ animation: "spin 15s linear infinite" }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path
                        id="circle"
                        d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text fill="#86c232" fontSize="7">
                      <textPath
                        href="#circle"
                        className="uppercase tracking-[0.9px]"
                      >
                        Get free consultation • Get free consultation •
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
                      className="lucide lucide-arrow-down w-6 h-6 text-red-500"
                    >
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden cursor-grab active:cursor-grabbing">
              <div className="flex gap-6 px-6">
                {[
                  { src: "/media/behance.3e543e62.png", alt: "Behance" },
                  { src: "/media/trello.9ae4fd8e.png", alt: "Trello" },
                  { src: "/media/slack.dd220c30.png", alt: "Slack" },
                  { src: "/media/asana.f6fb7f2f.png", alt: "Asana" },
                  { src: "/media/upwork.687e3881.png", alt: "Upwork" },
                  { src: "/media/fiverr.d1b6a16a.png", alt: "Fiverr" },
                  { src: "/media/behance.3e543e62.png", alt: "Behance" },
                  { src: "/media/trello.9ae4fd8e.png", alt: "Trello" },
                  { src: "/media/slack.dd220c30.png", alt: "Slack" },
                  { src: "/media/asana.f6fb7f2f.png", alt: "Asana" },
                  { src: "/media/upwork.687e3881.png", alt: "Upwork" },
                  { src: "/media/fiverr.d1b6a16a.png", alt: "Fiverr" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 bg-[#1a1a1a] rounded-2xl px-8 py-6 flex items-center justify-center min-w-[200px]"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={100}
                      height={30}
                      className="w-auto h-8"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team Section */}
      <div className="container relative mx-auto px-4 !z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="h-fit self-start text-center lg:text-start">
            <div className="w-full text-red-500 text-18 font-bold flex items-center justify-center lg:justify-start gap-4 my-9">
              <Image
                src="/media/asterisk_default.4355d764.png"
                alt="Asteric"
                width={20}
                height={20}
                className="w-5 h-5 filter-red"
              />
              <h4>OUR TEAM</h4>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Dynamic <span className="text-red-500 font-bold">team</span>
            </h2>
            <p className="md:text-5xl lg:text-6xl text-white mb-8">
              of digital experts
            </p>
          </div>
          <div className="relative">
            <div className="relative flex flex-col gap-6 lg:py-24 group cursor-pointer">
              <div className="flex flex-col gap-5">
                <p className="text-white text-center lg:text-justify leading-relaxed lg:text-lg">
                  Our digital services empower brands with innovative strategies
                  and solutions for sustainable growth and engagement.Our
                  digital services empower brands with innovative strategies and
                  solutions for sustainable growth and engagement.
                </p>
              </div>
              <a
                className="mt-4 flex !justify-center lg:!justify-start gap-4 group"
                href="#"
              >
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-gray-600 p-7 rounded-full lg:!text-18 font-bold">
                  More About
                </button>
                <span className="w-14 h-14 rounded-full flex items-center justify-center bg-red-500 transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
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
              </a>
            </div>
          </div>
        </div>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="w-full h-96 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
              {[].map((idx) => (
                <div
                  key={idx}
                  className="relative group rounded-[32px] overflow-hidden cursor-pointer"
                >
                  <div className="relative">
                    <Image
                      src="/media/team.53181386.jpg"
                      alt="Team Member"
                      width={400}
                      height={400}
                      className="object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover 2xl:object-cover w-full h-40 sm:h-60 md:h-80 lg:h-96 rounded-[32px]"
                      style={{ objectFit: 'contain' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
                    <div className="absolute bottom-10 left-0 right-0 p-6 transform translate-y-16 opacity-0 transition-all duration-[1200ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="text-white text-2xl font-semibold mb-2">
                        {
                          [
                            "Sarah Mitchell",
                            "Brooklyn Simmons",
                            "Emily Davis",
                            "Jessica Taylor",
                          ][idx - 1]
                        }
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {
                          [
                            "Senior Project Manager",
                            "Marketing Director",
                            "Product Manager",
                            "Communications Specialist",
                          ][idx - 1]
                        }
                      </p>
                      <div className="hidden group-hover:flex gap-3 mt-4 transform translate-y-8 opacity-0 transition-all duration-[1000ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                        {/* Social icons */}
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full border-2 border-[#86c232] flex items-center justify-center group hover:bg-[#86c232] transition-colors duration-300"
                        >
                          <div className="text-[#86c232] group-hover:text-white transition-colors duration-300">
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
                              className="lucide lucide-facebook w-5 h-5"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full border-2 border-[#86c232] flex items-center justify-center group hover:bg-[#86c232] transition-colors duration-300"
                        >
                          <div className="text-[#86c232] group-hover:text-white transition-colors duration-300">
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
                              className="lucide lucide-instagram w-5 h-5"
                            >
                              <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"
                              ></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line
                                x1="17.5"
                                x2="17.51"
                                y1="6.5"
                                y2="6.5"
                              ></line>
                            </svg>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full border-2 border-[#86c232] flex items-center justify-center group hover:bg-[#86c232] transition-colors duration-300"
                        >
                          <div className="text-[#86c232] group-hover:text-white transition-colors duration-300">
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
                              className="lucide lucide-twitter w-5 h-5"
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Why Choose Us Section */}
      {/* Why Choose Us Section */}
<section className="relative min-h-screen overflow-hidden">
  <div className="container relative mx-auto !z-20 py-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-5 gap-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Image
            src="/media/asterisk_default.4355d764.png"
            alt="Asteric"
            width={16}
            height={16}
            className="w-4 h-4 filter-red"
          />
          <span className="text-white uppercase tracking-wider text-sm font-semibold">
            WHY CHOOSE
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl !leading-normal text-white font-light">
          Expertise for{" "}
          <span className="text-red-500 font-semibold">your digital</span>
          <br />
          growth journey
        </h2>
      </div>
      <p className="text-gray-400 text-base leading-relaxed max-w-lg">
        Our dedicated team is committed to understanding your unique
        needs, ensuring that we provide innovative strategies that drive
        results. With a focus on quality and integrity.
      </p>
    </div>
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-8">
        {[
          {
            title: "Data-Driven Approach",
            desc: "We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.",
          },
          {
            title: "Competitive Pricing",
            desc: "We offer our top-quality services at competitive prices, providing you with great value for your investment.",
          },
          {
            title: "Ethical Business Practices",
            desc: "We maintain the highest level of professionalism and ethical standards professionalism in all our business dealings.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-2xl bg-transparent border border-gray-800 overflow-hidden cursor-pointer group"
          >
            <div
              className="absolute inset-0 transition-transform duration-700 ease-in-out bg-[length:130%_100%] bg-no-repeat"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #1a1a1a 0%, #1a1a1a 40%, rgba(26,26,26,0.9) 55%, rgba(26,26,26,0.7) 60%, rgba(26,26,26,0.5) 65%, rgba(26,26,26,0.3) 70%, rgba(26,26,26,0.1) 75%, transparent 90%)",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-white text-lg lg:text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:sticky lg:top-20 space-y-6">
        <div className="image-container group relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src="/media/whyus.fe999c9a.png"
            alt="Business meeting"
            width={280}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="absolute bottom-20 -right-32 z-0">
    <Image
      src="/media/hex.eced7c60.png"
      alt="Hex"
      width={240}
      height={240}
      className="w-60 h-60 animate-spin-grow"
    />
  </div>
</section>
      {/* Testimonials Section */}

      <Ratings/>
      <FAQS/>
       {/* CTA Section */}
      <section className="relative w-full overflow-hidden py-24 md:py-32">
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
                  className="flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 md:w-40 md:h-40 bg-default rounded-full hover:bg-default transition-all duration-300 group shadow-[0_0_45px_rgba(212,255,77,1)] hover:shadow-[0_0_35px_rgba(212,255,77,1)]"
                  href="/contact"
                >
                  <div className="flex flex-col items-center text-11 lg:text-18 font-semibold">
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
                      className="lucide lucide-arrow-up-right ml-1 w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
      <Footer/>
    </div>
  );
}