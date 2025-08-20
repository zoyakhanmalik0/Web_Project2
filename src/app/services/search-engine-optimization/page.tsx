import Image from 'next/image';
import Link from 'next/link';
import Footer from "../../components/Footer";

export default function SearchEngineOptimization() {
  return (
    <section className="!w-full bg-cover bg-center bg-black text-white pb-10" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
        <div className="flex flex-col justify-center items-center xl:max-w-6xl gap-8 font-semibold text-white">
          <span className="text-4xl text-center xl:text-7xl">Search Engine <span className="text-default">Optimization (SEO)</span></span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><Link className="hover:underline" href="/services">Services</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><span className="text-default">Search engine optimization</span></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="relative w-full overflow-hidden py-3 bg-default">
        <div className="flex items-center space-x-8 w-max">
          {[
            'IOS/Android App Development',
            'Website Development',
            'Digital Marketing',
            'Graphic Designing',
            'Content Writing',
            'Search Engine Optimization (SEO)',
            'Point of Sale (POS)',
            'Cyber Security',
            'IOS/Android App Development',
            'Website Development',
            'Digital Marketing',
            'Graphic Designing',
            'Content Writing',
            'Search Engine Optimization (SEO)',
            'Point of Sale (POS)',
            'Cyber Security',
          ].map((service, i) => (
            <div key={i} className="flex items-center justify-center gap-6">
              <span className="whitespace-nowrap text-xl font-bold text-black">{service}</span>
              <span className="flex justify-center items-center">
                <Image src="/media/asteric.3e45eb6d.png" alt="Astrivix Asteric Image" width={16} height={16} className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12 lg:gap-20">
          <div className="space-y-12">
            <div className="rounded-[32px] overflow-hidden">
              <Image src="/media/sec1.2b520679.jpg" alt="Business people" width={800} height={400} className="w-full object-cover" />
            </div>
            <div className="space-y-6 ">
              <p>Our SEO Services are designed to enhance your online visibility and drive organic traffic to your website. We use a data-driven approach to optimize your site for search engines, ensuring higher rankings, better engagement, and increased conversions. Whether you're looking to improve local SEO, technical SEO, or content optimization, our team of experts will craft a customized strategy to help your business grow.</p>
              <h2 className="text-4xl lg:text-5xl text-white">Key <span className="text-default font-semibold">features</span> of <span>search engine optimization (seo)</span></h2>
              <p>We specialize in boosting your website's visibility and search engine rankings through tailored SEO strategies. Our focus is on optimizing both on-page and off-page factors to increase organic traffic and improve online presence. With in-depth keyword research, technical optimization, and high-quality content creation, we ensure sustainable growth in search rankings. Let us help you reach your target audience and achieve long-term digital success.</p>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <ul className="space-y-4 xl:max-w-lg">
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Targeted keyword research &amp; strategy.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Optimized meta tags, content, &amp; internal links.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Technical SEO fixes for speed &amp; mobile performance.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>High-quality backlinks for domain authority.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>SEO-driven content creation &amp; optimization</li>
                </ul>
                <div className="h-full overflow-hidden">
                  <Image src="/media/main.31cc89c1.jpg" alt="Main Image Acciobyte" width={400} height={230} className="w-full h-[230px] aspect-square object-cover rounded-xl" />
                </div>
              </div>
              <div className="rounded-[32px] overflow-hidden">
                <div className="grid md:grid-cols-1 gap-6">
                  <h2 className="text-4xl lg:text-5xl text-white ">Our <span className="text-default font-semibold">process</span> of search engine optimization (seo)</h2>
                  <p>Our SEO approach is a comprehensive strategy designed to improve your website's visibility and performance. We begin by conducting thorough keyword research to identify high-impact terms that resonate with your audience. From there, we optimize your website's structure, content, and meta elements to ensure it aligns with search engine algorithms. We also focus on building strong backlinks and monitoring performance, refining strategies as needed to ensure sustained growth and better rankings over time.</p>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shapes w-8 h-8 text-default !w-16 !h-16"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect x="3" y="14" width="7" height="7" rx="1"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">01</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">SEO Audit &amp; Strategy Development</h3>
                      <p className="leading-relaxed">We analyze your website's current performance, research competitors, and create a tailored SEO plan.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-2">
                      <Image src="/media/step1.816b4402.jpg" alt="SEO Audit & Strategy Development" width={400} height={300} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-2">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-8 h-8 text-default !w-16 !h-16"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">02</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Implementation</h3>
                      <p className="leading-relaxed">We optimize on-page and technical aspects while implementing link-building and content strategies.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-1">
                      <Image src="/media/step2.ae7e685e.jpg" alt="Implementation" width={400} height={300} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database w-8 h-8 text-default !w-16 !h-16"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">03</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Performance Tracking</h3>
                      <p className="leading-relaxed">We monitor rankings, analyze performance, and adjust strategies for sustained growth.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-2">
                      <Image src="/media/step3.a15b4ce3.jpg" alt="Performance Tracking" width={400} height={300} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar Start */}
          <aside className="lg:sticky lg:top-20 lg:self-start space-y-8">
            <div className="bg-[#ef4444] rounded-[32px] p-8">
              <h3 className="text-white text-xl font-medium mb-6">Services Category</h3>
              <div className="space-y-4">
                {[
                  { name: "Website Development", href: "/services/website-development" },
                  { name: "Digital Marketing", href: "/services/digital-marketing" },
                  { name: "Graphic Designing", href: "/services/graphic-designing" },
                  { name: "Social Media Marketing", href: "/services/social-media-marketing" },
                  { name: "Content Writing", href: "/services/content-writing" },
                  { name: "Search Engine Optimization", href: "/services/search-engine-optimization" },
                  { name: "Software Development", href: "/services/software-development" },
                  { name: "Cyber Security", href: "/services/cyber-security" },
                  { name: "E-Commerce", href: "/services/e-commerce" },
                  { name: "Illustrations", href: "/services/illustrations" },
                  { name: "Video Animation", href: "/services/video-animation" },
                  { name: "Point of Sale (POS)", href: "/services/point-of-sale" }
                ].map((service, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-red-300 group cursor-pointer">
                    <Link className="w-full flex items-center justify-between" href={service.href}>
                      <span className="group-hover:text-white transition-colors capitalize">{service.name}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-white w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#ef4444] bg-opacity-90 backdrop-blur-lg rounded-[32px] p-7 xl:p-20 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-warning mx-auto mb-5 w-24 h-24 text-white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M12 7v2"></path><path d="M12 13h.01"></path></svg>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h3 className="text-white text-xl font-bold">You have different questions?</h3>
              </div>
              <p className="mb-6 text-white">Our team will answer all your questions.</p>
              <div className="w-full flex justify-center">
                <a href="tel:208855314" className="bg-[#ef4444] text-black font-semibold rounded-full py-3 px-8 flex items-center justify-center gap-2 text-lg min-w-[250px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  (20) 8855-314
                </a>
              </div>
            </div>
          </aside>
          {/* Sidebar End */}
        </div>
      </div>
      {/* FAQ Section Start */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 py-16">
        {/* Left: FAQ Heading and Questions */}
        <div className="flex-1 min-w-0">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Lets address your <span className="text-[#ef4444] font-semibold">questions</span> today!
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "How long does it take to see SEO results?",
              },
              {
                question: "Can you guarantee a #1 ranking on Google?",
              },
              {
                question: "Do you offer local SEO services?",
              },
              {
                question: "Will SEO work for my business?",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-none rounded-[16px] overflow-hidden bg-[#111]">
                <h3 className="flex">
                  <button type="button" className="flex flex-1 items-center justify-between text-sm font-medium transition-all text-left px-6 py-6 hover:no-underline group">
                    <span className="text-white text-base md:text-lg font-semibold text-left">{item.question}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-[#ef4444] transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                  </button>
                </h3>
                {/* You can add expand/collapse logic here if needed */}
              </div>
            ))}
          </div>
        </div>
       
      </div>
      {/* FAQ Section End */}
      <Footer />
    </section>
  );
} 