import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  { img: '/media/blog1.a1574eaa.png', title: "Web 3.0 - How It's Changing the Internet" },
  { img: '/media/blog2.36c1e2e9.png', title: 'Best Practices for Secure Mobile App Development' },
  { img: '/media/blog3.20a84f07.png', title: 'Progressive Web Apps (PWA) - The Future of Mobile Experience' },
  { img: '/media/blog4.efaf757b.png', title: 'Flutter vs. React Native - Which One to Choose for Your App?' },
  { img: '/media/blog5.df423476.png', title: 'Why Businesses Should Invest in Custom Software Development' },
  { img: '/media/blog6.fc309e2c.png', title: 'The Impact of 5G on Software Development & IoT' },
  { img: '/media/blog7.005ab357.png', title: 'Blockchain Beyond Cryptocurrency - Real-World Applications' },
  { img: '/media/blog8.9762ab93.png', title: 'Future of Remote Work – Best Collaboration Tools for Teams' },
  { img: '/media/blog9.bcb6adf8.png', title: 'How Startups Can Leverage AI for Growth' },
  { img: '/media/blog10.000d2050.png', title: 'AI in Cybersecurity - How Machine Learning Detects Threats' },
  { img: '/media/blog11.c1e6156d.png', title: 'Top 10 Web Security Threats in 2025' },
  { img: '/media/blog12.9717ea00.png', title: 'Bug Bounty Programs - Are They Worth It?' },
];

const blogContents = [
  `Web 3.0 is revolutionizing the way we interact with the internet by introducing decentralization, blockchain technology, and user-centric data ownership. Unlike previous iterations, Web 3.0 empowers users to control their own data and participate in decentralized applications, leading to a more secure and transparent online experience.`,
  `Secure mobile app development involves implementing robust authentication, encrypting sensitive data, and regularly updating dependencies. Developers should follow security guidelines, conduct code reviews, and use secure APIs to protect user information and prevent vulnerabilities.`,
  `PWAs combine the best of web and mobile apps, offering offline access, push notifications, and fast load times. They provide a seamless user experience across devices and are cost-effective for businesses looking to reach a wider audience without building separate native apps.`,
  `Flutter and React Native are popular frameworks for cross-platform app development. Flutter offers a rich set of widgets and faster performance, while React Native leverages native components and a large community. The choice depends on project requirements, team expertise, and desired user experience.`,
  `Custom software development allows businesses to create tailored solutions that address specific needs, improve efficiency, and gain a competitive edge. Unlike off-the-shelf products, custom software can scale with business growth and adapt to changing requirements.`,
  `5G technology is transforming software development and IoT by enabling faster data transfer, lower latency, and enhanced connectivity. This leads to innovative applications in smart cities, autonomous vehicles, and real-time analytics.`,
  `Blockchain technology is being used beyond cryptocurrencies in areas like supply chain management, healthcare, and digital identity. Its decentralized nature ensures transparency, security, and trust in various industries.`,
  `Remote work is here to stay, and effective collaboration tools like Slack, Trello, and Zoom are essential for team productivity. These tools facilitate communication, project management, and file sharing, making remote work efficient and organized.`,
  `AI offers startups opportunities to automate processes, gain insights from data, and enhance customer experiences. By integrating AI into their operations, startups can innovate faster and compete with larger enterprises.`,
  `AI and machine learning are revolutionizing cybersecurity by detecting threats in real-time, analyzing patterns, and automating responses. This proactive approach helps organizations stay ahead of cybercriminals and protect sensitive data.`,
  `The top web security threats in 2025 include phishing attacks, ransomware, supply chain vulnerabilities, and AI-powered malware. Staying informed and implementing best practices is crucial for safeguarding digital assets.`,
  `Bug bounty programs incentivize ethical hackers to find and report vulnerabilities, helping organizations strengthen their security. While they offer benefits, proper management and clear guidelines are essential for success.`,
];

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10) - 1;
  const blog = blogs[id];
  const content = blogContents[id];

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-black">
        <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
        <Link href="/blogs" className="text-red-500 underline">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-8 px-2 sm:py-16 sm:px-4 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <Link href="/blogs" className="text-red-500 underline mb-8 inline-block">&larr; Back to Blogs</Link>
        <div className="bg-[#18181b] rounded-3xl shadow-lg overflow-hidden mb-8 w-full max-w-xs sm:max-w-xl mx-auto">
          {/* Thin red top border */}
          <div className="h-2 bg-red-500 w-full" />
          <div className="p-4 flex flex-col items-center">
            <Image
              src={blog.img}
              alt={blog.title}
              width={800}
              height={400}
              className="rounded-xl w-full h-auto object-cover mb-4"
              priority
            />
            <h1 className="text-lg sm:text-2xl font-bold mb-2 text-white text-left w-full">{blog.title}</h1>
            <p className="text-sm sm:text-base text-gray-300 text-left w-full">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams(): Array<{ id: string }> {
  return blogs.map((_, idx) => ({ id: String(idx + 1) }));
}