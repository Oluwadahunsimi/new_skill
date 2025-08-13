"use client"

import { useState } from "react"
import { Button } from "@/components/UI/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
   <nav className="sticky top-0 left-0 right-0 z-20 bg-[#ffffff] border-b border-gray-200">



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/skillUp.png"
                alt="SkillUp Logo"
                width={110}
                height={24}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <span>Individuals</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <span>Corporates</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <span>Company</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent text-sm px-4"
            >
              Login
            </Button>
            <Button className="text-white bg-blue-900 hover:bg-blue-700 text-sm px-4">Apply Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-gray-200/20">
            
            {/* Mobile Navigation Links */}
            <button className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">
              <span>Individuals</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">
              <span>Corporates</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">
              <span>Company</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200/20">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent w-full"
              >
                Login
              </Button>
              <Button className="text-white bg-blue-900 hover:bg-blue-700 w-full">Apply Now</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
