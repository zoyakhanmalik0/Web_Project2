import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div
        className="!w-full bg-cover bg-center bg-black text-white pb-10"
        style={{ backgroundImage: "url('/media/bg.0f5970d1.png')" }}
      >
        <div
          className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/media/Inner_bg.23beb686.jpg')" }}
        >
          <div className="flex flex-col justify-center items-center gap-8 font-semibold text-white">
            <span className="text-5xl xl:text-7xl">
              Contact <span className="text-default">Us</span>
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
                  <span className="text-default">Contact</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Scrolling Services Bar */}
      <div className="relative w-full overflow-hidden py-3 bg-default">
        <div className="flex items-center space-x-8 w-max">
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              IOS/Android App Development
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Website Development
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Digital Marketing
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Graphic Designing
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Content Writing
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Search Engine Optimization (SEO)
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Point of Sale (POS)
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Cyber Security
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              IOS/Android App Development
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Website Development
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Digital Marketing
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Graphic Designing
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Content Writing
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Search Engine Optimization (SEO)
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Point of Sale (POS)
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="whitespace-nowrap text-xl font-bold border-2 border-default rounded-full px-6 py-1 bg-black text-default shadow-md">
              Cyber Security
            </span>
            <span className="flex justify-center items-center">
              <Image
                src="/media/asteric.3e45eb6d.png"
                alt="Astrivix Asteric Image"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div
                className="form-animate"
                style={{ opacity: 0, transform: "translateY(20px)" }}
              >
                <h2 className="text-4xl lg:text-5xl text-white mb-4 font-semibold">
                  Get in <span className="text-default">touch</span> with us
                </h2>
                <p className="text-gray-400 text-lg">
                  We&apos;d love to hear from you! Whether you have questions,
                  need support, or want to discuss a project, feel free to reach
                  out.
                </p>
              </div>
              {/* Contact Cards */}
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-[#111] rounded-3xl p-8 contact-card-animate"
                style={{ opacity: 0, transform: "translateY(20px)" }}
              >
                <div>
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
                    className="lucide lucide-phone w-8 h-8 text-default mb-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <h3 className="text-white text-lg font-medium mb-2">
                    Phone Number
                  </h3>
                  <a href="tel:(309) 8855-314" className="text-gray-400">
                    (309) 8855-314
                  </a>
                </div>
                <div>
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
                    className="lucide lucide-mail w-8 h-8 text-default mb-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <h3 className="text-white text-lg font-medium mb-2">
                    Email Address
                  </h3>
                  <a
                    href="mailto:contact@acciobyte.com"
                    className="text-gray-400"
                  >
                    contact@acciobyte.com
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div
                className="bg-[#111] rounded-3xl p-8 address-card-animate"
                style={{ opacity: 0, transform: "translateY(20px)" }}
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
                  className="lucide lucide-map-pin w-8 h-8 text-default mb-4"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 className="text-white text-lg font-medium mb-2">Address</h3>
                <p className="text-gray-400">
                  123 Creative Lane London, SW1A 1AA United Kingdom
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div
              className="bg-[#111] rounded-3xl p-8 form-container-animate"
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input
                      className="flex w-full rounded-md border-input px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#0a0a0a] border-0 text-white h-12 placeholder:text-gray-500"
                      placeholder="First Name"
                      id=":Rj9nrpb:-form-item"
                      aria-describedby=":Rj9nrpb:-form-item-description"
                      aria-invalid="false"
                      name="firstname"
                      value=""
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      className="flex w-full rounded-md border-input px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#0a0a0a] border-0 text-white h-12 placeholder:text-gray-500"
                      placeholder="Last Name"
                      id=":R139nrpb:-form-item"
                      aria-describedby=":R139nrpb:-form-item-description"
                      aria-invalid="false"
                      name="lastname"
                      value=""
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <input
                    className="flex w-full rounded-md border-input px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#0a0a0a] border-0 text-white h-12 placeholder:text-gray-500"
                    placeholder="Phone No"
                    id=":R59nrpb:-form-item"
                    aria-describedby=":R59nrpb:-form-item-description"
                    aria-invalid="false"
                    name="phone"
                    value=""
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="email"
                    className="flex w-full rounded-md border-input px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#0a0a0a] border-0 text-white h-12 placeholder:text-gray-500"
                    placeholder="E-mail"
                    id=":R79nrpb:-form-item"
                    aria-describedby=":R79nrpb:-form-item-description"
                    aria-invalid="false"
                    name="email"
                    value=""
                  />
                </div>
                <div className="space-y-2">
                  <textarea
                    className="flex w-full rounded-md border-input px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#0a0a0a] border-0 text-white min-h-[120px] placeholder:text-gray-500 resize-none"
                    placeholder="Message"
                    name="message"
                    id=":R99nrpb:-form-item"
                    aria-describedby=":R99nrpb:-form-item-description"
                    aria-invalid="false"
                  ></textarea>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow px-4 py-2 w-full bg-default hover:bg-default/90 text-black font-semibold h-12"
                  type="submit"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.015123456789!2d-0.1277584!3d51.5073504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333333333%3A0x123456789abcdef!2sLondon!5e0!3m2!1sen!2suk!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl overflow-hidden w-full h-[400px] md:h-[500px] lg:h-[600px]"
        ></iframe>
      </div>

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

      <Footer />
    </div>
  );
}
