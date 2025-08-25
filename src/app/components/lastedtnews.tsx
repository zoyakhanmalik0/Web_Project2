// ...existing code...
"use client";
import React from "react";
import DonutBackground from "./DonutBackground";

// ✅ Star Icon Component
type StarIconProps = {
  className?: string;
};

const StarIcon: React.FC<StarIconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 
         1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 
         2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425
         l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 
         2.082-5.007z"
      clipRule="evenodd"
    />
  </svg>
);

// ✅ Blog Card Component
type BlogCardProps = {
  imageUrl: string;
  title: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, title }) => (
  <div className="bg-[#1c1c1e] rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1 h-full">
    <div className="overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-48 transition-transform duration-500 sm:h-56 lg:h-48 hover:scale-105"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/600x400/000000/FFFFFF?text=Image+Error";
        }}
      />
    </div>
    <div className="flex flex-col flex-grow p-4 sm:p-6">
      <h3 className="flex-grow mb-4 text-lg font-semibold leading-relaxed text-white sm:text-xl">
        {title}
      </h3>
      <a
        href="#"
        className="flex items-center gap-2 mt-auto font-semibold text-red-500 transition-colors duration-300 hover:text-red-400"
      >
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 lucide lucide-arrow-up-right">
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </svg>
      </a>
    </div>
  </div>
);

// ✅ Main Page Component
export default function Page() {
  const blogPosts = [
    {
      id: 1,
      title: "Web 3.0 - How It's Changing the Internet",
      imageUrl:
        "https://www.menosfios.com/wp-content/uploads/2023/07/web-3.0.jpg",
    },
    {
      id: 2,
      title: "Best Practices for Secure Mobile App Development",
      imageUrl:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Progressive Web Apps (PWA) - The Future of Mobile Experience",
      imageUrl:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <DonutBackground density="low">
      <div className="min-h-screen font-sans text-gray-200 bg-black">
        <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16 md:py-24 relative">
          {/* Blurred Rings for Insights Section */}
          <div className="absolute top-0 left-[-220px] z-0" style={{width:'520px',height:'520px'}}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '40px solid #ef4444',
              filter: 'blur(28px) brightness(0.3)',
              boxShadow: '0 0 16px 4px #ef4444, 0 0 32px 8px #ef4444',
              boxSizing: 'border-box',
            }} />
          </div>
          <div className="absolute bottom-[-120px] right-[-220px] z-0" style={{width:'540px',height:'540px'}}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '44px solid #ef4444',
              filter: 'blur(30px) brightness(0.3)',
              boxShadow: '0 0 18px 5px #ef4444, 0 0 36px 10px #ef4444',
              boxSizing: 'border-box',
            }} />
          </div>
          {/* Header Section */}
          <header className="mb-12 sm:mb-16 relative z-10">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 sm:gap-12">
            {/* Left Column: Title */}
            <div className="text-center md:text-left">
              {/* 🔥 LATEST NEWS bigger, no red background */}
              <div className="inline-flex items-center gap-2 mb-4 text-lg font-bold text-red-500 md:text-xl">
                 <StarIcon className="w-5 h-5" />
                  LATEST NEWS
              </div>

              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Insights on digital{" "}
                <span className="text-red-500">innovation</span> and{" "}
                <span className="text-red-500">growth</span>
              </h1>
            </div>
            {/* Right Column: Description */}
            <div className="text-center md:text-left">
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                Explore the latest trends, strategies, and tools driving digital
                innovation and helping businesses thrive in a rapidly evolving
                digital landscape.
              </p>
            </div>
          </div>
        </header>

        {/* Blog Cards Section */}
        <main>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                imageUrl={post.imageUrl}
              />
            ))}
          </div>
        </main>

        {/* Pagination Section */}
        <footer className="flex justify-center mt-12 sm:mt-16">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </footer>
      </div>
    </div>
    </DonutBackground>
  );
}
