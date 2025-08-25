"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Services from "../components/MovingServices";
import DonutBackground from "../components/DonutBackground";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

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

    document.addEventListener("mousemove", handleMouseMove as EventListener);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove as EventListener);
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

/* ✅ Red Dim Circle Background Effect */
function RedDimCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove as EventListener);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove as EventListener);
    };
  }, []);

  return (
    <div
      className="fixed z-0 pointer-events-none opacity-20"
      style={{
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(239, 68, 68, 0.15), transparent 70%)`,
      }}
    />
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <DonutBackground density="medium">
      <div
        className="!w-full bg-cover bg-center bg-black text-white pb-10 relative overflow-hidden"
        style={{ backgroundImage: "url(/media/bg.0f5970d1.png)" }}
      >
        {/* Blurred Rings for Contact Page */}
        <div className="absolute top-0 left-[-220px] z-[-10]" style={{width:'520px',height:'520px'}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '40px solid #ef4444',
            filter: 'blur(32px) brightness(0.35)',
            boxShadow: '0 0 32px 8px #ef4444, 0 0 64px 16px #ef4444',
            boxSizing: 'border-box',
          }} />
        </div>
        <div className="absolute bottom-[-120px] right-[-220px] z-[-10]" style={{width:'540px',height:'540px'}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '44px solid #ef4444',
            filter: 'blur(32px) brightness(0.35)',
            boxShadow: '0 0 32px 8px #ef4444, 0 0 64px 16px #ef4444',
            boxSizing: 'border-box',
          }} />
        </div>
      {/* Red Dim Circle Background Effect */}
      <RedDimCircle />
      
      {/* Cursor Following Dot */}
      <CursorDot />

      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center w-full h-full py-48 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/media/Inner_bg.23beb686.jpg)" }}
      >
        <div className="flex flex-col items-center justify-center gap-8 font-semibold text-white">
          <span className="text-5xl xl:text-7xl">
            Contact <span className="text-red-500">Us</span>
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
                <span className="text-red-500">Contact</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Services />

      {/* Main Contact Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <h2 className="mb-4 text-4xl font-semibold text-white lg:text-5xl">
                Get in <span className="text-red-500">touch</span> with us
              </h2>
              <p className="text-lg text-gray-400">
                We'd love to hear from you! Whether you have questions, need
                support, or want to discuss a project, feel free to reach out.
              </p>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-[#111] rounded-3xl p-8 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Phone className="w-8 h-8 text-red-500" />
                  <h3 className="text-lg font-medium text-white">Phone Number</h3>
                  <a href="tel:(309) 8855-314" className="text-gray-400">
                    (309) 8855-314
                  </a>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Mail className="w-8 h-8 text-red-500" />
                  <h3 className="text-lg font-medium text-white">Email Address</h3>
                  <a href="mailto:contact@acciobyte.com" className="text-gray-400">
                    contact@acciobyte.com
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex flex-col items-center gap-2 bg-[#111] rounded-3xl p-8 mt-6 text-center">
                <MapPin className="w-8 h-8 text-red-500" />
                <h3 className="text-lg font-medium text-white">Address</h3>
                <p className="text-gray-400">
                  123 Creative Lane London, SW1A 1AA United Kingdom
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-[#111] rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <input
                    className="w-full rounded-md bg-[#0a0a0a] border-0 text-white h-12 px-3 placeholder:text-gray-500"
                    placeholder="First Name"
                    name="firstname"
                  />
                  <input
                    className="w-full rounded-md bg-[#0a0a0a] border-0 text-white h-12 px-3 placeholder:text-gray-500"
                    placeholder="Last Name"
                    name="lastname"
                  />
                </div>
                <input
                  className="w-full rounded-md bg-[#0a0a0a] border-0 text-white h-12 px-3 placeholder:text-gray-500"
                  placeholder="Phone No"
                  name="phone"
                />
                <input
                  type="email"
                  className="w-full rounded-md bg-[#0a0a0a] border-0 text-white h-12 px-3 placeholder:text-gray-500"
                  placeholder="E-mail"
                  name="email"
                />
                <textarea
                  className="w-full rounded-md bg-[#0a0a0a] border-0 text-white min-h-[120px] px-3 py-2 placeholder:text-gray-500 resize-none"
                  placeholder="Message"
                  name="message"
                ></textarea>

                {/* Submit Button */}
                <button
  type="submit"
  disabled={submitted}
  className={`w-full h-12 rounded-md font-semibold text-white transition-all duration-300 
    ${submitted ? "cursor-not-allowed" : ""}`}
  style={{ background: submitted ? "#dc2626" : "red" }} // custom inline
>
  {submitted ? "Submitted!" : "Submit Message"}
</button>

              </form>

              {/* Toast Notification */}
              {showToast && (
                <div className="fixed px-6 py-3 text-white bg-red-500 rounded-lg shadow-lg bottom-6 right-6 animate-bounce">
                  ✅ Message submitted successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="relative z-10 wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9939.696399897436!2d-0.1415889!3d51.5013647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c3b42f5bcd%3A0xd3b8d7b5c34c1e6!2sWestminster%2C%20London%20SW1A%201AA%2C%20UK!5e0!3m2!1sen!2suk!4v1723978572000!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl overflow-hidden w-full h-[400px] md:h-[500px] lg:h-[600px]"
        ></iframe>
      </div>

      <section
      className="relative w-full py-24 overflow-hidden text-white bg-black bg-center bg-cover md:py-32"
      style={{ backgroundImage: "url(/media/bg.0f5970d1.png)" }}
    >
      {/* Overlay Inner Background */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-30"
        style={{ backgroundImage: "url(/media/Inner_bg.23beb686.jpg)" }}
      />

      <div className="relative max-w-[90rem] mx-auto sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center">
          <span className="font-semibold tracking-wider text-white uppercase text-32">
            Let&apos;s Collaborate
          </span>
          <div className="relative inline-flex flex-col items-center">
            <h2 className="text-42 lg:text-[180px] font-bold text-white leading-loose tracking-tight">
              LET&apos;S WORK
            </h2>
            <div className="absolute z-10 my-6 -top-14 lg:top-52 md:my-8 group">
              <Link
                className="flex items-center justify-center w-28 h-28 lg:w-40 lg:h-40 md:w-48 md:h-48 bg-default rounded-full hover:bg-default transition-all duration-300 group shadow-[0_0_45px_rgba(212,255,77,1)] hover:shadow-[0_0_35px_rgba(212,255,77,1)]"
                href="/contact"
              >
                <div className="flex flex-col items-center font-semibold text-14 lg:text-20">
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

      <div className="absolute z-0 bottom-80 -left-32">
        <Image
          src="/media/CTA.61aa7579.png"
          alt="Astrivix Sphere Image"
          width={320}
          height={320}
          className="w-80 h-80 animate-spin-grow"
        />
      </div>
    </section>
      <Footer />
    </div>
    </DonutBackground>
  );
}