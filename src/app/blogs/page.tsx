'use client';
import Image from 'next/image';
import Link from 'next/link';
import Footer from "../components/Footer";
import React, { useState } from 'react';

const blogs = [
  { img: '/media/blog1.a1574eaa.png', title: "Web 3.0 - How It's Changing the Internet", link: '/blogs/1' },
  { img: '/media/blog2.36c1e2e9.png', title: 'Best Practices for Secure Mobile App Development', link: '/blogs/2' },
  { img: '/media/blog3.20a84f07.png', title: 'Progressive Web Apps (PWA) - The Future of Mobile Experience', link: '/blogs/3' },
  { img: '/media/blog4.efaf757b.png', title: 'Flutter vs. React Native - Which One to Choose for Your App?', link: '/blogs/4' },
  { img: '/media/blog5.df423476.png', title: 'Why Businesses Should Invest in Custom Software Development', link: '/blogs/5' },
  { img: '/media/blog6.fc309e2c.png', title: 'The Impact of 5G on Software Development & IoT', link: '/blogs/6' },
  { img: '/media/blog7.005ab357.png', title: 'Blockchain Beyond Cryptocurrency - Real-World Applications', link: '/blogs/7' },
  { img: '/media/blog8.9762ab93.png', title: 'Future of Remote Work – Best Collaboration Tools for Teams', link: '/blogs/8' },
  { img: '/media/blog9.bcb6adf8.png', title: 'How Startups Can Leverage AI for Growth', link: '/blogs/9' },
  { img: '/media/blog10.000d2050.png', title: 'AI in Cybersecurity - How Machine Learning Detects Threats', link: '/blogs/10' },
  { img: '/media/blog11.c1e6156d.png', title: 'Top 10 Web Security Threats in 2025', link: '/blogs/11' },
  { img: '/media/blog12.9717ea00.png', title: 'Bug Bounty Programs - Are They Worth It?', link: '/blogs/12' },
];

const blogContents = [
  {
    title: "Web 3.0 - How It's Changing the Internet",
    content: `Web 3.0 is revolutionizing the way we interact with the internet by introducing decentralization, blockchain technology, and user-centric data ownership. Unlike previous iterations, Web 3.0 empowers users to control their own data and participate in decentralized applications, leading to a more secure and transparent online experience.`
  },
  {
    title: 'Best Practices for Secure Mobile App Development',
    content: `Secure mobile app development involves implementing robust authentication, encrypting sensitive data, and regularly updating dependencies. Developers should follow security guidelines, conduct code reviews, and use secure APIs to protect user information and prevent vulnerabilities.`
  },
  {
    title: 'Progressive Web Apps (PWA) - The Future of Mobile Experience',
    content: `PWAs combine the best of web and mobile apps, offering offline access, push notifications, and fast load times. They provide a seamless user experience across devices and are cost-effective for businesses looking to reach a wider audience without building separate native apps.`
  },
  {
    title: 'Flutter vs. React Native - Which One to Choose for Your App?',
    content: `Flutter and React Native are popular frameworks for cross-platform app development. Flutter offers a rich set of widgets and faster performance, while React Native leverages native components and a large community. The choice depends on project requirements, team expertise, and desired user experience.`
  },
  {
    title: 'Why Businesses Should Invest in Custom Software Development',
    content: `Custom software development allows businesses to create tailored solutions that address specific needs, improve efficiency, and gain a competitive edge. Unlike off-the-shelf products, custom software can scale with business growth and adapt to changing requirements.`
  },
  {
    title: 'The Impact of 5G on Software Development & IoT',
    content: `5G technology is transforming software development and IoT by enabling faster data transfer, lower latency, and enhanced connectivity. This leads to innovative applications in smart cities, autonomous vehicles, and real-time analytics.`
  },
  {
    title: 'Blockchain Beyond Cryptocurrency - Real-World Applications',
    content: `Blockchain technology is being used beyond cryptocurrencies in areas like supply chain management, healthcare, and digital identity. Its decentralized nature ensures transparency, security, and trust in various industries.`
  },
  {
    title: 'Future of Remote Work – Best Collaboration Tools for Teams',
    content: `Remote work is here to stay, and effective collaboration tools like Slack, Trello, and Zoom are essential for team productivity. These tools facilitate communication, project management, and file sharing, making remote work efficient and organized.`
  },
  {
    title: 'How Startups Can Leverage AI for Growth',
    content: `AI offers startups opportunities to automate processes, gain insights from data, and enhance customer experiences. By integrating AI into their operations, startups can innovate faster and compete with larger enterprises.`
  },
  {
    title: 'AI in Cybersecurity - How Machine Learning Detects Threats',
    content: `AI and machine learning are revolutionizing cybersecurity by detecting threats in real-time, analyzing patterns, and automating responses. This proactive approach helps organizations stay ahead of cybercriminals and protect sensitive data.`
  },
  {
    title: 'Top 10 Web Security Threats in 2025',
    content: `The top web security threats in 2025 include phishing attacks, ransomware, supply chain vulnerabilities, and AI-powered malware. Staying informed and implementing best practices is crucial for safeguarding digital assets.`
  },
  {
    title: 'Bug Bounty Programs - Are They Worth It?',
    content: `Bug bounty programs incentivize ethical hackers to find and report vulnerabilities, helping organizations strengthen their security. While they offer benefits, proper management and clear guidelines are essential for success.`
  },
];

export default function Blogs() {
  // Remove selectedBlog state
  return (
    <div className="!w-full bg-cover bg-center bg-black" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
      {/* Hero Section */}
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
        <div className="flex flex-col justify-center items-center gap-8 font-semibold text-center text-white">
          <span className="text-5xl xl:text-7xl">Blogs</span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><span className="text-default">Blogs</span></li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Services Bar */}
      <div className="relative w-full overflow-hidden py-10 bg-default">
        <div className="flex items-center space-x-10 w-max">
          {['IOS/Android App Development','Website Development','Digital Marketing','Graphic Designing','Content Writing','Search Engine Optimization (SEO)','Point of Sale (POS)','Cyber Security','IOS/Android App Development','Website Development','Digital Marketing','Graphic Designing','Content Writing','Search Engine Optimization (SEO)','Point of Sale (POS)','Cyber Security'].map((service, idx) => (
            <div key={idx} className="flex items-center justify-center gap-10">
              <span className="whitespace-nowrap text-2xl lg:text-5xl font-bold text-black">{service}</span>
              <span className="flex justify-center items-center">
                <Image src="/media/asteric.3e45eb6d.png" alt="Astrivix Asteric Image" width={40} height={40} className="w-4 h-4 lg:w-10 lg:h-10" />
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Blogs Grid */}
      <section className="relative container min-h-screen py-20 lg:py-40 overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <article key={idx} className="group p-5 rounded-3xl bg-blackfade2/70 backdrop-blur-lg">
              <div className="relative mb-6 rounded-[32px] overflow-hidden">
                <Image src={blog.img} alt={blog.title} width={600} height={400} className="object-cover transition-transform duration-300 group-hover:scale-105 mb-4" />
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4 leading-tight">{blog.title}</h3>
              <Link
                className="inline-flex items-center text-[#c1ff00] font-medium hover:opacity-80 transition-opacity"
                href={`/blogs/${idx + 1}`}
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right ml-2 w-4 h-4"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
} 