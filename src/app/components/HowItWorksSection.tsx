import React from 'react';

const steps = [
  {
    title: 'Discovery Phase',
    description:
      'We begin with an in-depth consultation to understand your brand, objectives, and target audience. This is followed by thorough market research and trend analysis to identify key opportunities.',
    step: '01',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#EF4444"/><path d="M12 8v8M8 12h8" stroke="black" strokeWidth="2"/></svg>
    ),
  },
  {
    title: 'Implementation',
    description:
      'Based on the insights gathered, we develop and execute a tailored digital strategy that aligns with your goals — ensuring each step delivers measurable impact.',
    step: '02',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="15" width="16" height="5" rx="2" fill="#EF4444"/><rect x="4" y="10" width="16" height="5" rx="2" fill="#EF4444"/><rect x="4" y="5" width="16" height="5" rx="2" fill="#EF4444"/></svg>
    ),
  },
  {
    title: 'Collaboration',
    description:
      'We believe in working closely with our clients throughout the process. Your feedback and insights help us refine strategies in real time and ensure alignment with your brand vision.',
    step: '03',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="8" rx="4" fill="#EF4444"/><ellipse cx="12" cy="10" rx="8" ry="4" fill="#EF4444"/></svg>
    ),
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 md:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-500 text-xl">*</span>
              <span className="uppercase text-xs font-semibold tracking-widest text-white">HOW IT WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-4">
              Our proven <span className="text-red-500 font-semibold">process</span><br />for achieving success
            </h2>
          </div>
          <div className="max-w-xl mt-4 md:mt-0 text-gray-300 text-base md:text-lg">
            Our proven process combines research, strategy, and creativity to deliver tailored solutions that drive measurable results.
          </div>
        </div>
        <div className="grid grid-flow-col auto-cols-[minmax(320px,1fr)] gap-8 overflow-x-auto">
          {steps.map((step, idx) => (
            <div key={step.title} className="bg-[#232323] rounded-2xl p-8 flex flex-col justify-between min-h-[340px] shadow-lg relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white text-xl font-semibold">{step.title}</h3>
                  <span className="rounded-full border border-red-500 w-8 h-8 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-8">{step.description}</p>
              </div>
              <div className="flex items-end justify-between w-full">
                <div>
                  <span className="text-xs text-gray-400 tracking-widest">STEP</span>
                  <div className="text-red-500 text-2xl font-bold">{step.step}</div>
                </div>
                <div className="w-16 h-16 rounded-bl-2xl bg-red-500 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 