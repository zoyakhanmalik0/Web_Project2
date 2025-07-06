import Image from 'next/image';
import Link from 'next/link';
import Footer from "../../components/Footer";

export default function ContentWriting() {
  return (
    <section className="!w-full bg-cover bg-center bg-black text-white pb-10" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
        <div className="flex flex-col justify-center items-center xl:max-w-6xl gap-8 font-semibold text-white">
          <span className="text-4xl text-center xl:text-7xl">Content <span className="text-default">Writing</span></span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><Link className="hover:underline" href="/services">Services</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><span className="text-default">Content writing</span></li>
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
              <Image src="/media/sec1.d7985c05.jpg" alt="Business people" width={800} height={400} className="w-full object-cover" />
            </div>
            <div className="space-y-6 ">
              <p>Our Content Writing Services help businesses craft compelling, high-quality content that engages audiences, enhances brand credibility, and drives conversions. From blog posts and website content to SEO-optimized articles and social media copy, we deliver content that aligns with your brand voice and business goals. Let us create impactful content that tells your story effectively and resonates with your audience.</p>
              <h2 className="text-4xl lg:text-5xl text-white">Key <span className="text-default font-semibold">features</span> of <span>content writing</span></h2>
              <p>We specialize in crafting engaging, informative, and SEO-optimized content that speaks directly to your audience. Our focus is on delivering high-quality, well-researched articles, blogs, and web copy that drive traffic and build credibility. Whether it's for your website, social media, or marketing materials, we ensure every piece of content aligns with your brand's voice and goals, effectively engaging readers and fostering conversions. Let us help you create content that connects.</p>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <ul className="space-y-4 xl:max-w-lg">
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>SEO-friendly content for visibility.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Captivating blog posts &amp; articles.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Persuasive website &amp; landing copy.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Engaging social media posts.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Polished editing &amp; proofreading.</li>
                </ul>
                <div className="h-full overflow-hidden">
                  <Image src="/media/main.6c1f9e9f.jpg" alt="Main Image Acciobyte" width={400} height={230} className="w-full h-[230px] aspect-square object-cover rounded-xl" />
                </div>
              </div>
              <div className="rounded-[32px] overflow-hidden">
                <div className="grid md:grid-cols-1 gap-6">
                  <h2 className="text-4xl lg:text-5xl text-white ">Our <span className="text-default font-semibold">process</span> of content writing</h2>
                  <p>Our content writing process begins with a deep understanding of your brand, audience, and objectives. We focus on creating well-researched, compelling content that resonates with your target market. We prioritize SEO best practices to boost your content's visibility on search engines. Through collaboration and feedback, we refine the content to ensure it aligns with your goals and delivers measurable results. Whether it's blog posts, website copy, or email newsletters, we guarantee content that captivates and converts.</p>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shapes w-8 h-8 text-default !w-16 !h-16"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect x="3" y="14" width="7" height="7" rx="1"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">01</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Research &amp; Strategy Development</h3>
                      <p className="leading-relaxed">We analyze your brand, target audience, and competitors to develop a content strategy that aligns with your goals.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-2">
                      <Image src="/media/step1.f339b348.jpg" alt="Research & Strategy Development" width={400} height={300} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-2">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-8 h-8 text-default !w-16 !h-16"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">02</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Content Creation &amp; Optimization</h3>
                      <p className="leading-relaxed">Our expert writers craft engaging, well-structured content optimized for readability and SEO.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-1">
                      <Image src="/media/step2.af5b3ab5.jpg" alt="Content Creation & Optimization" width={400} height={300} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database w-8 h-8 text-default !w-16 !h-16"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">03</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Review &amp; Refinement</h3>
                      <p className="leading-relaxed">We ensure content accuracy, edit for clarity, and finalize it for publication across relevant platforms.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-2">
                      <Image src="/media/step3.d90d58aa.jpg" alt="Review & Refinement" width={400} height={300} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar and other sections can be added here if needed */}
        </div>
      </div>
      <Footer />
    </section>
  );
} 