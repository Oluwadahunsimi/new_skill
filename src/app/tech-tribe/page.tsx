"use client"
import { NavbarWithDropdown } from "@/components/UI/navigation"
import Footer from "@/components/UI/Footer"
import { Monitor,Video, Link , CheckCircle, Star, ChevronDown, ChevronUp, Clock, Users, Award, Globe } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function BootcampPage() {
  const [expandedModules, setExpandedModules] = useState<{ [key: string]: boolean }>({})

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }))
  } 

  const courseModules = [
    {
      id: "software-development ",
      title: "Software Development ",
      duration: "6 weeks",
      lessons: [
        "Build scalable applications and master coding best practices.",
      ],
    },
    {
      id: "data-science-and-analytics", 
      title: "Data Science & Analytics",
      duration: "6 weeks",
      lessons: [" Learn to analyze, visualize, and interpret data for real impact." ],
    },
    {
      id: "product-design",
      title: "Product Design (UI/UX)",
      duration: "6 weeks",
      lessons: ["Design user-centered digital products with industry tools.",],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      duration: "6 weeks",
      lessons: [" Drive growth with digital campaigns and performance strategies.", ],
    },
    {
      id: "projects",
      title: "Project Management",
      duration: "6 weeks",
      lessons: ["Lead teams, manage sprints, and deliver impactful projects.", ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <NavbarWithDropdown />
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Tech Tribe Bootcamp</h1>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-gray-600 ml-2">(5.0)</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              Favorites
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              Share
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/bootcamp-hero.png"
                alt="Tech Tribe Bootcamp - Students working on laptops"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Tech Tribe</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TechTrybe Bootcamp is a 6-week, fully virtual, instructor-led program designed for graduates, young professionals, and mid-level talent. 
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through live classes, mentorship, and career support, you&apos;ll gain job-ready digital skills, build a standout portfolio, and position yourself to upskill, pivot, or accelerate your career in today&apos;s most in-demand digital fields.
              </p>
            </section>

            {/* What Will You Gain */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">By the end of the bootcamp, you will:</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Gain job-ready skills in your chosen track</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Build mini projects and a capstone project for your portfolio</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Access career support, mentorship & job placement partners</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Join a vibrant community of tech talent & industry experts</span>
                </div>
              </div>
            </section>

            {/* Course Curriculum */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Tracks</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Available Tracks</h3>
                  <span className="text-sm text-gray-600">{courseModules.length} Tracks</span>
                </div>

                <div className="space-y-4">
                  {courseModules.map((module, index) => (
                    <div key={module.id} className="border border-gray-200 rounded-lg bg-white">
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{module.title}</h4>
                            <p className="text-sm text-gray-600"></p>
                          </div>
                        </div>
                        {expandedModules[module.id] ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>

                      {expandedModules[module.id] && (
                        <div className="px-4 pb-4">
                          <div className="pl-12">
                            <ul className="space-y-2">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <li key={lessonIndex} className="flex items-center gap-3 text-sm text-gray-700">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                                  {lesson}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Related Programs */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Programs</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* New AI Tech Bootcamp */}
                <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Monitor className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">AI Tech</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">New AI Tech Bootcamp</h3>
                    <div className="space-y-2 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Live Classes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>6 Months</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold">$100,000</span>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                      Get Started
                    </button>
                  </div>
                </div>

                {/* Future Chat Bootcamp */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Globe className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">Chat Tech</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="Instructor"
                        width={60}
                        height={60}
                        className="rounded-full border-2 border-white/20"
                      />

                    </div>
                    <h3 className="text-xl font-bold mb-2">Future Chan Bootcamp</h3>
                    <div className="space-y-2 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Live Classes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>6 Months</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold">$100,000</span>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                      Get Started
                    </button>
                  </div>
                </div>

                {/* LadiesInTech Bootcamp */}
                <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">Ladies Only</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="Female Instructor"
                        width={60}
                        height={60}
                        className="rounded-full border-2 border-white/20"
                      />
                      <div className="text-right">
                        <div className="text-lg font-bold">CAREER</div>
                        <div className="text-lg font-bold">REALITY</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">LadiesInTech Bootcamp</h3>
                    <div className="space-y-2 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Live Classes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>6 Months</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold">$100,000</span>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm sticky top-6">
              <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 mb-6">
                Enroll now
              </button>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Fully Online (Live + LMS + Mentorship)</span>
                </div>                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Commitment: 6 - 10 hours weekly</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"> 6 Weeks</span>
                </div>

                <div className="flex items-start gap-3">
                  <Link className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Limited Access</span>
                </div>                
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Certificate upon completion</span>
                </div>
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Instructor</h3>
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Instructor"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">SkillUp Global</p>
                  <p className="text-sm text-gray-600">skilluplimited@gmail.com</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Our mission is simple but powerful to bridge Africa&apos;s digital divide and empower individuals to thrive in today&apos;s fast-evolving tech world. Through our intensive, hands-on training, we&apos;ve already impacted nearly 1,000 learners across our flagship programs, helping them pivot into tech, grow their freelance businesses, or advance their careers. At SkillUp Global, we don&apos;t just teach skills we build confidence, portfolios, and pathways to real opportunities.
              </p>
            </div>

            {/* Program Schedule */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4"> Your 6-Week Journey</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Week 1: Orientation & Fundamentals Review</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Week 2: Core Skill Building & Mini Project 1</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Week 3: Applied Projects & Guest Masterclass</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Week 4: Advanced Topics & Career Workshops</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Week 5: Capstone Project</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Week 6: Demo Day & Career Launch</span>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Requirements</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">A laptop with stable internet connection</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Prior knowledge in the chosen course area</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Commitment to attend class or re-watch. </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Willingness to complete assignments and practical projects.</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Product Design</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Programs</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Professional</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Software Development</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Data Science & Analytics</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Project Management</span>       
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Digital Marketing</span>
              </div>
            </div>

            {/* Audience */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Audience</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Working professionals ready to level up.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Entrepreneurs who want smarter, tech-enabled businesses.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Anyone with basic knowledge who wants practical growth.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Freelancers aiming for advanced skills.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Anyone who loves organizing & planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
 