"use client";

import { useState, useEffect } from "react";
import { NavbarWithDropdown } from "@/components/UI/navigation"
import { Button } from "@/components/UI/button"
import { Input } from "@/components/UI/input"
import FlipNumber from "@/components/UI/FlipNumber";
import { Search } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";
import Image from "next/image";  // <-- add this import
// import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/UI/card";

import OverlayPopup from "@/components/UI/OverlayPopup";
import Link from "next/link";

import CoursesProgramsSection from "@/components/UI/courses_program"
import { Icon } from "@iconify/react";
import collaborateIcon from "@iconify/icons-carbon/collaborate";
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
  Menu,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Home() {
   const logos = [
    { src: "/images/global.png", alt: "Africa Missions Global" },
    { src: "/images/rccg.png", alt: "RCCG" },
    { src: "/images/incubator.png", alt: "DAF" },
    { src: "/images/champions.png", alt: "Champions" },
    { src: "/images/global.png", alt: "Tech Company" },
  ];

 const texts = ["Career Path", "Employability", "Talent"];
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev: number) => (prev + 1) % texts.length);
    }, 2000); // changes every 2s

    return () => clearInterval(interval);
  }, [texts.length]);

  
  // Duplicate logos for seamless loop
  const doubledLogos = [...logos, ...logos];
const testimonials = [
    {
      id: 1,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. Add main takeaway pointsAdd main takeaway",
      author: "Caroline Moren", 
      role: "Data Analyst", 
      avatar: "/placeholder.svg?height=40&width=40", 
    },
    {
      id: 2,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. Add main takeaway pointsAdd main takeaway",
      author: "Caroline Moren",
      role: "Data Analyst",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. Add main takeaway pointsAdd main takeaway",
      author: "Caroline Moren",
      role: "Data Analyst",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. Add main takeaway pointsAdd main takeaway",
      author: "Caroline Moren",
      role: "Data Analyst",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. Add main takeaway pointsAdd main takeaway",
      author: "Caroline Moren",
      role: "Data Analyst",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. Add main takeaway pointsAdd main takeaway",
      author: "Caroline Moren",
      role: "Data Analyst",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. Add main takeaway pointsAdd main takeaway",
      author: "Caroline Moren",
      role: "Data Analyst",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 8,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. Add main takeaway pointsAdd main takeaway",
      author: "Caroline Moren",
      role: "Data Analyst",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]
 
  return (
    <div className="min-h-screen relative">
      {/* Navigation Header */}
      <NavbarWithDropdown />
      <OverlayPopup/>
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/herro.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Up your skills to advance your{" "}
            <span className="text-blue-500 relative transition-all duration-500 ease-in-out">
      {texts[index]}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full animate-pulse" />
    </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="What do you want to learn?"
              className="h-12 sm:h-14 pl-4 sm:pl-6 pr-14 sm:pr-16 text-base sm:text-lg bg-white/95 backdrop-blur-sm border-0 rounded-full shadow-lg focus:ring-2 focus:ring-blue-500 w-full"
            />
            <Button
              size="lg"
              className="absolute right-1 top-1 h-10 w-10 sm:h-12 sm:w-12 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg p-0"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>
 <section className="py-8 sm:py-12 md:py-16 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-[#14183E] leading-tight text-center mb-8 sm:mb-12 md:mb-20">
            Organizations we've worked with
          </h2>

          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-max">
                <div className="flex items-center space-x-8 sm:space-x-12 md:space-x-16 px-4 sm:px-6 md:px-8">
                  <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/global.png"
                      alt="Africa Missions Global"
                      width={138}
                      height={84}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div>
                  <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/rccg.png"
                      alt="RCCG"
                      width={128}
                      height={64}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div>
                  <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/incubator.png"
                      alt="DAF"
                      width={128}
                      height={64}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div>
                  <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/global.png"
                      alt="Incubator"
                      width={128}
                      height={64}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div> 
                  {/* <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/champions.png"
                      alt="Champions"
                      width={128}
                      height={64}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div> */}
                  <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/incubator.png"
                      alt="Tech Company"
                      width={128}
                      height={64}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Duplicate set for continuous scroll */}
              <div className="flex items-center justify-center min-w-max">
                <div className="flex items-center space-x-8 sm:space-x-12 md:space-x-16 px-4 sm:px-6 md:px-8">
                  <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/rccg.png"
                      alt="Africa Missions Global"
                      width={138}
                      height={84}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div>
                  <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/global.png"
                      alt="RCCG"
                      width={128}
                      height={64}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div>
                  <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/incubator.png"
                      alt="DAF"
                      width={128}
                      height={64}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div>
                  <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/rccg.png"
                      alt="Incubator"
                      width={128}
                      height={64}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div>
                  {/* <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/champions.png"
                      alt="Champions"
                      width={128}
                      height={64}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div> */}
                  <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/global.png"
                      alt="Tech Company"
                      width={128}
                      height={64}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[495px] lg:h-[495px] mx-auto">
                  <div className="relative mx-auto w-full h-full rounded-full border border-[#0D4EFF] overflow-hidden">
                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 md:top-6 md:left-6 w-full h-full rounded-full border border-[#0D4EFF] bg-[#0D4EFF]" />
                    <div className="absolute top-16 left-12 sm:top-20 sm:left-16 md:top-24 md:left-20 lg:top-[89px] lg:left-[68px] w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-72 lg:w-[366px] lg:h-[432px] rounded-full overflow-hidden">
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
                {/* Decorative circles - hidden on mobile for cleaner look */}
                <div className="hidden sm:block absolute top-2 left-2 w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#0D4EFF] bg-[#0D4EFF]"></div>
                <div className="hidden sm:block absolute top-6 right-2 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#0D4EFF] bg-[#0D4EFF]"></div>
                <div className="hidden sm:block absolute bottom-12 left-6 w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#0D4EFF] bg-[#0D4EFF]"></div>
                <div className="hidden sm:block absolute top-0 right-8 md:right-12 w-8 h-8 md:w-10 md:h-10 rounded-full border border-orange-200 overflow-hidden"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Why Choose Skillup?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8">
                Our AI writing assistant is designed to help you effortlessly craft compelling grant proposals for your
                success.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="group bg-[#F0F3FF] p-4 md:p-6 rounded-lg hover:bg-[#E6EDFF] transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/flight.jpg"
                        alt="AI Icon"
                        width={48}
                        height={48}
                        className="transition-all duration-300 group-hover:scale-110 rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 group-hover:text-black">
                        AI-Powered Precision
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-800">
                        Our platform leverages cutting-edge artificial intelligence to refine and enhance your grant
                        writing process.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Collaboration Simplified</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Work seamlessly with team members, ensuring that everyone contributes to crafting successful grant
                      proposals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Comprehensive Toolkit</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      We offer more than just a platform; we provide a comprehensive toolkit for grant success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 <div className="nav-white-bg relative w-full h-[400px] md:h-[500px] lg:h-[651px] mt-20">
      <section className="relative w-full h-full overflow-hidden">
        {/* Main background image */}
        <Image
          src="/images/Become.jpg"
          alt="Group of professionals walking together"
          fill
          className="object-cover object-top z-0"
          priority
        />

        {/* Dark overlay */}
           <div className="absolute inset-0 bg-[#1018284D] z-10 pointer-events-none" />


        {/* Main heading */}
        <div className="absolute inset-0 z-30 flex items-start justify-center pt-8 md:pt-16 lg:pt-[143px] px-4">
          <h1 className="w-full max-w-[1200px] text-2xl md:text-4xl lg:text-[56px] leading-tight lg:leading-[1.2] text-center font-jost font-bold text-white">
            Online Professional Certificate In Different Tech Skills
          </h1>
        </div>

        {/* Bottom section with content and CTA */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] md:h-[240px] lg:h-[282px] z-20">
          
          {/* Bottom overlay */}
              <div className="absolute inset-0 bg-[#000000]/50 z-10 pointer-events-none" /> 

          {/* Bottom background image */}
          <Image
            src="/images/ec3824486a67fdb44f3d77c256717dc00f453974.png"
            alt="Students collaborating and studying together"
            fill
            className="object-cover opacity-60 z-0"
          />

          {/* Content container */}
          
          <div className="absolute inset-0 z-30 flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-[82px] py-6 lg:py-[105px] gap-4 lg:gap-8">
            {/* Description text */}
            <p className="flex-1 max-w-[926px] font-montserrat font-bold text-sm md:text-base lg:text-[18px] leading-relaxed text-white text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            {/* CTA Button */}
             <button
              // onClick={handleExploreCoursesClick}
              className="flex-shrink-0 w-full max-w-[221px] h-12 lg:h-[56px] 
              bg-white border-2 border-[#1E3A8A] rounded-md px-6 lg:px-8 py-3 lg:py-4 
              text-[#1E3A8A] hover:bg-blue-900 hover:text-white 
              active:bg-blue-800 active:text-white
              text-sm lg:text-base font-semibold text-center 
              transition-all duration-300 ease-in hover:opacity-80 active:scale-95 
              cursor-pointer pointer-events-auto z-40"
            >
              Explore Courses
            </button>
          </div>
        </div>

        {/* Career advancement card */}
        <div className="hidden lg:block absolute top-[331px] left-[78px] bg-white z-20 w-[362px] h-[95px] p-4 rounded shadow-lg border border-gray-100">
          <div className="text-[#2E323A] text-center font-montserrat font-bold text-sm md:text-base lg:text-[18px] leading-relaxed">
            Advance Your Career
          </div>
          <div className="text-[#1E1E1E] text-center font-jost font-bold text-xl md:text-2xl lg:text-[28px] leading-tight">
            Become A Global Talent
          </div>
        </div>
      </section>
    </div>
 <CoursesProgramsSection />

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
                  alt=" Two professionals collaborating at desk "
                  width={418}
                  height={380}
                  className="w-full h-64 object-cover"
                />
              </div>
             
              <div className="bg-blue-200 rounded-2xl p-8 flex flex-col justify-center">
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
            <div className="flex flex-col gap-6 bg-blue-200 rounded-2xl p-8">
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
              <div className="bg-blue-200 rounded-2xl p-8 flex flex-col justify-center">
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
  <div className="max-w-7xl mx-auto px-4">
    {/* Header Section */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#14183E] mb-4">
        What Our Alumnis Are Saying
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus, met, cotur adipiscing elit.
        Urna, tortor tempus.
      </p>
    </div>

    {/* Testimonials Layer 1 (Scroll Left) */}
    <div className="overflow-hidden py-8">
      <div className="flex gap-6 animate-scroll-left">
        {[...testimonials, ...testimonials].map((t, index) => (
          <Card
            key={`layer1-${index}`}
            className="bg-white border border-blue-400 border-b-0  hover:shadow-md transition-shadow flex-shrink-0 w-[280px] md:w-[300px]"
          >
            <CardContent className="p-6">
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={t.avatar || "/placeholder.svg"} alt={t.author} />
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    {/* Testimonials Layer 2 (Scroll Right) */}
    <div className="overflow-hidden py-8">
      <div className="flex gap-6 animate-scroll-right">
        {[...testimonials, ...testimonials].map((t, index) => (
          <Card
            key={`layer2-${index}`}
            className="bg-white border border-blue-400  border-b-0 hover:shadow-md transition-shadow flex-shrink-0 w-[260px] md:w-[280px]"
          >
            <CardContent className="p-6">
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={t.avatar || "/placeholder.svg"} alt={t.author} />
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    {/* Stats Section */}
    <div className="bg-blue-50 rounded-lg p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-2">
          <p className="text-gray-700">
            We provide <span className="font-bold text-gray-900">professional tutoring</span> that can help you
          </p>
          <p className="text-gray-700">
            break into <span className="font-bold text-gray-900">tech</span> and make a pact in your industry
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="flex items-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#14183E] mb-1">
                <FlipNumber value={1000} />+
              </div>
              <div className="text-gray-600 text-sm">Students Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#14183E] mb-1">
                <FlipNumber value={1000} />+
              </div>
              <div className="text-gray-600 text-sm">Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#14183E] mb-1">
                <FlipNumber value={1} />+
              </div>
              <div className="text-gray-600 text-sm">Tutors</div>
            </div>
          </div>
        </div>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Read More Blogg</Button>
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
                  <Link href="#" className="text-blue-700 hover:text-blue-900 font-medium">
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
                  <Link href="#" className="text-blue-700 hover:text-blue-900 font-medium">
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
                  <Link href="#" className="text-blue-700 hover:text-blue-900 font-medium">
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
                  <Link href="#" className="text-blue-700 hover:text-blue-900 font-medium p-3">
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
  height={700}
  className="absolute right-0 bottom-0 max-w-[100%] max-h-[100%] w-auto h-auto opacity-80 pointer-events-none object-contain rounded-[16px]"
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
      <button className="bg-[#1F2227] text-white font-inter text-[16px] font-medium rounded-md px-6 py-3 hover:bg-black transition w-full sm:w-[174px]">
        Explore Courses 
      </button> 
    </div>
    
  </div>
  
</section>
{/* Chatbot Icon */}
<div className="fixed bottom-6 right-6 w-28 h-28 rounded-[40px] overflow-hidden z-50">
  <img
    className="w-20 h-20 left-[20px] top-[20px] absolute"
    src="images/chat.png"
    alt="Chatbot"
  />
</div>

      {/* Footer */}
                          <footer className="py-16" style={{ backgroundColor: "#DBEAFE" }}>
                            <div className="container mx-auto px-4">
                              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div>
                                  <div className="mb-6 flex items-center">
                                    <Image
                                      src="/images/skillUp.png"
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
  )
}
