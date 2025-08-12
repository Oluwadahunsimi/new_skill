"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";
import Image from "next/image";  // <-- add this import
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/UI/card";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { Navigation } from "@/components/UI/navigation";
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

export default function HomePage() {
  return (
    <>
      

      <div className="min-h-screen relative">
        {/* Navigation Header */}
        <Navigation />

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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Up your skills to advance your{" "}
              <span className="text-blue-500 relative">
                Employability
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full" />
              </span>
            </h1>
             
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="What do you want to learn?"
                className="h-14 pl-6 pr-16 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-full shadow-lg focus:ring-2 focus:ring-blue-500 w-full"
              />
              <Button
                size="lg"
                className="absolute right-1 top-1 h-12 w-12 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg p-0"
              >
                 
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Organizations Section */}
        <section className="py-16 bg-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative">
            <h2 className="w-fit whitespace-nowrap mx-auto text-[40px] font-jost italic font-normal text-[#14183E] leading-[1.2] text-center">
              Organizations we’ve worked with
            </h2>
            <div className="h-[80px]" />
            <div className="relative">
              <div className="flex animate-scroll">
                <div className="flex items-center justify-center min-w-max">
                  <div className="flex items-center space-x-16 px-8">
                    <div className="h-16 w-32 flex items-center justify-center">
                      <Image
                        src="/images/global.png"
                        alt="Africa Missions Global"
                        width={188}
                        height={250}
                      />
                    </div>
                    <div className="h-16 w-32 flex items-center justify-center">
                      <Image
                        src="/images/rccg.png"
                        alt="Incubator"
                        width={185}
                        height={80}
                      />
                    </div>
                    <div className="h-16 w-32 flex items-center justify-center">
                      <Image src="/images/daf.png" alt="CERT" width={64} height={64} />
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
                      <Image src="/images/daf.png" alt="Logo" width={64} height={64} />
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
                      <Image src="/images/rccg.png" alt="Logo" width={64} height={64} />
                    </div>
                    <div className="h-16 w-32 flex items-center justify-center">
                      <Image src="/images/incubator.png" alt="CERT" width={64} height={64} />
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
                      <Image src="/images/rccg.png" alt="CERT Duplicate" width={64} height={64} />
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
                      <Image src="/images/incubator.png" alt="Logo" width={64} height={64} />
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
                          <div className="relative mx-auto w-[495.72px] h-[495.72px] rounded-[688.5px] border-[0.76px] border-[#0D4EFF] overflow-hidden">
                            <div className="absolute top-[21px] left-[22.56px] w-[495px] h-[495px] rounded-[688.5px] border-[0.76px] border-[#0D4EFF] bg-[#0D4EFF]" />
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
                        <div className="absolute top-[8.87px] left-[11px] w-[42px] h-[42px] rounded-full border-[0.76px] border-[#0D4EFF] bg-[#0D4EFF]"></div> 
                        <div className="absolute top-[29.87px] left-[555px] w-[42px] h-[42px] rounded-full border-[0.76px] border-[#0D4EFF] bg-[#0D4EFF]"></div>
                        <div className="absolute top-[435.87px] left-[32px] w-[42px] h-[42px] rounded-full border-[0.76px] border-[#0D4EFF] bg-[#0D4EFF]"></div>
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
                        <div className="group bg-[#F0F3FF] p-6 rounded-lg hover:bg-[#F0F3FF] transition-all duration-300 cursor-pointer">
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
                              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-black">
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


 <div className="relative w-full h-[400px] md:h-[500px] lg:h-[651px]">
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
        <div className="absolute inset-0 bg-[#1018284D] z-10" />

        {/* Main heading */}
        <div className="absolute inset-0 z-30 flex items-start justify-center pt-8 md:pt-16 lg:pt-[143px] px-4">
          <h1 className="w-full max-w-[1200px] text-2xl md:text-4xl lg:text-[56px] leading-tight lg:leading-[1.2] text-center font-jost font-bold text-white">
            Online Professional Certificate In Different Tech Skills
          </h1>
        </div>

        {/* Bottom section with content and CTA */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] md:h-[240px] lg:h-[282px] z-20">
          {/* Bottom overlay */}
          <div className="absolute inset-0 bg-[#000000]/50 z-10" />

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
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in vborum.
            </p>

            {/* CTA Button */}
            <button className="flex-shrink-0 w-full max-w-[221px] h-12 lg:h-[56px] bg-white border-2 border-[#1E3A8A] rounded-[32px] px-6 lg:px-8 py-3 lg:py-4 text-[#1E3A8A] text-sm lg:text-base font-semibold font-montserrat text-center transition-opacity duration-300 ease-in hover:opacity-80">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Career advancement card */}
        <div className="absolute top-1/2 left-4 md:left-8 lg:left-[78px] -translate-y-1/2 w-[calc(100%-2rem)] max-w-[362px] md:w-[362px] bg-white px-4 md:px-6 py-3 md:py-4 rounded-[4px] shadow-md z-40 flex flex-col justify-center space-y-1">
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
    </>
  );
}
