"use client"

import type React from "react"

import { Button } from "@/components/UI/button"
import { Input } from "@/components/UI/input"
import { NavbarWithDropdown } from "@/components/UI/navigation"
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";
import Image from "next/image";
import { Mail, Phone, MapPin,X, Facebook, Twitter, Linkedin, Instagram, Dribbble,Youtube } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }
  return (
    <div className="min-h-screen relative">
      <NavbarWithDropdown className="fixed top-0 left-0 w-full z-50 bg-white shadow-md" />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 px-6 pt-32">
        <div className="max-w-4xl pl-12">
          {/* Line + Text */}
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-12 h-[1px] bg-white"></span>
            <p className="text-white text-sm font-medium tracking-wider uppercase">CONTACT US</p>
          </div>

          {/* Heading */}
          <h1 className="text-white text-4xl md:text-5xl font-bold">Reach Out To Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Have Question? Reach Out To Us Here</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-2xl">
            Got a project? Drop me a line if you want to work together on something exciting. Or do you need our help?
            Feel free to contact us.
          </p>
        </div>
      
 
      



      </div>

      {/* Get in touch section  */}
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left side - Contact Information */}
          <div className="bg-blue-100 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in touch</h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 uppercase tracking-wide">EMAIL US</p>
                    <p className="text-gray-900 font-medium">info@golio.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 uppercase tracking-wide">PHONE NUMBER</p>
                    <p className="text-gray-900 font-medium">+1-202-555-0138</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">901 N Pitt Str., Suite 170</p>
                    <p className="text-gray-900 font-medium">Alexandria, VA 22314, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-12 h-px bg-gray-400 mb-4"></div>
              <p className="text-gray-700 font-medium mb-4">Connect with us:</p>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors">
                  <Facebook className="w-5 h-5 text-gray-700" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors">
                  <Twitter className="w-5 h-5 text-gray-700" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors">
                  <Instagram className="w-5 h-5 text-gray-700" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors">
                  <Dribbble className="w-5 h-5 text-gray-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Brand/Company/Product Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full min-h-[120px] resize-none border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>




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
