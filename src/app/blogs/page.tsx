'use client';
import Image from 'next/image';
import Link from 'next/link';
import Footer from "../components/Footer";

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

export default function Blogs() {
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
              <Link className="inline-flex items-center text-[#c1ff00] font-medium hover:opacity-80 transition-opacity" href={blog.link}>
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