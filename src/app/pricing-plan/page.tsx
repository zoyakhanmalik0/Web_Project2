'use client';
import Image from 'next/image';
import Link from 'next/link';
import Footer from "../components/Footer";

export default function PricingPlan() {
  return (
    <div className="!w-full bg-cover bg-center bg-black text-white pb-10" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
      {/* Hero Section */}
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
        <div className="flex flex-col justify-center items-center gap-8 font-semibold text-white">
          <span className="text-5xl text-center xl:text-7xl">Our <span className="text-default">Pricing</span></span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><span className="text-default">Pricing plan</span></li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Services Bar */}
      <div className="relative w-full overflow-hidden py-3 bg-default">
        <div className="flex items-center space-x-8 w-max">
          {['IOS/Android App Development','Website Development','Digital Marketing','Graphic Designing','Content Writing','Search Engine Optimization (SEO)','Point of Sale (POS)','Cyber Security','IOS/Android App Development','Website Development','Digital Marketing','Graphic Designing','Content Writing','Search Engine Optimization (SEO)','Point of Sale (POS)','Cyber Security'].map((service, idx) => (
            <div key={idx} className="flex items-center justify-center gap-6">
              <span className="whitespace-nowrap text-xl font-bold text-black">{service}</span>
              <span className="flex justify-center items-center">
                <Image src="/media/asteric.3e45eb6d.png" alt="Astrivix Asteric Image" width={16} height={16} className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Pricing Cards */}
      <div className="container mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bronze League Card */}
          <div className="bg-[#111] rounded-[32px] p-6 xl:p-8 lg:p-12">
            <div className="flex flex-col gap-4 xl:flex-row justify-between items-start mb-12">
              <div>
                <h3 className="text-3xl text-white mb-2">Bronze League</h3>
                <p className="text-gray-400">Our popular Plan for small teams.</p>
              </div>
              <div className="text-right">
                <span className="text-default text-5xl font-medium">$449.00</span>
                <span className="text-gray-400 text-lg">/per month</span>
              </div>
            </div>
            {/* Features List */}
            <div className="relative overflow-hidden h-72 mb-12">
              <div style={{ minWidth: '100%', display: 'table' }}>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  {['Logo Design','5 Logo Concepts','3 Dedicated Designers','Icon Design','Stationary','Business Card, Letterhead, Envelope','MS Word Letterhead','Website','5 Pages Static Website','Team of Expert Designers & Developers','5 Stock Photos + 3 Banner Designs','Complete W3C Certified HTML','Complete Deployment','Social Media','Facebook Page Design','Value Added Services','All Final File Formats','Dedicated Account Manager','100% Ownership Rights','100% Satisfaction Guarantee','100% Unique Design Guarantee','100% Money Back Guarantee','NOTE: Add CMS for Additional $150','Add Mobile Responsive for Additional $99'].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-default flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-default"><path d="M20 6 9 17l-5-5"></path></svg>
                      </div>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="w-full bg-default text-black font-semibold rounded-full py-4 px-8 text-lg hover:bg-default/90 transition-colors">Get Started</button>
          </div>
          {/* Silver League Card */}
          <div className="bg-[#111] rounded-[32px] p-6 xl:p-8 lg:p-12">
            <div className="flex flex-col gap-4 xl:flex-row justify-between items-start mb-12">
              <div>
                <h3 className="text-3xl text-white mb-2">Silver League</h3>
                <p className="text-gray-400">Advanced features and reporting</p>
              </div>
              <div className="text-right">
                <span className="text-default text-5xl font-medium">$999.99</span>
                <span className="text-gray-400 text-lg">/per month</span>
              </div>
            </div>
            {/* Features List */}
            <div className="relative overflow-hidden h-72 mb-12">
              <div style={{ minWidth: '100%', display: 'table' }}>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  {['Logo Design','10 Logo Concepts','5 Dedicated Designers','Icon Design','Stationary','Business Card, Letterhead, Envelope, Fax Template','MS Word Letterhead','Website','10 Unique Pages Website','Content Management System (CMS)','Mobile Responsive','Team of Expert Designers & Developers','8 Stock images','5 Banner Designs','Jquery Sliders','Free Google Friendly Sitemap','Complete W3C Certified HTML','Complete Deployment','Facebook Page Design','Twitter Page Design','All Final File Formats','Dedicated Account Manager','100% Ownership Rights','100% Satisfaction Guarantee','100% Unique Design Guarantee','100% Money Back Guarantee'].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-default flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-default"><path d="M20 6 9 17l-5-5"></path></svg>
                      </div>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="w-full bg-default text-black font-semibold rounded-full py-4 px-8 text-lg hover:bg-default/90 transition-colors">Get Started</button>
          </div>
          {/* Gold League Card */}
          <div className="bg-[#111] rounded-[32px] p-6 xl:p-8 lg:p-12">
            <div className="flex flex-col gap-4 xl:flex-row justify-between items-start mb-12">
              <div>
                <h3 className="text-3xl text-white mb-2">Gold League</h3>
                <p className="text-gray-400">Gold for idea to existence and premium quality</p>
              </div>
              <div className="text-right">
                <span className="text-default text-5xl font-medium">$1399.99</span>
                <span className="text-gray-400 text-lg">/per month</span>
              </div>
            </div>
            {/* Features List */}
            <div className="relative overflow-hidden h-72 mb-12">
              <div style={{ minWidth: '100%', display: 'table' }}>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  {['Logo Design','Unlimited Logo Concepts','8 Dedicated Designers','Icon Design','Stationary','2 Free Custom Stationary Designs','MS Word Letterhead (Letterhead, Envelope, Business Card, Invoice)','Company Profile Design (4 pages)','Trifold Brochure Design','Presentation Folder Design','Website','Up to 15 Unique Pages Website','Conceptual and Dynamic Liquid Website','Content Management System (CMS)','Team of Expert Designers & Developers','Mobile Responsive','Online Reservation/Appointment Tool (Optional)','Online Payment Integration (Optional)','Custom Forms','Lead Capturing Forms (Optional)','Striking Hover Effects','Social Media Integration','Search Engine Submission','15 Stock Images','8 Unique Banner Designs','Jquery Sliders','Free Google Friendly Sitemap','Complete W3C Certified HTML','Complete Deployment','Facebook Page Design','Twitter Page Design','YouTube Page Design','Google+ Page Design','All Final File Formats','Dedicated Account Manager','100% Ownership Rights','100% Satisfaction Guarantee','100% Unique Design Guarantee','100% Money Back Guarantee'].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-default flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-default"><path d="M20 6 9 17l-5-5"></path></svg>
                      </div>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="w-full bg-default text-black font-semibold rounded-full py-4 px-8 text-lg hover:bg-default/90 transition-colors">Get Started</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 