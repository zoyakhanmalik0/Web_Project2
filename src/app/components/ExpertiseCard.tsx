import React from 'react';

const ExpertiseCard = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-2 sm:p-4 rounded-2xl" style={{ background: '#ef4444', boxShadow: '0 0 40px 8px #EF444433' }}>
      <div
        className="relative rounded-2xl w-full h-full shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #101510 0%, #181818 100%)',
        }}
      >
        <div className="bg-[#111] rounded-2xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center" style={{ minHeight: '420px' }}>
        {/* Left Side */}
        <div className="flex-1 mb-10 md:mb-0 md:mr-12">
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-8">
            Expertise that<br />drives digital<br />
            <span className="text-red-500 font-semibold">success</span>
          </h2>
          <div className="flex space-x-10">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">+60%</div>
              <div className="text-sm text-gray-300">By optimizing your<br />website for search<br />engines.</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">+30%</div>
              <div className="text-sm text-gray-300">Rise in revenue as more<br />visitors convert into<br />paying customers.</div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col space-y-10">
          <div>
            <div className="flex items-center mb-2">
              <span className="text-red-500 text-xl mr-2">*</span>
              <span className="text-white font-bold text-lg">Social Media Management:</span>
            </div>
            <div className="text-gray-300 text-sm md:text-base">
              Our social media management services focus on building and enhancing your brand's online presence. We create engaging content, manage your social media accounts, and analyze performance.
            </div>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <span className="text-red-500 text-xl mr-2">*</span>
              <span className="text-white font-bold text-lg">E-commerce Solutions:</span>
            </div>
            <div className="text-gray-300 text-sm md:text-base">
              Our e-commerce solutions are designed to create seamless online shopping experiences. From user-friendly website design to secure payment processing and inventory management.
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard; 