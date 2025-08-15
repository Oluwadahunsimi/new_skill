"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/UI/button"
import { Clock, Bookmark, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

// =====================
// TYPE DEFINITIONS
// =====================
interface Course {
  title: string
  description: string
  lessons: string
  duration: string
  price: string
  image: string
}
interface Program {
  title: string
  description: string
  duration: string
  projects: string
  image: string
  waitlistCount: number
  profileImages: string[]

}
interface ProgramCardProps {
  program: Program
  index: number
}

// =====================
// MAIN COMPONENT
// =====================
export default function CoursesProgramsSection() {
  const [activeTab, setActiveTab] = useState<"courses" | "programs">("courses")
  const [currentSlide, setCurrentSlide] = useState(0)

  const coursesData: Course[] = [
    {
      title: "Virtual Assistant Class",
      description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      lessons: "40 Lessons",
      duration: "12h 25mins",
      price: "₦100,000",
      image: "/images/explore.jpg",
    },
    {
      title: "Web Development Class",
      description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      lessons: "40 Lessons",
      duration: "12h 25mins",
      price: "₦100,000",
      image: "/images/software.jpg",
    },
    {
      title: "Data Analysis Class",
      description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      lessons: "40 Lessons",
      duration: "12h 25mins",
      price: "₦100,000",
      image: "/images/data_analysis.jpg",
    },
    {
      title: "Virtual Assistant Class 2",
      description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      lessons: "40 Lessons",
      duration: "12h 25mins",
      price: "₦100,000",
      image: "/images/two.jpg",
    },
    {
      title: "AI/ML Intermediate",
      description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      lessons: "40 Lessons",
      duration: "12h 25mins",
      price: "₦100,000",
      image: "/images/ai.png",
    },
    {
      title: "Project Management",
      description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      lessons: "40 Lessons",
      duration: "12h 25mins",
      price: "₦100,000",
      image: "/images/projectt.jpg",
    },
  ]

const programsData: Program[] = [
  {
    title: "Tech Tribe Bootcamp",
    description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
    duration: "3 Months",
    projects: "5 Projects",
    image: "/images/techtribe.png",
    waitlistCount: 50,
    profileImages: [
    "/images/pic.png",
      "/images/pic.png",
      "/images/pic.png"
    ],
  },
  {
    title: "Future Clan Bootcamp",
    description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
    duration: "3 Months",
    projects: "5 Projects",
    image: "/images/futureclan.png",
    waitlistCount: 32,
    profileImages: [
      "/images/pic.png",
      "/images/pic.png",
      "/images/pic.png"
    ],
  },
  {
    title: "Ladies in Tech Bootcamp",
    description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
    duration: "3 Months",
    projects: "5 Projects",
    image: "/images/ladies.png",
    waitlistCount: 41,
    profileImages: [
      "/images/pic.png",
      "/images/pic.png",
      "/images/pic.png"
    ],
  },
];


  const currentData = activeTab === "courses" ? coursesData : programsData
  const maxSlides = currentData.length

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides)
  }

  const handleTabChange = (tab: "courses" | "programs") => {
    setActiveTab(tab)
    setCurrentSlide(0)
  }

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Heading + Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-[40px] leading-[120%] text-[#14183E]">
            {activeTab === "courses" ? "Courses We Offer." : "Interested In Our Programs?"}
          </h2>

          <div className="flex gap-1 bg-[#DBEAFE] rounded-[24px] p-2 items-center w-full max-w-[320px] h-[72px] mx-auto lg:mx-0">
            <button
              onClick={() => handleTabChange("programs")}
              className={`flex-1 h-[56px] rounded-[32px] px-4 py-4 text-base lg:text-[20px] font-medium text-center leading-[24px] transition ${
                activeTab === "programs" ? "bg-[#1E40AF] text-white" : "text-[#1E3B8A] hover:bg-blue-100"
              }`}
            >
              Programs
            </button>
            <button
              onClick={() => handleTabChange("courses")}
              className={`flex-1 h-[56px] rounded-[32px] px-4 py-4 text-base lg:text-[20px] font-medium text-center leading-[24px] transition ${
                activeTab === "courses" ? "bg-[#1E40AF] text-white" : "text-[#1E3B8A] hover:bg-blue-100"
              }`}
            >
              Courses
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="transition-all duration-500 ease-in-out">
          {/* Mobile Slider */}
          <div className="block md:hidden">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {currentData.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      {activeTab === "courses" ? (
                        <CourseCard course={item as Course} />
                      ) : (
                        <ProgramCard program={item as Program} index={index} />

                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all z-10"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all z-10"
                disabled={currentSlide === maxSlides - 1}
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {currentData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-[#1E40AF] w-6" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:block">
            {activeTab === "courses" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {coursesData.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {programsData.map((program, index) => (
  <ProgramCard key={index} program={program} index={index} />
))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// =====================
// COURSE CARD
// =====================
function CourseCard({ course }: { course: Course }) {
  return (
    <div className="overflow-hidden hover:shadow-lg transition-shadow bg-white rounded-[16px]">
      <div className="relative">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          width={402}
          height={237}
          className="w-full h-48 object-cover rounded-t-[16px] ]"
        />
        <div className="absolute bottom-4 left-4 bg-white text-[#52525B] flex items-center gap-2 px-3 py-1 rounded-full shadow-md">
          <Clock className="h-4 w-4 text-[#52525B]" />
          <span className="text-sm font-medium">Coming Soon</span>
        </div>
        <Button size="sm" className="absolute top-4 right-4 bg-white text-gray-900 hover:bg-gray-100">
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl lg:text-[28px] text-[#101828] mb-2">{course.title}</h3>
        <p className="text-sm text-[#667085] mb-4">{course.description}</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
          <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-full px-4 h-10 hover:bg-zinc-300">
            <Bookmark className="h-4 w-4 text-[#52525B]" />
            <span className="text-sm text-[#52525B] font-medium">{course.lessons}</span>
          </div>
          <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-full px-4 h-10 hover:bg-zinc-300">
            <Clock className="h-4 w-4 text-[#52525B]" />
            <span className="text-sm text-[#52525B]">{course.duration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-blue-900 font-bold text-lg lg:text-[20px]">{course.price}</div>
          <button className="bg-white border-2 border-blue-600 hover:bg-blue-900 text-black hover:text-white text-sm lg:text-[20px] px-4 lg:px-6 py-3 rounded-full transition-all">
            Enroll now
          </button>
        </div>
      </div>
    </div>
  )
}

// =====================
// PROGRAM CARD
// =====================
function ProgramCard({ program, index }: ProgramCardProps) {
  return (
    <div className="overflow-hidden hover:shadow-lg transition-shadow bg-white rounded-[16px]">
      <div className="relative">
        <Image
          src={program.image || "/placeholder.svg"}
          alt={program.title}
          width={402}
          height={300} // Increased image height
          className="w-full h-72 object-cover rounded-t-[16px] text-[#14183E]"
        />

        {/* Show "Coming Soon" only if NOT the first card */}
        {index !== 0 && (
          <div className="absolute bottom-4 left-4 bg-white text-[#52525B] flex items-center gap-2 px-3 py-1 rounded-full shadow-md">
            <Clock className="h-4 w-4 text-[#52525B]" />
            <span className="text-sm font-medium">Coming Soon</span>
          </div>
        )}

        <Button size="sm" className="absolute top-4 right-4 bg-white text-gray-900 hover:bg-gray-100">
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-xl lg:text-[28px] text-[#1E3B8A] mb-2">{program.title}</h3>
        <p className="text-sm text-[#667085] mb-4">{program.description}</p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
          <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-full px-4 h-10 hover:bg-zinc-300">
            <Bookmark className="h-4 w-4 text-[#52525B]" />
            <span className="text-sm text-[#52525B] font-medium">{program.projects}</span>
          </div>
          <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-full px-4 h-10 hover:bg-zinc-300">
            <Clock className="h-4 w-4 text-[#52525B]" />
            <span className="text-sm text-[#52525B]">{program.duration}</span>
          </div>
        </div>

        {/* Waitlist + Button in same row */}
        <div className="flex items-center justify-between mt-4">
          {/* Left side: profile images + count */}
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {program.profileImages?.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Profile ${i + 1}`}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="ml-3 text-sm text-gray-700">{program.waitlistCount} people on waitlist</span>
          </div>

          {/* Right side: button */}
          <button className="bg-white border-2 border-blue-600 hover:bg-blue-900 text-black hover:text-white text-sm lg:text-[20px] px-4 lg:px-6 py-3 rounded-full transition-all">
            Join Waitlist Now
          </button>
        </div>
      </div>
    </div>
  );
}
