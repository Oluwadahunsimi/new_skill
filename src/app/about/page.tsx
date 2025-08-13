"use client"

import { Play, Monitor, Lightbulb, FileText, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("years")

  const historyContent = {
    years: {
      title: "Foundation&Growth",
      description:
        "Since 1999, our education has been on a mission to democratize access to world-class technology education across Africa. Our impact has 9,700 learners and built partnerships with leading technology companies.",
      achievements: [
        "20% Virtual and Hybrid school",
        "9 months duration",
        "Video lessons, Project & live classes",
        "Lifetime access",
        "Certificate upon completion",
        "Task Enabled",
      ],
      stats: [
        { number: "900", label: "Students Reached" },
        { number: "10", label: "Courses Offered" },
      ],
    },
    phc: {
      title: "Port Harcourt Campus",
      description:
        "Our Port Harcourt campus has been serving the Niger Delta region since 2010, providing specialized training in oil & gas technology and marine engineering.",
      achievements: [
        "15% Industry partnerships",
        "12 months duration",
        "Hands-on lab sessions",
        "Job placement assistance",
        "Industry certifications",
        "Internship programs",
      ],
      stats: [
        { number: "450", label: "Graduating Rate/Year" },
        { number: "8", label: "Specialized Programs" },
      ],
    },
    kaduna: {
      title: "Kaduna Innovation Hub",
      description:
        "Established in 2015, our Kaduna hub focuses on agricultural technology and renewable energy solutions for Northern Nigeria.",
      achievements: [
        "25% Agricultural tech focus",
        "6 months intensive",
        "Field work experience",
        "Community projects",
        "Solar energy training",
        "Startup incubation",
      ],
      stats: [
        { number: "300", label: "Graduating Rate/Year" },
        { number: "6", label: "Tech Programs" },
      ],
    },
  } as const

  const currentContent = historyContent[activeTab as keyof typeof historyContent]

  const testimonials = [
    {
      quote:
        "Really love the whatsapp group like to say. Add more fellowship points, quotes, motivations, or even a way they share story about their journey and how they overcome challenges.",
      name: "Christine Mensa",
      image: "/placeholder.svg?height=50&width=50",
      rating: 5,
    },
    {
      quote:
        "Really love the whatsapp group like to say. Add more fellowship points, quotes, motivations, or even a way they share story about their journey and how they overcome challenges.",
      name: "Christine Mensa",
      image: "/placeholder.svg?height=50&width=50",
      rating: 5,
    },
    {
      quote:
        "Really love the whatsapp group like to say. Add more fellowship points, quotes, motivations, or even a way they share story about their journey and how they overcome challenges.",
      name: "Christine Mensa",
      image: "/placeholder.svg?height=50&width=50",
      rating: 5,
    },
    {
      quote:
        "Really love the whatsapp group like to say. Add more fellowship points, quotes, motivations, or even a way they share story about their journey and how they overcome challenges.",
      name: "Christine Mensa",
      image: "/placeholder.svg?height=50&width=50",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium mb-4 tracking-wider">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Discover how we improve the lives of people.</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                First Choice For
                <br />
                Tech Ed Anywhere
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Join our next-generation organization and access streamlined technology tools along with a structured
                learning environment. We provide comprehensive educational resources to help you in design and develop
                your next website.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/hero-image.png"
                  alt="Students collaborating on technology projects"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="rounded-full w-16 h-16 bg-white/90 hover:bg-white text-blue-600 flex items-center justify-center transition-colors duration-200 shadow-lg">
                    <Play className="w-6 h-6 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="text-center mb-16">
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We provide professional tutoring that can help you break one limit and make a part in your industry
            </p>

            <div className="grid md:grid-cols-3 bg-[#EFF6FF] gap-8 p-4 rounded-lg ">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">1K</div>
                <div className="text-gray-600">Students Reached</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">1K</div>
                <div className="text-gray-600">Graduates</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">1+</div>
                <div className="text-gray-600">Years</div>
              </div>
            </div>
          </div>



          {/* Why Choose Us Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Why You Should Start
                <br />
                Learning With Us?
              </h3>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-blue-500">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Monitor className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Promoting Digital Education</h4>
                        <p className="text-gray-600 text-sm">
                          We embrace technology to enhance learning experiences and prepare students for the digital
                          future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-orange-500">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <Lightbulb className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Innovative Tech Workshops</h4>
                        <p className="text-gray-600 text-sm">
                          Hands-on workshops that teach cutting-edge technologies and practical skills for real-world
                          applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-purple-500">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <FileText className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Online Resource Hub</h4>
                        <p className="text-gray-600 text-sm">
                          Comprehensive online resources including tutorials, documentation, and community support
                          available 24/7.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=350"
                alt="Happy student with book giving thumbs up"
                width={350}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>


        </div>
      </section>
        {/* Our History Section */}
          <section className="mb-16 py-16 px-6 ">
            <div className="max-w-6xl mx-auto ">
              <div className="mb-8 md:flex md:justify-between">
                <h2 className="text-5xl font-bold text-gray-900 mb-4 mt-22">Our History</h2>
                <p className="text-gray-600 max-w-2xl">
                Since 2023, Incubator has been on a mission to democratize access to world-class 
                technology education across Africa. We've trained over 9,700 learners and 
                built the continent's most comprehensive tech education network.
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-4 mb-8 mt-22 items-center justify-center">
                <button
                  onClick={() => setActiveTab("years")}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    activeTab === "years" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Skillup Warri
                </button>
                <button
                  onClick={() => setActiveTab("phc")}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    activeTab === "phc" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Skillup PHC
                </button>
                <button
                  onClick={() => setActiveTab("kaduna")}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    activeTab === "kaduna" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Skillup Kaduna
                </button>
              </div>

              {/* Tab Content */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#0D4EFF] mb-4">{currentContent.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{currentContent.description}</p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {currentContent.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {currentContent.stats.map((stat, index) => (
                      <div key={index} className="text-center bg-[#9FBDFA]/25 ">
                        <div className="text-3xl font-bold  text-blue-600 mb-1">{stat.number}</div>
                        <div className="text-[#0D43FF] text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/images/history-image.png"
                    alt="Students working together on projects"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </section>
      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Alumnis Are Saying</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="mb-4">
                  <p className="text-gray-700 text-sm leading-relaxed">"{testimonial.quote}"</p>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full translate-y-40 -translate-x-40"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Growing Community</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Be part of Africa's largest technology education network. Connect with learners, share knowledge, and
            advance your career with our supportive community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 border border-white text-white rounded-lg hover:bg-gray-300 transition-colors duration-200">
              Join A Program
            </button>
            <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <button className="px-8 py-4 rounded-lg text-white bg-black font-medium hover:text-gray-300 transition-colors duration-200">
            Explore Courses
          </button>
        </div>
      </footer>
    </div>
  )
}
