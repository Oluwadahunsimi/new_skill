"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function OverlayPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Delay popup slightly to ensure it loads after page hydration
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null


  return (
    // In OverlayPopup root div
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]">

      {/* Popup container */}
      <div
        className="relative bg-white rounded-lg shadow-lg flex"
        style={{ width: "1095px", height: "631px" }}
      >
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-3xl"
        >
          ×
        </button>

        {/* Left Section */}
        <div className="relative" style={{ width: "500px", height: "100%" }}>
          {/* Rectangular Background */}
          <Image
            src="/images/rectangle-4467.png"
            alt="Background Shape"
            width={631}
            height={513}
            className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
            style={{ opacity: 0.84 }}
            priority
          />

          {/* Foreground Image */}
          <div
            className="relative rounded-lg overflow-hidden"
            style={{
              width: "433px",
              height: "582px",
              position: "absolute",
              top: "24px",
              left: "29px",
              zIndex: 2,
            }}
          >
            <Image
              src="/images/tribe.png"
              alt="Tech Tribe"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
           <div
            className="absolute rounded-lg overflow-hidden"
            style={{
              width: "854px",
              height: "753px",
              top: "505px",
              left: "354px",
              opacity: 1,
              transform: "rotate(0deg)",
              zIndex: 5,
            }}
          >
            <Image
              src="/images/style.png" // <-- Replace with your image name
              alt="Additional Graphic"
              fill
              
              priority
            />
          </div>
        </div>

        {/* Right Section */}
        <div
          className="flex flex-col items-center justify-center absolute"
          style={{ width: "508px", height: "366px", gap: "32px", top: "117px", left: "527px" }}
        >
          <h1
            className="font-jost font-bold text-center"
            style={{
              width: "461px",
              height: "134px",
              fontSize: "56px",
              lineHeight: "120%",
              color: "#101828",
            }}
          >
            Register for Tech Tribe
          </h1>

          <h2
            className="font-jost font-semibold text-center"
            style={{
              width: "461px",
              height: "48px",
              fontSize: "40px",
              lineHeight: "120%",
              color: "#1E3A8A",
            }}
          >
            Get 21% off
          </h2>

          <p
            className="font-inter text-center"
            style={{
              width: "460px",
              height: "72px",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#344054",
            }}
          >
            You’re ready to publish your content for everyone to see. Please
            take a moment to review all the details carefully to ensure
            everything is accurate and complete.
          </p>

          <button
            onClick={() => {
              setIsVisible(false);
              window.location.href = "/program-details";
            }}
            className="bg-[#1E3B8A] text-white font-inter font-medium rounded-full hover:bg-blue-700 transition-all duration-300"
            style={{
              width: "444px",
              height: "56px",
              padding: "16px 32px",
              borderRadius: "32px",
            }}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
