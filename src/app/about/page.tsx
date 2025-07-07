"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div
      className="!w-full bg-cover bg-center bg-black text-white"
      style={{ backgroundImage: "url(/media/bg.0f5970d1.png)" }}
    >
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
      {/* Skills Marquee Section */}
      <div className="relative w-full overflow-hidden py-3 bg-red-500">
        <div className="flex items-center space-x-8 w-max">
          {[
            "IOS/Android App Development",
            "Website Development",
            "Digital Marketing",
            "Graphic Designing",
            "Content Writing",
            "Search Engine Optimization (SEO)",
            "Point of Sale (POS)",
            "Cyber Security",
            "IOS/Android App Development",
            "Website Development",
            "Digital Marketing",
            "Graphic Designing",
            "Content Writing",
            "Search Engine Optimization (SEO)",
            "Point of Sale (POS)",
            "Cyber Security",
          ].map((skill, idx) => (
            <div key={idx} className="flex items-center justify-center gap-6">
              <span className="whitespace-nowrap text-xl font-bold text-black">
                {skill}
              </span>
              <span className="flex justify-center items-center">
                <Image
                  src="/media/asteric.3e45eb6d.png"
                  alt="Asteric"
                  width={16}
                  height={16}
                  className="w-4 h-4 filter-red"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* About Agency Section */}
      <section className="relative min-h-screen py-20 lg:py-40 overflow-visible">
        <div className="container relative mx-auto !z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-24 h-fit self-start text-center lg:text-start">
              <div className="w-full text-red-500 text-18 font-bold flex items-center justify-center lg:justify-start gap-4 my-9">
                <Image
                  src="/media/asterisk_default.4355d764.png"
                  alt="Asteric"
                  width={20}
                  height={20}
                  className="w-5 h-5 filter-red"
                />
                <h4>ABOUT AGENCY</h4>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                Crafting{" "}
                <span className="text-red-500 font-bold">unique digital</span>
              </h2>
              <p className="md:text-5xl lg:text-6xl text-white mb-8">
                experiences that elevate your brand
              </p>
              <Link
                className="mt-4 flex justify-center lg:justify-start gap-4 group"
                href="/contact"
              >
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-gray-600 p-7 rounded-full lg:!text-18 font-bold">
                  Contact Us
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
              </Link>
            </div>
            <div className="relative z-10 space-y-8">
              {/* Agency Features */}
              {[
                {
                  icon: "/media/mission.25c4c757.svg",
                  title: "Your Success, Our Mission",
                  desc: "We measure our success through the achievements of our clients. With a results-driven approach and a commitment to quality, we deliver digital solutions that create meaningful impact.",
                },
                {
                  icon: "/media/creators.da5dacdb.svg",
                  title: "Creators Of Digital Excellence",
                  desc: "Driven by innovation and excellence, we reimagine digital possibilities. Our team builds solutions that not only fulfill your vision but also elevate your brand to the next level.",
                },
                {
                  icon: "/media/innovation.257d9eb9.svg",
                  title: "Innovating the digital landscape",
                  desc: "At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also exceed your brand.",
                },
                {
                  icon: "/media/brands.6176527f.svg",
                  title: "Helping Brands Thrive Online",
                  desc: "Our goal is simple: empower brands to grow and succeed in the digital world. Through strong client partnerships and custom strategies, we deliver results that matter.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex gap-6 group cursor-pointer"
                >
                  <div className="hidden lg:block absolute -left-[40px] top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                    <Image
                      src="/media/dot.5c102e3c.svg"
                      alt="Dot"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 bg-red-500 rounded-lg p-3"
                    />
                    <h3 className="text-white text-xl lg:text-3xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white text-justify leading-relaxed lg:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 -left-32 z-0">
          <Image
            src="/media/sphere.4b56a70e.png"
            alt="Sphere"
            width={384}
            height={384}
            className="w-96 h-96 animate-spin-slow"
          />
        </div>
      </section>
      {/* Features Section */}
      <section className="lg:py-20">
        <div className="container mx-auto">
          <div className="relative mx-auto !z-20">
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
                  <h4>FEATURES</h4>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  Innovative{" "}
                  <span className="text-red-500 font-bold">features</span>
                </h2>
                <p className="md:text-5xl lg:text-6xl text-white mb-8">
                  for your digital success
                </p>
              </div>
              <div className="relative">
                <div className="relative flex flex-col gap-6 lg:py-24 group cursor-pointer">
                  <div className="flex flex-col gap-5">
                    <p className="text-white text-center lg:text-justify leading-relaxed lg:text-lg">
                      Our digital services empower brands with innovative
                      strategies and solutions for sustainable growth and
                      engagement.
                    </p>
                  </div>
                  <Link
                    className="mt-4 flex !justify-center lg:!justify-start gap-4 group"
                    href="/about"
                  >
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 bg-gray-600 p-7 rounded-full lg:!text-18 font-bold  border-0 w-24 h-28
"
                    >
                      Learn More
                    </button>
                    <section>
  <div className="grid md:grid-cols-5 gap-6 mt-10 lg:mt-0">
    <div className="bg-transparent backdrop-blur-lg p-10 rounded-[32px] overflow-hidden group hover:bg-white/10 transition-colors duration-300 col-span-5 lg:col-span-3">
      <div className="relative overflow-hidden rounded-[32px]">
        <Image
          src="/33.png"
          alt="Custom Branding Solutions"
          width={1000}
          height={320}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <Image src="/33.png" alt="" width={64} height={64} />
        <h3 className="text-white text-2xl font-semibold mb-3">
          Custom Branding Solutions
        </h3>
        <p className="text-gray-400">
          Unique brand identity development, including logos, color palettes.
        </p>
      </div>
    </div>

    <div className="bg-transparent backdrop-blur-lg p-10 rounded-[32px] overflow-hidden group hover:bg-white/10 transition-colors duration-300 col-span-5 lg:col-span-2">
      <div className="relative overflow-hidden rounded-[32px]">
        <Image
          src="/33.png"
          alt="Data-Driven Digital Marketing"
          width={1000}
          height={320}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <h3 className="text-white text-2xl font-semibold mb-3">
          Data-Driven Digital Marketing
        </h3>
        <p className="text-gray-400">
          Strategies combining SEO, PPC, content marketing
        </p>
      </div>
    </div>
  </div>

  {/* Button/Arrow Block */}
  <span className="w-14 h-14 rounded-full flex items-center justify-center transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
    <Image src="33.png" alt="" width={24} height={24} />
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </span>
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
            <div className="w-full h-96 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[1, 2, 3, 4].map((idx) => (
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
                      className="object-cover"
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
      <section className="relative min-h-screen overflow-hidden">
        <div className="container relative mx-auto !z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-7">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/media/asterisk_default.4355d764.png"
                  alt="Asteric"
                  width={20}
                  height={20}
                  className="w-5 h-5 filter-red"
                />
                <span className="text-white uppercase tracking-wider font-semibold">
                  WHY CHOOSE
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl !leading-normal text-white font-light">
                Expertise for{" "}
                <span className="text-red-500 font-semibold">your digital</span>
                <br />
                growth journey
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Our dedicated team is committed to understanding your unique
              needs, ensuring that we provide innovative strategies that drive
              results. With a focus on quality and integrity.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
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
                  className="relative p-8 rounded-3xl bg-transparent border border-gray-800 overflow-hidden cursor-pointer group"
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-in-out bg-[length:130%_100%] bg-no-repeat"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #1a1a1a 0%, #1a1a1a 40%, rgba(26,26,26,0.9) 55%, rgba(26,26,26,0.7) 60%, rgba(26,26,26,0.5) 65%, rgba(26,26,26,0.3) 70%, rgba(26,26,26,0.1) 75%, transparent 90%)",
                    }}
                  ></div>
                  <div className="relative z-10">
                    <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:sticky lg:top-20 space-y-8">
              <div className="image-container group relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src="/media/whyus.fe999c9a.png"
                  alt="Business meeting"
                  width={320}
                  height={320}
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
            width={320}
            height={320}
            className="w-80 h-80 animate-spin-grow"
          />
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="relative text-white py-8 lg:py-16 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 opacity-90"></div>
        <div className="container relative z-10 mx-auto">
          <div className="relative mx-auto !z-20">
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
                  <h4>TESTIMONIALS</h4>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  Read what they have to say about{" "}
                  <span className="text-red-500 font-bold">
                    working with us
                  </span>
                </h2>
              </div>
              <div className="relative">
                <div className="relative flex flex-col gap-6 lg:py-24 group cursor-pointer">
                  <div className="flex flex-col gap-5">
                    <p className="text-white text-center lg:text-justify leading-relaxed lg:text-lg">
                      Discover how our clients have achieved success through our
                      innovative solutions and dedicated support.
                    </p>
                  </div>
                  <a
                    className="mt-4 flex !justify-center lg:!justify-start gap-4 group"
                    href="#"
                  >
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-gray-600 p-7 rounded-full lg:!text-18 font-bold">
                      All Testimonials
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 bg-black/60 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center justify-between">
                <div className="text-center">
                  <div className="text-7xl font-bold mb-2">
                    <div>0.0</div>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star w-6 h-6 fill-red-500 text-red-500"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 mb-8">(40+ Reviews)</p>
                  <h3 className="text-2xl font-semibold text-center">
                    Customer experiences that speak for themselves
                  </h3>
                </div>
                <div className="flex -space-x-2 mt-8">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div
                      key={i}
                      className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-black"
                    >
                      <Image
                        src="dd.png"
                        alt={`Customer ${i + 1}`}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-8 relative">
                <div className="h-full flex flex-col justify-between">
                  <div className="mb-8">
                    <div className="mb-6">
                      <Image
                        src="/media/logo1.38d8183e.png"
                        alt="Logoipsum"
                        width={80}
                        height={80}
                        className="mb-4 w-20 h-20"
                      />
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-star w-6 h-6 fill-red-500 text-red-500"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                      Super impressed with their mobile app development service.
                      The team listened carefully to our needs and delivered an
                      app that exceeded expectations. A little delay in testing
                      phase but they managed it professionally. Highly
                      recommended!
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src="dd.png"
                        alt="Olivia Reed"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">Olivia Reed</h4>
                      <p className="text-gray-400">Marketing Manager</p>
                    </div>
                    <div className="ml-auto flex space-x-2">
                      <button
                        className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"
                        aria-label="Previous testimonial"
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
                          className="lucide lucide-arrow-left w-5 h-5"
                        >
                          <path d="m12 19-7-7 7-7"></path>
                          <path d="M19 12H5"></path>
                        </svg>
                      </button>
                      <button
                        className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"
                        aria-label="Next testimonial"
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
                          className="lucide lucide-arrow-right w-5 h-5"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Let's Collaborate Section */}
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
                  className="flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 md:w-40 md:h-40 bg-red-500 rounded-full hover:bg-red-500 transition-all duration-300 group shadow-[0_0_45px_rgba(239,68,68,1)] hover:shadow-[0_0_35px_rgba(239,68,68,1)]"
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
            alt="CTA"
            width={320}
            height={320}
            className="w-80 h-80 animate-spin-grow"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
