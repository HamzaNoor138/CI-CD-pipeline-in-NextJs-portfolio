import Image from 'next/image';
import Link from 'next/link';

import { FaCode, FaMobileAlt, FaBrain, FaRegStar, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaBriefcase } from 'react-icons/fa';
import AboutAnimationWrapper from './about/AboutAnimationWrapper';
import SkillsFilter from './skills/SkillsFilter';
import ContactForm from './contact/ContactForm';
import GetInTouchButton from './GetInTouchButton';

// Map icon names to react-icons
const iconMap = {
  web: <FaCode className="text-2xl text-[#a29bfe]" />,
  android: <FaMobileAlt className="text-2xl text-[#00cec9]" />,
  ai: <FaBrain className="text-2xl text-[#fd79a8]" />,
};

export default function MemberContent({ member, slug }) {
  // Get member data for different sections
  const aboutTitle = member.aboutTitle || 'MERN Stack Master & Full-Stack Developer';
  const aboutSummary = member.aboutSummary || `As a seasoned Full-Stack Developer with 3+ years of expertise, I've mastered the MERN stack (MongoDB, Express.js, React.js, Node.js) to deliver enterprise-grade web applications that drive business growth. I specialize in crafting lightning-fast, scalable solutions with clean architecture and cutting-edge technologies. My passion lies in transforming complex business requirements into elegant, user-centric digital experiences that exceed expectations and deliver measurable results.`;
  const aboutTags = member.aboutTags || ['MERN Stack', '3+ Years Experience', 'Enterprise Solutions', 'Scalable Architecture', 'Performance Optimization', 'Business Growth'];
  const aboutHighlights = member.aboutHighlights || [
    {
      icon: 'web',
      title: 'MERN Stack Mastery',
      description: '3+ years of expertise in MongoDB, Express.js, React.js, and Node.js for enterprise solutions.'
    },
    {
      icon: 'android',
      title: 'Full-Stack Excellence',
      description: 'End-to-end development from database design to responsive frontend with scalable architecture.'
    },
    {
      icon: 'ai',
      title: 'Performance & Scalability',
      description: 'Lightning-fast applications optimized for speed, SEO, and business growth with measurable ROI.'
    }
  ];

  const contact = member.contact || {};
  const categories = ['all', ...new Set(member.skills.map((s) => s.category.toLowerCase()).filter(Boolean))];

  return (
    <div className="w-full px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Hero Section */}
      <section
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-24"
      >
        {/* Left Section */}
        <div className="flex-1">
          <p className="text-xs xs:text-sm text-[#ffa500] mb-2 xs:mb-3 font-semibold tracking-wide">
            👋 Hello, I'm
          </p>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-1 font-serif">
            <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">
              {member.name.split(' ')[0]}
            </span>{' '}
            <span className="text-[#fd79a8]">{member.name.split(' ')[1]}</span>
          </h1>
          <h2 className="text-lg xs:text-xl md:text-2xl font-bold text-[#00b894] mb-3 xs:mb-4 tracking-wide">
            {member.role}
          </h2>
          <p className="mb-4 xs:mb-6 leading-relaxed max-w-2xl text-sm xs:text-base sm:text-lg font-bold tracking-wide" style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif" }}>
            <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">
              Innovative Full-Stack Developer with 3+ years of experience delivering high-performance, scalable, and SEO-optimized digital solutions with precision, creativity, and a commitment to excellence.
            </span>
          </p>

          {/* Skills Tags (show only top 4) */}
          <div className="flex flex-wrap gap-2 xs:gap-3 mb-6 xs:mb-8 max-w-xl">
            {member.skills.slice(0, 4).map((skill, i) => (
              <span
                key={i}
                className="text-xs xs:text-sm font-bold px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 rounded-full text-white transition-all duration-300
                   bg-white/15 backdrop-blur-md border border-white/25 shadow-[inset_0_0_12px_#ffffff15]
                   hover:border-[#00cec9] hover:shadow-[0_0_15px_#00cec9aa] hover:scale-105 tracking-wide"
              >
                {skill.icon} {typeof skill === 'string' ? skill : skill.name}
              </span>
            ))}
          </div>

          {/* Get In Touch Button - Positioned below skills in hero section */}
          <GetInTouchButton />
        </div>

        {/* Right Section - Large Profile Image */}
        <div className="relative w-[240px] xs:w-[280px] sm:w-[320px] md:w-[380px] flex-shrink-0 -ml-16 xs:-ml-20 sm:-ml-24 md:-ml-32 mt-4 xs:mt-6 sm:mt-8">
          {/* Enhanced Professional Decorative Elements */}
          <div className="absolute -top-2 xs:-top-4 -right-2 xs:-right-4 w-2 h-2 xs:w-3 xs:h-3 bg-[#fd79a8] rounded-full shadow-lg shadow-[#fd79a8]/50 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-2 h-2 xs:w-3 xs:h-3 bg-[#00cec9] rounded-full shadow-lg shadow-[#00cec9]/50 animate-pulse" style={{animationDelay: '1s'}} />
          
          {/* Enhanced Profile Image Container */}
          <div className="p-[3px] xs:p-[4px] sm:p-[5px] bg-gradient-to-tr from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] rounded-full w-full h-[320px] xs:h-[380px] sm:h-[420px] md:h-[520px] shadow-xl xs:shadow-2xl shadow-[#6c5ce7]/30 hover:shadow-[#6c5ce7]/50 transition-all duration-500">
            <Image
              src={member.image}
              alt={member.name}
              width={380}
              height={520}
              className="w-full h-full object-cover rounded-full border-2 xs:border-3 sm:border-4 border-[#0f0c29] hover:scale-[1.02] transition-transform duration-500"
              priority={true}
              sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="space-y-12 sm:space-y-14 md:space-y-16">
        {/* Services Header */}
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-center mb-2 font-serif">
            <span className="bg-gradient-to-r from-[#64b5f6] to-[#81c784] text-transparent bg-clip-text">Services</span>
          </h2>
          <span className="block h-1 w-20 xs:w-24 sm:w-28 bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] rounded-full mt-2 mb-2 mx-auto" />
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto mt-2 font-medium leading-relaxed px-2 xs:px-0">
            Crafting digital experiences that transcend expectations and deliver unparalleled results
          </p>
        </div>

                 {/* Frontend Development Service */}
         <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 animate-slide-in-left">
           {/* Left - Content */}
           <div className="flex-1 space-y-4 sm:space-y-6">
             <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
               <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r from-[#64b5f6] to-[#81c784] rounded-full flex items-center justify-center">
                 <span className="text-xl xs:text-2xl">🎨</span>
               </div>
               <h3 className="text-xl xs:text-2xl sm:text-3xl font-black text-[#64b5f6] tracking-wide">Frontend Excellence</h3>
             </div>
             <p className="text-gray-300 leading-relaxed text-sm xs:text-base sm:text-lg font-medium">
               I transform ideas into breathtaking digital interfaces that captivate and engage. With cutting-edge technologies like React, Next.js, and modern CSS frameworks, I craft responsive, lightning-fast applications that provide seamless user experiences across all devices.
             </p>
             <div className="space-y-2 xs:space-y-3">
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#81c784] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">Pixel-perfect responsive designs</span>
               </div>
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#81c784] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">Optimized performance and accessibility</span>
               </div>
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#81c784] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">Modern animations and micro-interactions</span>
               </div>
             </div>
           </div>

                       {/* Right - Frontend Beautiful Design */}
            <div className="flex-1 flex justify-center">
              <div className="w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 flex items-center justify-center relative">
                <div className="relative w-full h-full">
                  {/* Main Circle */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-cyan-400/20 backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center">
                    <div className="text-8xl">💻</div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-6 left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-70"></div>
                  <div className="absolute top-1/2 left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
         </div>

         {/* MERN Stack Development Service */}
         <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 animate-slide-in-right">
           {/* Right - Content */}
           <div className="flex-1 space-y-4 sm:space-y-6">
             <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
               <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r from-[#81c784] to-[#64b5f6] rounded-full flex items-center justify-center">
                 <span className="text-xl xs:text-2xl">⚡</span>
               </div>
               <h3 className="text-xl xs:text-2xl sm:text-3xl font-black text-[#81c784] tracking-wide">MERN Stack Mastery</h3>
             </div>
             <p className="text-gray-300 leading-relaxed text-sm xs:text-base sm:text-lg font-medium">
               Unleashing the full power of the MERN stack to create lightning-fast, scalable, and enterprise-grade applications. I architect robust MongoDB databases, build blazing-fast Express.js APIs, craft stunning React.js interfaces, and deploy bulletproof Node.js servers that handle millions of requests with zero downtime.
             </p>
             <div className="space-y-2 xs:space-y-3">
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#64b5f6] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">High-performance MongoDB optimization & scaling</span>
               </div>
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#64b5f6] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">Lightning-fast Express.js REST APIs & microservices</span>
               </div>
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#64b5f6] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">React.js applications with 99.9% uptime guarantee</span>
               </div>
             </div>
           </div>

                       {/* Left - MERN Stack Beautiful Design */}
            <div className="flex-1 flex justify-center">
              <div className="w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 flex items-center justify-center relative">
                <div className="relative w-full h-full">
                  {/* Main Circle */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400/20 via-blue-400/20 to-indigo-400/20 backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center">
                    <div className="text-8xl">⚡</div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute top-6 left-4 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-4 right-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-70"></div>
                  <div className="absolute top-1/3 right-3 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
         </div>

                 {/* Backend & API Development Service */}
         <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 animate-slide-in-left">
           {/* Left - Content */}
           <div className="flex-1 space-y-4 sm:space-y-6">
             <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
               <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r from-[#64b5f6] to-[#81c784] rounded-full flex items-center justify-center">
                 <span className="text-xl xs:text-2xl">⚡</span>
               </div>
               <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#64b5f6]">Backend & API Mastery</h3>
             </div>
             <p className="text-gray-300 leading-relaxed text-sm xs:text-base sm:text-lg font-medium">
               Building robust, scalable backend systems that power your applications with lightning-fast performance. From RESTful APIs to GraphQL endpoints, I architect solutions that handle complex data operations, ensure security, and provide seamless integration capabilities.
             </p>
             <div className="space-y-2 xs:space-y-3">
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#81c784] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">Scalable server architecture</span>
               </div>
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#81c784] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">Secure API development & authentication</span>
               </div>
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#81c784] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">Database optimization & data modeling</span>
               </div>
             </div>
           </div>

                       {/* Right - Backend Beautiful Design */}
            <div className="flex-1 flex justify-center">
              <div className="w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 flex items-center justify-center relative">
                <div className="relative w-full h-full">
                  {/* Main Circle */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400/20 via-red-400/20 to-pink-400/20 backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center">
                    <div className="text-8xl">🔧</div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 w-5 h-5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-6 right-4 w-4 h-4 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-70"></div>
                  <div className="absolute top-1/2 right-2 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
         </div>

                 {/* UI/UX Design Service */}
         <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 animate-slide-in-right">
           {/* Right - Content */}
           <div className="flex-1 space-y-4 sm:space-y-6">
             <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
               <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r from-[#81c784] to-[#64b5f6] rounded-full flex items-center justify-center">
                 <span className="text-xl xs:text-2xl">✨</span>
               </div>
               <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#81c784]">UI/UX Design Innovation</h3>
             </div>
             <p className="text-gray-300 leading-relaxed text-sm xs:text-base sm:text-lg font-medium">
               Creating intuitive, user-centered designs that not only look stunning but also provide exceptional user experiences. I blend creativity with functionality, ensuring every interaction feels natural and every visual element serves a purpose.
             </p>
             <div className="space-y-2 xs:space-y-3">
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#64b5f6] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">User-centered design thinking</span>
               </div>
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#64b5f6] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">Interactive prototypes & wireframes</span>
               </div>
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#64b5f6] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">Brand consistency & visual identity</span>
               </div>
             </div>
           </div>

                       {/* Left - UI/UX Beautiful Design */}
            <div className="flex-1 flex justify-center">
              <div className="w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 flex items-center justify-center relative">
                <div className="relative w-full h-full">
                  {/* Main Circle */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-violet-400/20 backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center">
                    <div className="text-8xl">🎨</div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute top-6 right-4 w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-4 left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full opacity-70"></div>
                  <div className="absolute top-1/3 left-3 w-3 h-3 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
         </div>

        

                 {/* SEO Optimization & Static Generation Service */}
         <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 animate-slide-in-left">
           {/* Left - Content */}
           <div className="flex-1 space-y-4 sm:space-y-6">
             <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
               <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r from-[#64b5f6] to-[#81c784] rounded-full flex items-center justify-center">
                 <span className="text-xl xs:text-2xl">🎯</span>
               </div>
               <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#64b5f6]">SEO & Static Generation Mastery</h3>
             </div>
             <p className="text-gray-300 leading-relaxed text-sm xs:text-base sm:text-lg font-medium">
               Dominating search engine rankings through next-level SEO strategies and lightning-fast static generation. I architect websites that achieve 100/100 Lighthouse scores, pre-render content at build time, and deliver instant page loads that search engines love. Your digital presence will soar to the top of search results with my performance-first approach.
             </p>
             <div className="space-y-2 xs:space-y-3">
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#81c784] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">Static site generation & pre-rendering</span>
               </div>
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#81c784] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">100/100 Lighthouse performance scores</span>
               </div>
               <div className="flex items-center gap-2 xs:gap-3">
                 <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#81c784] rounded-full"></span>
                 <span className="text-gray-300 text-sm xs:text-base">Advanced meta tags & structured data</span>
               </div>
             </div>
           </div>

                       {/* Right - SEO Beautiful Design */}
            <div className="flex-1 flex justify-center">
              <div className="w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 flex items-center justify-center relative">
                <div className="relative w-full h-full">
                  {/* Main Circle */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400/20 via-teal-400/20 to-cyan-400/20 backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center">
                    <div className="text-8xl animate-pulse">🎯</div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-6 w-5 h-5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse opacity-70"></div>
                  <div className="absolute top-1/2 left-2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '1.2s'}}></div>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="space-y-16">
        {/* Skills Header */}
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-[#a29bfe] font-bold text-base md:text-lg mb-2">
            <FaRegStar className="text-[#fd79a8] animate-pulse" />
            <span className="tracking-wide uppercase">Technical Expertise</span>
            <FaRegStar className="text-[#00cec9] animate-pulse" />
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-center mb-2 font-serif">
            <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">My Skills</span>
          </h2>
          <span className="block h-1 w-28 bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] rounded-full mt-2 mb-2 mx-auto" />
        </div>
        
        <div className="w-full">
          <SkillsFilter skills={member.skills} categories={categories} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="space-y-16">
        {/* Projects Header */}
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-[#a29bfe] font-bold text-base md:text-lg mb-2">
            <FaRegStar className="text-[#fd79a8] animate-pulse" />
            <span className="tracking-wide uppercase">Portfolio Showcase</span>
            <FaRegStar className="text-[#00cec9] animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-2 font-serif">
            <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">My Projects</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl text-center text-gray-300 mt-2 mx-auto font-medium leading-relaxed">
            Showcasing my expertise through innovative digital solutions that deliver exceptional results
          </p>
          <span className="block h-1 w-28 bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] rounded-full mt-2 mb-2 mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          {member.projects && member.projects.length > 0 ? (
            member.projects.map((project, index) => (
              <div 
                key={project.slug}
                className="group relative overflow-hidden bg-gradient-to-br from-[#18192a] to-[#23234a] rounded-2xl border border-white/10 shadow-2xl hover:shadow-[#6c5ce7]/30 transition-all duration-500 hover:scale-[1.02] hover:border-[#6c5ce7]/30 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Project Image */}
                <div className="relative h-36 xs:h-40 sm:h-48 overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img 
                    src={project.image || project.images?.[0] || '/ny212.png'} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Project Type Badge */}
                  <div className="absolute top-4 right-4 z-20 animate-bounce" style={{animationDelay: '1s'}}>
                    <span className="px-3 py-1 bg-[#6c5ce7]/90 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-[#6c5ce7] hover:shadow-lg hover:shadow-[#6c5ce7]/50">
                      {project.organization.includes('University') ? 'Academic' : 
                       project.organization.includes('Freelance') ? 'Freelance' : 
                       project.organization.includes('Client') ? 'Client' : 'Personal'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 xs:p-5 sm:p-6">
                  <h3 className="text-lg xs:text-xl font-bold mb-2 xs:mb-3 text-white group-hover:text-[#a29bfe] transition-all duration-300 transform group-hover:translate-x-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs xs:text-sm mb-3 xs:mb-4 leading-relaxed transition-all duration-300 group-hover:text-gray-200">
                    {project.shortDescription}
                  </p>

                  {/* Project Skills */}
                  <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-4 xs:mb-6">
                    {project.skills?.slice(0, 4).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-1.5 xs:px-2 py-1 bg-white/10 backdrop-blur-md text-white text-xs rounded-full border border-white/20 flex items-center gap-1 transition-all duration-300 hover:bg-[#6c5ce7]/20 hover:border-[#6c5ce7]/50 hover:scale-105 hover:shadow-lg hover:shadow-[#6c5ce7]/20"
                        style={{
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`,
                          animationFillMode: 'both'
                        }}
                      >
                        {skill.icon} {skill.name}
                      </span>
                    ))}
                  </div>

                  {/* Project Meta */}
                  <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between text-xs xs:text-sm text-gray-400 mb-3 xs:mb-4 gap-1 xs:gap-0">
                    <span className="flex items-center gap-1 xs:gap-2">
                      <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#00cec9] rounded-full"></span>
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1 xs:gap-2">
                      <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#fd79a8] rounded-full"></span>
                      <span className="truncate">{project.organization}</span>
                    </span>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-2 xs:gap-3">
                    {project.links?.live && (
                      <a 
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] text-white text-center py-1.5 xs:py-2 px-2 xs:px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#6c5ce7]/30 transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-[#6c5ce7]/50 text-xs xs:text-sm"
                      >
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">🚀</span> 
                        <span className="hidden xs:inline ml-1">Live Demo</span>
                        <span className="inline xs:hidden ml-1">Demo</span>
                      </a>
                    )}
                    {project.links?.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/10 backdrop-blur-md text-white text-center py-1.5 xs:py-2 px-2 xs:px-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-[#00cec9] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00cec9]/30 text-xs xs:text-sm"
                      >
                        <span className="inline-block transition-transform duration-300 group-hover:rotate-12">💻</span> 
                        <span className="hidden xs:inline ml-1">View Code</span>
                        <span className="inline xs:hidden ml-1">Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6c5ce7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">Projects Coming Soon</h3>
              <p className="text-gray-400">I'm working on some amazing projects. Check back soon!</p>
            </div>
          )}
        </div>

        {/* Floating Background Elements (static) */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-[#fd79a8]/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-[#00cec9]/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#a29bfe]/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-[#ffa500]/20 rounded-full"></div>
      </section>

      {/* About Section */}
      <section id="about-section" className="space-y-16">
        {/* About Header */}
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-[#a29bfe] font-bold text-base md:text-lg mb-2">
            <FaRegStar className="text-[#fd79a8] animate-pulse" />
            <span className="tracking-wide uppercase">About Me</span>
            <FaRegStar className="text-[#00cec9] animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-2 font-serif">
            <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">
              {aboutTitle}
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl text-center text-gray-300 mt-2 mx-auto font-medium leading-relaxed">
            <span className="text-[#a29bfe] font-semibold">Discover</span> my journey, passion, and commitment to creating innovative digital solutions.
          </p>
          <span className="block h-1 w-28 animated-underline rounded-full mt-2 mb-2 mx-auto" />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: About Content */}
          <div className="flex-1 space-y-8">
            {/* Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 transition-transform duration-300 hover:scale-[1.015] hover:shadow-[0_8px_32px_#6c5ce7aa]">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                <FaRegStar className="text-[#a29bfe]" /> My Story
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {aboutSummary}
              </p>
            </div>

            {/* Tags */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 transition-transform duration-300 hover:scale-[1.015] hover:shadow-[0_8px_32px_#6c5ce7aa]">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                <FaRegStar className="text-[#00cec9]" /> Key Areas
              </h3>
              <div className="flex flex-wrap gap-3">
                {aboutTags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm font-semibold px-4 py-2 rounded-full text-white transition-all duration-200
                       bg-white/10 backdrop-blur-md border border-white/20 shadow-[inset_0_0_8px_#ffffff22]
                       hover:border-[#00cec9] hover:shadow-[0_0_10px_#00cec9aa]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: About Animation */}
          <div className="flex-1 flex items-center justify-center">
            <AboutAnimationWrapper />
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutHighlights.map((highlight, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-gradient-to-r from-[#18192a] to-[#23234a] rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-[#fd79a8]/40 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#fd79a8]/10 to-[#a29bfe]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-4">
                  {iconMap[highlight.icon] || <FaCode className="text-2xl text-[#a29bfe]" />}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{highlight.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="space-y-16">
        {/* Contact Header */}
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-[#a29bfe] font-bold text-base md:text-lg mb-2">
            <FaRegStar className="text-[#fd79a8] animate-pulse" />
            <span className="tracking-wide uppercase">Let's Connect</span>
            <FaRegStar className="text-[#00cec9] animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-2 font-serif" style={{ textShadow: '0 2px 16px #6c5ce7cc, 0 1px 0 #fff' }}>
            Get In <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">Touch</span>
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mt-2 mb-4 mx-auto font-medium leading-relaxed">
            Have a project in mind or want to collaborate? I'm always excited to discuss new opportunities and bring innovative ideas to life. Let's create something amazing together!
          </p>
          <span className="block h-1 w-28 animated-underline rounded-full mt-2 mb-2 mx-auto" />
        </div>

        {/* Main Content Row */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Left: Contact Info Card */}
          <div className="flex-1 flex flex-col">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 flex flex-col gap-6 transition-transform duration-300 hover:scale-[1.015] hover:shadow-[0_8px_32px_#6c5ce7aa]">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-white">
                <FaRegStar className="text-[#a29bfe]" /> Contact Information
              </h3>
              <div className="flex flex-col gap-6">
                {/* Location */}
                {contact.location && (
                  <div className="group relative overflow-hidden bg-gradient-to-r from-[#18192a] to-[#23234a] rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-[#fd79a8]/40 transition-all duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fd79a8]/10 to-[#a29bfe]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#fd79a8] to-[#a29bfe] rounded-full flex items-center justify-center shadow-lg">
                        <FaMapMarkerAlt className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Location</h4>
                        <p className="text-gray-300">{contact.location}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Email */}
                {contact.email && (
                  <div className="group relative overflow-hidden bg-gradient-to-r from-[#18192a] to-[#23234a] rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-[#00cec9]/40 transition-all duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00cec9]/10 to-[#a29bfe]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#00cec9] to-[#a29bfe] rounded-full flex items-center justify-center shadow-lg">
                        <FaEnvelope className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Email</h4>
                        <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-[#00cec9] transition-colors">
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Upwork */}
                {contact.upwork && (
                  <div className="group relative overflow-hidden bg-gradient-to-r from-[#18192a] to-[#23234a] rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-[#00cec9]/40 transition-all duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00cec9]/10 to-[#a29bfe]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#34d399] to-[#10b981] rounded-full flex items-center justify-center shadow-lg">
                        <FaBriefcase className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Upwork</h4>
                        <a href={contact.upwork} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#10b981] transition-colors">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <FaRegStar className="text-[#00cec9]" /> Connect With Me
                </h4>
                <div className="flex gap-4">
                  {contact.github && (
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-[#18192a] to-[#23234a] rounded-full flex items-center justify-center border border-white/10 shadow-lg hover:shadow-[#a29bfe]/40 transition-all duration-300 hover:scale-110"
                    >
                      <FaGithub className="text-white text-lg" />
                    </a>
                  )}
                  {contact.linkedin && (
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-[#18192a] to-[#23234a] rounded-full flex items-center justify-center border border-white/10 shadow-lg hover:shadow-[#fd79a8]/40 transition-all duration-300 hover:scale-110"
                    >
                      <FaLinkedin className="text-white text-lg" />
                    </a>
                  )}
                  {contact.upwork && (
                    <a
                      href={contact.upwork}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-[#18192a] to-[#23234a] rounded-full flex items-center justify-center border border-white/10 shadow-lg hover:shadow-[#00cec9]/40 transition-all duration-300 hover:scale-110"
                    >
                      <FaBriefcase className="text-white text-lg" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1">
            <ContactForm contactEmail={contact.email} />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 xs:py-16 md:py-20 text-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Line */}
          <div className="w-24 xs:w-28 sm:w-32 h-1 bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] rounded-full mx-auto mb-6 xs:mb-8"></div>
          
          {/* Footer Content */}
          <div className="space-y-4 xs:space-y-6">
            <h3 className="text-xl xs:text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">
                Let's Build Something Amazing Together
              </span>
            </h3>
            
            <p className="text-gray-300 text-base xs:text-lg max-w-2xl mx-auto leading-relaxed px-4 xs:px-0">
              Ready to bring your digital vision to life? I'm here to turn your ideas into reality with cutting-edge technology and creative solutions.
            </p>
            
            {/* Final CTA Button */}
            <div className="pt-4 xs:pt-6">
              <a 
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 xs:gap-3 px-6 xs:px-8 py-3 xs:py-4 bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] text-white font-bold text-base xs:text-lg rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(108,92,231,0.6)] transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-[#6c5ce7]/50"
              >
                <span className="text-xl xs:text-2xl">🚀</span>
                Start Your Project
                <span className="text-xl xs:text-2xl">→</span>
              </a>
            </div>
          </div>
          
          {/* Bottom Border */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-8 xs:mt-12"></div>
          
          {/* Copyright */}
          <div className="pt-6 xs:pt-8 text-gray-400 pb-8 xs:pb-12">
            <p className="text-xs xs:text-sm">
              © {new Date().getFullYear()} {member.name}. Crafted with ❤️ and Next.js
            </p>
          </div>
        </div>
      </footer>

      {/* Animated underline style */}
      <style>{`
        .animated-underline {
          background: linear-gradient(90deg, #a29bfe, #fd79a8, #00cec9, #a29bfe);
          background-size: 200% 200%;
          animation: gradient-move 3s linear infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
} 