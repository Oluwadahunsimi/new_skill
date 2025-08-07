 "use client";


import { Button } from "@/components/UI/button"; 
import { Input } from "@/components/UI/input"; 
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} 
from "@/components/UI/accordion";
import OverlayPopup from "@/components/UI/OverlayPopup";
import FlipNumber from "@/components/UI/FlipNumber";
import { Card, CardContent } from "@/components/UI/card";
import { Icon } from '@iconify/react'; 
import collaborateIcon from '@iconify/icons-carbon/collaborate'; 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";  
import {
  Bookmark,
 
  Clock,
  UserCheck,
  ExternalLink, 
  Folder, 
  
  Globe,
  Briefcase,
 
  X,  
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";


const Hero = () => {
  const texts = ["Career path", "Employability", "Global talent"];
  const [currentText, setCurrentText] = useState(texts[0]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(texts);
  }, [texts]);
 


 // ✅ Add state to track the active tab
 const [activeTab, setActiveTab] = useState<"programs" | "courses">("courses");


  // ✅ Function to handle scrolling and toggle button background
  const handleScroll = (sectionId: string, tab: "programs" | "courses") => {
    setActiveTab(tab);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

const [hasMounted, setHasMounted] = useState(false);

useEffect(() => {
  setHasMounted(true);
}, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setCurrentText(texts[index]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
     
   <>
      <OverlayPopup />
      ...
   

    <div className="bg-white" suppressHydrationWarning={true}>
      {/* Static Limited Offer Banner */}
      <div
       className="fixed top-0 left-0 w-full text-center text-sm text-white py-2 px-4 z-[9999]"
        style={{
          background: "linear-gradient(45deg, #2E3C8C 0%, #F97416 100%)",
        }}
      >
        <span className="mr-2 inline-block rounded-full border border-white/30 bg-white/20 px-2 py-1 text-xs">
          Limited offer 
        </span>
        Join early! And get to learn the course of your choice at a 30% discount!
      </div> 

      <div className="min-h-screen bg-white" suppressHydrationWarning={true}>
        {/* Navigation Bar */}
        <nav className="fixed top-8 left-0 w-full z-50 bg-white shadow-md border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/f9e24541ae5109a0f551f1baa27fdd1f52fec7e1.png"
                alt="REASTUR"
                width={80}
                height={26}
                className="object-contain cursor-pointer" 
              />
            </div>


            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-6">
              {["For Individuals", "For Corporates", "Institution", "About"].map((item, i) => (
                <Link
                  href="#"
                  key={i}
                  className="text-blue-900 font-inter font-semibold text-base hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md"
                >
                  {item}
                </Link>
              ))}
              {/* Courses dropdown */}
              <button
                className="text-blue-900 font-inter font-semibold text-base hover:text-blue-600 transition-colors duration-200 flex items-center px-3 py-2 rounded-md"
              >
                Courses
                <svg
                  className="w-5 h-5 ml-1 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#1E3A8A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <Link
                href="#"
                className="text-blue-900 font-inter font-semibold text-base hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md"
              >
                Contact Us
              </Link>
            </div>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4">
           <button 
  className="bg-white border-2 border-orange-600 text-orange-600 px-6 py-2 rounded-full font-medium transition-all duration-300 ease-in-out hover:border-[4px] hover:bg-orange-50"
  onClick={() => console.log('Open overlay: Login')}
>
  Login
</button>


              <button
                className="bg-blue-900 text-white font-inter font-medium text-base px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                onClick={() => console.log("Open overlay: Reg")}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="lg:hidden text-blue-900 focus:outline-none"
              
            >
            
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                className="text-blue-900 focus:outline-none"
               
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col items-center space-y-6 mt-12">
              {["For Individuals", "For Corporates", "Institution", "About"].map((item, i) => (
                <Link
                  href="#"
                  key={i}
                  className="text-blue-900 font-inter font-semibold text-lg hover:text-blue-600 transition-colors duration-200"
                  
                >
                  {item}
                </Link>
              ))}
              <button
                className="text-blue-900 font-inter font-semibold text-lg hover:text-blue-600 transition-colors duration-200 flex items-center"
               
              >
                Courses
                <svg
                  className="w-5 h-5 ml-1 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#1E3A8A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <Link
                href="#"
                className="text-blue-900 font-inter font-semibold text-lg hover:text-blue-600 transition-colors duration-200"
               
              >
                Contact Us
              </Link>
              <button
                className="bg-white text-orange-600 border border-orange-500 font-inter font-medium text-lg px-8 py-3 rounded-full hover:bg-orange-50 transition-colors duration-200"
                
              >
                Login
              </button>
              <button
                className="bg-blue-900 text-white font-inter font-medium text-lg px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
               
             
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        {/* Hero Section */}
<section
  className="relative w-full h-screen flex items-start justify-center bg-cover bg-center pt-32"
  style={{ backgroundImage: "url('/images/herro.jpg')" }}
>
  {/* Dark overlay filter */}
  <div className="absolute inset-0 bg-[#101828]/45 z-0"></div>

  {/* Text Container */}
  <div className="relative z-10 text-center flex flex-col items-center gap-5 px-6">
    {/* Heading */}
    <h1 className="font-jost font-bold text-[96px] leading-[120%] text-white">
      Up your <span className="text-blue-600">skills</span> to advance
    </h1>

    {/* Animated Text Row */}
    <div className="flex flex-row gap-5 justify-center">
      {/* Static Text */}
      <div>
        <span className="block font-jost font-bold text-[96px] leading-[120%] text-white">
          your
        </span>
      </div>

      {/* Animated Text */}
      <div className="relative">
        <span
          key={currentText}
          className="block font-jost font-bold text-[96px] leading-[120%] underline text-blue-700 transition-all duration-700"
        >
          {currentText}
        </span>
      </div>
      
    </div>
     <p className="w-[1195px] h-[34px] font-montserrat font-medium text-[24px] leading-[140%] text-center text-[#D6D7D9]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>

     {/* ✅ Search Box */}
    <div className="flex items-center mt-4 bg-white border border-[#D9D9D9] rounded-full w-[573px] h-[70px] overflow-hidden">
      {/* Input field */}
      <input
        type="text"
        placeholder="What do you want to learn?"
        className="flex-1 h-full px-6 text-[#4B5563] text-[16px] outline-none bg-transparent"
      />
      {/* Search button */}
      <button className="flex items-center justify-center bg-[#1E40AF] border border-[#D9D9D9] rounded-full w-[131px] h-[70px] px-4 hover:bg-blue-700 transition">
        <div className="flex items-center justify-center w-8 h-8 border-[3px] border-[#FDFDFD] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>
      </button>
    </div>
  </div>
</section>

     </div>
      {/* Organizations Section */}
      <section className="py-16 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative">
          <h2 className="w-fit whitespace-nowrap mx-auto text-[40px] font-jost italic font-normal text-[#14183E] leading-[1.2] text-center">
            Organizations we’ve worked with
          </h2>
          <div className="h-[80px]"></div>
          <div className="relative">
            <div className="flex animate-scroll">
              <div className="flex items-center justify-center min-w-max">
                <div className="flex items-center space-x-16 px-8">
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/global.png"
                      alt="Africa Missions Global"
                      width={187.95} 
                      height={250} 
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center"> 
                    <Image
                      src="/images/rccg.png"
                      alt="Incubator"
                      width={184.89}
                      height={80} 
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/daf.png"
                      alt="CERT"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/incubator.png"
                      alt="Incubator Alt"
                      width={160}
                      height={64}
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/champions.png"
                      alt="Tech"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/global.png"
                      alt="CERT Duplicate"
                      width={417}
                      height={80}
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/rccg.png"
                      alt="Incubator Alt 2"
                      width={160}
                      height={64}
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/daf.png"
                      alt="Logo"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center min-w-max">
                <div className="flex items-center space-x-16 px-8">
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/global.png"
                      alt="Africa Missions Global"
                      width={817}
                      height={250}
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/rccg.png"
                      alt="Logo"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/incubator.png"
                      alt="CERT"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/champions.png"
                      alt="Incubator"
                      width={160}
                      height={64}
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/global.png"
                      alt="Tech"
                      width={417}
                      height={80}
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/rccg.png"
                      alt="CERT Duplicate"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/daf.png"
                      alt="Incubator Alt 2"
                      width={160}
                      height={64}
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="h-16 w-32 flex items-center justify-center">
                    <Image
                      src="/images/incubator.png"
                      alt="Logo"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Why Choose Skillup Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full"></div>

              <div className="relative">
                <div className="relative w-[495px] h-[495px] mx-auto">
                  <div className="relative mx-auto w-[495.72px] h-[495.72px] rounded-[688.5px] border-[0.76px] border-[#1E3A8A] overflow-hidden">
                    <div className="absolute top-[21px] left-[22.56px] w-[495px] h-[495px] rounded-[688.5px] border-[0.76px] border-[#1E3A8A] bg-[#1E3A8A]" />
                     <div className="absolute top-[89px] left-[68.56px] w-[366px] h-[432px] rounded-full overflow-hidden">
                      <Image
                        src="/images/student.png"
                        alt="Student with thumbs up"
                        width={366}
                        height={432}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[8.87px] left-[11px] w-[42px] h-[42px] rounded-full border-[0.76px] border-[#1E3A8A] bg-[#1E3A8A]"></div> 
                <div className="absolute top-[29.87px] left-[555px] w-[42px] h-[42px] rounded-full border-[0.76px] border-[#1E3A8A] bg-[#1E3A8A]"></div>
                <div className="absolute top-[435.87px] left-[32px] w-[42px] h-[42px] rounded-full border-[0.76px] border-[#1E3A8A] bg-[#1E3A8A]"></div>
                <div className="absolute top-[0.87px] left-[450px] w-[42px] h-[42px] rounded-full border-[0.76px] border-orange-200    overflow-hidden"></div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Skillup?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI writing assistant is designed to help you effortlessly
                craft compelling grant proposals for your success.
              </p>

              <div className="space-y-6">
                <div className="group bg-orange-100 p-6 rounded-lg hover:bg-orange-200 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/flight.jpg"
                        alt="OpenAI"
                        width={24}
                        height={24}
                        className="transition-all w-12 h-12 duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-orange-800">
                        AI-Powered Precision
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-800">
                        Our platform leverages cutting-edge artificial intelligence to refine and enhance your grant writing process.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon icon={collaborateIcon} className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Collaboration Simplified
                    </h3>
                    <p className="text-gray-600">
                      Work seamlessly with team members, ensuring that everyone
                      contributes to crafting successful grant proposals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Comprehensive Toolkit
                    </h3>
                    <p className="text-gray-600">
                      We offer more than just a platform; we provide a
                      comprehensive toolkit for grant success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full h-[651px]">
        <section
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[651px] overflow-hidden"
        >
          <Image
            src="/images/Become.jpg"
            alt="Group of professionals walking together"
            fill
            className="object-cover object-top z-0"
            priority
          />
          <div className="absolute inset-0 bg-[#1018284D] z-10" />
          <h1
            className="absolute top-[143px] left-[120px] w-[1200px] h-[134px] text-[56px] leading-[1.2] tracking-[0em] text-center font-jost font-bold text-white z-30"
          >
            Online Professional Certificate In Different Tech Skills
          </h1>
          <div className="absolute top-[369px] left-0 w-full h-[282px] z-20">
            <div className="absolute inset-0 bg-[#F97416]/50 z-10" />
            <Image
              src="/images/ec3824486a67fdb44f3d77c256717dc00f453974.png"
              alt="Students collaborating and studying together"
              fill
              className="object-cover opacity-60 z-0"
            />
            <p className="absolute top-[105px] left-[82px] w-[926px] h-[100px] font-montserrat font-bold text-[18px] leading-[1.4] text-white z-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vborum.
            </p>
            <button
              className="absolute top-[118px] left-[1120px] w-[221px] h-[56px] bg-white border-2 border-[#1E3A8A] rounded-[32px] px-8 py-4 gap-2 text-[#1E3A8A] text-base font-semibold font-montserrat text-center transition-opacity duration-300 ease-in hover:opacity-80 z-30"
            >
              Explore Courses
            </button>
          </div>
          <div className="absolute top-[331px] left-[78px] w-[362px] h-[95px] bg-white px-6 py-4 rounded-[4px] shadow-md z-30 flex flex-col justify-center space-y-1">
            <div className="w-[314px] h-[25px] text-[#2E323A] text-center font-montserrat font-bold text-[18px] leading-[1.4] flex items-center justify-center rounded-[4px]">
              Advance Your Career
            </div>
            <div className="w-[314px] h-[34px] text-[#1E1E1E] text-center font-jost font-bold text-[28px] leading-[1.2] flex items-center justify-center">
              Become A Global Talent
            </div>
          </div>
        </section>
      </div>

    {/* Courses & Programs Section */}
<section className="py-20 bg-blue-50">
  <div className="container mx-auto px-4">
    {/* Heading + Toggle Buttons */}
    <div className="flex items-end justify-between mb-16">
      <h2 className="font-jost font-bold text-[40px] leading-[120%] text-[#14183E]">
        {activeTab === "courses"
          ? "Courses You Picked Interest In"
          : "Interested In Our Programs?"}
      </h2>

      {/* Toggle Buttons */}
      <div
        className="flex gap-1 bg-[#DBEAFE] rounded-[24px] p-2 items-center"
        style={{ width: "320px", height: "72px" }}
      >
        <button
          onClick={() => setActiveTab("programs")}
          className={`w-[156px] h-[56px] rounded-[32px] px-8 py-4 text-[20px] font-inter font-medium text-center leading-[24px] transition ${
            activeTab === "programs"
              ? "bg-[#1E40AF] text-white"
              : "text-[#1E3B8A] hover:bg-blue-100"
          }`}
        >
          Programs
        </button>
        <button
          onClick={() => setActiveTab("courses")}
          className={`w-[144px] h-[56px] rounded-[32px] px-8 py-4 text-[20px] font-inter font-medium text-center leading-[24px] transition ${
            activeTab === "courses"
              ? "bg-[#1E40AF] text-white"
              : "text-[#1E3B8A] hover:bg-blue-100"
          }`}
        >
          Courses
        </button>
      </div>
    </div>

    {/* =================== SLIDER CONTENT =================== */}
    <div className="transition-all duration-500 ease-in-out">
      {activeTab === "courses" ? (
        // ---------- COURSES GRID ----------
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Virtual Assistant Class",
              description:
                "Use Figma to get a job in UI Design, User Interface, User Experience design.",
              lessons: "40 Lessons",
              duration: "12h 25mins",
              price: "₦100,000",
              image: "/images/explore.jpg",
            },
            {
              title: "Web Development Class",
              description:
                "Use Figma to get a job in UI Design, User Interface, User Experience design.",
              lessons: "40 Lessons",
              duration: "12h 25mins",
              price: "₦100,000",
              image: "/images/software.jpg",
            },
            {
              title: "Data Analysis Class",
              description:
                "Use Figma to get a job in UI Design, User Interface, User Experience design.",
              lessons: "40 Lessons",
              duration: "12h 25mins",
              price: "₦100,000",
              image: "/images/data_analysis.jpg",
            },
            {
              title: "Virtual Assistant Class 2",
              description:
                "Use Figma to get a job in UI Design, User Interface, User Experience design.",
              lessons: "40 Lessons",
              duration: "12h 25mins",
              price: "₦100,000",
              image: "/images/two.jpg",
            },
            {
              title: "AI/ML Intermediate",
              description:
                "Use Figma to get a job in UI Design, User Interface, User Experience design.",
              lessons: "40 Lessons",
              duration: "12h 25mins",
              price: "₦100,000",
              image: "/images/ai.png",
            },
            {
              title: "Project Management",
              description:
                "Use Figma to get a job in UI Design, User Interface, User Experience design.",
              lessons: "40 Lessons",
              duration: "12h 25mins",
              price: "₦100,000",
              image: "/images/projectt.jpg",
            },
          ].map((course, index) => (
            <div
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow bg-white rounded-[16px]"
            >
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={402}
                  height={237}
                  className="w-full h-48 object-cover rounded-[16px]"
                />
                <div className="absolute bottom-4 left-4 bg-white text-[#52525B] flex items-center gap-2 px-3 py-1 rounded-full shadow-md">
                  <Clock className="h-4 w-4 text-[#52525B]" />
                  <span className="text-sm font-medium">Coming Soon</span>
                </div>
                <Button
                  size="sm"
                  className="absolute top-4 right-4 bg-white text-gray-900 hover:bg-gray-100"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-6">
                <h3 className="font-jost font-bold text-[28px] text-[#101828] mb-2">
                  {course.title}
                </h3>
                <p className="font-montserrat text-[14px] text-[#667085] mb-4">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-full px-4 h-10 w-[133px] hover:bg-zinc-300">
                    <Bookmark className="h-4 w-4 text-[#52525B]" />
                    <span className="text-sm text-[#52525B] font-medium">
                      {course.lessons}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-full px-4 h-10 w-[133px] hover:bg-zinc-300">
                    <Clock className="h-4 w-4 text-[#52525B]" />
                    <span className="text-sm text-[#52525B]">
                      {course.duration}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-blue-900 font-jost font-bold text-[20px]">
                    {course.price}
                  </div>
                  <button className="bg-blue-900 hover:bg-blue-600 text-white font-inter text-[16px] px-6 py-3 rounded-full transition-all">
                    Enroll now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // ---------- PROGRAMS GRID ----------
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Tech Tribe Bootcamp",
              description: "Learn essential tech skills with hands-on live projects.",
              duration: "3 Months",
              projects: "5 Projects",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Future Clan Bootcamp",
              description: "Get ready for the future with real-world experience.",
              duration: "3 Months",
              projects: "5 Projects",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Ladies in Tech Bootcamp",
              description: "A program designed for women aspiring to enter tech.",
              duration: "3 Months",
              projects: "5 Projects",
              image: "/placeholder.svg?height=200&width=300",
            },
          ].map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6"
            >
              <Image
                src={program.image}
                alt={program.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {program.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>📅 {program.duration}</span>
                <span>📂 {program.projects}</span>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full">
                Join Waitlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
</section>



  
    {/* Why We Are Good At What We Do Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-jost font-bold mb-4" style={{ color: ' #14183E' }}>
              Why We Are Good At What We Do
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus met, cetur adipiscing elit.
              Urna, tortor tempus.
            </p>
          </div>

          {/* Features Grid */}
          <div className="w-416 h-669 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Vertical Container: Collaboration Image + Library Image + Expert Facilitators */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/two.jpg"
                  alt="Two professionals collaborating at desk"
                  width={418}
                  height={380}
                  className="w-full h-64 object-cover"
                />
              </div>
             
              <div className="bg-orange-100 rounded-2xl p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <UserCheck className="w-8 h-8 text-blue-900 mr-3" />
                  <h3 className="text-xl font-jost font-bold " style={{ color: '#1E1E1E' }}>Expert Facilitators</h3>
                </div>
                <p className=" leading-relaxed font-montserrat" style={{ color: ' #757575' }}>
                  Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
                </p>
              </div>
            </div>

            {/* Second Vertical Container: Vast Online Community (Image above Text) */}
            <div className="flex flex-col gap-6 bg-orange-100 rounded-2xl p-8">
              <div className="flex-shrink-0">
                <Image
                  src="/images/abj.png"
                  alt="Community illustration"
                  width={374}
                  height={344}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-blue-900 mr-3" />
                  <h3 className="text-xl font-jost font-bold "  style={{ color: '#1E1E1E' }}>Vast Online Community</h3>
                </div>
                <p className=" leading-relaxed font-montserrat" style={{ color: ' #757575' }}>
                  Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
                </p>
              </div>
            </div>

            {/* Third Vertical Container: 12+ Online Courses + Image */}  
            <div className="flex flex-col gap-6">
              <div className="bg-orange-100 rounded-2xl p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Folder className="w-8 h-8 text-blue-900 mr-3" />
                  <h3 className="text-xl font-jost font-bold "  style={{ color: '#1E1E1E' }}>12+ Online Courses</h3>
                </div>
                <p className=" leading-relaxed font-montserrat" style={{ color: ' #757575' }}>
                  Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
                </p>
              </div>
             <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/book.jpg"
                  alt="Library with curved bookshelves"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


   {/* Testimonials Section */}
<section className="py-20 bg-[#EFF6FF]">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Alumnis Are Saying</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus, met, cotur adipiscing elit.
        Urna, tortor tempus.
      </p>
    </div>

    {/* Auto-Scrolling Card Section 1 (4 Cards) */}
    <div className="overflow-hidden py-8">
      <div className="flex gap-6 animate-scroll">
        {[...[1, 2, 3, 4], ...[1, 2, 3, 4]].map((i, index) => (
          <Card
            key={`${i}-${index}`}
            className="p-6 bg-white border-b-0 border-blue-600 shadow-[0_1px_3px_#0C0C0D0D] flex-shrink-0 w-[280px] md:w-[300px]"
          >
            <CardContent className="p-0">
              <p className="text-[var(--muted-foreground)] mb-4 font-jost text-sm">
                "Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/images/pic.png?height=40&width=40" alt="Caroline Moren" />
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold font-jost">Caroline Moren</div>
                  <div className="text-sm text-[var(--muted-foreground)] font-jost">Data Analyst</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    {/* Auto-Scrolling Card Section 2 (5 Cards) */}
    <div className="overflow-hidden py-8">
      <div className="flex gap-6 animate-scroll">
        {[...[1, 2, 3, 4, 5], ...[1, 2, 3, 4, 5]].map((i, index) => (
          <Card
            key={`${i}-${index}`}
            className="p-6 bg-white border-b-0 border-blue-600 shadow-[0_1px_3px_#0C0C0D0D] flex-shrink-0 w-[240px] md:w-[260px]"
          >
            <CardContent className="p-0">
              <p className="text-[var(--muted-foreground)] mb-4 text-sm font-jost">
                "Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/images/pic.png?height=32&width=32" alt="Caroline Moren" />
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm font-jost">Caroline Moren</div>
                  <div className="text-xs text-[var(--muted-foreground)] font-jost">Data Analyst</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
       </div>
    </div>

    {/* Stats Section */}
   
       
 <div className="bg-white border border-[#EEF0FD] shadow-[0_1px_3px_#0C0C0D0D] rounded-lg px-6 py-10 mt-10">
  <div className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-8">
    We provide <span className="font-semibold">professional tutoring</span> that helps you{" "}
    <span className="font-semibold">break into tech</span> and make a mark in your industry.
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
    <div>
      <FlipNumber start={1000} max={100000} step={10000} suffix="+" />
      <div className="text-gray-600 text-sm">Students Reached</div>
    </div>
    <div>
      <FlipNumber start={1000} max={50000} step={10000} suffix="+" />
      <div className="text-gray-600 text-sm">Graduates</div>
    </div>
    <div>
      <FlipNumber start={1000} max={30000} step={10000} suffix="+" />
      <div className="text-gray-600 text-sm">Tutors</div>
    </div>
  </div>


</div>

</section>




  {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. met, cotur adipiscing elit.
              Urna, tortor tempus.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-blue-50 border border-blue-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What kind of courses are available on this platform?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  We offer a range of expert-led courses in tech, business, creative skills, and personal
                  development—tailored for learners at every level.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gray-50 border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do I get a certificate after completing a course?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  Yes, you will receive a professional certificate upon successful completion of any course on our
                  platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gray-50 border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Can I learn at my own pace?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  All our courses are self-paced, allowing you to learn according to your schedule and availability.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gray-50 border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  We accept various payment methods including credit cards, debit cards, and bank transfers for your
                  convenience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-gray-50 border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Will I have access to the course after I complete it?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  Yes, you will have lifetime access to all course materials even after completion, allowing you to
                  revisit content anytime.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-gray-50 border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Are the courses mobile-friendly?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  Yes, our platform is fully optimized for mobile devices, so you can learn on-the-go from any device.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-gray-50 border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Can I get a refund if I don&apos;t like a course?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  We offer a 30-day money-back guarantee if you&apos;re not satisfied with your course purchase.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-[#EFF6FF]">
        <div className="container mx-auto px-4">
          <div className=" p-8 rounded-lg">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Read. Learn. Grow</h2>
                <p className="text-lg text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus, met, cotur adipiscing
                  elit. Urna, tortor tempus.
                </p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Ream More Blogg</Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="overflow-hidden bg-white">
                <Image
                  src="/images/blog_one.jpg"
                  alt="Person learning with laptop"
                  width={500}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    How to Stay Consistent with Learning (Even on Busy Days)
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Life gets busy — but your learning goals don&apos;t have to suffer because of it.With the right strategy,
                    staying consistent can become second nature, not a struggle.but your learning goals don&apos;t have to
                    suffer because of it. With the right strategy, staying consistent can become second nat...
                  </p>
                  <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                    Read post »
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden  bg-white">
                <Image
                  src="/images/blog_two.jpg"
                  alt="Person studying with books and laptop"
                  width={500}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">How to Choose the Right Course for Your Career Goals</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Picking a course shouldn&apos;t feel like spinning a wheel and hoping for the best. Here&apos;s how to align
                    your learning path with your future goals — with zero confusion. course shouldnt feel like spinning
                    a wheel and hoping for the best. course shouldnt feel like spinning a wheel and hoping for the
                    best.
                  </p>
                  <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                    Read post »
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden  bg-white ">
                <Image
                  src="/images/blog_three.jpg"
                  alt="Stressed person with papers"
                  width={500}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    How to Stay Consistent with Learning (Even on Busy Days)
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Life gets busy — but your learning goals don&apos;t have to suffer because of it.With the right strategy,
                    staying consistent can become second nature, not a struggle.but your learning goals don&apos;t have to
                    suffer because of it. With the right strategy, staying consistent can become second nat...
                  </p>
                  <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                    Read post »
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden  bg-white">
                <Image
                  src="/images/blog_four.jpg"
                  alt="Team collaboration with sticky notes"
                  width={500}
                  height={250}
                  className="w-full h-64 object-cover  fill"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">How to Choose the Right Course for Your Career Goals</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Picking a course shouldn&apos;t feel like spinning a wheel and hoping for the best. Here&apos;s how to align
                    your learning path with your future goals — with zero confusion. course shouldn&apos;t feel like spinning
                    a wheel and hoping for the best. course shouldn&apos;t feel like spinning a wheel and hoping for the
                    best.
                  </p>
                  <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                    Read post »
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


<section className="relative w-full max-w-[1454px] h-auto mx-auto mt-5 mb-5 px-4">
  {/* Background Frame */}
  <div className="relative w-full max-w-[1296px] h-auto bg-[#1E3A8A] rounded-[16px] flex flex-col items-center justify-center gap-[49px] mx-auto py-16 px-6">
    
    {/* Vector Image Positioned */}
  <Image
  src="/images/vector.png"
  alt="Decorative Vector"
  width={500}        // Adjust as needed
  height={500}
  className="absolute right-0 bottom-0 max-w-[90%] max-h-[100%] w-auto h-auto opacity-80 pointer-events-none object-contain rounded-[16px]"
  style={{ transform: "rotate(0deg)" }}
/> 


    {/* Heading */}
    <h2 className="text-white text-[40px] font-jost font-bold text-center z-10">
      Stay Updated with us
    </h2>
    
    {/* Paragraph */}
    <p className="text-[#F4F4F4] text-center font-montserrat text-[18px] max-w-[725px] leading-[140%] z-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
      Met, cotur adipiscing elit. Urna, tortor tempus.
    </p>

    {/* Input and Button */}
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-[620px] mt-6 z-10">
      <input
        type="email"
        placeholder="you@example.com"
        className="w-full sm:w-[434px] h-[48px] px-4 rounded-full border border-[#D9D9D9] bg-white text-gray-500 focus:outline-none"
      />
      <button className="bg-[#1F2227] text-white font-inter text-[16px] font-medium rounded-full px-6 py-3 hover:bg-black transition w-full sm:w-[174px]">
        Explore Courses 
      </button> 
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-16" style={{ backgroundColor: "#FFEDD5" }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-6 flex items-center">
                <Image
                  src="/images/f9e24541ae5109a0f551f1baa27fdd1f52fec7e1.png"
                  alt="REASTUR"
                  width={98}
                  height={20}
                  className="object-contain text-black"
                  style={{ fill: "black" }}
                />
              </div>

              <div className="flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <X className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Use cases</h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  UI design
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  UX design
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  Wireframing
                </Link>
               
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Explore</h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  Design
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  Prototyping
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  Development features
                </Link>
               
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  Best practices
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  Colors
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
export default Hero;