import { Button } from "@/components/UI/button"
import { ChevronDown } from "lucide-react"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">SkillUp</span>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent">
              Login
            </Button>
            <Button className="text-white bg-blue-900 hover:bg-blue-700">Apply Now</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
