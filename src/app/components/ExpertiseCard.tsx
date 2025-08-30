import React from 'react';

const ExpertiseCard = () => {
  return (
    // <div className="w-full max-w-4xl mx-auto p-2 sm:p-4 rounded-2xl" style={{ background: '#ef4444', boxShadow: '0 0 40px 8px #EF444433' }}>
    //   <div
    //     className="relative rounded-2xl w-full h-full shadow-lg"
    //     style={{
    //       background: 'linear-gradient(135deg, #101510 0%, #181818 100%)',
    //     }}
    //   >
    //     <div className="bg-[#111] rounded-2xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center" style={{ minHeight: '420px' }}>
    //     {/* Left Side */}
    //     <div className="flex-1 mb-10 md:mb-0 md:mr-12">
    //       <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-8">
    //         Expertise that<br />drives digital<br />
    //         <span className="text-red-500 font-semibold">success</span>
    //       </h2>
    //       <div className="flex space-x-10">
    //         <div>
    //           <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">+60%</div>
    //           <div className="text-sm text-gray-300">By optimizing your<br />website for search<br />engines.</div>
    //         </div>
    //         <div>
    //           <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">+30%</div>
    //           <div className="text-sm text-gray-300">Rise in revenue as more<br />visitors convert into<br />paying customers.</div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* Right Side */}
    //     <div className="flex-1 flex flex-col space-y-10">
    //       <div>
    //         <div className="flex items-center mb-2">
    //           <span className="text-red-500 text-xl mr-2">*</span>
    //           <span className="text-white font-bold text-lg">Social Media Management:</span>
    //         </div>
    //         <div className="text-gray-300 text-sm md:text-base">
    //           Our social media management services focus on building and enhancing your brand's online presence. We create engaging content, manage your social media accounts, and analyze performance.
    //         </div>
    //       </div>
    //       <div>
    //         <div className="flex items-center mb-2">
    //           <span className="text-red-500 text-xl mr-2">*</span>
    //           <span className="text-white font-bold text-lg">E-commerce Solutions:</span>
    //         </div>
    //         <div className="text-gray-300 text-sm md:text-base">
    //           Our e-commerce solutions are designed to create seamless online shopping experiences. From user-friendly website design to secure payment processing and inventory management.
    //         </div>
    //       </div>
    //     </div>
    //     </div>
    //   </div>
    // </div>
   <section className="py-20 relative">
    <div className="container mx-auto">
      <div className="relative rounded-[32px] p-12 lg:px-20 lg:pt-40 lg:pb-60">
        {/* Two Glowing Rings - Left and Right */}
  <div className="absolute top-1/2 left-[-180px] z-0" style={{transform:'translateY(-50%)',width:'420px',height:'420px'}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '32px solid #ef4444',
            filter: 'blur(20px) brightness(0.18)',
            boxShadow: '0 0 8px 2px #ef4444, 0 0 16px 4px #ef4444',
            boxSizing: 'border-box',
          }} />
        </div>
  <div className="absolute top-1/2 right-[-180px] z-0" style={{transform:'translateY(-50%)',width:'420px',height:'420px'}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '32px solid #ef4444',
            filter: 'blur(20px) brightness(0.18)',
            boxShadow: '0 0 8px 2px #ef4444, 0 0 16px 4px #ef4444',
            boxSizing: 'border-box',
            position: 'relative',
            top: '-180px', // move ring further upward
            left: '60px', // move ring more right
          }} />
        </div>
        <div className="relative z-10">
          <div className="relative z-[200] grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-16">
              <h2 className="text-4xl lg:text-6xl xl:text-7xl text-white font-extralight tracking-tight">
                Expertise that drives digital{" "}
                <span className="text-default font-normal">success</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-12">
                <div>
                  <div className="text-default text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                    +60%
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    By optimizing your website for search engines.
                  </p>
                </div>
                <div>
                  <div className="text-default text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                    +30%
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Rise in revenue as more visitors convert into paying
                    customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-16">
              <div>
                <h3 className="flex items-start gap-4 text-white text-2xl lg:text-3xl font-medium mb-6">
                  <span className="text-default text-4xl">*</span>
                  <span>Social Media Management:</span>
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Our social media management services focus on building and
                  enhancing your brands online presence. We create engaging
                  content, manage your social media accounts, and analyze
                  performance.
                </p>
              </div>
              <div>
                <h3 className="flex items-start gap-4 text-white text-2xl lg:text-3xl font-medium mb-6">
                  <span className="text-default text-4xl">*</span>
                  <span>E-commerce Solutions:</span>
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Our e-commerce solutions are designed to create seamless online
                  shopping experiences. From user-friendly website design to
                  secure payment processing and inventory management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
};

export default ExpertiseCard; 